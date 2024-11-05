const alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 4 },
    { nome: "Carlos", nota: 6 },
]

const alunosAprovados = (alunos) => {
    return alunos.filter (aluno => aluno.nota >= 6)
}
console.log(alunosAprovados(alunos))