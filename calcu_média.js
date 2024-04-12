const nota1 = 9.4
const nota2 = 7.3
const nota3 = 5.2
const media = (nota1 + nota2 + nota3)/3

console.log(`Notas dos Alunos: ${nota1};    ${nota2};   ${nota3};`)
console.log(`Média das notas: ${media}`)
if (media >= 6){
    console.log(`Parabéns, a média da turma (${media}) é suficiente para a aprovação!!`)
}
else{
    console.log(`Infelizmente, a média da turma (${media} não é suficiente para a aprovação)`)
}