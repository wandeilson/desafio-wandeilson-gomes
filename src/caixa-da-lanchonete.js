class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        if(itens.length == 0 ){
          return ("Não há itens no carrinho de compra!");
        }
        let temItemIvalido = false;
        const menu = ["cafe", "chantily","suco","sanduiche","queijo","salgado","combo1","combo2"];
        let valorTotal = 0;
        for(let i = 0; i <= itens.length-1; i++){
            let item = itens[i];
            let itemArray = item.split(',');
            item = itemArray[0];
            let qtdItem = itemArray[1];
            if(qtdItem == 0 ){
                return "Quantidade inválida!";
            }
            if(item == menu[0]){
                valorTotal += (qtdItem*3.0);
            }
            else if(item == menu[1]){
                if(itens.toString().includes("cafe")){
                    valorTotal += (qtdItem*1.5);
                }else{
                    return "Item extra não pode ser pedido sem o principal";
                }
                
            }
            else if(item == menu[2]){
                valorTotal += (qtdItem*6.2);
            }
            else if(item == menu[3]){
                valorTotal += (qtdItem*6.5);
            }
            else if(item == menu[4]){
                if(itens.toString().includes("sanduiche")){
                    valorTotal += (qtdItem*2.0);
                }else{
                    return "Item extra não pode ser pedido sem o principal";
                }
                
            }
            else if(item == menu[5]){
                valorTotal += (qtdItem*7.25);
            }
            else if(item == menu[6]){
                valorTotal += (qtdItem*9.50);
            }
            else if(item == menu[7]){
                valorTotal += (qtdItem*7.50);
            }else{
                temItemIvalido = true;
            }
        }

        if(temItemIvalido){
            return "Item inválido!";
        } 
           
        if(metodoDePagamento == "dinheiro"){
            valorTotal -= (valorTotal*0.05);
        }else if(metodoDePagamento == "credito"){
            valorTotal += (valorTotal*0.03);
        }else if(metodoDePagamento == "debito"){
            
        }else{
            return "Forma de pagamento inválida!";
        }
        let valorTotalFormatado = valorTotal.toFixed(2);
        valorTotalFormatado = valorTotalFormatado.replace('.',',');
        return "R$ " + valorTotalFormatado;
    }


}

let caixa = new CaixaDaLanchonete();

console.log(caixa.calcularValorDaCompra("debito",["cafe,1","chantily,2","suco,1","queijo,1","sanduiche,4","salgado,3","combo1,1","combo2,1"]));

//console.log(caixa.calcularValorDaCompra("debito"));

export { CaixaDaLanchonete };
