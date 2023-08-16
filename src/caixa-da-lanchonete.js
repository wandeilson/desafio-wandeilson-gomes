class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const erroItemSemPedidoPrincipal = "Item extra não pode ser pedido sem o principal";
       
        const formasPagamentoDesconto = new Map([
            ['dinheiro', -0.05],
            ['credito', 0.03],
            ['debito', 0.00],
          ]);

        const cardapio = new Map([
            ['cafe', 3.00],
            ['chantily', 1.50],
            ['suco', 6.20],
            ['sanduiche', 6.50],
            ['queijo', 2.00],
            ['salgado', 7.25],
            ['combo1', 9.50],
            ['combo2', 7.50],
          ]);

        if(itens.length == 0 ){
          return "Não há itens no carrinho de compra!";
        }

        let subTotal = 0;
        for(let i = 0; i <= itens.length-1; i++){
            let item = itens[i];

            let pedido = item.split(',');

            let codigoItem = pedido[0];
            let quantidadeItem = pedido[1];

            if(quantidadeItem == 0 ){
                return "Quantidade inválida!";
            }
            
            if(!cardapio.has(codigoItem)) {
                return "Item inválido!"; 
            }

            if(codigoItem == "chantily" && !itens.toString().includes("cafe")){
                return erroItemSemPedidoPrincipal;
            }

            if(codigoItem == "queijo" && !itens.toString().includes("sanduiche")){
                return erroItemSemPedidoPrincipal;
            }
            subTotal += (quantidadeItem * cardapio.get(codigoItem));
        }
           
        let valorTotal = subTotal;

        const fatorPagamento = formasPagamentoDesconto.get(metodoDePagamento);

        if(fatorPagamento == undefined) {
            return "Forma de pagamento inválida!";
        }
        valorTotal = subTotal + (subTotal * fatorPagamento)

        let valorTotalFormatado = valorTotal.toFixed(2);
        valorTotalFormatado = valorTotalFormatado.replace('.',',');
        return "R$ " + valorTotalFormatado;
    }
} 

let caixa = new CaixaDaLanchonete();

console.log(caixa.calcularValorDaCompra("debito",["cafe,1","chantily,2","suco,1","queijo,1","sanduiche,4","salgado,3","combo1,1","combo2,1"]));

export { CaixaDaLanchonete };
