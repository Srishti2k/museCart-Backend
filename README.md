# museCart-Backend
Backend of museCart application.
# Find the documentation here:
https://docs.google.com/document/d/1_-Ump1Y-Mmuf0QZvDhaOc5Qt9isHrwazweG_iuod0DQ/edit

# Architecture of MongoDB Atlas
Project > Cluster > DataBase > collection
(Current Project):
museCart-backend > musecart-Cluster > musecart-DB
A project can have only one free cluster
A cluster can have as many as Databases we want
A database can have as many as Collections we want.
NOTE: A db will only show up if it has atleast one collection in it.

# MVC architecture
models > controllers > routes > view(app.js)