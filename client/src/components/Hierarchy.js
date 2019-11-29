import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

const Hierarchy = () => {

  const [data, setData] = useState(null)
  const [msg, setMessage] = useState(null)

  const getHierarchy = async () => {
    try {
      const treeObject = await axios.get(`/hierarchy`)
      const tree = stringBuilder(tree[0], tree[1], 0)
      console.log('tree: ', tree);
    } catch (err) {
      setData(null)
      setMessage('Something went wrong, try a number in the input field')
    }
  }
  const v = (n) => {
    //function to space the output properly
    var space = [];
    for (var i = 0; i < n; i++) {
      space.push(' ');
    }
    return space;
  }
  const stringBuilder = (tree) => {

  }

  useEffect(() => {
    getHierarchy()
  }, [getHierarchy])
  return (
    <div>

    </div>
  )
}

export default Hierarchy
