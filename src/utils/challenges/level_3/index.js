import { question1 } from './codes';

export default {
  id: 3,
  challenges: [
    {
      id: 1,
      completed: false,
      question: 'Em programação, podemos declara funções que podem realizar ou retornar algo. Para criar um função de soma, qual será o código aplicado para nos retornar a soma total de dois valores?',
      code: question1,
      correct: 1,
      options: [
        { id: 1, description: 'return a + b' },
        { id: 2, description: 'return a - b' },
        { id: 3, description: 'return a * b' },
        { id: 4, description: 'return a / b' },
      ],
    },
    {
      id: 2,
      completed: false,
      question: 'Agora, seguindo a mesma ideia anterior, gostariamos de declarar uma função que retorna a divisão de dois valores. Qual será o código aplicado para nos retornar essa divisão?',
      code: 'function sum(a, b) {// Resposta}',
      correct: 4,
      options: [
        { id: 1, description: 'return a + b' },
        { id: 2, description: 'return a - b' },
        { id: 3, description: 'return a * b' },
        { id: 4, description: 'return a / b' },
      ],
    },
  ],
};
