/**
 * import libraries
 */
import { registerImage } from "./lazy";
import h from "hyperscript";

/**
 * Variables
 */
 export let images = {
    loaded : 0,
    total : 0
}

/**
 * Elements
 */
const addButton = document.querySelector('button')
const cleanButton = document.querySelector('.clean')
const removeFirstButton = document.querySelector('.remove')
const parent = document.querySelector('#images')


/**
 * First level functions
 */
function createElement(type, className='') {
    /* // "Pure JS" implementation
    const node = document.createElement(type)
    if (className != '') {
        node.className = className
    }
    return node
    */
   // Hyperscript usage
    if (className == '') {
        return h(`${type}`)
    }
    //className = className.replaceAll(' ', '.')
    return h(`${type}.${className.replaceAll(' ', '.')}`)

}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const checkIfChildExists = (parent) => {
    const length = parent.childNodes.length
    return length
}

const removeFirstChild = (parent) => {
    parent.removeChild(parent.firstChild)
}

const resetImagesValues = info => {
    info.total = 0
    info.loaded = 0
}

export const printImagesInfo = info => {
    console.log(`⚪ Total = ${info.total}\n🟣 Loaded = ${info.loaded}`);
    console.log('--------------------------------------');
}

/**
 * Second level functions
 */
function generateRandomImage(src, width) {
    let container = createElement('div', 'p-2 bg-yellow-700 bg-opacity-50 m-1 rounded-lg')
    //
    const element = createElement('img', 'mx-auto rounded-lg')
    element.width = width
    element.style.minHeight = '200px'
    /** the image will be loaded in the lazy loading callback. NOT HERE */
    element.dataset.src = src
    container.append(element)
    //console.log(images);
    return container
}

let generateImage = () => {
    return generateRandomImage(`https://randomfox.ca/images/${generateRandomNumber(1, 122)}.jpg`, 320)
}

function printRandomImages (qty, container) {
    const imagesArray = []
    for (let index = 0; index < qty; index++) {
        let image = generateImage()
        imagesArray.push(image)
        registerImage(image)
    }
    //console.log(generateImage());
    container.append(...imagesArray)   
}

const isImageAvailable = () => {
    return checkIfChildExists(parent)
}

const removeImage = () => {
    removeFirstChild(parent)
}

/**
 * Callbacks
 */
const addImage = () => {
    printRandomImages(1, parent)
    images.total++
    printImagesInfo(images)
}

const removeAllImages = () => {
    
    if (!isImageAvailable()) {
        alert("Oops")
        return
    }

    while (parent.firstChild != null) {
        removeImage()
    }
    resetImagesValues(images)
    printImagesInfo(images)
}

const removeFirstImage = () => {
    
    if (!isImageAvailable()) {
        alert("Oops")
        return
    }

    removeImage()
    images.total--
    images.loaded--
    printImagesInfo(images)
}

/**
 * Event listeners
 */
addButton.addEventListener('click', addImage)     
cleanButton.addEventListener('click', removeAllImages)     
removeFirstButton.addEventListener('click', removeFirstImage)     




