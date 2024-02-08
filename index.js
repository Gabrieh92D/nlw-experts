const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      resposta: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um banco de dados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      resposta: [
        "var x = 5;",
        "variable x = 5;",
        "x = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é um array em JavaScript?",
      resposta: [
        "Um tipo de dado para armazenar texto",
        "Uma função matemática",
        "Uma estrutura de dados para armazenar múltiplos valores",
      ],
      correta: 2
    },
    {
      pergunta: "Como você escreve um comentário de linha em JavaScript?",
      resposta: [
        "// Isto é um comentário",
        "/* Isto é um comentário */",
        "# Isto é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "O que é DOM em JavaScript?",
      resposta: [
        "Uma linguagem de programação",
        "Um modelo de objeto de documento",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      resposta: [
        "Atribuição de valor",
        "Comparação estrita",
        "Operador lógico 'OU'",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um loop 'for' em JavaScript?",
      resposta: [
        "Um tipo de função",
        "Uma estrutura de controle de fluxo",
        "Uma declaração de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Como você converte uma string para um número em JavaScript?",
      resposta: [
        "convertStringToNumber()",
        "parseInt()",
        "stringToNumber()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      resposta: [
        "Criar um novo elemento HTML",
        "Adicionar um ouvinte de eventos a um elemento",
        "Remover um elemento do DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      resposta: [
        "Uma biblioteca de gráficos",
        "Um formato de intercâmbio de dados",
        "Um método de manipulação de strings",
      ],
      correta: 1
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

  