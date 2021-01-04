/**
 *
 * @param {number[]} cards
 * @return {number[]}
 */
export function shuffle(cards) {
  let currentIndex = cards.length;
  let randomIndex;
  let temp;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temp;
  }

  return cards;
}
