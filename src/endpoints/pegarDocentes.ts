import { Request, response, Response } from "express";
import getDocentes from "../data/getDocentes";

const pegarDocentes = async(req:Request, res:Response) => {
  try{
    const response = await getDocentes()
    res.status(200).send(response)
  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
  })
  } 
}

export default pegarDocentes