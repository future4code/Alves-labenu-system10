import { Request, Response } from "express";
import AddStudent from "../data/addStudent";

const createStudent = async(req:Request, res:Response) =>{
  try{
    const{nome, email, data_nasc, turma_id} = req.body

    if(!nome || !email || !data_nasc || !turma_id){
      res.statusCode = 400
      throw new Error("Você deve passar name, email, nascimento, e o id da turma em que o estudante esta")
    }

    if(typeof nome !== "string" ){
      throw new Error("O tipo passado deve String")
    }

    if(typeof email !== "string" ){
      throw new Error("O tipo passado deve String")
    }

    if(typeof data_nasc !== "string" ){
      throw new Error("O tipo passado deve String")
    }

    if(typeof turma_id !== "string" ){
      throw new Error("O tipo passado deve String")
    }

    await AddStudent(nome, email, data_nasc, turma_id)
    res.status(200).send("estudante cadastrado com sucesso")
  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
  })
  }
}

export default createStudent