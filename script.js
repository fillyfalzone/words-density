//déclaration des variables

const form = document.getElementById("form");
const name = document.getElementById("projectName");
const textAera = document.getElementById("textAera");
const special_char = document.getElementById("special-char");
const articles_filter = document.getElementById("articles-filter");
const conj_coord_filter = document.getElementById("conj-coord-filter");
const conj_sub_filter = document.getElementById("conj-sub-filter");
const pronom_perso_filter = document.getElementById("pronoms-persos-filter");
const pronom_relatif_filter = document.getElementById("pronoms-relatifs-filter");
const prepostions_filter = document.getElementById("prepostions-filter");
const submit = document.getElementById("submit");
const reste = document.getElementById("reset");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = textAera.value;
    let filteredText = text.replace(/[^\w\sÀ-ÖÙ-öÙ-ÿ]/gi, " ");
    
    // Filtre tous les caractères spéciaux (avec une regex)
    // if (special_char.checked) {
    //     filteredText = filteredText.replace(/[^\w\sÀ-ÖÙ-öÙ-ÿ]/gi, " ");
    // }


    // Filtrer les éléments qui ne sont pas dans 'articles'
    let tabFiltre = tab.filter(element => !articles.includes(element));


    // transformer la chaine de caractère en tableau
    let textToArray = filteredText.split(' ');
    //supprimer les indices qui sont des espaces
    textToArray = textToArray.filter(indice => !indice.includes(" "));

// des modifications à faire pour la suite --------------------

    // Filtrer tous les articles
    if (articles_filter.checked) {
        let articles = ["le", "la", "les", "un", "une", "des"];
        let textToArray  = textToArray.filter(indice => !articles.includes(indice));
    } 

    //filtrer tous les conjonctions de coordination
    if (conj_coord_filter.checked) {
        let conj_coord = ["et", "mais", "ou", "donc", "or", "ni", "car"];
        textToArray = textToArray.filter(indice => !conj_coord.includes(indice));
    }

    //filtrer tous les pronoms personnels
    if (conj_sub_filter.checked) {
        let conj_sub = ["que", "quand", "si", "comme", "parce", "afin", "pendant"];
        textToArray = conj_sub.filter(indice => !indice.includes(" "));
    }

    //filtrer tous les conjonctions de subordination
    if (pronom_perso_filter.checked) {
        let pronoms_personnels = ["je","tu","il","elle","nous","vous","ils","elles"
        ];
        textToArray = pronoms_personnels.filter(indice => !indice.includes(" "));
    }

    //filtrer tous les conjonctions de subordination
    if (pronom_relatif_filter.checked) {
        let pronoms_relatifs = ["qui", "que", "dont", "lequel", "laquelle", "lesquels", "lesquelles"];
        textToArray = pronoms_relatifs.filter(indice => !indice.includes(" "));
    }

    //filtrer tous les conjonctions de subordination
    if (prepostions_filter.checked) {
        let prepositions = [
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

        //On va nettoyer le tableau de préposition avec la fonction perso

        let prepositionsClear = clearTable(prepositions);
            
        textToArray = prepositionsClear.filter(indice => !indice.includes(" "));
        textToArray = textToArray.filter(indice => !indice.includes(''));
    }

    console.log(textToArray);
});




     
// On va créer une fonction pour nettoyer le tableau de prépostions
function clearTable (table) {
    //convertir le tableau en string
    let tableToString = table.join(' ');
    
    //supprimer tout les tirets et apostrophes 
    let clear = tableToString.replace(/[-']/g, ' ');

    //diviser la chaine de caractère en mots au niveau des espaces
    let words = clear.split(' ');

    //on va supprimer tout les doublons en utilisant un Set
    let uniqueWords = new Set(words);

    //on converti en un tableau et on join 
    let newTable = Array.from(uniqueWords);

    return newTable;
}  
