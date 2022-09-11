import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import knex from "knex"
import createTurma from './endpoints/createTurma';
import getTurma from './endpoints/getTurma';
import alterarModulo from './endpoints/alterarModulo';
import createStudent from './endpoints/createStudent';
import pegarStudent from './endpoints/pegarStudent';
import mudarStudent from './endpoints/mudarStudent';
import newDocente from './endpoints/newDocente';
import pegarDocentes from './endpoints/pegarDocentes';

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});

app.post("/class", createTurma)

app.get("/active", getTurma)

app.put("/alter", alterarModulo)

app.post("/student", createStudent)

app.get("/student/:nome", pegarStudent)

app.put("/alterclass", mudarStudent)

app.post("/docente", newDocente)

app.get("/docentes", pegarDocentes)