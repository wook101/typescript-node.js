import * as express from 'express';
import {Request, Response, NextFunction, Application } from 'express';

const app:Application = express();
const prod:boolean = process.env.NODE_ENV === 'production';

app.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.send("헬로우!!");
});

app.listen(prod ? process.env.PORT : 3000,()=>{
    console.log(`Server running !! port : ${process.env.PORT}`);
});