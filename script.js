const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A internet tem facilitado a comunicação global de maneira mais eficiente do que os meios tradicionais.",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "A internet permite uma comunicação instantânea e global por meio de plataformas como e-mail, redes sociais e videoconferências, tornando a comunicação mais rápida e eficiente."
            },
            {
                texto: "Não",
                afirmacao: "Apesar da conveniência, a comunicação online pode ser prejudicada por falhas de rede ou falta de acessibilidade em algumas regiões, enquanto meios tradicionais como o telefone ainda são mais confiáveis em certas situações."
            }
        ]
    },
    {
        enunciado: "A privacidade na internet é suficientemente garantida pelos meios atuais de segurança digital.",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Ferramentas como criptografia, autenticação de dois fatores e firewalls ajudam a garantir uma navegação mais segura e a proteção dos dados pessoais online."
            },
            {
                texto: "Não",
                afirmacao: "As falhas de segurança e os vazamentos de dados pessoais continuam a ser um problema significativo, comprometendo a privacidade dos usuários na internet."
            }
        ]
    },
    {
        enunciado: "As redes sociais são responsáveis por aumentar a sensação de conexão e bem-estar entre os usuários.",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "As redes sociais permitem que as pessoas se conectem com amigos e familiares, compartilhem experiências e se sintam mais envolvidas com o mundo ao seu redor."
            },
            {
                texto: "Não",
                afirmacao: "As redes sociais permitem que as pessoas se conectem com amigos e familiares, compartilhem experiências e se sintam mais envolvidas com o mundo ao seu redor."
            }
        ]
    },
    {
        enunciado: "O acesso irrestrito à internet pode ser prejudicial para o desenvolvimento de crianças e adolescentes.",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A exposição precoce a conteúdo impróprio ou a dependência da tecnologia pode afetar o desenvolvimento cognitivo, emocional e social das crianças e adolescentes"
            },
            {
                texto: "Não",
                afirmacao: "O acesso à internet, quando supervisionado e orientado, pode ser uma ferramenta valiosa de aprendizado e desenvolvimento para jovens, proporcionando acesso a recursos educacionais e oportunidades de socialização."
            }
        ]
    },
    {
        enunciado: "A internet está tornando os empregos mais acessíveis e descentralizados, com maior possibilidade de trabalho remoto.",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "A internet permitiu que muitas pessoas trabalhassem de qualquer lugar, criando oportunidades de emprego para aqueles que antes não tinham acesso a empregos tradicionais."
            },
            {
                texto: "Não",
                afirmacao: "Embora o trabalho remoto seja mais acessível para algumas áreas, ele pode ser desafiador em outras, com limitações tecnológicas e a necessidade de uma estrutura adequada para efetivamente desempenhar o trabalho."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
