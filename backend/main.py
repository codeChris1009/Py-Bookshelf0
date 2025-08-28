from datetime import date
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

class Book(BaseModel):
    isbn: str
    lang: str
    title: str
    author: str
    category: str
    year: int
    ordinalVolume: int
    isRead: bool
    star: float

class Bookshelf(BaseModel):
    books: List[Book]

app = FastAPI()

origins = [
    "http://localhost:5173"
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

# Welcome Message
@app.get("/")
def welcome_message():
    today = date.today()
    week = today.strftime("%A")
    return {"welcomeMessage": f"{week}, Happy Book, Code, Cookie With Padi~"}


# get padi default bookshelf
@app.get("/bookshelf", response_model=Bookshelf)
def get_bookshelf():
    return Bookshelf(books=memory_db["Padi_Bookshelf"])

# post padi default bookshelf a book
@app.post("/book", response_model=Book)
def add_book(book: Book):
    memory_db["Padi_Bookshelf"].append(book)
    return book


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)