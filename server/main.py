from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import routes.mails as mails

app = FastAPI()

origins = ['http://localhost:3000']

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(mails.router)

@app.get("/")
def home():
	return {"message": "The server is running."}