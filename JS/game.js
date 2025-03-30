import { fases } from './fases.js'; 
import { salvarProgresso, carregarProgresso } from './storage.js'; 
import { getEnigma } from './api.js'; 

let telaAtual = carregarProgresso()?.tela || "Tela 1"; 
let pontuacao = carregarProgresso()?.pontuacao || 0; 
// Função para atualizar a interface
async function atualizarUI(fase) {
    const narrativa = document.querySelector('#narrativa');
    const opcoesDiv = document.querySelector('#opcoes');
    const placar = document.querySelector('#score');

    // Se for a "Tela 20", buscar um enigma antes de atualizar o texto
    if (telaAtual === "Tela 20") {
        const enigma = await getEnigma();
        if (enigma) {
            fase.texto = enigma.pergunta; 
            fase.opcoes = enigma.opcoes; 
        }
    }

    // Atualiza o texto narrativo
    narrativa.textContent = fase.texto;

    // Limpa as opções anteriores
    opcoesDiv.innerHTML = '';

    // Atualiza o placar
    placar.textContent = pontuacao;

    // Adiciona as novas opções
    if (fase.opcoes.length > 0) {
        fase.opcoes.forEach((opcao, index) => {
            const botao = document.createElement('button');
            botao.textContent = opcao.texto;
            botao.id = `opcao${index + 1}`;
            botao.classList.add('opcao');
            botao.addEventListener('click', () => {
                telaAtual = opcao.proximaTela; // Atualiza a tela atual
                pontuacao += opcao.pontuacao || 0; // Soma a pontuação da escolha
                salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso
                atualizarUI(fases[telaAtual]); // Atualiza a interface
            });
            opcoesDiv.appendChild(botao);
        });
    } else {
        // Se for um final cria um botão de reinício
        const botaoReiniciar = document.createElement('button');

        if (telaAtual === "Tela 23") {
            botaoReiniciar.textContent = "Parabéns, Edalyn! Você conseguiu. Jogar novamente";
            botaoReiniciar.addEventListener('click', () => {
                pontuacao = 0; // Reseta a pontuação
                telaAtual = "Tela 1"; // Volta para a primeira tela
                salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso reiniciado
                window.location.href = "introdução.html"; // Redireciona para o jogo
            });
        } else {
            botaoReiniciar.textContent = "Você fracassou.";
            botaoReiniciar.addEventListener('click', () => {
                pontuacao = 0; // Zera a pontuação
                telaAtual = "Tela 1"; // Reinicia a tela
                salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso reiniciado
                window.location.href = "Game-over.html"; // Redireciona para a página de game over
            });
        }

        opcoesDiv.appendChild(botaoReiniciar);
    }
}

// Inicia o jogo carregando a tela atual
atualizarUI(fases[telaAtual]);

