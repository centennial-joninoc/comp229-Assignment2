# comp229-Assignment 2

Student Name: John Celso Inocente

I had issues running on port 27017 when connecting to mongodb, so I had to change it. used port 4175, it is shown in the comments, and have still retained the default port for the db. 
If you guys want to use my port, setup the port for the mongodb.
you have to go to the mongod.config file and change the port
```````````
# network interfaces
net:
  bindIp: 127.0.0.1
  port: 27017 -> 4175

```````````

Here is the installation guide:
Please run the commands on the root of the folder.

If using my port:
Do the instructions above then these commands below.
```
mongodb --port 4175
npm i
npx nodemon
```

Otherwise, just the default :D
```
npm i
npx nod
