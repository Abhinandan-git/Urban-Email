DATABASE_PASSWORD = "tzc0DuehvjKNmm1v"

from pymongo import MongoClient
mongo_URI = f'mongodb+srv://Admin:{DATABASE_PASSWORD}@projectscluster.a6dmsvj.mongodb.net/?retryWrites=true&w=majority&appName=ProjectsCluster'

client_instance = MongoClient(mongo_URI)
database_instance = client_instance['MailDatabase']

def get_mongo_db():
  return database_instance
