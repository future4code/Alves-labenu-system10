import { Response, Request } from "express"
import { Turma } from "../types"
import altModuloClass from "../data/altModuloClass"

const alterarModulo = async(req:Request, res:Response) =>{
  try{
    if(!req.body.modulo || !req.body.id){
      res.statusCode = 404
      res.send("Para alterar o modulo você deve passar o id da turma e modulo que deseja")
    }
    else{
      await altModuloClass(
      req.body.id,
      req.body.modulo
      )
      res.statusCode = 200
      res.send("Modulo alterado com sucesso")
    }
  }catch(error: any){
    res.status(400).send({
    message: error.message || error.sqlMessage
    })
  }
}

export default alterarModulo