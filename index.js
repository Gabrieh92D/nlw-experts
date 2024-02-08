const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista de Naruto?",
    resposta: [
      "Sasuke Uchiha",
      "Naruto Uzumaki",
      "Itachi Uchiha",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da vila onde Naruto e seus amigos vivem?",
    resposta: [
      "Vila da Folha",
      "Vila da Nuvem",
      "Vila da Areia",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o sensei de Naruto na equipe 7?",
    resposta: [
      "Jiraiya",
      "Kakashi Hatake",
      "Orochimaru",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a besta de cauda que está selada dentro de Naruto?",
    resposta: [
      "Shukaku",
      "Kurama",
      "Matatabi",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o melhor amigo de Naruto desde a infância?",
    resposta: [
      "Sasuke Uchiha",
      "Rock Lee",
      "Kiba Inuzuka",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o clã de Sasuke Uchiha?",
    resposta: [
      "Clã Hyuga",
      "Clã Uzumaki",
      "Clã Uchiha",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o líder da Akatsuki?",
    resposta: [
      "Madara Uchiha",
      "Nagato",
      "Pain",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do pai de Naruto?",
    resposta: [
      "Minato Namikaze",
      "Kakashi Hatake",
      "Hiruzen Sarutobi",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa o símbolo na testa de Gaara?",
    resposta: [
      "Amor",
      "Dor",
      "Ódio",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o exame que os ninjas devem passar para se tornarem Chunin?",
    resposta: [
      "Exame Genin",
      "Exame Jonin",
      "Exame Chunin",
    ],
    correta: 2
  },
];


  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //loop ou repetição
  for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)

  
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.resposta){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.resposta.indexOf(resposta)
    dt.querySelector('input').onchange = (event) =>{
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)

  }

  
  quizItem.querySelector('dl dt').remove()

  
  quiz.appendChild(quizItem)
  }

  