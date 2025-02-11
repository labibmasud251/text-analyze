import * as analyzeServices from "../services/analyzeServices";

test('word count', async () => {
    const result = await analyzeServices.countWords("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    expect(result).toBe(16);
})

test('character count', async () => {
    const result = await analyzeServices.countCharacters("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    expect(result).toBe(75);
})

test('sentence count', async () => {
    const result = await analyzeServices.countSentences("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    expect(result).toBe(2);
})

test('paragraph count', async () => {
    const result = await analyzeServices.countParagraphs("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    expect(result).toBe(1);
})

test('longest words', async () => {
    const result = await analyzeServices.longestWordsInParagraphs("The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.");
    expect(result).toEqual([ "slept" ]);
})