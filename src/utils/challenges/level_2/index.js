import { question1, question2, question3 } from './codes';

export default {
  id: 2,
  challenges: [
    {
      id: 1,
      completed: false,
      question: 'Podemos realizar algumas operações mátematicas em linguagens. Qual será o retorno no console a partir do código a baixo?',
      code: question1,
      correct: 1,
      options: [
        { id: 1, description: '20' },
        { id: 2, description: '0' },
        { id: 3, description: '30' },
        { id: 4, description: '40' },
      ],
    },
    {
      id: 2,
      completed: false,
      question: 'Se executarmos a função a seguir passando os seguintes valores: exp(3, 2). Qual será o retorno dela?',
      code: question2,
      correct: 2,
      options: [
        { id: 1, description: 'undefined' },
        { id: 2, description: '9' },
        { id: 3, description: '15' },
        { id: 4, description: '6' },
      ],
    },
    {
      id: 3,
      completed: false,
      question: 'Executando a função a seguir, passando o valor 2. Qual seria o resultado?',
      code: question3,
      correct: 1,
      options: [
        { id: 1, description: '4' },
        { id: 2, description: '6' },
        { id: 3, description: 'null' },
        { id: 4, description: '2' },
      ],
    },
  ],
};
