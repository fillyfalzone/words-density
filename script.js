//déclaration des variables

const form = document.getElementById("form");
const name = document.getElementById("projectName");
const textAera = document.getElementById("textAera");
const specialChar = document.getElementById("specialChar");
const articles_filter = document.getElementById("articles-filter");
const conj_coord_filter = document.getElementById("conj-coord-filter");
const conj_sub_filter = document.getElementById("conj-sub-filter");
// const pronom_perso_filter = document.getElementById("pronom-perso-filter");
// const pronom_relatif_filter = document.getElementById("pronom-relatif-filter");
// const prepostion_filter = document.getElementById("prepostion-filter");
const submit = document.getElementById("submit");
const reste = document.getElementById("reset");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = textAera.value;
    let filteredText = text;
    
    // Filtre tous les caractères spéciaux (avec une regex)
    if (specialChar.checked) {
        filteredText = filteredText.replace(/[^\w\s]/gi, "");
    }
    
    // Filtrer tous les articles
    if (articles_filter.checked) {
        const articles = ["le", "la", "les", "un", "une", "des"];
        if (specialChar.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${articles.join('|')})\\b`, 'gi'), "");
        } else {
            filteredText = text.replace(new RegExp(`\\b(?:${articles.join('|')})\\b`, 'gi'), "");
        }
    }

    //filtrer tous les conjonctions de coordination
    if (conj_coord_filter.checked) {
        const conj_coord = ["et", "mais", "ou", "donc", "or", "ni", "car"];
        
        if (articles_filter.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${conj_coord.join('|')})\\b`, 'gi'), "");
        } else if (specialChar.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${conj_coord.join('|')})\\b`, 'gi'), "");
        } else {
            filteredText = text.replace(new RegExp(`\\b(?:${conj_coord.join('|')})\\b`, 'gi'), "");
        }
    }

    //filtrer tous les conjonctions de subordination
    if (conj_sub_filter.checked) {
        const conj_sub = ["que", "quand", "si", "comme", "parce", "afin", "pendant"];

        if (conj_coord_filter.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${conj_sub.join('|')})\\b`, 'gi'), "");
        } else if (articles_filter.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${conj_sub.join('|')})\\b`, 'gi'), "");
        } else if (specialChar.checked) {
            filteredText = filteredText.replace(new RegExp(`\\b(?:${conj_sub.join('|')})\\b`, 'gi'), "");
        } else {
            filteredText = text.replace(new RegExp(`\\b(?:${conj_sub.join('|')})\\b`, 'gi'), "");

        }
    }
    
    console.log(filteredText);
});





    // //filtrer toute les conjoctions de coordination
    // if(conj_coord_filter.value){
    //     const conj_coord = ["et", "mais", "ou", "donc", "or", "ni", "car"];

    //     if(text_articles_filter) {
    //         const text_conj_coord_filter = text_articles_filter.replace(/\b(?:${conj_coord.join('|')})\b/gi, "")
    //     }
    // }


    //mettre tout le contenue de la textAera dans un tableau




// const texte = "Je suis celui qui marche vers l'inconnu.";
// const pronomsPersonnels = ["je", "tu", "il/elle/on", "nous", "vous", "ils/elles"];
// const pronomsRelatifs = ["qui", "que", "quoi", "dont", "où"];

// const texteFiltre = texte.replace(new RegExp(`\\b(?:${pronomsPersonnels.join('|')}|${pronomsRelatifs.join('|')})\\b`, 'gi'), "");
// console.log(texteFiltre);

// const texte = "Il est parti car il était fatigué et parce qu'il devait rentrer chez lui.";
// const conjonctionsCoordination = ["mais", "ou", "et", "donc", "or", "ni", "car"];
// const conjonctionsSubordination = ["que", "quand", "si", "comme", "parce que", "afin que", "pendant que"];

// const texteFiltre = texte.replace(new RegExp(`\\b(?:${conjonctionsCoordination.join('|')}|${conjonctionsSubordination.join('|')})\\b`, 'gi'), "");
// console.log(texteFiltre);