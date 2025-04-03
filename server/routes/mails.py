from fastapi import APIRouter,Query,status
from typing import Optional,List
from datetime import datetime
import database

router = APIRouter(tags=["mails"])

@router.get("/inbox", status_code=status.HTTP_200_OK)
def get_all_products(limit: Optional[int] = Query(10), offset: Optional[int] = Query(0)) -> List[dict]:
	mails = []
	
	database_instance = database.get_mongo_db()
	collection_instance = database_instance.get_collection("Mails")

	documents = collection_instance.find({})

	for mail in documents:
		mails.append({'_id': str(mail['_id']), 'sender': mail['sender'], 'reciever': mail['reciever'], 'title': mail['title'], 'mail': mail['mail'], 'time': mail['time']})

	return mails