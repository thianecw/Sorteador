function generatenumber(){

const min = Math.ceil(document.querySelector(".input-min").value)
const max = Math.floor(document.querySelector(".input-max").value)

if( min >= max ) {
    alert("O valor mínimo tem que ser MENOR que o valor máximo")
} else {
    const result = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    
alert(result)

}
}
