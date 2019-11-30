const blogs = require('../datablog.json')
const { getRandomRoot, pearson } = require('./pearson')
const Cluster = require('../model/Cluster')
const Blog = require('../model/blog')

let arrBlog = []

/**
 * 
 * @param {number} index, array contains other arrays, every array holds (blog name) and (word occurences)
 * blogname: ____
 * occurences: [3, 5, 20, etc...]
 */
const clusterifyBlogs = (index) => {
    try {
        const rootBlog = blogs[index]
        const correlationResult = [{ 
            rootBlogName: rootBlog.blogName, 
            occurences: rootBlog.occurences
        }]

        const filteredList = blogs.filter(e => e.blogName !== rootBlog.blogName)

        for (let i = 0; i < filteredList.length; i++) {
            const currentBlog = filteredList[i]
            //  loop through every pair looking for the smallest distance
            
            const result = pearson(rootBlog.occurences, currentBlog.occurences)

            correlationResult.push({ 
                blogName: currentBlog.blogName, 
                occurences: currentBlog.occurences, 
                correlation: result 
            })
        }
        
        return correlationResult

    } catch (err) {
        console.error(err)
    }
}

/**
 * merging two clusters
 * @param {blog} clusterA 
 * @param {blog} clusterB 
 */
const mergeNodes = (clusterA, clusterB) => {
        let mergdata = []
        for (let i = 0; i < clusterA.length; i++) {
            mergdata.push((clusterA[i] + clusterB[i]) / 2.0);
        }
        return mergdata;
}

// CODE FROM THE BOOK
/**
 * Builds a hierechal tree of clusters
 */
const hierchyBuilder = () => {
    try {
        let clusterArray = []
        let currentClustID = -1
        let blogsNames = []
        /**
         * Clusterify blogs
         */
        for (let i = 0; i < blogs.length; i++) {
            blogsNames.push(blogs[i].blogName)
            clusterArray.push(new Cluster({
                blog:blogs[i].blogName,
                vec: blogs[i].occurences,
                id: i
            }))
        }
    
        while (clusterArray.length > 1) {
            let distances = {}
            let pair = [0, 1]
            let closest =  pearson(clusterArray[0].vec, clusterArray[1].vec)

            
            for (let i = 0; i < closest.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    let currentCluster = clusterArray[i].id + ',' + clusterArray[j].id
                    if (!(currentCluster in distances)) {
                        distances[ clusterArray[i].id + ',' + clusterArray[j].id ] = pearson(clusterArray[i].vec, clusterArray[j].vec)
                    }
                    let newDistances = distances[i].id + ',' + clusterArray[j].id
                    if (newDistances < closest) {
                        closest = d	
					    pair[0] =i
					    pair[1] =j
                    }
                }
            }
            
		let mergevec = mergeNodes(clusterArray[pair[0]].vec,clusterArray[pair[1]].vec)


        let newcluster = new Cluster({
            vec:mergevec,
            left:clusterArray[pair[0]],
            right:clusterArray[pair[1]],
            distance:closest,
            id:currentClustID
        })
		
		currentClustID -= 1;
		
		clusterArray.splice(pair[1],1)
		clusterArray.splice(pair[0],1)
		clusterArray.push(newcluster)
        }
        return [clusterArray[0], blogsNames]
    } catch (err) {
        console.error(err)
    }
}
function v(n){
	//function to space the output properly
	var space =[];
	for(var i =0;i< n;i++){
		space.push(' ');
	}
	return space;
}
function buildTree(clust,labels,n){
	var space = v(n).join('')
	if(clust.id < 0){//indicate a group
        arrBlog.push(space+'\\')
	}
	else{
        arrBlog.push(space+labels[clust.id]) // child
	}
	
	
	if(clust['left'] !=null){
		buildTree(clust['left'],labels,n+1);
		
	}
	if(clust['right'] !=null){
		buildTree(clust['right'],labels,n+1);
		
    }
    return arrBlog
}

module.exports.buildTree = buildTree
module.exports.clusterifyBlogs = clusterifyBlogs
module.exports.hierchyBuilder = hierchyBuilder

