/**
 * This returns fish by region and rarity
 * @param {string} region - filter by region
 * @param {string}  rarity - filter by rarity
 * @returns {string} lists of fish that match parameters
 */
function sortRarity(region, rarity) {
    const filterRarity = seasideResortFish.filter(fish => rarity === fish.rarity && region === fish.region)
    console.log(filterRarity, region)
    return filterRarity
}