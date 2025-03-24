export const fases = {
    "Tela 1": {
        texto: "Você, jovem feiticeira Edalyn, uma das poucas pessoas da vila que ainda está saudável, após estudar muito atrás de uma cura para a terrível doença, lê em um pergaminho ancestral sobre o antigo mito das Fadas Curandeiras que habitam o coração da floresta obscura. Segundo os escritos, estes seres teriam a capacidade de curar qualquer doença ou enfermidade. Diante dessas informações, a jovem maga tem uma escolha a fazer.",
        opcoes: [
            { texto: "Permanecer na vila isolada do restante da população.", proximaTela: "Tela 3"  },
            { texto: "Sair em busca das fadas no interior da floresta obscura.", proximaTela: "Tela 4", pontuacao: 10  }
        ]
    },
    "Tela 3": {
        texto: "Edalyn não tem coragem de sair de sua casa e ir em busca das fadas na floresta obscura. Assim, toda a população do vilarejo foi exterminada por aquela terrível maldição.",
        opcoes: []  // Fim do jogo, a decisão foi fatal.
    },
    "Tela 4": {
        texto: "Você deixa a vila o mais rápido que pode, a fim de evitar ser infectada pela cruel enfermidade. Ao entrar na floresta, já é possível sentir a mudança de atmosfera. Neste ambiente, o ar é denso, a escuridão está por toda parte e a sensação de estar sendo observada é constante.",
        opcoes: [
            { texto: "Avançar.", proximaTela: "Tela 5", pontuacao: 3  },
            { texto: "Procurar por pistas na entrada da floresta antes de seguir adiante.", proximaTela: "Tela 5A", pontuacao: 6  }
        ]
    },
    "Tela 5A": {
        texto: "Edalyn decide investigar a entrada da floresta antes de se aventurar mais fundo. Ela encontra pegadas estranhas e um pequeno objeto brilhante no chão.",
        opcoes: [
            { texto: "Pegar o objeto e seguir em frente.", proximaTela: "Tela 5", pontuacao: 3   },
            { texto: "Ignorar o objeto e seguir em frente.", proximaTela: "Tela 5B", pontuacao: -5   }
        ]
    },
    "Tela 5B": {
        texto: "Edalyn ignora o objeto e continua sua jornada pela floresta, sentindo a tensão aumentar à medida que avança.",
        opcoes: [
            { texto: "Seguir em frente.", proximaTela: "Tela 5", pontuacao: 2   },
            { texto: "Parar e ouvir os sons da floresta.", proximaTela: "Tela 5C", pontuacao: 3   }
        ]
    },
    "Tela 5C": {
        texto: "Edalyn para e ouve os sons da floresta, percebendo que há algo se movendo nas sombras.",
        opcoes: [
            { texto: "Investigar o som.", proximaTela: "Tela 5D", pontuacao: 5 },
            { texto: "Continuar seguindo o caminho.", proximaTela: "Tela 5", pontuacao: 3 }
        ]
    },
    "Tela 5D": {
        texto: "Edalyn se aproxima do som e descobre uma pequena criatura mágica, que parece estar ferida.",
        opcoes: [
            { texto: "Curar a criatura com um feitiço simples.", proximaTela: "Tela 8C", pontuacao: 7 },
            { texto: "Ignorar a criatura e continuar a jornada.", proximaTela: "Tela 8", pontuacao: -4 }
        ]
    },
    "Tela 5": {  // Renomear para outro nome, por exemplo, "Tela 5 Base"
    texto: "Depois de quase uma hora andando pela floresta, você avista uma pequena silhueta se movendo. Tomada pela curiosidade, Edalyn se aproxima, pensando que pode ser uma pista para encontrar as fadas. Quando bem na sua frente, aquela pequena forma se torna uma enorme criatura com mais de 2 metros e coberta de pelos. Você se vê em perigo e precisa decidir seu próximo movimento.",
    opcoes: [
        { texto: "Lançar uma bola de fogo.", proximaTela: "Tela 6", pontuacao: 4   },
        { texto: "Se afastar.", proximaTela: "Tela 7", pontuacao: 2   }
    ]
},

    "Tela 6": {
        texto: "Desesperada, você tenta lançar uma bola de fogo, que não é conjurada por completo, gerando apenas leves danos à fera, que avança em sua direção, dilacerando seu corpo.",
        opcoes: []  // Fim do jogo, a luta foi perdida.
    },
    "Tela 7": {
        texto: "Você consegue tomar distância da fera e invoca um poderoso raio de luz que atravessa a besta, cujo corpo encontra o chão logo em seguida, te deixando livre para continuar sua jornada, agora mais atenta a possíveis ameaças.",
        opcoes: [
            { texto: "Continuar.", proximaTela: "Tela 8", pontuacao: 2 },
            { texto: "Descansar um pouco antes de seguir.", proximaTela: "Tela 8A", pontuacao: -3   }
        ]
    },
    "Tela 8A": {
        texto: "Edalyn decide descansar por alguns minutos, recuperando suas energias. Enquanto descansa, ela ouve um som estranho vindo de um arbusto próximo.",
        opcoes: [
            { texto: "Investigar o som.", proximaTela: "Tela 8B", pontuacao: 3   },
            { texto: "Ignorar o som e continuar a jornada.", proximaTela: "Tela 8", pontuacao: -3   }
        ]
    },
    "Tela 8B": {
        texto: "Edalyn se aproxima do arbusto e encontra uma pequena criatura mágica, que parece estar ferida.",
        opcoes: [
            { texto: "Curar a criatura com um feitiço simples.", proximaTela: "Tela 8C", pontuacao: 5   },
            { texto: "Ignorar a criatura e continuar a jornada.", proximaTela: "Tela 8", pontuacao: -4   }
        ]
    },
    "Tela 8C": {
        texto: "A criatura, agradecida, sussurra algo em uma língua desconhecida e desaparece. Edalyn sente uma energia positiva ao seu redor, como se a floresta estivesse mais amigável.",
        opcoes: [
            { texto: "Continuar a jornada.", proximaTela: "Tela 8", pontuacao: 6   },
            { texto: "Parar para meditar.", proximaTela: "Tela 8D", pontuacao: 2   }
        ]
    },
    "Tela 8D": {
        texto: "Edalyn para para meditar, sentindo a energia da floresta ao seu redor. Ela se sente mais forte e confiante.",
        opcoes: [
            { texto: "Continuar a jornada.", proximaTela: "Tela 8", pontuacao: 3   }
        ]
    },
    "Tela 8": {
        texto: "Com a besta derrotada, Edalyn respira aliviada, mas a sensação de perigo nunca desaparece. O ar continua pesado e a escuridão parece engolir tudo ao redor. Decidida a encontrar as fadas curandeiras, ela retoma o caminho, sua mente cheia de dúvidas e incertezas. Sabia que não podia voltar atrás. A vida de sua vila dependia de sua coragem.",
        opcoes: [
            { texto: "Seguir em frente.", proximaTela: "Tela 9", pontuacao: 3   },
            { texto: "Procurar por mais pistas antes de seguir.", proximaTela: "Tela 9A", pontuacao: 4 }
        ]
    },
    "Tela 9A": {
        texto: "Edalyn encontra uma inscrição antiga em uma árvore, escrita em uma língua desconhecida. Ela tenta decifrá-la.",
        opcoes: [
            { texto: "Usar um feitiço de tradução.", proximaTela: "Tela 9B", pontuacao: 2   },
            { texto: "Ignorar a inscrição e seguir em frente.", proximaTela: "Tela 9", pontuacao: -2 }
        ]
    },
    "Tela 9B": {
        texto: "O feitiço revela que a inscrição diz: 'A verdadeira cura está no equilíbrio entre luz e sombra.'",
        opcoes: [
            { texto: "Refletir sobre o significado da mensagem.", proximaTela: "Tela 9", pontuacao: 2   },
            { texto: "Continuar a jornada.", proximaTela: "Tela 9", pontuacao: 4   }
        ]
    },
    "Tela 9": {
        texto: "Edalyn segue adiante, seus passos cuidadosos e silenciosos, enquanto a floresta parece se fechar ao seu redor. Os sons de criaturas desconhecidas ecoam à distância, e o ar fica cada vez mais frio. De repente, ela ouve um som agudo, como o bater de asas, vindo de cima. Antes que possa reagir, uma sombra enorme cai sobre ela—uma criatura alada, com asas de morcego e garras afiadas. Seus olhos brilham com uma luz amarela sinistra, e um rugido ecoa pela floresta.",
        opcoes: [
            { texto: "Usar um feitiço de vento para afastar a criatura.", proximaTela: "Tela 10", pontuacao: 4   },
            { texto: "Lançar uma barreira mágica para se proteger e ganhar tempo.", proximaTela: "Tela 11", pontuacao: 3   }
        ]
    },
    "Tela 10": {
        texto: "Edalyn concentra sua energia e conjura um feitiço de vento, criando uma forte rajada que empurra a criatura para trás. O demônio alado recua, batendo suas asas para se equilibrar, mas logo se recupera e avança novamente, ainda mais furioso.",
        opcoes: [
            { texto: "Tentar um feitiço mais poderoso.", proximaTela: "Tela 12", pontuacao: 6   },
            { texto: "Recuar e procurar uma rota de fuga.", proximaTela: "Tela 13", pontuacao: 3   }
        ]
    },
    "Tela 11": {
        texto: "Edalyn rapidamente conjura uma barreira mágica, criando um campo de energia protetor ao seu redor. A criatura golpeia a barreira com suas garras, fazendo-a tremer, mas não consegue atravessá-la. Enquanto isso, Edalyn usa o tempo para avaliar a situação e planejar seu próximo movimento.",
        opcoes: [
            { texto: "Atacar a criatura com um raio de energia.", proximaTela: "Tela 14", pontuacao: 5   },
            { texto: "Tentar se esconder e esperar a criatura passar.", proximaTela: "Tela 15", pontuacao: 3   }
        ]
    },
    "Tela 12": {
        texto: "Determinada a vencer, Edalyn canaliza toda sua energia em um feitiço poderoso, lançando um raio de energia pura em direção à criatura. O feitiço atinge o alvo com força total, fazendo o demônio alado recuar e soltar um grito de dor. Edalyn corre para longe a fim de evitar continuar o combate e volta a focar no seu objetivo, as fadas.",
        opcoes: [
            { texto: "Continuar a jornada.", proximaTela: "Tela 16", pontuacao: 2   }
        ]
    },
    "Tela 13": {
        texto: "Edalyn decide recuar, procurando uma rota de fuga enquanto a criatura ainda está distraída. Ela encontra uma passagem estreita entre as árvores e corre o mais rápido que pode, ouvindo o bater de asas da criatura atrás de si.",
        opcoes: [
            { texto: "Continuar correndo.", proximaTela: "Tela 16", pontuacao: 3   },
        
        ]
    },
    "Tela 14": {
        texto: "Edalyn concentra sua energia e lança um raio de energia em direção à criatura. O feitiço atinge o alvo com precisão, causando danos significativos. O demônio alado solta um grito de dor e recua, mas ainda está no ar, apesar de levemente desnorteado.",
        opcoes: [
            { texto: "Preparar-se para outro ataque.", proximaTela: "Tela 12", pontuacao: 5   },
            { texto: "Tentar fugir enquanto a criatura está ferida.", proximaTela: "Tela 16", pontuacao: 2   }
        ]
    },
    "Tela 15": {
        texto: "Edalyn se esconde atrás de uma árvore grande, segurando a respiração enquanto a criatura passa por perto, ainda procurando por ela. Depois de alguns momentos tensos, o demônio alado parece desistir e se afasta, permitindo que Edalyn continue sua jornada.",
        opcoes: [
            { texto: "Continuar em direção ao coração da floresta.", proximaTela: "Tela 16", pontuacao: 6   },
            { texto: "Explorar a área ao redor.", proximaTela: "Tela 16B", pontuacao: 2   }
        ]
    },
   
    "Tela 16": {
        texto: "Edalyn avança pela floresta obscura, sua determinação inabalável, apesar da exaustão e dos perigos que enfrentou. O ar ao seu redor começa a mudar, ficando mais leve e carregado de uma energia mágica palpável. A escuridão densa que a acompanhava até agora começa a se dissipar, substituída por uma luz suave e difusa, como se a própria floresta estivesse se abrindo para recebê-la.",
        opcoes: [
            { texto: "Seguir adiante.", proximaTela: "Tela 17", pontuacao: 4   },
            { texto: "Parar para meditar e recuperar energias.", proximaTela: "Tela 17A", pontuacao: 1   }
        ]
    },
    "Tela 17A": {
        texto: "Edalyn senta-se em uma clareira e começa a meditar, conectando-se com a energia da floresta. Ela sente uma presença amigável ao seu redor, como se a floresta estivesse a ajudá-la.",
        opcoes: [
            { texto: "Continuar a jornada.", proximaTela: "Tela 17", pontuacao: 5 },
            { texto: "Levantar e explorar a clareira.", proximaTela: "Tela 17B", pontuacao: 1   }
        ]
    },
    "Tela 17B": {
        texto: "Edalyn levanta-se e explora a clareira, encontrando flores mágicas que brilham sob a luz do sol.",
        opcoes: [
            { texto: "Colher algumas flores.", proximaTela: "Tela 17C", pontuacao: 1   },
            { texto: "Continuar a jornada.", proximaTela: "Tela 17", pontuacao: 3   }
        ]
    },
    "Tela 17C": {
        texto: "Edalyn colhe algumas flores mágicas, sentindo uma onda de energia positiva. Agora, ela pode usá-las mais tarde.",
        opcoes: [
            { texto: "Continuar a jornada.", proximaTela: "Tela 17", pontuacao: 2   }
        ]
    },
    "Tela 17": {
        texto: "À medida que avança, a vegetação densa começa a se afastar, revelando uma clareira ampla e circular. No centro, ergue-se uma árvore colossal, diferente de qualquer outra que ela já viu. Seu tronco é prateado, e suas folhas brilham como estrelas, mesmo sob a luz difusa do dia. A energia mágica que Edalyn sentia antes agora é quase opressiva, como se a própria essência da floresta estivesse concentrada ali.",
        opcoes: [
            { texto: "Seguir a intuição.", proximaTela: "Tela 18", pontuacao: 5 },
            { texto: "Investigar a árvore antes de se aproximar.", proximaTela: "Tela 18A", pontuacao: 1   }
        ]
    },
    "Tela 18A": {
        texto: "Edalyn examina a árvore e encontra símbolos antigos gravados em seu tronco. Ela tenta decifrá-los.",
        opcoes: [
            { texto: "Usar um feitiço de tradução.", proximaTela: "Tela 18B", pontuacao: 1 },
            { texto: "Ignorar os símbolos e seguir em frente.", proximaTela: "Tela 18", pontuacao: 3   }
        ]
    },
    "Tela 18B": {
        texto: "O feitiço revela que a inscrição diz: 'A verdadeira cura está no equilíbrio entre luz e sombra.'",
        opcoes: [
            { texto: "Refletir sobre o significado da mensagem.", proximaTela: "Tela 18", pontuacao: 1   },
            { texto: "Continuar a jornada.", proximaTela: "Tela 18", pontuacao: 3   }
        ]
    },
    "Tela 18": {
        texto: "Edalyn segue em frente, sentindo que está próxima de seu objetivo. A clareira se abre ainda mais, revelando um santuário antigo cercado por uma aura mágica. No centro, um grupo de fadas curandeiras aguarda, suas asas brilhando suavemente.",
        opcoes: [
            { texto: "Aproximar-se das fadas.", proximaTela: "Tela 19", pontuacao: 6  },
            { texto: "Observar de longe antes de se aproximar.", proximaTela: "Tela 19A", pontuacao: 2   }
        ]
    },
    "Tela 19A": {
        texto: "Edalyn observa as fadas de longe, percebendo que elas estão realizando um ritual. Ela sente que deve esperar o momento certo para se aproximar.",
        opcoes: [
            { texto: "Aproximar-se agora.", proximaTela: "Tela 19", pontuacao: 3   },
            { texto: "Esperar o ritual terminar.", proximaTela: "Tela 19B", pontuacao: 1   }
        ]
    },
    "Tela 19B": {
        texto: "Edalyn espera pacientemente até que o ritual termine. As fadas parecem notar sua presença e se voltam para ela com um sorriso.",
        opcoes: [
            { texto: "Aproximar-se das fadas.", proximaTela: "Tela 19", pontuacao: 2   }
        ]
    },
    "Tela 19": {
        texto: "As fadas sussurram entre si, suas asas brilhando em tons de azul e verde. A líder delas, uma fada um pouco maior que as outras, com cabelos prateados e olhos que parecem conter o céu noturno, flutua para frente. — Você foi guiada até nós por uma razão, Edalyn. Mas a cura que você busca não é concedida sem um teste. Para provar que é digna, você deve resolver um enigma.",
        opcoes: [
            { texto: "Estou preparada. Qual é o enigma?", proximaTela: "Tela 20", pontuacao: 5   },
            { texto: "Eu tenho medo de falhar. Posso recusar o teste?", proximaTela: "Tela 20A", pontuacao: -5   }
        ]
    },
    "Tela 20A": {
        texto: "A fada líder olha para Edalyn com compaixão. — O medo é natural, mas a verdadeira coragem está em enfrentá-lo. Se você recusar o teste, não poderemos ajudá-la.",
        opcoes: [
            { texto: "Eu aceito o desafio. Qual é o enigma?", proximaTela: "Tela 20", pontuacao: 5   },
            { texto: "Eu não estou pronta. Preciso de mais tempo.", proximaTela: "Tela 20B", pontuacao: -6   }
        ]
    },
    "Tela 20B": {
        texto: "A fada líder acena com a cabeça, respeitando a decisão de Edalyn. — Quando estiver pronta, volte e nos procure. A floresta estará aqui para guiá-la.",
        opcoes: [
            { texto: "Voltar ao santuário e enfrentar o teste.", proximaTela: "Tela 20", pontuacao: 2   }
        ]
    },
    "Tela 20": {
        texto: "A fada sorri, e suas palavras ecoam como uma canção: — Eu sou leve como uma pena, mas mesmo o homem mais forte não pode me segurar por muito tempo. O que sou eu?",
        opcoes: [
            { texto: "Você é o sopro, o ar que respiramos.", proximaTela: "Tela 21", pontuacao: 10   },
            { texto: "Você é a água, que flui e se adapta.", proximaTela: "Tela 22", pontuacao: -10   }
        ]
    },
    "Tela 21": {
        texto: "As fadas emitem um som harmonioso, como risos de cristal, e a líder inclina a cabeça em sinal de aprovação. — Sua sabedoria é verdadeira, Edalyn. Você provou ser digna. A fada estende a mão, e um pequeno frasco de vidro contendo um líquido brilhante aparece em sua palma. — Esta poção é feita das águas da fonte da vida. Ela curará suas feridas e fortalecerá seu espírito. Mas lembre-se, a verdadeira cura vem de dentro. Use este presente com sabedoria.",
        opcoes: [
            { texto: "Obrigada. Eu não vou decepcioná-las.", proximaTela: "Tela 23", pontuacao: 8 }
        ]
    },
    "Tela 22": {
        texto: "As fadas emitem um som triste, como um acorde menor em uma melodia, e a líder balança a cabeça lentamente. — Não, Edalyn. A resposta correta era o sopro, o ar que respiramos. Infelizmente, você falhou no teste. A fada líder olha para ela com compaixão, mas sua expressão é firme. — As regras são claras, Edalyn. Não podemos conceder a cura a quem não prova ser digno. Mas saiba que sua jornada não foi em vão. A sabedoria que você busca está dentro de você, mesmo que ainda não a tenha encontrado.",
        opcoes: [
            { texto: "Não pode ser, não acredito que falhei.", proximaTela: "Tela 24", pontuacao: -4   },
            { texto: "Eu entendo. Vou continuar minha busca.", proximaTela: "Tela 25", pontuacao: 2   }
        ]
    },
    "Tela 23": {
        texto: "Edalyn é teletransportada para fora da floresta. Agora longe dos perigos e com a cura em suas mãos, ela se apressa e despeja o frasco com a poção na fonte localizada no centro da vila e grita para todos que aquela água iria curá-los. A população rapidamente começa a tomar e compartilhar com os mais enfermos a água da fonte, e em alguns minutos as pessoas já começam a se sentir melhor, e com o passar dos dias os sintomas desaparecem completamente. E essa é a história de como nossa jovem maga Edalyn salvou todo o seu vilarejo do extermínio.",
        opcoes: []  // Fim do jogo, curada e salva!
    },
    "Tela 24": {
        texto: "Edalyn então é cuspida para fora da floresta, tendo que ver novamente seu vilarejo definhando enquanto não pode fazer nada. Ela falhou em sua missão e agora irá assistir o fim de seu povo até que a maldição também tome seu corpo e seus olhos se fechem eternamente, restando apenas o sentimento de insuficiência.",
        opcoes: []  // Fim do jogo, falhou em sua missão.
    },
    "Tela 25": {
        texto: "Edalyn decide continuar sua busca, determinada a encontrar outra forma de salvar sua vila. Com a experiência adquirida, ela se sente mais forte e confiante. A jornada ainda não acabou, e novas aventuras a aguardam.",
        opcoes: []  // Fim do jogo, nova jornada.
    }
};