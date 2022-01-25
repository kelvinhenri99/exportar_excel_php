//Função para cadastrar valores via jSON
function GravaBanda() {
    // conecta ao servidor
    var xmlhttp = new XMLHttpRequest();

    /* Abaixo, as variáveis que serão passadas para o arquivo PHP.
       seu arquivo PHP deverá capturar os dados usando $_GET[]; */
    var banda_nome = document.getElementById('banda_nome').value;
    var banda_estilo = document.getElementById('banda_estilo').value;
    var banda_ano = document.getElementById('banda_ano').value;
    var banda_descricao = document.getElementById('banda_descricao').value;

    //ATENÇÃO PARA O ENDEREÇO DO SEU ARQUIVO PHP, PRESTE MUITA ATENÇÃO...
    var url = 'http://localhost/bandas-ajax/core/gravar-banda.php?';
    
    //monto a url com os parametros.
    url += 'banda_nome=' + banda_nome + '&banda_estilo=' + banda_estilo + '&banda_ano=' + banda_ano + '&banda_descricao=' + banda_descricao;
    console.log(url); // teste, ajuda a encontrar erros na hora de programar a url.
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    alert("Gravado com sucesso no servidor");
    
    
    ConsultaBanda();
    document.getElementById('banda_nome').value = "";
    document.getElementById('banda_estilo').value = "";
    document.getElementById('banda_ano').value = "";
    document.getElementById('banda_descricao').value = "";
    document.getElementById('banda_nome').focus();    
}

//Função para consultado dados via jSON
function ConsultaBanda() {

    // conecta ao servidor
    var xmlhttp = new XMLHttpRequest();
    
    //ATENÇÃO PARA O ENDEREÇO DO SEU ARQUIVO PHP, PRESTE MUITA ATENÇÃO...
    var url = "http://localhost/bandas-ajax/core/consulta-banda.php";
    
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            ConectaServidor(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function ConectaServidor(response) {
        var dados = JSON.parse(response);
        var i;
        
        var conteudo = "<table class='table'><tr>" + 
                         "<th>Banda</th>" + 
                         "<th>Estilo</th>" + 
                         "<th>Ano</th>" + 
                       "<th>Descricao</th>" +
                       "</tr>" ;


        for (i = 0; i < dados.length; i++)
        {
            conteudo += "<tr><td>" + dados[i].banda_nome +
                "</td><td>" + dados[i].banda_estilo +
                "</td><td>" + dados[i].banda_ano +
                "</td><td>" + dados[i].banda_descricao +
                "</tr>";
        }
        conteudo += "</table>";
        console.log(conteudo);

        document.getElementById("conteudoJSON").innerHTML = conteudo;
    }

}

window.onload=ConsultaBanda();
