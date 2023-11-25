

    let tipoNumero =7.6768766
    let tipecadenaDeTexto = 'hola mundo'
    let tipoBooleano = false
    let tipoUndefinido =undefined
    let tipoNulo = null


let tipoLista = [
    7,
    60,
    54,
    3,
    0,
    23,
    "hola",
    "acomos",
    undefined
]
let tipoObjeto ={
     0:7,
     1:60,
     100:1915,
     name:"mohamed",
     password:"1234",
     address:{
        city:"valencia",
        country:"venezuela"

     }
}





// una fucion
// recibe dos parametros
// retorne el resuta de ala division primer parametro entre el segundo parametro




let contenedor = document.querySelector("#track-list")

axios.get("https://leonardoapi.onrender.com/music")
//Gallback
.then( 
(response) => {
    console.log(response.data)
    console.log("se cumplio la promesa")

    let canciones = response.data

    console.log(canciones)
    
    canciones.map( (cancion) => {
        let component = document.createElement("li")
        component.classList.add("caciones")
        component.innerHTML = `
        <img src="${cancion.path.front}"width="120" height="120" alt="representacion visual de la portada album de MH">
        <li class="text">shirt</li>
        <li >MH </li>
        `

        component.addEventListener("click", () => {
            document.querySelector("#current-song-audio").setAttribute("src",cancion.path.audio)
        })
        contenedor.appendChild(component)
    })
})
console.log("Fin del programa")