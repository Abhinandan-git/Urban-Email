import os, sys

sys.path.append(os.path.abspath('../'))

from typing import List, Optional
from fastapi import APIRouter, Query, status, HTTPException
from mistralai import Mistral
from models import PromptModel
from dotenv import load_dotenv

load_dotenv()

LLM_API_KEY = os.environ['LLM_API_KEY']
AGENT_ID = os.environ['LLM_AGENT_ID']

router = APIRouter(tags=["prompt"])

client = Mistral(api_key=LLM_API_KEY)

@router.post("/mails", status_code=status.HTTP_200_OK)
def get_all_mails(limit: Optional[int] = Query(7)) -> List[dict]:
  return [{"a": "b"}, {"c": "d"}]

@router.post("/generate", status_code=status.HTTP_201_CREATED)
def create_mail(prompt: PromptModel) -> dict:
  try:
    # response = client.agents.complete(
    #   agent_id=AGENT_ID,
    #   messages=[{
    #     "role": "user",
    #     "content": prompt.prompt
    #   }]
    # )
    # return { "response": response.choices[0].message.content }
    return {"response": "Working\nWorking"}
  except Exception as err:
    raise HTTPException(status_code=500, detail=f"Error generating response: {str(err)}")
