import * as TextServices from './textServices';

export const countWords = async(text: string): Promise < number > => {
    let words = text.split(/\s+/).filter(Boolean);
    let wordCount: number = words.length;
    return wordCount;
}

export const countCharacters = async(text: string) : Promise < number > => {
    let characters = text.split('');
    let characterCount = characters.length;
    return characterCount;
}
export const countSentences = async(text: string) : Promise < number > => {
    let sentences = text.split(/[.!?]/).filter(Boolean);
    let sentenceCount = sentences.length;
    return sentenceCount;
}
export const countParagraphs = async(text: string) : Promise < number > => {
    let paragraphs = text.split(/\n\s*\n/).filter(Boolean);
    let paragraphCount = paragraphs.length;
    return paragraphCount;
}
export const longestWordsInParagraphs = async(text: string) : Promise < string[] > => {
    let paragraphs = text.split(/\n\s*\n/).filter(Boolean);
    let longestWords = [];
    for (let paragraph of paragraphs) {
        let words = paragraph.split(/\s+/).filter(Boolean);
        let longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');
        longestWords.push(longestWord);
    }
    return longestWords;
}