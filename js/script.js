function tocarSom(caminho, imagem) {
    let som = document.getElementById("som");
    let img = document.getElementById("imagemSom");

    som.src = caminho;
    som.load();
    som.play();

    img.src = imagem;
    img.style.display = "block";
}
