const key= "f89b0f3ffe9aef6737a55f8ff6b89d52"

function colocarDadosNaTela(dados){

    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Clima atual: " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade de " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade){
    //Substitui as aspas pela crase ` pois ela permite colocar uma variável dentro do texto
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    
    colocarDadosNaTela(dados)

}


function CliqueiNoBotao() {
    //querySelector serve pra procurar algo dentro do HTML (document é o apelido do HTML dentro do JS)
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}


document.addEventListener("DOMContentLoaded", function () {
    const imagens = [
      'pexels-tainamontanaro-11940511.jpg',
      'pexels-ahmetyuksek-29813737.jpg',
      'pexels-david-besh-884788.jpg',
      'pexels-philippedonn-1169754.jpg',
      'pexels-pixabay-33109.jpg',
      'pexels-stywo-1054201.jpg',
      'PEXELS 1 (1).jpg',
      'PEXELS 1 (2).jpg',
      'PEXELS 1 (3).jpg',
      'PEXELS 1 (4).jpg',
      'PEXELS 1 (5).jpg',
    ];
  
    const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
  
    const img = new Image(); // Cria um elemento de imagem
    img.src = imagemAleatoria; // Define o caminho da imagem
  
      document.body.style.backgroundImage = `url('${imagemAleatoria}')`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
  });

  
