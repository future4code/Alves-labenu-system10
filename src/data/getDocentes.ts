import { connection } from "../connection";

const getDocentes = async() => {
  const response = await connection.raw("SELECT * FROM Docente")

  return response[0]
}

export default getDocentes