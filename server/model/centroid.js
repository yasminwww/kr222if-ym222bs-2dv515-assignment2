class Centroid {
    constructor() {
        this.wordCount = []
        this.assignments = []
        this.previous = []
    }
    clearAssigny() {
        this.previous = this.assignments
        this.assignments = []
    }
    assignifyBlog(blog) {
        this.assignments.push(blog)
    }
    updateifyCounter(index, averge) {
        this.wordCount[index] = averge
    }
    assignyWordCount(index, value) {
        this.wordCount[index] = value
    }
}

module.exports = Centroid
