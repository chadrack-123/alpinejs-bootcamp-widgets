function wordGameWidget() {
    return {
        sentence: '',
        longestWord: '',
        shortestWord: '',
        wordLengths: '',
        analyzeSentence() {
            if (this.sentence.trim() === '') {
                this.longestWord = '';
                this.shortestWord = '';
                this.wordLengths = '';
                return;
            }
            const words = this.sentence.split(' ');
            this.longestWord = words.reduce((a, b) => a.length > b.length ? a : b);
            this.shortestWord = words.reduce((a, b) => a.length < b.length ? a : b);
            this.wordLengths = words.map(word => `${word}: ${word.length}`).join(', ');
        }
    }
}
