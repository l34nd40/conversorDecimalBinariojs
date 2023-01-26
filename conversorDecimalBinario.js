function conversorBinario(decimal) {
    if (decimal == 1) {
        return decimal;
    }
    let dividendo = decimal
    let binarioString = ''
    for (let index = decimal; index > 1;) {
        let base = 2
        let binario = dividendo % base
        binarioString += binario.toString()
        dividendo = parseInt(dividendo / base)
        if (dividendo == 1) {
            binarioString += dividendo
        }
        index = dividendo
    }
    return inverterbinario(binarioString)
}

console.log(conversorBinario(10))

console.log(conversorBinario(100))





function inverterbinario(binario) {
    let tamanho = binario.length
    let nomeInvertido = ''
    for (let index = tamanho; index >= 0; index--) {
        nomeInvertido += binario.charAt(index)}
    return nomeInvertido
}

/* outra forma de inverter é transformar em array e usar os métodos nativos
function reverseBinarioArray(binario) {
    return binario.split("").reverse().join("");
}
console.log(reverseBinarioArray("0101")); */







