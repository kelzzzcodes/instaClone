function changeBookmark(value){
    let element = document.getElementById(value);
    element.src = element.src.includes("img/save.png") ? "img/saveblack.png" : "img/save.png";
}

function changeHeart(value){
    let element1 = document.getElementById(value);
    element1.src = element1.src.includes("img/heart.png") ? "img/heartred.png" : "img/heart.png";
}


window.onload = () => {
    avatarData.forEach((navbar) => {
        createNav(navbar);
    })  
    itemData.forEach((card) => {
        createCard(card);
    })  
    figureData.forEach((figure) => {
        createFigures(figure);
    })

    profileData.forEach((profile) => {
        createProfile(profile);
    })

    suggData.forEach((profile_sugg) => {
        createSugg(profile_sugg);
    })  



}




// window.onload = function () {
//     // first code here...
//     itemData.forEach((card) => {
//         createCard(card);
//     })
// };

// let prev_handler = window.onload;
// window.onload = function () {
//     if (prev_handler) {
//         prev_handler();
//     }
//     // second code here...

//     figureData.forEach((card) => {
//         createCard(card);
//     })
// }

