class Cluster {
    constructor(left, right, vec, distance, blog) {
        this.left = left || null
        this.right = right || null
        this.vec = vec
        this.distance = distance || 0
        this.blog = blog
    }
}