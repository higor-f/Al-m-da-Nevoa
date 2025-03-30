// Função para salvar o progresso no localStorage
export function salvarProgresso(progresso) {
    localStorage.setItem('progresso', JSON.stringify(progresso)); // Salva o progresso completo (tela e pontuação)
    console.log("Progresso salvo:", progresso);
}

// Função para carregar o progresso do localStorage
export function carregarProgresso() {
    const progressoSalvo = localStorage.getItem('progresso');
    if (progressoSalvo) {
        const { tela, pontuacao } = JSON.parse(progressoSalvo);
        console.log("Progresso carregado:", tela, pontuacao);
        return { tela, pontuacao }; // Retorna o progresso salvo com tela e pontuação
    } else {
        console.log("Nenhum progresso encontrado, começando do início.");
        return { tela: "Tela 1", pontuacao: 0 }; // Caso não haja progresso salvo, começa da Tela 1 e pontuação 0
    }
}
