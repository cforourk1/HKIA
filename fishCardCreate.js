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
// this portion calls the image
    const picture = document.createElement('img')
    picture.src = ''
// class name for styling later
    picture.className = 'fishPic'
/* the append feauture here ensures that the picture is actually inside my div tag
*/
    elm.appendChild(picture)
    const fishNames = document.createElement('h3')
// this portion is the place holder for the name of the fish
    fishNames.className = 'fishNamePlate'
// brings in the text I need
    fishNames.innerText = fish.fishname
    elm.appendChild(fishNames)
/* creating the table data for the fish cards here
*/
const fishTable = document.createElement('table')
    elm.appendChild(fishTable)
//create the first row. Class name fishRow for style later.
const rowOne = document.createElement('tr')
    fishTable.appendChild(rowOne)
// create the header of that row example - region
const regionLabel = document.createElement('th')
    regionLabel.innerText = 'Region'
    rowOne.appendChild(regionLabel)
// create a cell for the data to be held inside the row - example Seaside Resort
const regionName = document.createElement('td')
    regionName.innerText = fish.region
    rowOne.appendChild(regionName)

}
