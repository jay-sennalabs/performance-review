/**
 * @param {string} mbti
 * @return {{
 *  dominant: string,
 *  auxiliary: string,
 *  tertiary: string,
 *  inferior: string,
 * }}
 */
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

  return {};
}
