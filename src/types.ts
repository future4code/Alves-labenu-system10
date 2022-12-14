export type Turma = {
  id: string,
  name:string,
  modulo: string
}

export type Estudante = {
  id:string,
  nome:string,
  email:string,
  data_nasc:string,
  turma_id:string,
}

export type Docente = {
  id:string,
  name:string,
  email:string,
  data_nasc:string,
  turma_id:string,
}