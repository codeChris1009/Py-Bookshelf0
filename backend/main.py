import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Book(BaseModel):
    isbn: str
    language: str
    title: str
    author: str
    category: str
    year: int
    ordinalVolume: int
    isRead: bool
    star: int

class Bookshelf(BaseModel):
    books: List[Book]

app = FastAPI()

origins = [
    "http://localhost:3000"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use Memory Storage for Bookshelf
memory_db = {
    "Padi_Bookshelf": []
    }
# for default bookshelf

default_bookshelf = "Padi_Bookshelf"

# get padi default bookshelf
app.get("/bookshelf", response_model=Bookshelf)
def get_bookshelf():
    return Bookshelf(books=memory_db[default_bookshelf])