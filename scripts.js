const API_KEY = '7e3516e69af44742a0f6d05635d1c3da';

onload = () => {
    document.getElementById('tecnologia').addEventListener('click', executaPesquisa);
    document.getElementById('esporte').addEventListener('click', executaPesquisa);
    document.getElementById('politica').addEventListener('click', executaPesquisa);
    document.getElementById('musica').addEventListener('click', executaPesquisa);
    document.getElementById('automobilistico').addEventListener('click', executaPesquisa);

}

const executaPesquisa = () => {
    //Pegar a Query String Desejada
    let query = event.target.value;
    //Fazer a requisitção com a query e a api key na api news
    var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=7e3516e69af44742a0f6d05635d1c3da';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response.json());
        })
}


