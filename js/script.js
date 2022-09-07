function iniciar(){

    adsds()
    function adsds() {
        //movimentação da div
        var nave = document.querySelector("#nave");
        var tela = document.querySelector("#tela");
        var acumuladorDireita = 0;
        var acumuladorEsquerda = 0;
        var acumuladorBaixo = -80;
        var zero = 0;
        var placar = document.querySelector("#placar");
        let vidaNave = "❤❤❤❤❤";
        var play = document.querySelector(".game")
        play.remove()
    
        //movimentar pelas setas
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37:
                    if (acumuladorDireita > 0) {
                        acumuladorEsquerda = acumuladorDireita - 100;
                        nave.style.left = `${acumuladorEsquerda}` + "px";
                        acumuladorDireita = acumuladorEsquerda;
                    }
                    break;
    
                case 39:
                    if (acumuladorDireita < 400) {
                        acumuladorDireita += 100;
                        nave.style.left = `${acumuladorDireita}` + "px";
                    }
                    break;
            }
        });


        //movimentar ao clicar
        document.querySelector("#pos1").addEventListener("click", function(){
            nave.style.left = "0"
        });
        document.querySelector("#pos2").addEventListener("click", function(){
            nave.style.left = "100px"
        });
        document.querySelector("#pos3").addEventListener("click", function(){
            nave.style.left = "200px"
        });
        document.querySelector("#pos4").addEventListener("click", function(){
            nave.style.left = "300px"
        });
        document.querySelector("#pos5").addEventListener("click", function(){
            nave.style.left = "400px"
        });
        
        //Criar elementos
        criarObj();
        function criarObj() {
    
            var nomes = ['img/et1.png', 'img/et2.png', 'img/et3.png', 'img/et4.png'];
            var randomET = nomes[Math.ceil(Math.random() * (nomes.length - 1))];
            var element = document.createElement("span");
            var leftString = ["1px", "0px", "100px", "200px", "300px", "400px"];
            var leftValue =
            leftString[Math.ceil(Math.random() * (leftString.length - 1))];
            element.id = "element";
            element.style.left = `${leftValue}`;
            element.style.top = "-80px";
            element.style.backgroundImage = "url(" +`${randomET}`+ ")";
            nave.style.top = "320px";
            tela.appendChild(element);
        }
    
        //adiciona gravidade aos elementos criados
        function gravity() {
            var gravity = acumuladorBaixo += 10;
            element.style.top = `${acumuladorBaixo}` + "px";
    
            //teste de colisão
            if (element.style.top == nave.style.top) {
                
                alert("Voce perdeu!!!")
                window.location.reload();
    
            }
    
            if (acumuladorBaixo > 430) {
                acumuladorBaixo = -80;
                element.remove();
                criarObj();
            }
        }
        setInterval(gravity, 200);
    
    //Cria tiros
    function criarTiros() {
        var topTiro = 320;
        var tiro = document.createElement("span");
        tiro.className = "tiros";
        tiro.style.left = nave.style.left
        tiro.style.top = topTiro + "px"
        tela.appendChild(tiro);
    
      
        function tiroSubir(){
            topTiro = topTiro - 10
            tiro.style.top = topTiro + "px"
            element.innerHTML = "<p>" +`${vidaNave}` + "</p>"
    
            if(topTiro == -20){
                tiro.remove()
            }
            
    
            if((element.style.top == tiro.style.top) &
            (element.style.left == tiro.style.left)){
                var p = document.querySelector("p");
                vidaNave = vidaNave.substring(0, vidaNave.length - 1);
                tiro.remove()    
            }
    
            if(vidaNave < 10){
                vidaNave = "❤❤❤❤❤";
                acumuladorBaixo = -80;
                element.remove();
                criarObj();
                zero = zero + 1;
                placar.innerHTML = "score: " + zero;
                
            }
        }
        setInterval(tiroSubir, 100)
    }
    setInterval(criarTiros, 500)
    
    
    };
       
     
    
}

   //reiniciar jogo
   function restart() {
    window.location.reload();
}