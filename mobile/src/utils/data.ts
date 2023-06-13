import { Questionario } from "../@types/questionario";

export const UsuariosImpl = [
    {
        id: 1,
        nome: 'Jorge Souza',
        instituicao: 'UERJ',
        unidade: 'UERJ-ZO',
        cep: '23071160',
        curso: 'TADS',
        modelo: 'Presencial',
        estrelas:200,
    },
    {
        id: 2,
        nome: 'Aline Fernandes',
        instituicao: 'UERJ',
        unidade: 'UERJ-ZO',
        cep: '23071160',
        curso: 'Farmácia',
        modelo: 'Presencial',
        estrelas:120,
    },
    {
        id: 3,
        nome: 'Emanoel Rosa',
        instituicao: 'UERJ',
        unidade: 'UERJ-ZO',
        cep: '23071160',
        curso: 'Ciência da Computação',
        modelo: 'Presencial',
        estrelas:200,
    },
    {
        id: 4,
        nome: 'Vera Silva',
        instituicao: 'UERJ',
        unidade: 'UERJ-ZO',
        cep: '23071160',
        curso: 'TADS',
        modelo: 'Presencial',
        estrelas:205,
    },
];

export const QuestionarioImpl:Questionario[] = [
    {
      id: 1,
      titulo: 'Prova de Programação',
      qtdQuestoes: 2,
      tempoDuracao: 60,
      tempoDisponivel: 600,
      dificuldade: 'Mediano',
      temasAreas: {
        id: 13,
        tema: {id: 5, nome: 'Algoritmos e Estrutura de Dados'},
        areaConhecimento: {
          id: 466,
          nome: 'Linguagens de Programação',
          areaConhecimentoPai: {
            id: 94,
            nome: 'Metodologia e Técnicas da Computação',
            areaConhecimentoPai: {
              id: 11,
              nome: 'Ciência da Computação',
              areaConhecimentoPai: {
                id: 1,
                nome: 'Ciências Exatas e da Terra',
                areaConhecimentoPai: null,
              },
            },
          },
        },
      },
      questoes: [
        {
          id: 51,
          texto: 'O que faz o algoritmo XYZ?',
          categoriaBloom: 'Aplicação',
          artigos: [
            {
              id: 3,
              url: 'https://www.linkedin.com/in/leandro-rocha-musser-carneiro/',
              titulo: 'Técnicas de Criação de Questões Aleatórias',
              conteudo:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. \n
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              dataPublicacao: '2023-05-14T00:00:00.000+00:00',
              autor: ['Leandro Musser', 'Jhony'],
            },
          ],
          figuras: [            
            {
              id: 1,
              atributo: 'https:\\/\\/iili.io\\/HUkgmw7.png',
              descricao: 'Foto Leandro Musser',
            },
            {
              id: 2,
              atributo: 'https:\\/\\/iili.io\\/HUkgmw7.png',
              descricao: 'Foto Leandro Musser',
            },
            {
              id: 3,
              atributo: 'https:\\/\\/iili.io\\/HUkgmw7.png',
              descricao: 'Foto Leandro Musser',
            },],
          opcoes: [
            {id: 117, texto: 'Aqui vai uma resposta que eu não sei qual é em algum momento'},
            {id: 118, texto: 'Opção aleatória'},
            {id: 119, texto: 'Tudo'},
            {id: 120, texto: 'Teste'},
          ],
          opcaoCorreta: {id: 118, texto: 'Opção aleatória'},
          temasAreas: {
            id: 13,
          },
        },
        {
          id: 52,
          texto:
            'Diga qual vai ser o valor de a no final da execução.\n\nint a = 1;\na++;',
          categoriaBloom: 'Analise',
          artigos: [
            {
              id: 3,
              url: 'https://www.linkedin.com/in/leandro-rocha-musser-carneiro/',
              titulo: 'Aleatório',
              conteudo:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
              dataPublicacao: '2023-05-14T00:00:00.000+00:00',
              autor: ['Leandro Musser', 'Jhony'],
            },
          ],
          figuras: [            
          {
            id: 1,
            atributo: 'https:\\/\\/iili.io\\/HUkgmw7.png',
            descricao: 'Foto Leandro Musser',
          },],
          opcoes: [
            {id: 121, texto: '1'},
            {id: 122, texto: 'Óbvio que é 2'},
            {id: 123, texto: '3'},
            {id: 124, texto: '4'},
          ],
          opcaoCorreta: {id: 122, texto: 'Óbvio que é 2'},
          temasAreas: {
            id: 9,
          },
        },
      ],
    },
    {
      id: 2,
      titulo: 'Prova de Teste',
      qtdQuestoes: 11,
      tempoDuracao: 99,
      tempoDisponivel: 999,
      dificuldade: 'Difícil',
      temasAreas: {
        id: 11,
        tema: {id: 3, nome: 'Python'},
        areaConhecimento: {
          id: 466,
          nome: 'Linguagens de Programação',
          areaConhecimentoPai: {
            id: 94,
            nome: 'Metodologia e Técnicas da Computação',
            areaConhecimentoPai: {
              id: 11,
              nome: 'Ciência da Computação',
              areaConhecimentoPai: {
                id: 1,
                nome: 'Ciências Exatas e da Terra',
                areaConhecimentoPai: null,
              },
            },
          },
        },
      },
      questoes: [
        {
          id: 53,
          texto:
            'Usando Python, calcule a quantidade de Pixels na seguinte imagem',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [
            {
              id: 1,
              atributo: 'https:\\/\\/iili.io\\/HUkgmw7.png',
              descricao: 'Foto Leandro Musser',
            },
          ],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 54,
          texto: 'Questão aleatória para criar volume',
          categoriaBloom: 'Analise',
          artigos: [
            {
              id: 3,
              url: 'https://www.linkedin.com/in/leandro-rocha-musser-carneiro/',
              titulo: 'Técnicas de Criação de Questões Aleatórias',
              conteudo:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. \n
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
              dataPublicacao: '2023-05-14T00:00:00.000+00:00',
              autor: ['Leandro Musser'],
            },
          ],
          figuras: [],
          opcoes: [
            {id: 129, texto: 'Teste'},
            {id: 130, texto: 'Random'},
            {id: 131, texto: 'Abc'},
            {id: 132, texto: 'Olá, mundo!'},
          ],
          opcaoCorreta: {id: 132, texto: 'Olá, mundo!'},
          temasAreas: {
            id: 10,
          },
        },
        {
          id: 12,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 22,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 82,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 82,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 72,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 42,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 11,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 17,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
        {
          id: 14,
          texto:
            'teste questao',
          categoriaBloom: 'Aplicação',
          artigos: [],
          figuras: [],
          opcoes: [
            {id: 125, texto: '128'},
            {id: 126, texto: '256'},
            {id: 127, texto: '1023'},
            {id: 128, texto: '49501'},
          ],
          opcaoCorreta: {id: 128, texto: '49501'},
          temasAreas: {
            id: 11,
          },
        },
      ],
    },
  ];
  