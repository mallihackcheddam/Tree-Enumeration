from fastapi import FastAPI, File,  Response, status, Form
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
from fastapi.responses import FileResponse
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime
from ultralytics import YOLO

uri = "mongodb+srv://mallihackcheddam:SIH2023@hackathon.in9arqo.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))

db = client.hackathon


count_model = YOLO('..\Models\All_Trees\model1.pt')
coconut_model = YOLO('..\Models\Coconut\model1.pt')

async def predict_count(image):
    results = count_model.predict(source=image,show=True)
    output={}
    output['total_count']=results[0].boxes.shape[0]
    output['species']=predict_species(image)

    print(output)
    return output

async def predict_species(image):
    arr=[]
    results = coconut_model.predict(source=image)
    dict={}
    dict['name']=results[0].names[0]
    dict['count']=results[0].boxes.shape[0]

    arr.append(dict)

    return arr

app = FastAPI()
# origins = [
#     # "http://localhost.tiangolo.com",
#     # "https://localhost.tiangolo.com",
#     # "http://localhost",
#     "http://localhost:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

class ImageBody(BaseModel):
    file: bytes
    location: str

class UserAgent(BaseModel):
    # id: int
    organization: str
    email: str
    password: str
    # status: bool
    nodal_id: int
    # sessions:list

class Login(BaseModel):

    email: str
    password: str
    role: str
    # sessions:list

class Upload(BaseModel):
    file: bytes = File(...)
    email: str

class Status_cls(BaseModel):
    nodal_name : str
    user_email : str
    status : str 

@app.get("/")
async def root():
    return "Mallihackcheddam"

@app.post("/useragency_signup")
async def agency(agent: UserAgent):

    try:

        collection_name = db["UserAgency"]

        useragent = {
        
            "email" : agent.email,
            "organization" : agent.organization,
            "password" : agent.password,
            "nodal_id" : agent.nodal_id,
            "sessions": [],
            "status" : "pending",
        }
        result = collection_name.insert_one(useragent)
        
        return "Success"

    except:
        return "Failed"


@app.post("/login")
async def login(login_body: Login):
    
    print(login_body)
    collection_name = db["UserAgency"]

    # print(login_body)
    body = {
        "email" : login_body.email,
        "password" : login_body.password,
    }

    result = collection_name.find(body)
    l = []
    for i in result:
        l.append(i.email)

    try:

        return str(l[0])

    except:
        print("Failed")
        return "Failed"

@app.post("/upload")
async def upload(file: bytes = File(...), location: str = Form(...), email:str = Form(...),):
    
    collection_name = db["UserAgency"]
    image = Image.open(io.BytesIO(file))
    # image.show()

    res = predict_count(image)

    # user = []
    user = collection_name.find({"email":email})
    
    l = []
    for i in user:
        l.append(i)

    user = l[0]
    session = l[0]["sessions"]

    answer = res
    session.append({

        
        # "image" : str(file), 
        "location" : location,
        "email" : email,
        "date" : datetime.now(),
        "results" : answer

    })
    user["sessions"] = session

    print(user)

    # collection_name.update_one({"email":email}, {"$set":user})

    return str(file)

@app.post("/nodal_status")
async def status(status_body: Status_cls):
    
    collection_name = db["UserAgency"]

    # print(status_body)

    res1 = collection_name.find({"email": status_body.user_email})

    # print(res1)

    l_nodal = []

    for i in res1:
        print(i)
        l_nodal.append(i)
    
    # print(l_nodal)
    l_nodal[0]['status'] = status_body.status + "-" + status_body.nodal_name
    print(l_nodal[0])

    collection_name.update_one({"email":email}, {"$set":l_nodal[0]})

    return "Success"


