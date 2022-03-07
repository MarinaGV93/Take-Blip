// Nesta atividade, vamos criar uma página que carrega fotos aleatórias de gatinhos sempre que clicamos em um botão.

// Utilize a API https://thatcopy.pw/catapi/rest/ para fazer as chamadas com o método fetch();
// Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!~

// endereço de URL de uma API. Fazer uma requisição
const BASE_URL ='https://thatcopy.pw/catapi/rest/';

// Botão
const catBtn = document.getElementById('change-cat');

// Imagem
const catImg = document.getElementById('cat');

// Função para chamasr os gatinhos
const getCats = async () => {
    // try {
    // //Dados
    // const data = await fetch(BASE_URL); 

    // // Converter para JSON
    // const json = await data.json();

    // //Retornar Promise com a URL que está na BASE
    // return json.webpurl;

    // } catch (e) {
    //     console.log(e.message);
    // }

    // SEM O TRY...CATCH
    const data = await fetch(BASE_URL)
    .then(res=> res.json())
    .catch(e=> console.log(e))

    return data.webpurl;
};

// Carregar a imagem
const loadImg = async () => {
    // Retornar e colocar a url (webpurl) dentro da imagem
    catImg.src = await getCats();
}

// Colocar um listener no botao
catBtn.addEventListener('click', loadImg);

// Para já inicializar com uma imagem
loadImg();
