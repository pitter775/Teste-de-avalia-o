
var pg = 1;

function openGet(url){
    let request = new XMLHttpRequest()
        request.open("GET", url, false)
        request.send()
    return request.responseText
}

function novaLinha(lista){

    let linhadiv = document.createElement("div");
        linhadiv.classList.add('row','linha');

    let linha_img = document.createElement('div');
        linha_img.style.cssText = 'background: url("'+lista.featured_media_url+'")center center no-repeat; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;';
        linha_img.classList.add('col-md-5', 'imglista');

    let linha_categoria = document.createElement('p');
        linha_categoria.classList.add('categoria');
        linha_categoria.innerHTML = lista.categories_data[0]['name'];

    let linha_texto = document.createElement('p');
        linha_texto.classList.add('texto');
        linha_texto.innerHTML = lista.title['rendered'];

    let linha_time = document.createElement('p');
        linha_time.classList.add('datetime');
        linha_time.innerHTML = '<i class="icofont-clock-time"></i> '+lista.date;

    let linha_conteudo = document.createElement('div');
        linha_conteudo.classList.add('col-md-7');

    linhadiv.appendChild(linha_img);
    linha_conteudo.appendChild(linha_categoria);
    linha_conteudo.appendChild(linha_texto);
    linha_conteudo.appendChild(linha_time);
    linhadiv.appendChild(linha_conteudo);

    return linhadiv;
}

function main(pg){
    let dados = openGet('https://veja.abril.com.br/wp-json/wp/v2/posts?page='+pg+'&per_page=10')
    let lista = JSON.parse(dados);
    console.log(lista);
    let tabela = document.getElementById('lista');
    lista.forEach(element=>{
        let linha = novaLinha(element);
        tabela.appendChild(linha);
    });    
}

function carregarMais(){
    pg = pg + 1;
    main(pg);
}

main(pg);