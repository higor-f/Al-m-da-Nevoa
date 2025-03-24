const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Lista de enigmas possíveis
const enigmas = [
    {
        texto: "Eu sou leve como uma pena, mas mesmo o homem mais forte não pode me segurar por muito tempo. O que sou eu?",
        respostas: [
            { texto: "Você é o sopro, o ar que respiramos.", respostaCorreta: true, proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Você é a água, que flui e se adapta.", respostaCorreta: false, proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        texto: "O que é tão frágil que, ao dizer o nome, ele se quebra?",
        respostas: [
            { texto: "Silêncio", respostaCorreta: true, proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Vidro", respostaCorreta: false, proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        texto: "O que é mais pesado que mil quilos, mas pode ser carregado por uma criança?",
        respostas: [
            { texto: "O fardo da consciência", respostaCorreta: true, proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Uma pedra", respostaCorreta: false, proximaTela: "Tela 22", pontuacao: -10 }
        ]
    },
    {
        texto: "Eu sou grande quando sou jovem, mas pequeno quando sou velho. O que sou eu?",
        respostas: [
            { texto: "Uma vela", respostaCorreta: true, proximaTela: "Tela 21", pontuacao: 10 },
            { texto: "Uma árvore", respostaCorreta: false, proximaTela: "Tela 22", pontuacao: -10 }
        ]
    }
];

// Rota para obter 4 enigmas aleatórios
app.get('/enigmas', (req, res) => {
    const enigmasAleatorios = [];
    while (enigmasAleatorios.length < 4) {
        const enigma = enigmas[Math.floor(Math.random() * enigmas.length)];
        // Evitar duplicatas
        if (!enigmasAleatorios.includes(enigma)) {
            enigmasAleatorios.push(enigma);
        }
    }
    res.json(enigmasAleatorios); // Envia os 4 enigmas para o cliente
});

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
