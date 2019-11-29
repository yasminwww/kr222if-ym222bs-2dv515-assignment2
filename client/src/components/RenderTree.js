import React, { useState } from 'react'
import axios from 'axios'

const RenderTree = () => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('/kmeans')
            // console.log(response.data)
            kMeans(response.data)
            // setData(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    const kMeans = (clusters) => {
        const centroids = []
        clusters.map((cluster, i) => {
            centroids.push({cluster: []})
            cluster.assignments.map((blog) => {
                centroids[i].cluster.push(blog)
            })
        })
        setData(centroids)
        // data.map((data) => {
        //     console.log(data)
        // })
    }
    // data.map( (clusters, i) => (
    //     <li key={`${clusters.name} ${i}`}>
    //         cluster {i}
    //         {clusters && clusters.map((blogs, i) => {
    //            <div></div>  
    // ))
    //     </li>
    // ))

    return (
        <div className='jstree'>
        { data &&
            data.map((cluster, i) => (
                // console.log('cluster[i]: ', data[i].cluster.map((e) => (console.log(e.blogName))))
                // console.log('cluster[i]: ', data[i].cluster[0])
                // cluster[i]
                <li key={`${cluster.name} ${i}`}>
                    cluster: {i}
                    {data[i].cluster && data[i].cluster.map((blog, index) => (
                        <p key={`${blog.blogName} ${index}`}>{blog.blogName}</p>
                    ))
                    }
                    <br></br>
                </li>
            ))
        }
        <button type="button" className=" p-3 ml-0 btn btn-warning" onClick={() => fetchData()}>demo button</button>
        </div>
    )
}


export default RenderTree
