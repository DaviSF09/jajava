const nota1 = 9.4
const nota2 = 7.3
const nota3 = 5.2
function media (a,b,c){
    return (a+b+c)/3
}

console.log(`Notas dos Alunos: ${nota1};    ${nota2};   ${nota3};`)
console.log(`Média das notas: ${media(nota1,nota2,nota3)}`)
if (media(nota1,nota2,nota3) >= 6){
    console.log(`Parabéns, a média da turma ${media(nota1,nota2,nota3)} é suficiente para a aprovação!!`)
}
else{
    console.log(`Infelizmente, a média da turma ${media(nota1,nota2,nota3)} não é suficiente para a aprovação`)
}