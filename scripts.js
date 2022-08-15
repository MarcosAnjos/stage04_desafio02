let students = []

students = [
  {
    name: 'John',
    provaOne: 10,
    provaTwo: 9,
  },
  {
    name: 'Marcos',
    provaOne: 10,
    provaTwo: 7,
  },
  {
    name: 'Alexander',
    provaOne: 5,
    provaTwo: 0,
  },
  {
    name: 'Larissa',
    provaOne: 10,
    provaTwo: 10,
  }, {
    name: 'Fulano',
    provaOne: 2,
    provaTwo: 8,
  }
]

function mediaStudent(provaOne, provaTwo) {
  return ((provaOne + provaTwo) / 2).toFixed(2)
}

function isAprovado(provaOne, provaTwo, name) {
  let media = mediaStudent(provaOne, provaTwo)

  if (media >= 7)
    return `Parabens, ${name}! Você foi Aprovado`
  else
    return `Não foi dessa vez, ${name}! Tente novamente`
}


for (let student of students) {
  alert(`A média do (a) aluno(a): ${mediaStudent(student.provaOne, student.provaTwo)} \n ${isAprovado(student.provaOne, student.provaTwo, student.name)} !`)
}
