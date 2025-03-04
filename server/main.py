from fastapi import FastAPI

app = FastAPI()

def connect_to_mail(to: str, title: str, subject: str, body: str) -> bool:
  return True

@app.post("/")
def read_prompt(prompt: str = "") -> str:
  generated_response = ""
	# Connect to LLM API and send the prompt and recieve the message generated
  return generated_response

@app.post("/submit")
def send_mail(to: str = "", title: str = "", subject: str = "", body: str = "") -> bool:
  return connect_to_mail(to, title, subject, body)