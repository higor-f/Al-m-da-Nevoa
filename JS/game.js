import { fases } from './fases.js'; // Importa as fases do jogo
import { salvarProgresso, carregarProgresso } from './storage.js'; // Importa as funções de salvar e carregar progresso

let telaAtual = carregarProgresso()?.tela || "Tela 1"; // Carrega a tela atual ou começa da "Tela 1"
let pontuacao = carregarProgresso()?.pontuacao || 0; // Carrega a pontuação ou começa em 0

// Função para atualizar a interface
function atualizarUI(fase) {
    const narrativa = document.querySelector('#narrativa');
    const opcoesDiv = document.querySelector('#opcoes');
    const placar = document.querySelector('#score');

    // Atualiza o texto narrativo
    narrativa.textContent = fase.texto;

    // Limpa as opções anteriores
    opcoesDiv.innerHTML = '';

    // Atualiza o placar
    placar.textContent = pontuacao;

    // Verifica se estamos na tela 20
    if (telaAtual === "Tela 20") {
        console.log("Estamos na Tela 20. Buscando enigmas...");

        // Chama a API para pegar os enigmas aleatórios
        fetch('http://localhost:3000/enigmas')
            .then(response => {
                console.log("Resposta da API recebida:", response);
                return response.json();
            })
            .then(enigmasAleatorios => {
                console.log("Enigmas aleatórios recebidos:", enigmasAleatorios);
                // Verifica se a resposta da API tem enigmas
                if (enigmasAleatorios.length > 0) {
                    // Cria as opções de resposta usando os enigmas aleatórios
                    enigmasAleatorios.forEach((enigma, index) => {
                        const botao = document.createElement('button');
                        botao.textContent = enigma.texto;
                        botao.classList.add('enigma');
                        botao.addEventListener('click', () => {
                            enigma.respostas.forEach(opcao => {
                                if (opcao.respostaCorreta) {
                                    pontuacao += opcao.pontuacao; // Atualiza a pontuação
                                    telaAtual = opcao.proximaTela; // Atualiza a próxima tela
                                }
                            });
                            salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso
                            atualizarUI(fases[telaAtual]); // Atualiza a interface
                        });
                        opcoesDiv.appendChild(botao);
                    });
                } else {
                    console.error("Nenhum enigma recebido da API");
                }
            })
            .catch(error => {
                console.error('Erro ao obter enigmas:', error);
            });
    } else {
        // Para outras telas, exibe as opções normais
        fase.opcoes.forEach((opcao, index) => {
            const botao = document.createElement('button');
            botao.textContent = opcao.texto;
            botao.id = `opcao${index + 1}`;
            botao.classList.add('opcao');
            botao.addEventListener('click', () => {
                telaAtual = opcao.proximaTela; // Atualiza a tela atual
                pontuacao += opcao.pontuacao ||  0; // Soma a pontuação da escolha
                salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso
                atualizarUI(fases[telaAtual]); // Atualiza a interface
            });
            opcoesDiv.appendChild(botao);
        });
    }

    // Verifica se é um final (sem opções)
    if (fase.opcoes.length === 0) {
        const botaoReiniciar = document.createElement('button');
        botaoReiniciar.textContent = "Você fracassou.";
        botaoReiniciar.addEventListener('click', () => {
            telaAtual = "Game-over.html"; // Defina o arquivo da tela de "Game Over"
            window.location.href = telaAtual; // Redireciona o usuário para a página de Game Over
            pontuacao = 0; // Zera a pontuação
            salvarProgresso({ tela: telaAtual, pontuacao }); // Salva o progresso do reinício
            atualizarUI(fases[telaAtual]); // Atualiza a interface
        });
        opcoesDiv.appendChild(botaoReiniciar);
    }
}

// Inicia o jogo
atualizarUI(fases[telaAtual]);
