const resposta = document.querySelectorAll(".resp")
const pergunta = document.querySelector("#perguntacontent")

const perguntas =[
    "Você estuda inglês a mais de um ano?",
    "Você sente dificuldade em ler livros em inglês?",
    "Você consegue entender filmes/series em inglês?",
    "Quando você tenta se comunicar em inglês, parece que as palavras desaparecem?",
    "Você gostaria de conseguir conversar sobre qualquer assunto em inglês?",
    "Você acha que conseguir assistir/ler conteúdos em inglês lhe ajudaria no dia a dia?",
    "Sabia que existe um livro que melhora o inglês através de histórias, gostaria de dar uma olhada? "
]

let i = 0;
function load(){
    if (i < perguntas.length){
        pergunta.innerText = perguntas[i]
        i++
    }
}
load()
resposta.forEach(element =>{
    element.addEventListener("click", load)
})