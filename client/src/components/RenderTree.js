import React from 'react'
import $ from 'jquery'

const RenderTree = () => {

    const checkJsTree = () => {
        const rootDiv = $('.')
    }


    return (
        <div className="jstree">
            <ul>
                <li> Root node 1
                    <ul>
                    <li className="child_node_1">Child node 1</li>
                    <li>Child node 2</li>
                    </ul>
                </li>
                <li>Root node 2</li>
            </ul>
            <button>demo button</button>
        </div>
    )
}


export default RenderTree