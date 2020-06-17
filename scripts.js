const API_KEY = '7e3516e69af44742a0f6d05635d1c3da';

onload = () => {
    //Verificar em qual página estou carregando;
    let option = document.getElementById('id-page').textContent; 

    let query;

    //Buscar as notícias principais na news API
    switch (option) {
        case 'Tecnologia' : 
            query = 'everything?q=tecnologia';
            break;
        case 'Esporte' :
            query = 'everything?q=sport';
            break;
        case 'Politica' :
            query = 'everything?q=politic';
            break;
        case 'Musica' :
            query = 'everything?q=music';
            break;
        case 'Automobilistico' :
            query = 'everything?q=cars';
            break;
        case 'Noticias' :
            query = 'top-headlines?country=us';
            break;
    }

    let xhr = new XMLHttpRequest();
    xhr.onload = renderizaNoticiasPrincipais;
    xhr.open('GET', `http://newsapi.org/v2/${query}&apiKey=${API_KEY}`);
    xhr.send();

    document.getElementById('buttonSearch').addEventListener("click", executaPesquisa);
}



function executaPesquisa () {
    //Pegar a Query String Desejada
    let query = document.getElementById('formSearch').value;

    //Pegar o h1 da página para atualizar
    if(query != '')
    {
        document.querySelector('#page-main-body > h1').innerHTML = query;
        //Fazer a requisitção com a query e a api key na api news
        let xhr = new XMLHttpRequest();
        xhr.onload = renderizaNoticiasPrincipais;
        xhr.open('GET', `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
        xhr.send();
    }

}

function renderizaNoticiasPrincipais () {
    let textoHTML = '';
    let divNoticias = document.getElementById('section-notices');

    // Carregar 6 div noticias
    let dados = JSON.parse(this.responseText);
    for (let i = 0; i < 6; i++) {
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);

        textoHTML +=    
            `<div class="jumbotron box-notice">
            <img src="${noticia.urlToImage}" class="align-self-start mr-3 img-notice" alt="Imagem da Notícia">
                <h1 class="display-4">${noticia.title}</h1>
                <h2 class="display-5">${data.toLocaleDateString ()} - <span>${noticia.source.name} - ${noticia.author}</span></h2>
                <p class="lead">${noticia.description}</p>
                <hr class="my-4">
                    <a class="btn btn-primary btn-lg" href="${noticia.url}" target=_blank role="button">Ler mais</a>
        </div>` 
    }

    // Preencher a tela com as noticias
    divNoticias.innerHTML = textoHTML;

}



