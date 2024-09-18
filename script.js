const resultado = document.querySelector(".resultado");
const botoes = document.querySelectorAll(".buttons button");

let valorAtual = "";
let primOperando = null;
let operador = null;
let restart = false;

function atualizaResultado(origemLimpar = false) {
    resultado.innerText = origemLimpar ? 0 : valorAtual.replace(".", ",")
}

function addDigito(digito) {

    if (digito === "," && (valorAtual.includes(",") || !valorAtual)) {
        return;
    }

    if (restart) {
        valorAtual = digito;
        restart = false;
    } else {
        valorAtual += digito;
    }

    atualizaResultado();

}

function defineOperador(novoOperador) {

    if (valorAtual) {
        calculate();
        primOperando = parseFloat(valorAtual.replace(",", "."));
        valorAtual = "";
    }

    operador = novoOperador;
}

function calculate() {

    if (operador === null || primOperando === null || valorAtual === "") {
        return;
    }

    let segundoOperado = parseFloat(valorAtual.replace(",", "."));
    let valorResultado;

    switch (operador) {
        case "+":
            valorResultado = primOperando + segundoOperado;
            break;

        case "-":
            valorResultado = primOperando - segundoOperado;
            break;

        case "×":
            valorResultado = primOperando * segundoOperado;
            break;

        case "÷":
            if (segundoOperado === 0) {
                valorResultado = "Erro";
            } else {
                valorResultado = primOperando / segundoOperado;
            }
            break;
        default:
            return;
    }


    if (valorResultado === "Erro") {
        valorAtual = valorResultado;
    } else if (valorResultado.toString().split(".")[1]?.length > 5) {
        valorAtual = parseFloat(valorResultado.toFixed(5)).toString();
    } else {
        valorAtual = valorResultado.toString();
    }

    operador = null;
    primOperando = null;
    restart = true;
    atualizaResultado();
}

function limpaCalculadora() {
    valorAtual = "";
    primOperando = null;
    operador = null;
    restart = false;
    atualizaResultado(true);
}

function definePorcentagem() {
    let resultado = parseFloat(valorAtual) / 100;

    if (["+", "-"].includes(operador)) {
        resultado = resultado * (primOperando || 1);
    }
    
    if (resultado.toString().split(".")[1]?.length > 5) {
        resultado = resultado.toFixed(5).toString();
    }

    valorAtual = resultado.toString();
    atualizaResultado();
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const txtBotao = botao.innerText;

        if (/^[0-9,]+$/.test(txtBotao)) {
            addDigito(txtBotao);
        } else if (["+", "×", "÷", "-"].includes(txtBotao)) {
            defineOperador(txtBotao);
        } else if (txtBotao === "=") {
            calculate();
        } else if (txtBotao === "C") {
            limpaCalculadora();
        } else if (txtBotao === "±") {
            valorAtual = (
                parseFloat(valorAtual || primOperando) * (-1)
            ).toString();
            atualizaResultado();
        }else if (txtBotao === "%") {
            definePorcentagem();
        }
    });
});
