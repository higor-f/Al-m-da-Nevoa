document.addEventListener("DOMContentLoaded", function () {
    let texto = `"Sob a lua pálida de Hallstatt, a doença começou como um simples resfriado, mas logo se espalhou como fogo, vencendo curandeiros e arruinando colheitas. O medo tomou conta quando sussurros apontavam para algo sobrenatural.

Na calada da noite, a verdade emergiu: Myrtle, a Bruxa Sombria, surgiu na colina, rindo sombriamente. Com um gesto, lançou uma praga mágica sobre o vilarejo, impossível de curar. Em poucas semanas, Hallstatt estava à beira do colapso. Famílias se trancavam, os mais fortes tentavam fugir, mas ninguém escapava. No meio da ruína, restava apenas uma centelha de esperança..`;

    let index = 0;
    let elementoTexto = document.getElementById("texto-introducao");
    let botaoJogar = document.getElementById("botao-jogar");

    function escreverTexto() { //Projeta o texto na tela
        if (index < texto.length) {
            elementoTexto.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escreverTexto, 35); //Reduz o tempo de geração do texto
        } else {  
            botaoJogar.style.display = "block";
        }
    }

    escreverTexto();
});

