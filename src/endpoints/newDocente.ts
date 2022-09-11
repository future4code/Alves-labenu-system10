import { Request, Response } from "express";
import createDocente from "../data/createDocente";

const newDocente = async(req:Request, res:Response) =>{
  try{
    const{name,  email, data_nasc, turma_id} = req.body

    if(!name || !email || !data_nasc || !turma_id){
      res.statusCode = 400
      throw new Error("Você deve passar name, email, nascimento, e o id da turma em que o docente esta")
    }

    if(typeof name !== "string" ){
      throw new Error("O tipo passado deve ser String")
    }

    if(typeof email !== "string" ){
      throw new Error("O tipo passado deve ser String")
    }

    if(typeof data_nasc !== "string" ){
      throw new Error("O tipo passado deve ser String")
    }

    if(typeof turma_id !== "string" ){
      throw new Error("O tipo passado deve ser String")
    }

    await createDocente(name, email, data_nasc, turma_id)
    res.status(200).send("Docente cadastrado com sucesso")
  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
  })
  }
}

export default newDocente