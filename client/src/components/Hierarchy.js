import React, { Fragment, useState } from 'react'
import axios from 'axios'

const Hierarchy = () => {
    const [ data, setData ] = useState(null)
    const [ msg, setMessage ] = useState(null)

    const getHierarchy = async (e) => {
    e.preventDefault()
    try {
        const treeObject = await axios.get(`/hierarchy`)
        setData(treeObject)
      } catch (err) {
        setData(null)
        setMessage('Something went wrong, try a number in the input field')
      }
    }
    return (
        <div>
            
        </div>
    )
}

export default Hierarchy
