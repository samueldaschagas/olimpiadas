function pesquisar() {
    // Seleciona a seção HTML com o ID 'resultados-pesquisa' onde os resultados serão exibidos.
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    if (campoPesquisa === '') {
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Itera sobre cada elemento (dado) no array 'dados'.
    for(let dado of dados) {
        const pesquisaEstaNoTitulo = dado.titulo.toLowerCase().includes(campoPesquisa);
        const pesquisaEstaNaDescricao = dado.descricao.toLowerCase().includes(campoPesquisa);
        const pesquisaEstaNasTags = dado.tags.toLowerCase().includes(campoPesquisa);

        if (pesquisaEstaNoTitulo || pesquisaEstaNaDescricao || pesquisaEstaNasTags) {
            // Constrói uma string HTML para cada resultado, formatando os dados do objeto 'dado'.
            // A string HTML cria um div com as classes 'item-resultado', um título com um link, uma descrição e outro link para mais informações.
            resultados += `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }
    }

    if (!resultados){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do altleta ou esporte.</p>";
        return;
    }

    // Atribui a string completa de resultados ao conteúdo HTML da seção selecionada.
    // Isso substitui o conteúdo anterior da seção pelos novos resultados.
    section.innerHTML = resultados;
}