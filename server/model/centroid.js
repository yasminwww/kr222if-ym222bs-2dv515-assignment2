class Centroid {
    constructor() {
        this.WordCount = []
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
        this.WordCount[index] = averge
    }
}

module.exports.Centroid = Centroid