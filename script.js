let cont=0;

function selecionarPrato (opcao){
   const x = document.querySelector('.selecionado');
    opcao.classList.toggle('selecionado');
    cont++;
    if (x!=null){
        x.classList.remove('selecionado');
        cont--;
       }
}
function selecionarBebida (opcao){
    const x = document.querySelector('.selecionado');
    opcao.classList.toggle('selecionado');
    if (x!=null){
        x.classList.remove('selecionado');
    }
 }
 function selecionarSobremesa (opcao){
    const x = document.querySelector('.selecionado');
    opcao.classList.toggle('selecionado');
    if (x!=null){
        x.classList.remove('selecionado');
    }
 }