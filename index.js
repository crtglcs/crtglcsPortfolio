// Inspirer de "je n'ai plus l'url actuellement, mais je vous le transmet (je suis dans mon historique en ce moment même)"

// DOM
const carouselList = document.querySelector('.carousel__list');
const carouselItems = document.querySelectorAll('.carousel__item');

// Stock dans un tableau, toutes les cartes du carousel
const elems = Array.from(carouselItems);

// Au click sur un li du carrousel, j'active le li surlequelle j'ai cliqué, vérifie que c'est bien un item du carousel et met à jour newActive
carouselList.addEventListener('click', function (event) {
    // Récupère l'élément cliqué
    let newActive = event.target;
    // Vérifie si l'élément cliqué fait partie du carousel.
    let isItem = newActive.closest('li.carousel__item');

    // Si l'élément cliqué n'est pas un li du carousel ou alors est déjà actif, il ne se passe rien.
    if (!isItem || newActive.classList.contains('carousel__item_active')) {
        return;
    }
    // Met à jour le carousel avec ou pas un newActive
    update(newActive);
});

// Fonction pour mettre à jour le positionnement des élément dans le carousel.
const update = function(newActive) {
    // Récupère la position de l'élément cliqué, au moment du clique
    const newActivePos = newActive.dataset.pos;

    console.log(newActivePos)

    // Récupère la position dans le carousel et lui donne un nom de position (current, last, ...)
    const current = elems.find((elem) => parseInt(elem.dataset.pos) === 0);
    const prev = elems.find((elem) => parseInt(elem.dataset.pos) === -1);
    const next = elems.find((elem) => parseInt(elem.dataset.pos) === 1);
    const first = elems.find((elem) => parseInt(elem.dataset.pos) === -2);
    const last = elems.find((elem) => parseInt(elem.dataset.pos) === 2);

    // Desactive l'élément actuel (current de base) en changeant son nom de classe.
    current.classList.remove('carousel__item_active');

    // Pour chaque nom de position,
    [current, prev, next, first, last].forEach(item => {
        // Récupère la position actuelle de chaque item.
        let itemPos = parseInt(item.dataset.pos);


        // Calcule et met à jour la position de chaque item, en utilisant la fonction getPos avec les paramètres itemPos & newActivePos.
        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

// Fonction qui permet de calculer la différence entre la position actuelle - la position active
// current vaudra : itemPos > soit la position actuelle, et active vaudra : newActivePos > soit, la position au moment du clique
const getPos = function (current, active) {
    // Différence entre les 2 paramètres
    const diff = current - active;

    // Si la valeur est plus grande que 2, alors tu me retourne le current, soit tu réinitialise le carousel ou tu fais rien
    if (Math.abs(current - active) > 2 || Math.abs(current - active) < -2) {
        return -current;
    }
    // Autrement tu me retourne la const diff (différence entre les 2 paramètres).
    return diff;
}