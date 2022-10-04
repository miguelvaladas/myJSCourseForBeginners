/**
 * Resumo geral da matéria.
 * Temas:
 * i. Variáveis
 * ii. Strings
 * iii. Arrays
 * iv. Iteradores
 * v. Loops
 * vi. Funções
 * vii. Objetos
 */

// -------------------------------------------------------------------------------------
// i. Variáveis
// Uma variável é uma abstração de um endereço de memória onde eu quero guardar informação. Serve para reutilizarmos informação. 
// NOTA: Uma variável só pode armazenar um valor.

// É o mesmo que(ex): 0x000032 010000000 0000010100 0010101000 010011100110
let variavel = ["stirnmg"];

        /**
        * JS Types:
        * a. Numbers
        * b. Strings
        * c. Booleans
        * d. Null (a variável é inicializada com nada. Ex: "var here = null;")
        * e. Undefined (a variável não é sequer inicializada. Ex: "var here;")
        */

//------------------------------------------------------------------------------------

// ii. Strings
// É uma frase.

let string = "Hello, boyfriend!";

    /**
     * Métodos das Strings:
     * i. .split()      - Transforma uma string num array
     * ii. .length      - Retorna o comprimento de uma string
     * iii. .slice()    - Retorna os caracteres que queremos numa string
     * iv. .toUpperCase()/toLowerCase() 
     */

    // Como aceder a elementos de uma string através de um índice 
    console.log("Strings: Exemplo a.")
    console.log(string[1]);

    // Como aceder ao último elemento de uma string através de um índice
    console.log("Strings: Exemplo b.");

    let lastElement = string[string.length -1];
    console.log(lastElement);

    // Exemplo de slice

    console.log(string.slice(2)); // llo, boyfriend!

    // Exemplo de split

    console.log("Exemplo 1.");
    console.log(string.split("")); // ['H', 'e', 'l', 'l', 'o',',', ' ', 'b', 'o', 'y','f', 'r', 'i', 'e', 'n','d', '!']

    console.log("Exemplo 2.");
    console.log(string.split(" ")); // [ 'Hello,', 'boyfriend!' ]

    console.log("Exemplo 3.")
    console.log(string.split(",")); // [ 'Hello', ' boyfriend!' ]

    console.log("Exemplo 4.")
    console.log(string.split(";")); // [ 'Hello, boyfriend!' ]

    console.log("Exemplo 5.")
    console.log(string.split()); // [ 'Hello, boyfriend!' ]


//------------------------------------------------------------------------------------

// iii. Array
// Um array é um container/estrutura de dados (data structure). Serve para armazenar info.

    /**
     * Métodos dos Arrays:
     * i. .push()      - Adiciona um ou mais elementos no final do array
     * ii. .pop()      - Elimina um elemento no final do array
     * iii. .unshift() - Adiciona um ou mais elementos ao início do array
     * iv. .shift()    - Elimina o primeiro elemento de um array
     */

    // NOTA: Como ler os métodos dos arrays - para onde? e o quê?

    // Exemplos de push e unshift

let example = [];
example.push(string); // Parte esquerda do push: para onde? (no caso, example); Parte direita do push: o quê? (no caso, string)
example.push("O Miró é gay");
example.unshift(69);
console.log(example);

//------------------------------------------------------------------------------------

// iv. Iteradores
// São métodos que permitem iterar arrays.

 /**
     * Métodos dos Arrays:
     * i. .map()        - itera cada elemento de um array e retorna um novo array (tipo forEach, mas retorna um novo array). IMPORTANTE: iterador default!
     * ii. .filter()    - itera cada elemento de um array e retorna um array com os elementos filtrados. IMPORTANTE: sempre que for necessário remover um elemento de um array, usa-se um filter!
     * iii. .splice()   - permite adicionar ou remover elementos de um array a partir de um determinado índice
     * iv. .forEach()   - itera cada elemento de um array, mas não retorna nada
     */


    // Exemplo de splice

    let months = ["January", "March", "April", "May", "June", "July", "August"];

    console.log("Exemplo 1. splice()");
    months.splice(1, 0, "February"); // altera o array original e adiciona elementos no meio de um array
    console.log(months)

    console.log("Exemplo 2. splice()");
    months.splice(months.length -1, 1, "December");
    console.log(months);

    // Exemplo de map

    console.log("Exemplo 1. map()");
    months = months.map(month => month += 1);
    console.log(months);

    console.log("Exemplo 2. map()");
    let counter = 0;
    let cities = ["Lisbon", "London", "Rome"];

    let bestCitiesRanking = cities.map(city => {     // Desta forma podemos usar maps em vez de loops com funções lá dentro
        counter ++;
        return city + " - " + counter;
    })

    console.log(bestCitiesRanking);

    /*
    RESOLUÇÃO COM UM LOOP 

    let result = [];
    for(let i = 0; i < cities.length; i++){
        counter ++;
        result.push(cities[i] + " - " + counter);
    }
    console.log(result);
    */

    // Exemplo de Filter

    console.log("Exemplo filter()");
    let girls = ["Sofia", "Inês", "Vanessa", "Diana"];
    girls = girls.filter(girl => girl !== "Vanessa");  // Ex. Para retirar a "Vanessa"
    console.log(girls);

    // RESOLUÇÃO COM UM MAP
    let results2 = [];
    girls.map(girl => {    // Ex. Exercício anterior com o map(). O map() não remove elementos do array original, pelo que teríamos que pushar os elementos para um novo array!
        if(girl !== "Diana"){
            return results2.push(girl); // Sem isto, dava undefined
        }
    });
    console.log(results2)

//------------------------------------------------------------------------------------

// v. Loops

// While Loop 
// Repete um bloco de código até uma condição se verificar (que eu não sei quando será) - imprevisível.

    // Exemplo de While Loop

    console.log("Exemplo 1. While Loop");
    let counter2 = 1;
    while(counter2 <= 5){
    console.log(counter2);
     counter2++;
    };

    console.log("Exemplo 2. While Loop");
    let randomNumber = Math.floor(Math.random() * 11);

    console.log("random number: " + randomNumber);
    while(randomNumber !== 7){
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * 11);
    }

    console.log("Final random number is: " + randomNumber);

// For Loop
// Repete um bloco de código até uma condição se verificar (que eu sei exatamente quando) - previsível.

    // Exemplo de For Loop

    console.log("Exemplo 1. For Loop");
    let boys = ["Miguel", "David", "Tomás", "Diogo"];
    let result = [];
    for(let i = 0; i < boys.length; i++){ // Vou começar um loop em que o índice começa no 0 e corre até o índice ser menor que o comprimento do array boys. 
                                        // No final de cada iteração (depois de correr o bloco de código), eu quero que o valor do índice seja incrementado em 1.
        if(boys[i] === "Tomás" || boys[i] === "Diogo"){
            result.push(boys[i]);
        }
    }
    console.log(result);

    console.log("Exemplo 2. For Loop"); // loop invertido
    for(let i = result.length -1; i >= 0; i--){
        result.pop();
    }
    console.log(result);

    // Outra forma de resolver: com loop normal
    
    for(let i = 0; i < result.length; i++){
        result.pop();
    }

    console.log("Exemplo 3. For Loop"); // loop aos pares (i += 2)
    let coolKids = ["Sofia", "Miguel", "Filipe", "Clairo", "Dua Lipa", "Sebastian Vettel"];
    for(let i = 0; i < coolKids.length; i += 2){ 
        result.push(coolKids[i]);
    }
    console.log(result);
    
// Nested Loop
// Um loop dentro de um loop.

    // Exemplo de Nested Loop

    console.log("Exemplo 4. Nested Loop");
    let ages = [[18, 6, 4], [32, 28, 24, 36], [61, 45, 16, 7, 53]];
    

    // Criar função em que passo array de arrays e retorna um novo array com o n.º máximo de cada um dos sub-arrays

    function getMaxNumber(banana){ // não estou a guardar a função numa variável (não é o mesmo que: let getMaxNumber = function(){}); a função é uma função
        let result = [];
        let reference;
        for(let i = 0; i < banana.length; i++){
            console.log("i: " + banana[i]);
            for(let j = 0; j < banana[i].length; j++){
                console.log("j: " + banana[i][j]);
                if(reference === undefined){ // o mesmo que !reference
                    reference = banana[i][j];
                }
                if(reference < banana[i][j]){
                    reference = banana[i][j];
                }
                if(banana[i][j] === banana[i][banana[i].length -1]){  // estamos a atribuir o índice j, só que como queremos o último, fazêmo-lo com o comprimento do sub-array -1
                    result.push(reference);
                    reference = undefined;
                }
            }
        }
    return result;
    }

    console.log(getMaxNumber(ages));

    // RESOLUÇÃO COM MAP

    function getMaxNumberWithMap(array){
        let result = [];
        let reference;
        array.map(subArray => {
            subArray.map(number => {
                if(reference === undefined){
                    reference = number;
                }
                if(reference < number){
                    reference = number;
                }
                if(number === subArray[subArray.length -1]){
                    result.push(reference);
                    reference = undefined;
                }
            })
        })
        return result;
    }
    console.log(getMaxNumberWithMap(ages));

//------------------------------------------------------------------------------------

// vi. Funções
// Um bloco de código que executa uma tarefa. São modulares = reutilizáveis.
// Return = pára a execução da função e retorna um valor (se especificado) para quem invocou a função.

    //1. eu quero criar uma função que para 2 inputs multiplica o input 1 com o input 2
    console.log("Exemplo 1. functions");

    function addInputs(input1, input2){
        return input1 + input2;
    }


    function multiplyInputs(input1, input2){
        return input1 * input2;
    }

    console.log(multiplyInputs(4, 2));
    console.log(multiplyInputs(3, 6));
    console.log(multiplyInputs(addInputs(2, 4), addInputs(6, 8))); // em JS podemos invocar funções como argumento de outras funções.


    //2. eu quero uma função que recebe um array e um valor. Retorna o array sem esse valor
    console.log("Exemplo 2. functions");
    function removeElement(array, element){
        return array.filter(name => name !== element);

    }

    // RESOLUÇÃO COM LOOP
    console.log("Exemplo 3. functions");
    function removeElement2(array, element){
        let result = [];
        for(let i = 0; i < array.length; i++){
            if(array[i] !== element){
                result.push(array[i]);
            }
        }
        return result;
    }


    let dogBreeds =  ["Golden Retriever", "Labrador", "Pitbull"];
    let newDogBreedsArray = removeElement2(dogBreeds, "Labrador");

    let prostitutes = ["Lurdes", "Lucinda", "Marília"];
    prostitutes = removeElement2(prostitutes, "Lucinda");

    console.log(newDogBreedsArray);
    console.log(prostitutes);

    //3. Para um array e um elemento, eu quero que me retornes o índice desse elemento no array
    console.log("Exercício 3. functions");
    let summer = ["sun", "beach", "sea", "salt"];
   
    function getIndex(array, element){
        for(let i = 0; i < array.length; i++){
            if(array[i] === element){
                return i;
            }
        }
    }

    console.log(getIndex(summer, "sea"));
    

    //4. Para uma string, eu quero que me retornes a string ao contrário
    console.log("Exercício 4. functions");
    let bestStringEver = "Tenho de treinar o meu problem solving!";
    
    function reverseString(string){
        let result = [];
        let array = string.split("");
        for(let i = array.length -1; i >= 0; i--){
            result.push(array[i]);
        }
        return result.join("");
    }

    function reverseString2(string){
        return string.split("").reverse().join("");

    }

    console.log(reverseString(bestStringEver));
    console.log(reverseString2(bestStringEver));

    //5. Um Palíndrome é uma palavra que se escreve da mesma forma de trás para a frente e de frente para trás. Ex. "ana" é um palíndrome (true), "ama" tb, mas "joana" já não. 
    //Escreve uma função que verifica se uma String é um palíndrome ou não.
    console.log("Exercício 5. functions");
    function isAPalindrome(string){
        let reference = string;
        let reversedString = string.split("").reverse().join("");
        if(reversedString === reference){
            return true;
        }
        return false;
    }

    console.log(isAPalindrome("ana"));
    console.log(isAPalindrome("mateus"));
    console.log(isAPalindrome("arara"));

    
    //6. Para um mesmo array, escreve uma função que retorne esse array duplicado. Ex. [1,2,3] passa para [1,2,3,1,2,3].
    console.log("Exercício 6. functions");
    let banana1 = [1, 2, 3];

    function duplicateArray(array){
        let result = [];
        for(let i = 0; i < array.length; i++){
            result.push(array[i]);
        }
        for(let i = 0; i < array.length; i++){
            result.push(array[i]);
        }
        return result;
    }


    function duplicateArray2(array){    // forma moderna de se resolver o problema
        return[...array,...array];
    }

    console.log(duplicateArray(banana1));
    console.log(duplicateArray2(banana1));



    // 7. Para dois arrays, escreve uma função que concatene esses dois arrays num mesmo. Ex. Array1 = [1,2,3], Array2 = [4,5,6]. Output: [1,2,3,4,5,6]
    console.log("Exercício 7. functions");
    let banana2 = [4, 5, 6];

    function concatenateArray(array1, array2){
        return[...array1,...array2];    // forma moderna de se resolver o problema
    }

    function concatenateArray2(array1, array2){
        let result = [];
        for(let i = 0; i < array1.length; i++){
            result.push(array1[i]);
        }
        for(let i = 0; i < array2.length; i++){
            result.push(array2[i]);
        }
        return result;
    }

    console.log(concatenateArray(banana1, banana2));
    console.log(concatenateArray2(banana1, banana2));

    console.log(concatenateArray(["Miró", "Pilas"], ["É Muito Gay", "É pois..."]));


    //8. Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]".
    // Input 1: address = "1.1.1.1"
    // Output 1: "1[.]1[.]1[.]1"
    // Input 2: address = "255.100.50.0"
    // Output 2: "255[.]100[.]50[.]0"
    console.log("Exercício 8. functions");
    const IP_ADDRESS_1 = "1.1.1.1";
    const IP_ADDRESS_2 = "255.100.50.0";

    function defangIpAddress(ip){
        let array = ip.split("");
        for(let i = 0; i < array.length; i++){
            if(array[i] === "."){
                array[i] = "[.]";
            }
        }
        return array.join("");
    }

    console.log(defangIpAddress(IP_ADDRESS_1));
    console.log(defangIpAddress(IP_ADDRESS_2));

    // RESOLUÇÃO COM MÉTODO DE STRING ReplaceAll()

    function defangIpAddress2(ip){
        return ip.replaceAll(".", "[.]");
        
    }

    console.log(defangIpAddress2(IP_ADDRESS_1));
    console.log(defangIpAddress2(IP_ADDRESS_2));

    //9. Para um array de arrays, eu quero que me retornes um objecto em que a key é o primeiro elemento do sub-array e o value é o segunto elemento do sub-array. 
    //Ex. [ [1,"joana"], [2,"mauro"] ] retorna {1:"joana", 2:"mauro"}.
    console.log("Exercício 9. Objects")
    let usersList = [[1, "Joana"], [2, "Mauro"], [3, "Rodrigo"], [4, "Helena"]];

    function arrayToObject(array){
        let result = {};
        array.map(subArray => {
            result[subArray[0]] = subArray[1];
        })
        return result;
    }

    console.log(arrayToObject(usersList));

    //10. Por cada par de elementos num array, devolve-me um objecto em que a key é o primeiro elemento do par e o value é o segundo elemento do par. 
    //Ex. ["joão", "ratão", "carochinha", "irá casar", "quem é", "o pai da criança"]
    //Output: {"joão": "ratão", "carochinha": "irá casar", "quem é": "o pai da criança"} 
    console.log("Exercício 10. Objects")
    let bestArrayEver = ["joão", "ratão", "carochinha", "irá casar", "quem é", "o pai da criança"];

    function arrayToObject1(array){
        let result = {};
        for(let i = 0; i < array.length; i += 2){
            result[array[i]] = array[i + 1];
        }
        return result;
    }

    console.log(arrayToObject1(bestArrayEver));

//------------------------------------------------------------------------------------

// vii. Objetos
// São containers/estruturas de dados que armazenam valores chamados propriedades e funções chamadas métodos. 
// Miguel: Estruturas que nos permitem representar coisas (ex: um objecto "Dog" ou "Person").

const CALCULATOR = {
    name: "Canon",
    price: 10
};

// Podemos criar um objecto de forma dinâmica, passando um obj vazio. Ex. const CALCULATOR = {}; e depois adicionamos as propriedades.

CALCULATOR.age = 28;
CALCULATOR.price = 25;
CALCULATOR.name = "Ferrari";
CALCULATOR.clients = ["Miguel", "Sofia", {otherClients: ["Lurdes", "Joana"], ages: [28, 32]}];

CALCULATOR.add = function(input1, input2){
    return input1 + input2;
}

CALCULATOR.subtract = function(input1, input2){
    return input1 - input2;
}

CALCULATOR.multiply = function(input1, input2){
    return input1 * input2;
}

/*
CALCULATOR.divide = function(input1, input2){
    return input1 / input2;
} 
*/

function myDivide(a, b){
    return a / b;
}

CALCULATOR.divide = myDivide;  // aqui usamos myDivide e não myDivide() porque queremos guardar a função e não o resultado de invocarmos a função.

 
console.log("My Object:")
console.log(CALCULATOR);
console.log("Calculator price: " + CALCULATOR.price);
console.log(CALCULATOR.add(7, 8));
console.log(CALCULATOR.divide(10, 2));
console.log(CALCULATOR.clients[2].otherClients);

    /**
     * Métodos dos Objectos:
     * i. Object.entries(<obj_name>)        - Retorna um array com todos os key, value pairs do Objecto.
     * ii. Object.keys(<obj_name>)          - Retorna um array com todas as keys do Objecto.
     * iii. Object.values(<obj_name>)       - Retorna um array com todos os values do Objecto.
     */

    //Exemplo de Object.entries()
    console.log("Exemplo de Object.entries()");
    let calculatorArray = Object.entries(CALCULATOR);
    console.log(calculatorArray);

    //Exemplo de Object.keys()
    
    console.log("Exemplo de Object.keys()");
    let calculatorArray2 = Object.keys(CALCULATOR);
    console.log(calculatorArray2);

    // Exemplo de Object.values()
    console.log("Exemplo de Object.values()");
    let calculatorArray3 = Object.values(CALCULATOR);
    console.log(calculatorArray3);


    // Exemplo de como iterar um objeto

    for(let [key, value] of Object.entries(CALCULATOR)){
      //  console.log("key: " + key);
     //   console.log("value: " + value);
    }
