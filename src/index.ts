import express, { Request, Response } from "express";
import { PrismaClient } from "../prisma/generated/prisma";

const app=express();

const prismaClient=new PrismaClient();


app.get("/",async(req:Request,res:Response)=>{  
   const data=await prismaClient.user.findMany();
     res.json({
        "message":"get endpoint",
        data
     })
})

app.post("/",async(req:Request,res:Response)=>{
    await prismaClient.user.create({
      data:{
         username:Math.random().toString(),
         password:Math.random().toString()
      }
    })
     res.json({
        "message":"post endpoint"
     })
})

app.listen(3000,()=>{
    console.log("server is running...");
})