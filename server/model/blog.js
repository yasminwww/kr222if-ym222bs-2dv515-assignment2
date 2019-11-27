class Blog {
    constructor(blogName, word, wordsCount) {
        this.theBlogName = blogName
        this.word = word
        this.wordsCount = wordsCount
    }
    setWordCount(index, count) {
        this.word = index
        this.wordsCount = count
    }
}
