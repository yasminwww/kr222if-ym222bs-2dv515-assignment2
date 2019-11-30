import React, { useState, Fragment } from 'react'
import axios from 'axios'

const Kmean = () => {
    const [data, setData] = useState(null)
    const [clusters, setClusters] = useState('')

    const chosenClusterCount = (e) => {
        setClusters(e.target.value)
    }

    const fetchData = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`/kmeans/${clusters}`)
            kMeans(response.data)
        } catch (err) {
            console.log(err)
        }
    }


    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            fetchData()
        }
    }


    const kMeans = (clusters) => {
        const centroids = []
        clusters.map((cluster, i) => {
            centroids.push({ cluster: [] })
            cluster.assignments.map((blog) => {
                centroids[i].cluster.push(blog)
            })
        })
        setData(centroids)
    }

    return (
        <div>
            <form>
                <div className='form-group'>
                    <input type='text' onChange={chosenClusterCount} onKeyPress={handleEnterKey} className='ml-6 form-control' id='cluster' />
                </div>
                <button type='submit' className=' p-3 ml-0 btn-lg btn-block btn btn-warning' onClick={(e) => fetchData(e)}>FIRE!</button>
            </form>
            {data &&
                data.map((cluster, i) => (
                    <div key={`${cluster.name} ${i}`} className='dropdown'>
                            <button className="btn btn-secondary dropdown-toggle  p-3 ml-0 btn-lg btn-block btn btn-warning" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                cluster: {i + 1}
                            </button>
                            <div  className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {data[i].cluster && data[i].cluster.map((blog, index) => (
                                <a key={`${blog.blogName} ${index}`}  className='dropdown-item'>
                                        {index + 1}: {blog.blogName}
                                </a>
                            ))
                        }
                        </div>
                        </div>
                ))
            }
        </div>
    )
}

export default Kmean
