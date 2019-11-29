import React, { Fragment, useState, useEffect } from 'react'
import uuid from 'uuid'
import axios from 'axios'

const Hierarchy = () => {

  const [data, setData] = useState(null)
  const [msg, setMessage] = useState(null)
  const [treeString, setTreeString] = useState()

  const generateID = () => {
    return uuid.v4() * Math.random(4)
  }

  const getHierarchy = async (e) => {
    e.preventDefault()
    try {
      const treeObject = await axios.get(`/hierarchy`)
      setTreeString(treeObject.data)
    } catch (err) {
      setData(null)
      setMessage('Something went wrong, try a number in the input field')
    }
  }
  return (
    <div>

      <button type='submit' className='p-3 ml-0 btn-lg btn-block btn btn-warning' onClick={(e) => getHierarchy(e)}>Generate tree</button>
      <pre>
      {treeString && treeString.map((e, i) => (
        <p key={generateID + i}>{e}</p>
        ))
      }
      </pre>

    </div>
  )
}

export default Hierarchy
