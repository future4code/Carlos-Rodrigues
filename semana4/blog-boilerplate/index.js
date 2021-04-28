const arrayConteudo = []

function criarPost() {
    const tituloPost = document.getElementById('titulo-post')
    const autorPost = document.getElementById('autor-post')
    const conteudoPost = document.getElementById('conteudo-post')
    const containerPost = document.getElementById('container-de-posts')

    if (tituloPost.value =="" || autorPost.value == "" || conteudoPost.value == "") {
        alert("Campo em branco, preencha todos os campos para enviar o post!")        
    }
    else if (tituloPost.value && autorPost.value && conteudoPost.value !== "" ) {
        const post = {
        titulo: tituloPost.value,
        autor: autorPost.value ,
        conteudo: conteudoPost.value,
        }

        console.log(post.titulo, post.autor, post.conteudo)

        arrayConteudo.push(post)

        console.log(arrayConteudo)

        
        containerPost.innerHTML += `<h3> Titulo: ${tituloPost.value} </h3>`
        containerPost.innerHTML += `<p> Autor: ${autorPost.value}<p>`
        containerPost.innerHTML += `<p> Conteúdo: ${conteudoPost.value} </p>`

        tituloPost.value = ""
        autorPost.value = ""
        conteudoPost.value = ""
    }   
    

}


