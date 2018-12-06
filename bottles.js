bottleSong()

function bottleSong () {
  let bottles = 99
  
  for (i = bottles; i < 0; i--) {
    
    if (i > 50) {
      
      console.log(ninetyNineToFiftyOne)
    }
    if (i > 2 && i <= 50) {
      console.log(fiftyToTwo)
    }
    if(i === 2) {
      console.log(two)
    }
    if(i === 1) {
      console.log(one)
    }
    if (i === 0) {
      console.log(none)
    }
    bottles -= 1
  }

  let ninetyNineToFiftyOne = `${bottles} bottles of beer on the wall, ${bottles} bottles of beer, you take one down pass it around ${bottles - 1} bottles of beer on the wall`

  let fiftyToTwo = `${bottles} bottlesh of beer on the wall, ${bottles} bottlesh of beer, you take one down passh it around ${bottles - 1} bottlesh of beer on the wall`

  let two = `${bottles} bottlesh of beer on the wall, ${bottles} bottlesh of beer, you take one down passh it around ${bottles - 1} bottle of beer on the wall`

  let one = `${bottles} bottle of beer on the wall, ${bottles} bottle of beer, you take one down passh it around no more bottles of beer on the wall`

  let none = `No bottlesh of beer on the wall, no bottlesh of beer, Go to the shtore, buy some more 99 bottlesh of beers on the wall`
  
  
}



module.exports =  bottleSong