/**
 * This returns fish by region and rarity
 * @param {string} region - filter by region
 * @param {string}  rarity - filter by rarity
 * @returns {string} lists of fish that match parameters
 */
function sortRarity(region, rarity) {
/*I am using a filter to go through the array and sorty the fish by rarity and ragion and return values based on user input. Ther could be mutiple filters selected. adding to commit
*/
    const filterRarity = seasideResortFish.filter(fish => rarity === fish.rarity && region === fish.region)
    console.log(filterRarity, region)
    document.getElementById("rareFish").innerText = JSON.stringify(filterRarity, null, 2);
    document.getElementById("fishCards").innerText = JSON.stringify(filterRarity, null, 2);
    return filterRarity
}

/*This function will loop through the card elements I made and create the postcards I am trying to create in html and add my json data
*/


function cardTest(seasideResortFish) {
const fishCard = document.getElementById("fishCards")
    for (let i = 0; i < seasideResortFish.length; i++) {
    let result = createCard(seasideResortFish[i])
    fishCard.append(result)
    }
}
