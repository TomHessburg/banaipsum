const bananaLanguage = {
  verb: [
    "plantaining",
    "banunning",
    "peeling",
    "banoonooing",
    "banend",
    "boughtnananed",
    "cutnanad",
    "dreamnannaing",
    "plantainthaning",
    "zerbnooonooed",
    "painanad",
    "wrotenanuhthed",
    "chakitaing",
    "chakooted"
  ],
  noun: [
    "banana",
    "plantain",
    "bananercycle",
    "banook",
    "banicycle",
    "banaseball",
    "banasketball",
    "plantoon"
  ],
  adjective: [
    "banangular",
    "plantainted",
    "banoonethed",
    "yellowified",
    "banantiquainted",
    "banabsolute",
    "plantainnventurous",
    "aggrananning",
    "big-nannaed",
    "blanand"
  ],
  name: [
    "Yellowandrovski",
    "Plantainklin",
    "Banandrea",
    "Banaustin",
    "Peelthany",
    "Bananthony",
    "Chakita"
  ],
  conjunction: ["is", "the", "and", "for", "but", "or", "yet", "so", "through"]
};

const sentenceStructures = [
  "name conjunction verb conjunction noun",
  "noun adjective",
  "conjunction name conjunction verb",
  "conjunction name conjunction verb conjunction noun",
  "noun conjunction verb conjunction conjunction adjective adjective",
  "noun conjunction verb adjective conjunction conjunction noun"
];
const punctuationMarks = ["!", ".", "?"];
const seperators = [",", ":", ";"];

// is this way overly complicated?? YES
// am I writing this at 12am? YESd
// do I care? NO
// should you? I DONT KNOW
// did i do this recursively for absolutely no reason? YES
// is this the weird thing I've ever done? YES
const creatanana = (ammountOfNanas, curSentence = "") => {
  // no more than thousand nanners
  if (ammountOfNanas > 1000) {
    return "Dahts too many nanners..";
  }

  // yep. i did this recursively. WHAT CHA GUNU DO ABOUT IT!

  // end condition... lol
  /// this... this is GOLD
  const curmountOfNanas = curSentence.split(" ").length - 1;
  if (curmountOfNanas == ammountOfNanas) {
    return curSentence.substr(1);
  } else if (curmountOfNanas > ammountOfNanas) {
    return (
      curSentence
        .split(" ")
        .slice(0, ++ammountOfNanas)
        .join(" ")
        .substr(1) + "..."
    );
    // return curSentence;
  }

  // pick a random sentence structure and
  const curStructure = sentenceStructures[
    Math.floor(sentenceStructures.length * Math.random())
  ].split(" ");

  // store our awesome new sentence
  let sentence = "";

  let wordCount = 0;
  for (key of curStructure) {
    // each key in the structure points to a key in the language table
    const curList = bananaLanguage[key];

    // pick a random word from its array
    let newWord = curList[Math.floor(curList.length * Math.random())];

    if (sentence.length === 0) {
      // capitolize first letter of first word.
      newWord = newWord.split("");
      newWord[0] = newWord[0].toUpperCase();
      newWord = newWord.join("");
      sentence += newWord + " ";
    } else if (wordCount === curStructure.length - 1) {
      sentence +=
        newWord +
        punctuationMarks[Math.floor(Math.random() * punctuationMarks.length)];
    } else {
      // randomly add seprators
      // wont add separators next to a conjunction
      // i am definitely not an english major xD
      if (Math.floor(Math.random() * 5) === 3 && key !== "conjunction") {
        sentence +=
          newWord +
          seperators[Math.floor(Math.random() * punctuationMarks.length)] +
          " ";
      } else {
        sentence += newWord + " ";
      }
    }
    wordCount++;
  }
  curSentence = curSentence + " " + sentence;
  // return the sentence

  return creatanana(ammountOfNanas, curSentence);
};

module.exports = creatanana;
