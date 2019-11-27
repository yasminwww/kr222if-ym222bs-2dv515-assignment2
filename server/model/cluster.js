class Cluster {
    constructor(opt) {
        this.left = opt.left || null
        this.right = opt.right || null
        this.vec = opt.vec
        this.distance = opt.distance || 0
        this.blog = opt.blog
        this.id = opt.id
    }
}
module.exports = Cluster