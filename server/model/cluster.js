class Cluster {
    constructor(left, right, parent, distance, blog) {
        this.left = left || null
        this.right = right || null
        this.parent = parent
        this.distance = distance || 0
        this.blog = blog
    }
    getLeft() {
        return this.left
    }
    getRight() {
        return this.right
    }
    getParent() {
        return this.parent
    }
    getRight() {
        return this.right
    }
    getDistance() {
        return this.distance
    }
    getBlog() {
        return this.blog
    }
}