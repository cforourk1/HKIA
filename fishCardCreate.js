/**
 * This function is going to create fish cards for me
 * @param {object} fish - get the fish object
 */
function createCard(fish) {
/* I am learning how to use Javascript to create HTML elements for me by calling my data. This way, I can loop through and create the cards I want without having to do it by hand.
below you will see my first line I am creating a div element to wrap the entire card in. I then move on to create an image item, and a place holder for the fish name. each of these is assigned a class name that will be used later in the design model.
*/
    const elm = document.createElement('div')
    elm.className = 'fishCard'
    const picture = document.createElement('img')
    picture.src = ''
    picture.className = 'fishPic'
/* the append feauture here ensures that the picture is actually inside my div tag
*/
    elm.appendChild(picture)
    const fishNames = document.createElement('h3')
    fishNames.className = 'fishNamePlate'
    fishNames.innerText = fish.fishname
    elm.appendChild(fishNames)
    return elm
}
