function changeImage(value){
    let element = document.getElementById(value);
    element.src = element.src.includes("img/save.png") ? "img/black.png" : "img/save.png";
}

window.onload = () => {
    itemData.forEach((card) => {
        createCard(card);
    })
}