import { question1, question2 } from './codes';

export default {
  id: 4,
  challenges: [
    {
      id: 1,
      completed: false,
      question: 'Na programação, podemos fazer condições, ou seja, caso aconteça algo, ele fará algo. Neste caso abaixo qual será o resultado imprimido caso "variable" tenha o valor true?',
      code: question1,
      correct: 3,
      options: [
        { id: 1, description: 'undefined' },
        { id: 2, description: 'Entrou no else' },
        { id: 3, description: 'Entrou no if' },
        { id: 4, description: 'error' },
      ],
    },
    {
      id: 2,
      completed: false,
      question: 'Caso o valor de "variable" tenha o valor undefined o que vai acontecer no caso abaixo?',
      code: question2,
      correct: 4,
      options: [
        { id: 1, description: 'Gera um erro' },
        { id: 2, description: 'Entrou no if' },
        { id: 3, description: 'Não acontece nada' },
        { id: 4, description: 'Entrou no else' },
      ],
    },
  ],
};
