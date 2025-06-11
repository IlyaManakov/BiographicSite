from fastapi import FastAPI
import uvicorn

app = FastAPI()

auth = [
    {
        "id": 1,
        "login": "123",
        "password": "123",
    },
    {
        "id": 2,
        "login": "321",
        "password": "321",
    },
]

# @app.get('/auth')
# def


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
