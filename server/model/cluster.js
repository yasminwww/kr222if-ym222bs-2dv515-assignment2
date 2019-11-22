/* eslint-disable */
class Cluster {

    biCluster(opt) {
        this.left = opt.left || null
        this.right = opt.right || null
        this.vector = opt.vec
        this.id = opt.id || 0;
        this.distance = opt.distance || 0.0;
    }

    mergevecs(blogA, blogB) {     //merge two array 
        const mergdata = [];for(var i=0;i<blogA.length;i++){
         mergdata.push((blogA[i] + blogB[i])/2.0);
        }
        return mergdata;
    }

    hcluster(rows,distance) {
        //row=>data,distance =>pearson
        let distances = {}
        let currentclustid = -1
        let clust = []
        for(var i=0;i<rows.length;i++) {
            clust.push(new bicluster({vec:rows[i],id:i}))//propagate an array with an object
        }
        //console.log(distance(clust[1].vec,clust[1].vec));
        var store=[];
        while(clust.length > 1){//loop until the lengt of the cluster array is greater than 1let lowestpair= [0,1];//the lowest pair has index 0 and 1 if the array(i.e closest dist)var closest =distance(clust[0].vec,clust[1].vec); 

         for(let i=0;i<clust.length;i++){
          for(let j=i+1; j<clust.length; j++ ){
           let y = clust[i].id+","+clust[j].id; //store the id has string for object property
           
           if(!( y in distances)){//store the distance
            distances[clust[i].id+","+clust[j].id]= distance(clust[i].vec,clust[j].vec);}
           let d = distances[clust[i].id+","+clust[j].id]
            if(d < closest){//choose the lowest distance and store the index
            closest = d;
            lowestpair[0] =i
            
            lowestpair[1] =j
            
           }
          }
         }
        const mergevec = mergevecs(clust[lowestpair[0]].vec,clust[lowestpair[1]].vec)
        var newcluster = new bicluster({
            vec:mergevec,left:clust[lowestpair[0]],
            right:clust[lowestpair[1]],
            distance:closest,id:currentclustid
        })
                 
         
         currentclustid -=1
         //decrease the cluster id
         //store.push("("+lowestpair[1]+","+lowestpair[0]+")")
         
         clust.splice(lowestpair[1],1)
         
         clust.splice(lowestpair[0],1)
         
         clust.push(newcluster)
         //lend--;
        }
         
        return clust[0];
       }
}