/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

function createElement(type, className='') {
    const node = document.createElement(type)
    if (className != '') {
        node.className = className
    }
    return node
}

function addImage(src, width) {
    let images = createElement('div')
    images.id = 'images'
    //
    let div = createElement('div', 'p-4')
    //
    const element = createElement('img', 'mx-auto rounded-lg')
    element.width = width
    element.src = src
    div.append(element)
    images.append(div)
    //console.log(images);
    return images
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const parent = document.querySelector('.text-center')

let printImage = () => {
    return addImage(`https://randomfox.ca/images/${generateRandomNumber(1, 122)}.jpg`, 320)
}

function printRandomImages (qty) {
    const imagesArray = []
    for (let index = 0; index < qty; index++) {
        imagesArray.push(printImage())
    }
    console.log(printImage());
    parent.append(...imagesArray)

}

printRandomImages(5)     




