function cadastroprod(){
    let prod = document.querySelector('#produto')
    let user = document.querySelector('#user')
    let quant = document.querySelector('#quantidade')
    let data = document.querySelector('#data')
    const url = "http://localhost:5600/api";
    let listaProd = JSON.parse(localStorage.getItem('listaProd') || '[]')
    listaProd.push ({
        Usuário: user.value,
        Produto: prod.value,
        Quantidade: quant.value,
        Data: data.value
    })

    localStorage.setItem('listaProd', JSON.stringify(listaProd))

    }

    function listarEstoque() {
        if (typeof(Storage) !== "undefined") {
            let listaProd = localStorage.getItem("listaProd");
            document.write("<h1>Compras solicitadas:</h1>")
            if (listaProd == null)
                document.write("<h3>Ainda não há nenhum item no estoque</h3>");
            else {
                listaProd = JSON.parse(listaProd);
                listaProd.forEach(produto => {
                    document.write("<ul>");
                    document.write("<li>Usuário: "+produto.Usuário+"</li>");
                    document.write("<li>Nome do produto: "+produto.Produto+"</li>");
                    document.write("<li>Quantidade (em KG): "+produto.Quantidade+"</li>");
                    document.write("<li>Data: "+produto.Data+"</li>");
                    document.write("</ul>");
                });
            }
        } 
        else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
    }
