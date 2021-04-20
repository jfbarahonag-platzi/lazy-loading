/**
Lazy loading library
 */

import { images, printImagesInfo } from "./index.js";

 const isIntersecting = entry => {
    return entry.isIntersecting // true if is showing on the screen
 }

 const action = (entry) => {
    //console.log("Hey dude")
    const container = entry.target
    //const image = container.querySelector('img')
    const image = container.firstChild
    const url = image.dataset.src
    image.src = url
    images.loaded++
    printImagesInfo(images)
    //unlisten the image -> To avoid unwanted actions
    observer.unobserve(container)
 };

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(action)
})

export const registerImage = image => {
    // Intersection observer -> observer(img)
    observer.observe(image)
 }