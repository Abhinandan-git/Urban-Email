from typing import List, Optional
from fastapi import APIRouter, Query, status, HTTPException
from pydantic import BaseModel
from mistralai import Mistral
from dotenv import load_dotenv
import os

load_dotenv()

LLM_API_KEY = os.environ['LLM_API_KEY']
AGENT_ID = os.environ['LLM_AGENT_ID']

router = APIRouter(tags=["prompt"])

client = Mistral(api_key=LLM_API_KEY)

class PromptModel(BaseModel):
  prompt: str

@router.post("/mails", status_code=status.HTTP_200_OK)
def get_all_mails(limit: Optional[int] = Query(7)) -> List[dict]:
  return [{"a": "b"}, {"c": "d"}]

@router.post("/generate", status_code=status.HTTP_201_CREATED)
def create_mail(prompt: PromptModel) -> dict:
  try:
    response = client.agents.complete(
      agent_id=AGENT_ID,
      messages=[{
        "role": "user",
        "content": prompt.prompt
      }]
    )
    return { "response": response.choices[0].message.content }
  except Exception as err:
    raise HTTPException(status_code=500, detail=f"Error generating response: {str(err)}")
