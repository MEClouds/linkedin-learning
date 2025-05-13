// [01]
// let attraction : string="Eiffel Tower"
// console.log(attraction)
// [02]
// /**
//  * Greet a person in French
//  * @param {string} name - The name of the person
//  * @returns {string} A French greeting with person's name
//  * @example 
//  * greetInFrench("Ayman"); // Returns: "Bonjour ,Ayman"
//  * @since 1.0.0 // Function was first added in version 1.0.0
//  * @version 1.1.0 // Current version
//  * @author Ayman
//  * @copyright 2025
//  * @throws {TypeError} if name is not a string
//  * @deprecated Use greet insted
//  * @todo Add more languages
//  * 
//  */
// function greetInFrench(name :string){
//     return `Bonjour, ${name}`
// }
// greetInFrench("Ayman")
var Country = /** @class */ (function () {
    function Country(name, code) {
        this.languages = [];
        this.name = name;
        this.code = code;
    }
    Country.prototype.addLanguage = function (language) {
        this.languages.push(language);
    };
    return Country;
}());
var spain = new Country("Spain", "SP");
spain.addLanguage("Spanish");
console.log(spain);
