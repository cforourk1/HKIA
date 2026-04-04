## How to build each row

Each row needs 4 cells in this order:

1. <th> label 1 (header text)
2. <td> data 1 (fish.property — use .join(", ") for arrays)
3. <th> label 2 (header text)
4. <td> data 2 (fish.property — use .join(", ") for arrays)
   Then append the row to fishTable!

# createCard() Checklist

## Card Structure

- [x] Card div (elm)
- [x] Fish image (picture)
- [x] Fish name (fishNames)
- [x] Table (fishTable)

## Table Rows

- [x] Row 1: Region | Time of Day
- [ ] Row 2: Locations | Bait & Lure
- [ ] Row 3: Rarity | Bonus Item & Bonus CD
- [ ] Row 4: Badtz Currency & Qty | Fwish Well Bonus

## Caught Tracker

- [ ] Caught section div
- [ ] Tiny checkbox
- [ ] Regular checkbox
- [ ] Huge checkbox

## Finishing Up

- [ ] return elm
- [ ] Link fishCardCreate.js to HTML
- [ ] Connect createCard to sortRarity with forEach loop
- [ ] Test in browser
