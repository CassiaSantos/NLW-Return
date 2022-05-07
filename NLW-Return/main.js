//Colocando e removendo a classe scroll no JS:

//Quando o Scroll no eixo Y for igual a 0, não haverá a fundo verde. Já quando for diferente disto, ele será adicionado!

function onScroll(){
  if (scrollY===0){//var criada pelo Navegador!
    navigation.classList.remove('scroll');

  } else{
    navigation.classList.add('scroll');

  }
}

function openMenu(){
  document.body.classList.add('menu-expanded'); /*classe em que está aplicada todos os estilos definidos no CSS*/
}

function closeMenu(){
  document.body.classList.remove('menu-expanded');
}