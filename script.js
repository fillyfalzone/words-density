
//déclaration des variables

const form = document.getElementById("form");
const name = document.getElementById("projectName");
const textAera = document.getElementById("textAera");
const special_char = document.getElementById("special-char");
const articles = document.getElementById("articles");
const conjonctions = document.getElementById("conjonctions");
const pronoms = document.getElementById("pronoms");
const prepostions = document.getElementById("prepostions");
const motsSup = document.getElementById("motsSup");

const submit = document.getElementById("submit");
const reste = document.getElementById("reset");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let text = textAera.value;
    //On converti tout le texte en lowercase
    text = text.toLowerCase();
    //On filtre tous les caractères spéciaux
    let filteredText = text.replace(/[^\w\sÀ-ÖÙ-öÙ-ÿ]/gi, " ");
    
    // Filtre tous les caractères spéciaux (avec une regex)
    // if (special_char.checked) {
    //     filteredText = filteredText.replace(/[^\w\sÀ-ÖÙ-öÙ-ÿ]/gi, " ");
    // }


    // Filtrer les éléments qui ne sont pas dans 'articles'
    // let tabFiltre = tab.filter(element => !articles.includes(element));


    // transformer la chaine de caractère en tableau
    let textToArray = filteredText.split(' ');
    //supprimer les indices qui sont des espaces
    textToArray = textToArray.filter(indice => !indice.includes(" "));

// des modifications à faire pour la suite --------------------

    // Filtrer tous les articles
    if (articles.checked) {
        let articles = ["le","la","les","un","une","des","du","de","d","l","au","aux","à"];
        textToArray  = textToArray.filter(indice => !articles.includes(indice)); 
    } 

    //filtrer tous les conjonctions de coordination et subordination
    if (conjonctions.checked) {
        let conj_coord = ["et", "mais", "ou", "donc", "or", "ni", "car"];
        let conj_sub = ["que", "quand", "si", "comme", "parce", "afin", "pendant"];
        //On concataine les deux tableaux
        let arrayConjonctions = conj_coord.concat(conj_sub);
        //On filtre toutes les conjonctions du texte
        textToArray = textToArray.filter(indice => !arrayConjonctions.includes(indice));
        }

    //filtrer tous les pronoms
    if (pronoms.checked) {
        
        let pronomsDemonstratif = ["ce", "ceci", "cela", "celui", "celui-ci", "celui-là", "celle", "celle-ci", "celle-là", "celles", "celles-ci", "celles-là", "ceux", "ceux-ci", "ceux-là", "chacun", "chacune", "chaque"];

        let pronomsIndefini = ["un", "une", "des", "du", "la", "le", "les", "l'", "un", "une", "des", "du", "la", "le", "les", "l'"];

        let pronomsPersonnel = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"];

        let pronomsPossessif = ["mon", "ton", "son", "notre", "votre", "leur", "ma", "ta", "sa", "notre", "votre", "leur", "mes", "tes", "ses", "notre", "votre", "leur", "mon", "ton", "son", "notre", "votre", "leur", "ma", "ta", "sa", "notre", "votre", "leur", "mes", "tes", "ses", "notre", "votre", "leur"];

        let pronomsReflexif = ["me", "te", "se", "nous", "vous", "se", "nous", "vous", "se", "me", "te", "se", "nous", "vous", "se", "me", "te", "se", "nous", "vous", "se"];

        let pronomsInterrogatif = ["qui", "quoi", "où", "quand", "comment", "pourquoi", "quel", "quelle", "quels", "quelles", "quelque", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quelque chose", "quel"];

        // On concataine tous les tableaux des pronoms
        let arrayPronoms = pronomsDemonstratif.concat(pronomsIndefini).concat(pronomsPersonnel).concat(pronomsPossessif).concat(pronomsReflexif).concat(pronomsInterrogatif);

        //On filtre tous les pronoms du texte
        textToArray = textToArray.filter(indice => !arrayPronoms.includes(indice));
    }

    //filtrer tous les prépositions
    if (prepostions) {
        let arrayPrepositions = [
            "à","de","en","avec","pour","sur","sous","dans","contre","vers","hors","après","avant","pendant","sans","jusqu'à","au-delà","derrière","devant","entre","au milieu","autour","à côté","loin de","près de","à l'intérieur","à l'extérieur","au-dessus","au-dessous","au-dessus de","au-dessous de","à gauche","à droite","en haut","en bas","au centre","à l'arrière","à l'avant","à l'intérieur","à l'extérieur","au-dessus","au-dessous","au-dessus de","au-dessous de","à gauche","à droite","en haut","en bas","au centre","à l'arrière","à l'avant","à l'intérieur","à l'extérieur","au-dessus","au-dessous","au-dessus de","au-dessous de","à gauche","à droite","en haut","en bas","au centre","à l'arrière","à l'avant","à l'intérieur","à l'extérieur","au-dessus","au-dessous","au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche",
            "à droite",
            "en haut",
            "en bas",
            "au centre",
            "à l'arrière",
            "à l'avant",
            "à l'intérieur",
            "à l'extérieur",
            "au-dessus",
            "au-dessous",
            "au-dessus de",
            "au-dessous de",
            "à gauche"];

        //On va nettoyer le tableau de préposition avec la fonction perso clearTable
        let arrayPrepositionsClear = clearTable(arrayPrepositions);
        // On filtre tous les prépostion du text
        textToArray = textToArray.filter(indice => !arrayPrepositionsClear.includes(indice));
    }

    //On va filter les mots supplémentaire ajoutés manuellement
    if (motsSup !== null) {
        // On mettre les mots sup dans un tableau
        let arrayMotsSup = motsSup.value.split(' ');

        textToArray = textToArray.filter(indice => !arrayMotsSup.includes(indice));
    }

     // On nettoye le tableau final
     textToArray = clearTable(textToArray);

    console.log(textToArray);
});




     
// On va créer une fonction pour nettoyer le tableau de prépostions
function clearTable (table) {
    //convertir le tableau en string
    let tableToString = table.join(' ');
    
    //supprimer tout les tirets et apostrophes 
    let clear = tableToString.replace(/[-']/g, ' ');

    //diviser la chaine de caractère en mots au niveau des espaces et convertir en tableau
    let words = clear.split(' ');

    //on va supprimer tout les doublons en utilisant un Set
    let uniqueWords = new Set(words);

    //on converti en un tableau et on join 
    let newTable = Array.from(uniqueWords);

    let deleteEmptyIndex = newTable.filter(indice => indice.trim() !== '');

    return deleteEmptyIndex;
}  
