// Função para salvar o progresso no localStorage
export function salvarProgresso(progresso) {
    console.log("Tentando salvar o progresso:", progresso); // Verifica o que está sendo salvo
    localStorage.setItem('progressoJogo', JSON.stringify(progresso));
    console.log("Progresso salvo no localStorage:", progresso);
}

// Função para carregar o progresso do localStorage
export function carregarProgresso() {
    const dados = localStorage.getItem('progressoJogo');
    if (dados) {
        const progressoCarregado = JSON.parse(dados);
        console.log("Progresso carregado:", progressoCarregado);
        return progressoCarregado;
    } else {
        console.log("Nenhum progresso encontrado, começando do início.");
        return { tela: "Tela 1", pontuacao: 0 }; // Valor padrão
    }
}
