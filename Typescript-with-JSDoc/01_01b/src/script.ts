
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


// /**
//  * Represnts a countery with its name , countery code , and spoken languages
//  * 
//  * ## **`usage Example`**
//  * ```js
//  * const spain = new Country("Spain","SP")
//  * spain.addLanguage("Spanish")
//  * console.log(spain)
//  * ```
//  * @class
//  */

// class Country {
//     /**
//      * The full name of the country
//      * @readonly
//      * @type {string}
//      */ 
//     readonly name : string;
//      /**
//      * The ISO code for country
//      * @readonly
//      * @type {string}
//      */ 
//     readonly code : string;
//      /**
//      * An array of languages spoken
//      * @type {string[]}
//      * @default []
//      */ 
//     languages:string[]=[]

//     /**
//      * Create a new Country instance
//      * @param {string} name - The full name of the country
//      * @param {string} code - the ISO country code (e.g. "SP" for Spain)
//      * @example
//      * const spain = new Country("Spain","SP")
//      */
//     constructor(name:string,code:string){
//         this.name= name
//         this.code=code

//     }

//     /**
//      * Add a spoken language
//      * @param {string} language - the name of the language to add
//      * @returns {void}
//      * @example
//      * spain.addLanguage("Spanish")
//      *  
//      */

//     addLanguage(language:string){
//         this.languages.push(language)
//     }
// }

// const spain = new Country("Spain","SP")
// spain.addLanguage("Spanish")

// console.log(spain)



/**
 * Reprresents a country with its name and languages 
 * @template LanguagesType - The type for storing language data = can be a string or an array of strings
 * @typedef {object} Country
 * @property {string} name - The full name of the country 
 * @property {LanguagesType} languages - languages spoken in the country. can be either string or an array of strings
 * 
 */

type Country<LanguagesType>={
    name : string 
    languages: LanguagesType;
}

const spainLanguages:Country<string[]>={
name : "spain",
languages:[
    "Spainsh"
,"Catalan","Basque"]
}