function buscar() {
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    var dados = document.getElementById('dados').value;
    console.log("Procurando userID: " + dados);

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();

    xhr.onreadystatechange = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var resposta = xhr.response;
            console.log(resposta);

            var saida = document.getElementById('saida');
            var gravar = "<table><tr><th>userID</th><th>ID</th><th>Título</th><th>Mensagem</th>";

            for (Object of resposta) {
                if (dados == Object.userId) {
                    gravar = gravar + "<tr><td>" + Object.userId + "</td><td>" + Object.id + "</td><td>" + Object.title + "</td><td>" + Object.body + "</td><tr>";
                }
            }
            gravar = gravar + "</table>";
            saida.innerHTML = gravar;
        }
    }
}