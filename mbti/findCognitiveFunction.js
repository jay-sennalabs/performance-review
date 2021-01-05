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

  second += fourth.toLowerCase() === "p" ? "e" : "i";
  third += fourth.toLowerCase() === "j" ? "e" : "i";

  return {};
}
