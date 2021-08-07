import * as express from 'express';
import {Request, Response, NextFunction, Application } from 'express';

const app:Application = express();
const prod:boolean = process.env.NODE_ENV === 'production';

app.set('port', prod ? process.env.PORT : 3000);
app.get('/',(req:Request, res:Response, next:NextFunction)=>{
    res.send("헬로우! 타입스크립트");
});

app.listen(app.get('port'),()=>{
    console.log(`Server running on port : ${app.get('port')} !!`);
});