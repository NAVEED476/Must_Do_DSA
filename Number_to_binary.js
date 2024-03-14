// function convert_to_binary(number){
//     let binary = (number%2).toString();
//     for(;number>1;){
//         num = parseInt(number/2);
//         binary = (number%2)+binary;
//     }
//     console.log(binary)
// }


// convert_to_binary(3)




function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary( parseInt(number / 2) ) + (number % 2)
    };
    return '';
}
console.log(convertToBinary(10))

console.log((5).toString(2))
