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
    console.log(`http://newsapi.org/v2/everything?coutry=br&q=${query}&apiKey=${API_KEY}`)
    //Fazer a requisitção com a query e a api key na api news
    let xhr = new XMLHttpRequest ();
    xhr.open('GET', `http://newsapi.org/v2/everything?coutry=br&q=${query}&apiKey=${API_KEY}`);
    xhr.send();
}


