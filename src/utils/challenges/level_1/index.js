import {
  question1,
  question2,
  question3,
} from './codes';

export default {
  id: 1,
  challenges: [
    {
      id: 1,
      completed: false,
      question: 'Através de algumas linguagens, podemos ver qual o tipo um dado possui uma váriavel. A partir do código abaixo, qual será o retorno no console?',
      code: question1,
      correct: 3,
      options: [
        { id: 1, description: 'String' },
        { id: 2, description: 'Boolean' },
        { id: 3, description: 'Number' },
        { id: 4, description: 'Undefined' },
      ],
    },
    {
      id: 2,
      completed: false,
      question: 'Através de estruturas condicionais, podemos comparar o tipo de dois valores. A partir do código abaixo, qual será o retorno no console?',
      code: question2,
      correct: 2,
      options: [
        { id: 1, description: 'true' },
        { id: 2, description: 'false' },
        { id: 3, description: 'null' },
        { id: 4, description: 'undefined' },
      ],
    },
    {
      id: 3,
      completed: false,
      question: 'Dependendo de como declaramos nossa estrutura condicional, podemos ter diferentes resultas ao comparar dois valores. A partir do código abaixo, qual será o retorno no console?',
      code: question3,
      correct: 1,
      options: [
        { id: 1, description: 'true' },
        { id: 2, description: 'false' },
        { id: 3, description: 'null' },
        { id: 4, description: 'undefined' },
      ],
    },
  ],
};
