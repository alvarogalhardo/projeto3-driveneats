let cont=0;
let precoPrato=0;
let precoBebida=0;
let precoSobre=0;
let nomePrato='';
let nomeBebida='';
let nomeSobre='';
function selecionarPrato (opcao,a,nome){
   const x = document.querySelector('.selecionadoPrato');
   if (opcao.classList.contains('selecionadoPrato')){
    cont--;
   }
    opcao.classList.toggle('selecionadoPrato');
    cont++;
    if (x!==null){
        x.classList.remove('selecionadoPrato');
        cont--;
       } 
    if (cont==3){
        finalizaPedido();
    }
    const seletor ='.'+a; 
    const y=document.querySelector(seletor).innerHTML;
    const seletor2 ='.'+nome;
    const z=document.querySelector(seletor2).innerHTML;
    verificaPedido();
    return precoPrato=y,nomePrato=z;
}


function selecionarBebida (opcao,b,nome){
    const x = document.querySelector('.selecionadoBebida');
    const seletor1 ='.'+b; 
    const y=document.querySelector(seletor1).innerHTML;
    const seletor2 ='.'+nome;
    const z=document.querySelector(seletor2).innerHTML;
    if (opcao.classList.contains('selecionadoBebida')){
        cont--;
    }
    opcao.classList.toggle('selecionadoBebida');
    cont++;
    if (x!==null){
        x.classList.remove('selecionadoBebida');
        cont--;
    }
    if (cont==3){
        finalizaPedido();
    }
    verificaPedido();
    return precoBebida=y,nomeBebida=z;
}

 function selecionarSobremesa (opcao,c,nome){
    const x = document.querySelector('.selecionadoSobre');
    if (opcao.classList.contains('selecionadoSobre')){
        cont--;
    }
    opcao.classList.toggle('selecionadoSobre');
    cont++;
    if (x!==null){
        x.classList.remove('selecionadoSobre');
        cont--;
    }

    if (cont==3){
        finalizaPedido();
    }
    const seletor ='.'+c; 
    const y=document.querySelector(seletor).innerHTML;
    const seletor2 ='.'+nome;
    const z=document.querySelector(seletor2).innerHTML;
    verificaPedido();
    return precoSobre=y,nomeSobre=z;
 }

 function finalizaPedido(){
    if (cont == 3){
    const x = document.querySelector('.fechar');
    x.classList.remove('escondido');
    const y = document.querySelector('.botao');
    y.classList.add('escondido');
    } else {
        return;
    }
 }

 function verificaPedido(){
    if (cont < 3){
        const x = document.querySelector('.fechar');
        x.classList.add('escondido');
        const y = document.querySelector('.botao');
        y.classList.remove('escondido');
        } else {
            return;
        }
 }
 function wpp(fechar,precoPrato,precoBebida,precoSobre,nomePrato,nomeBebida,nomeSobre){
    if (fechar.classList.contains('escondido')){
        return;
    }
    let total = Number(precoPrato)+Number(precoBebida)+Number(precoSobre);
    const mensagem = encodeURIComponent(
        `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobre}\nTotal: R$ ${total}`);
    console.log(mensagem);
    const link = `https://wa.me/5532999891014?text=${mensagem}`;
    console.log(link);
    window.open(link);

 }
