import { question1, question2 } from './codes';

export default {
  id: 4,
  challenges: [
    {
      id: 1,
      completed: false,
      question: 'Na programação, podemos armazenar um conjunto de dados dentro de um vetor (uma lista). Através do index passado, podemos capturar individualmente um item deste vetor. Qual será o retorno do código a baixo?',
      code: question1,
      correct: 1,
      options: [
        { id: 1, description: 'João' },
        { id: 2, description: 'Pedro' },
        { id: 3, description: 'Paulo' },
        { id: 4, description: 'Henrique' },
      ],
    },
    {
      id: 2,
      completed: false,
      question: 'Como podemos consultar o valor de um determinado index dentro de um vetor, também podemos utilizar ele para outros meios também, como armazer esse valor individual. Qual será o valor de nossa váriavel?',
      code: question2,
      correct: 3,
      options: [
        { id: 1, description: 'João' },
        { id: 2, description: 'Pedro' },
        { id: 3, description: 'Henrique' },
        { id: 4, description: 'Paulo' },
      ],
    },
  ],
};
