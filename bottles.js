function bottleSong (num) {
  let bottles = num
  let ninetyNineToFiftyOne = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer, you take one down pass it around ${bottles - 1} bottles of beer on the wall`

  let fiftyToTwo = `${bottles} bottlesh of beer on the wall, ${bottles} bottlesh of beer, you take one down passh it around ${bottles - 1} bottlesh of beer on the wall`

  let two = `${bottles} bottlesh of beer on the wall, ${bottles} bottlesh of beer, you take one down passh it around ${bottles - 1} bottle of beer on the wall`

  let one = `${bottles} bottle of beer on the wall, ${bottles} bottle of beer, you take one down passh it around no more bottles of beer on the wall`

  let none = `No bottlesh of beer on the wall, no bottlesh of beer, Go to the shtore, buy some more ${num} bottlesh of beers on the wall`
}

module.exports =  bottleSong