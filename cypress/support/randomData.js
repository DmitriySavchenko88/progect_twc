import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 3,
        min: 1,
    },
    wordsPerSentence: {
        max: 5,
        min: 3,
    },
});
export const randomSentences = lorem.generateSentences(1);
export const randomWord = lorem.generateWords(1);
export const randomNumber = Math.floor(Math.random() * 100) + 1;
export const longRandomNum = Math.floor(Math.random() * 100000) + 1;
