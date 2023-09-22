from fastapi import FastAPI, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import io
from fastapi.responses import FileResponse

app = FastAPI()
origins = [
    # "http://localhost.tiangolo.com",
    # "https://localhost.tiangolo.com",
    # "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserAgent(BaseModel):
    id: int
    organization: str
    email: str
    password: str
    status: bool
    nodal_id: int
    sessions:list


@app.get("/")
async def root():
    return "Hello World"

@app.get("/useragency_signup")
async def agency(agent: UserAgent):
    
    print(agent)
    return "Hello"


@app.post("/upload")
async def upload(file: bytes = File(...)):

    
    image = Image.open(io.BytesIO(file))
    image.show()
    print(image)
    return str(file)
    # return FileResponse(image)
