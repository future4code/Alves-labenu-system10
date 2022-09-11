import { Request, Response } from "express";
import altStudent from "../data/altStudent";

const mudarStudent = async(req:Request, res:Response) =>{
  try{
    if(!req.body.id || !req.body.turma_id){
      res.statusCode = 404
      res.send("é preciso passar o id do aluno e da nova turma")
    }else{
      await altStudent(
        req.body.id,
        req.body.turma_id
      )
      res.statusCode = 200
      res.send("O estudante mudou de turma")
    }

  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
    })
  }
}

export default mudarStudent