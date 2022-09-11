import { Request, Response } from "express";
import altDocente from "../data/altDocnte";

const mudarDocent = async(req:Request, res:Response) => {
  try{
    if(!req.body.id || !req.body.turma_id){
      res.statusCode = 404
      res.send("é preciso passar o id do docente e da nova turma")
    }else{
      await altDocente(
        req.body.id,
        req.body.turma_id
      )
      res.statusCode = 200
      res.send("O Docente mudou de turma")
    }

  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
    })
  }
}

export default mudarDocent