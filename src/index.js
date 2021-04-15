import { registerImage } from "./lazy";

const addButton = document.querySelector('button')
const parent = document.querySelector('#images')

function createElement(type, className='') {
    const node = document.createElement(type)
    if (className != '') {
        node.className = className
    }
    return node
}

function generateRandomImage(src, width) {
    let container = createElement('div', 'p-4')
    //
    const element = createElement('img', 'mx-auto rounded-lg')
    element.width = width
    element.src = src
    container.append(element)
    //console.log(images);
    return container
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let printImage = () => {
    return generateRandomImage(`https://randomfox.ca/images/${generateRandomNumber(1, 122)}.jpg`, 320)
}

function printRandomImages (qty, container) {
    const imagesArray = []
    for (let index = 0; index < qty; index++) {
        let image = printImage()
        imagesArray.push(image)
        registerImage(image)
    }
    //console.log(printImage());
    container.append(...imagesArray)   
}

const addImage = () => {
    printRandomImages(1, parent)
}

addButton.addEventListener('click', addImage)     




