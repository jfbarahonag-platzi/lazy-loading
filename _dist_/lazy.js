/**
Lazy loading library
 */

 const isIntersecting = entry => {
    return entry.isIntersecting // true if is showing on the screen
 }

 const action = (entry) => {
    console.log("Hey dude")
    const node = entry.target

    //unlisten the image -> To avoid unwanted actions
    observer.unobserve(node)
 };

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(action)
})

export const registerImage = image => {
    // Intersection observer -> observer(img)
    observer.observe(image)
 }