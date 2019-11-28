import React, { useState } from 'react'
import axios from 'axios'

const RenderTree = () => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get('/kmeans')
            console.log(response.data)
            setData(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='jstree'>
        { data &&
                    data.map( (data, i) => (
                        <li key={`${data.name} ${i}`}>
                        </li>
                    ))
        }
        <button type="button" className=" p-3 ml-0 btn btn-warning" onClick={() => fetchData()}>demo button</button>
        </div>
    )
}


export default RenderTree