/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */

const mbtiCategories = {
  i: "e",
  e: "i",
  s: "n",
  n: "s",
  t: "f",
  f: "t",
  j: "p",
  p: "j"
};

export function findCognitiveFunction(mbti) {
  let [first, second, third, fourth] = mbti;
  let dominant = "";
  let auxiliary = "";

  second += fourth.toLowerCase() === "p" ? "e" : "i";
  third += fourth.toLowerCase() === "j" ? "e" : "i";

  if (first.toLowerCase() === second[1]) {
    dominant = second;
    auxiliary = third;
  } else {
    dominant = third;
    auxiliary = second;
  }

  const tertiary = flipLetter(auxiliary);
  const inferior = flipLetter(dominant);

  return {
    dominant,
    auxiliary,
    tertiary,
    inferior
  };
}

function flipLetter(str) {
  return (
    mbtiCategories[str[0].toLowerCase()].toUpperCase() + mbtiCategories[str[1]]
  );
}
