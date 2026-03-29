/* this function will deal with inputting values for the currency qty based on rarity of fish to save me some time on data entry. It also gives me practice on writing functions
*/

function currencyCalc(rarity, badtzCurrency) {
  switch (rarity) {
    case "Common":
      return 1

    case "Uncommon":
      return 2

    case "Rare":
      return 5

    case "Legendary":
      return 10

  }
}

/* this function will deal with inputting values for the fwish Well bonus based on rarity of fish to save me some time on data entry. It also gives me practice on writing functions
*/


function fwishBonus(rarity, fwishWellBonus) {
  switch (rarity) {
    case "Common":
      return 1

    case "Uncommon":
      return 1

    case "Rare":
      return 2

    case "Legendary":
      return 2

  }
}
