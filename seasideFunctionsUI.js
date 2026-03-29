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
    return filterRarity
}