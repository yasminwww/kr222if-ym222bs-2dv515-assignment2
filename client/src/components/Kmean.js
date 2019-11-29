import React, { useState, Fragment } from 'react'
import axios from 'axios'

const Kmean = () => {
    const [data, setData] = useState(null)
    const [clusters, setClusters] = useState('')

    const chosenClusterCount = (e) => {
        console.log(e.target.value)
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
        <Fragment>
            <form>
                <div className='form-group'>
                    <input type='text' onChange={chosenClusterCount} onKeyPress={handleEnterKey} className='ml-6 form-control' id='cluster' />
                </div>
                <button type='submit' className=' p-3 ml-0 btn-lg btn-block btn btn-warning' onClick={(e) => fetchData(e)}>FIRE!</button>
            </form>
                {data &&
                    data.map((cluster, i) => (
                        <div key={`${cluster.name} ${i}`} className='accordion' id='accordionExample'>
                            <div className='card'>
                                <div className='card-header' id='headingOne'>
                                    <h2 className='mb-0'>
                                        <button className='btn btn-link' type='button' data-toggle='collapse show' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                            cluster: {i + 1}
                                        </button>
                                    </h2>
                                </div>
                                {data[i].cluster && data[i].cluster.map((blog, index) => (
                                    <div key={`${blog.blogName} ${index}`} id='collapseOne' className='collapse' aria-labelledby='headingOne' data-parent='#accordionExample'>
                                        <div className='card-body'>
                                            {index + 1}: {blog.blogName}
                                        </div>
                                    </div>
                                ))
                                }
                            </div>

                        </div>
                    ))
                }
        </Fragment>
            )
}

export default Kmean
