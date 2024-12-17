let players = [];
let qntPersonagens = 0;
let adicionarJogador = "S";
let listaPersonagens = [];

function quantidadePersonagens() {
    qntPersonagens = Number(prompt(`Quantos personagens cada jogador adicionará?`));
    cadJogador();
}

function cadJogador() {
    do {
        const name = prompt(`Informe o nome do jogador ${players.length + 1}:`);
        let personagens = [];
        for (let player = 1; player <= qntPersonagens; player++) {
            let personagen = prompt(`Insira o nome do personagem ${player} de ${qntPersonagens}`) 
            personagens.push(personagen);
            listaPersonagens.push(personagen);
        }
        players.push({
                nome: name,
                personagem: personagens
            }
        );

        if (players.length >= 2) {
            adicionarJogador = prompt(`Deseja adicionar mais jogadores? S-Sim | N-Não`).toUpperCase();
        }
    } while (adicionarJogador == "S" && players.length < 2);
    console.log(players);
    imprimePersonagens();
    // // document.write(`<div class="player"><li>${players.join("</li><li>")}</li></div>`);
}

function imprimePersonagens() {
    for (let quant = 0; quant < players.length; quant++) {
        document.write(`<li><span>+</span> ${players[quant].nome}<ul>`);
            for (let subquant = 0; subquant < players[quant].personagem.length; subquant++) {
                document.write(`<li>${players[quant].personagem[subquant]}</li>`)
            }
        document.write(`</ul></li>`)

        let elements = document.querySelectorAll('span');

        elements.forEach((item) => 
        {
            item.addEventListener('click', function(e)
            {
                console.log("Foi");
                this.parentNode.querySelector('ul').style.display="none";

                let estado = this.parentNode.querySelector('ul').style.display;
    
                if (estado == "block") 
                {
                    this.parentNode.querySelector('ul').style.display="none";
                    this.innerHTML = "+";
                }
                else
                {
                    this.parentNode.querySelector('ul').style.display="block";
                    this.innerHTML = "-";
                }
            })
        });
    
    }
}

// let quantidadeNomes = Number(prompt(`Quantos nomes serão digitados por cada jogador?`));

// quantidadeNomes = quantidadeNomes * quantidadeJogadores;

// let jogadores = [];

// let nomes = [];

// let respostas = [];

// for (let contador = 0; contador < quantidadeJogadores; contador++) 
// {
//     jogadores = prompt(`Informe o nome do jogador:`);
// }
// for (let contador = 0; contador < quantidadeNomes; contador++) 
// {
//     nomes = prompt(`Informe o nome do personagem usando a estrutura a seguir; nome do personagem (filme/série/etc.)`);
// }

// for (let item of nomes) 
// {
//     let resposta = prompt(`Informe quem adicionou o/a personagem: ${item}:`);

//     if (resposta === ) 
//     {
        
//     }
// }