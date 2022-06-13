function addProduto(produto, tipo) {
    let el = document.getElementById(produto);
    if (el.classList.contains('selected')) {
        el.classList.remove('selected');
    } else {
        let campo = document.getElementById(tipo);
        Object.entries(campo.children).forEach((e)=>{
            e[1].classList.remove('selected')
        });
        el.classList.add('selected');
    }

    acionarBotao( verificarMarcacoes() );

}


function verificarMarcacoes() {
    campos = ['campo1', 'campo2', 'campo3'];
    let result = true;
    campos.forEach((e)=>{
        let campo = document.getElementById(e);
        let verify = Object.entries(campo.children).map((e) => (
            e[1].classList.contains('selected')
        ));
        if (!verify.includes(true)) result = false;
    });
    return result;
}

function acionarBotao(value) {
    let botao = document.getElementById('botaoFechar');
    if (value) {
        botao.classList.add('ok');
        botao.innerHTML = 'Fechar Pedido';
    } else {
        botao.classList.remove('ok');
        botao.innerHTML = 'Selecione os 3 itens <br> para fechar o pedido';
    }
}

function fecharPedido() {
    let botao = document.getElementById('botaoFechar');
    if (botao.classList.contains('ok')) {
        document.getElementById('modbg').classList.add('appears');
        document.getElementById('modcontent').classList.add('appears');
    }
}