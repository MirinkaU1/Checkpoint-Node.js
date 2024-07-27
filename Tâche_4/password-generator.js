var generator = require('generate-password');

function passwordGenerator() {
    var password = generator.generate({
        length: 12, // Longueur du mot de passe
        numbers: true, // Inclure des chiffres
        symbols: true, // Inclure des symboles
        excludeSimilarCharacters: true // Exclure des caractères similaires (comme 'i' et 'l')
    });
    console.log("Le mot de passe généré est : " + password);
}
passwordGenerator();