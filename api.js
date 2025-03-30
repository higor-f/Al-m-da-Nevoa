const perguntas = [
    {
        pergunta: "A fada sorri, e suas palavras ecoam como uma canção: — Eu sou leve como uma pena, mas mesmo o homem mais forte não pode me segurar por muito tempo. O que sou eu?",
        opcoes: [
            { texto: "Você é o sopro, o ar que respiramos.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a água, que flui e se adapta.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O mago levanta sua varinha e diz: — Sou invisível, mas posso ser tocado. O que sou eu?",
        opcoes: [
            { texto: "Você é o vento, que passa sem ser visto.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a sombra, que se esconde na luz.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O elfo sussurra: — Eu sou a chave para abrir os portais. O que sou eu?",
        opcoes: [
            { texto: "Você é a magia, que abre caminhos secretos.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a pedra, que bloqueia qualquer passagem.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "A fada diz com um sorriso misterioso: — Eu sou formada por mil pedaços, mas sou única. O que sou eu?",
        opcoes: [
            { texto: "Você é o cristal, que reflete a luz de mil formas.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é o fogo, que consome tudo que toca.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O dragão, com seu rugido profundo, diz: — Sou imortal, mas posso ser quebrado. O que sou eu?",
        opcoes: [
            { texto: "Você é o gelo, que derrete sob o calor.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a pedra, que resiste ao tempo.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O unicórnio fala com sabedoria: — Eu sou silencioso, mas tenho poder. O que sou eu?",
        opcoes: [
            { texto: "Você é o pensamento, que move as ações sem ser visto.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é o som, que pode ser ouvido por todos.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O feiticeiro, com um gesto de sua mão, fala: — Sou eterno, mas posso ser controlado. O que sou eu?",
        opcoes: [
            { texto: "Você é o tempo, que segue seu próprio caminho.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é o vento, que não pode ser contido.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "A bruxa, olhando fixamente, diz: — Eu sou um paradoxo. O que sou eu?",
        opcoes: [
            { texto: "Você é a noite, que traz o mistério.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é o dia, que revela tudo.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O anjo, com asas brilhantes, fala: — Sou pura luz, mas posso ser apagado. O que sou eu?",
        opcoes: [
            { texto: "Você é a estrela, que brilha até se extinguir.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é o sol, que nunca se apaga.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        pergunta: "O espírito da floresta sussurra: — Eu sou a essência da vida, mas posso desaparecer. O que sou eu?",
        opcoes: [
            { texto: "Você é a água, fonte de toda a existência.", proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a terra, que não pode se mover.", proximaTela: "Tela 22", pontuacao: -10 }
        ]
    }
];

//Função para pegar um número aleatório da API externa Random.org
async function obterIndiceAleatorio() {
    try {
        const response = await fetch('https://www.random.org/integers/?num=1&min=0&max=' + (perguntas.length - 1) + '&col=1&base=10&format=plain&rnd=new');
        const data = await response.text();
        const randomIndex = parseInt(data.trim()); //Número aleatório gerado pela API
        return randomIndex;
    } catch (error) {
        console.error("Erro ao obter número aleatório:", error);
        return Math.floor(Math.random() * perguntas.length); //Caso a API falhe ela usa Math.random()
    }
}

//Função para obter o enigma aleatório
export async function getEnigma() {
    try {
        const randomIndex = await obterIndiceAleatorio();
        const pergunta = perguntas[randomIndex];
        return pergunta;
    } catch (error) {
        console.error("Erro ao buscar enigma:", error);
        return null;
    }
}
