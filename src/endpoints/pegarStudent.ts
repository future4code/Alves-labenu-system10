import { Request, Response } from "express";
import getStudent from "../data/getStudent";

const pegarStudent = async(req:Request, res:Response): Promise<void> =>{
  const response = await getStudent(req.params.nome)

try{
  if(!response){
    res.status(400).send("Estudante not found")
  }
  res.status(200).send(response)
  }catch(error:any){
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}

export default pegarStudent