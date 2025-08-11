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
