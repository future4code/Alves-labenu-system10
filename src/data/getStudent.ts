import { connection } from "../connection";

const getStudent = async(nome:string) => {
  const response = await connection("Estudante")
  .select("*")
  .where({nome})

  return response[0]
}

export default getStudent