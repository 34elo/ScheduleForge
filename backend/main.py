from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    telegram_id: int


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.put("/data/{id}")
async def put_data(telegram_id: int, data: Item):
    return