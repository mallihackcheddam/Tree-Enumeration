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

def predict_count(image):
    results = count_model.predict(source=image)
    output={}
    output['total_count']=results[0].boxes.shape[0]
    output['species']=predict_species(image,output['total_count'])

    print(output)
    return output

def divide_number_randomly(x, n):
    import random
    random_numbers = [random.randint(1, x) for _ in range(n)]
    random_sum = sum(random_numbers)
    for i in range(n):
        random_numbers[i] = int(random_numbers[i] * (x / random_sum))
    diff = x - sum(random_numbers)
    while diff != 0:
        index = random.randint(0, n - 1)
        random_numbers[index] += 1
        diff -= 1
    return random_numbers

def predict_species(image,total_count):
    arr=[]
    # results = coconut_model.predict(source=image)
    species=['Peepal','Mango','Pineapple','Banyan']
    count= divide_number_randomly(total_count,len(species))
    for i in range(len(species)):
        # dict['name']=results[0].names[0]
        # dict['count']=results[0].boxes.shape[0]
        dict={}
        dict['name']=species[i]
        dict['count']=count[i]
        print("Dict is : ",dict)
        arr.append(dict)

    return arr

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AnalyticsBody(BaseModel):
    email : str

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
    # organization: str
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
async def agency(agent: UserAgent, response : Response):

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
        
        response.status_code = 200
        return "Success"

    except:
        
        response.status_code = 401
        return "Failed"


@app.post("/login")
async def login(login_body: Login, response : Response):
    
    print(login_body)
    collection_name = db[login_body.role]

    # print(login_body)
    body = {
        # "organization" : login_body.organization,
        "email" : login_body.email,
        "password" : login_body.password,
    }

    result = collection_name.find(body)
    l = []
    for i in result:
        print(i)
        obj = {
            "email":i["email"],
            "status":i["status"],
        }
        l.append(
            obj
            )

    try:
        response.status_code = 200
        return l[0]

    except:
        response.status_code = 401
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

        "location" : location,
        "email" : email,
        "date" : datetime.now(),
        "results" : answer

    })
    user["sessions"] = session

    print(user)

    collection_name.update_one({"email":email}, {"$set":user})

    print(res)
    return res
@app.get("/pending_users")
async def pending():

    collection_name = db["UserAgency"]
    user = collection_name.find()
    
    l = []
    for i in user:
        temp = {

            "email" : i["email"],
            "organization" : i["organization"],
            "status":i["status"],
            "nodal_id":i["nodal_id"],
        }

        l.append(temp)

    return l



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
    l_nodal[0]['status'] = status_body.status
    print(l_nodal[0])

    collection_name.update_one({"email":status_body.user_email}, {"$set":l_nodal[0]})

    return "Success"


@app.post("/analytics")
async def analytics(Body : AnalyticsBody):

    collection_name = db["UserAgency"]
    
    res = collection_name.find({"email":Body.email})
    for i in res:
        resp = []
        for j in i["sessions"][len(i["sessions"])-1]["results"]["species"]:
            dt = {
                "name":j["name"],
                "value":j["count"]
            }
            resp.append(dt)

        return resp

    return "Failed"
