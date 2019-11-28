import React, { useState } from 'react'
import axios from 'axios'
import $ from 'jquery'
import jstree from 'jstree'
import TreeView from 'react-easy-jstree';

const RenderTree = () => {
    const [jsdata, setJsData] = useState({
        data: {
            core: {
                data: {
                    centroids: []
                }
            }
        },
        selected: [],
    })
    const handleClick = async () => {
        const newData = await axios.get('/kmeans')
        setJsData({
          data: {
            core: {
              data: [
                {
                  text: newData.data
                }
              ]
            }
          }
        });
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
            <button onClick={() => handleClick()}>Hello</button>
        </div>
    )
}


export default RenderTree

// import React, {Component} from 'react';
 
// export class Tree extends Component {
 
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectNode: ['anyNode'],
//       data: {
//         core: {
//           data: [
//             {
//               text: 'Root node', children: [
//               {text: 'Child node 1'},
//               {text: 'Child node 2'}
//               ]
//             }
//           ]
//         }
//       },
//       selected: [],
//     };
//   }
 
//   async handleClick() {
//     const w = await axios.get('/kmeans')
// console.log(w);
//     const newData = this.state.data.core.data[0].children.slice();
//     newData.push({text: 'New child node'});
//     this.setState({
//       data: {
//         core: {
//           data: [
//               ...w.data
//           ]
//         }
//       }
//     });
//   }
 
//   handleChange(e, data) {
//     this.setState({
//       selected: data.selected,
//     })
//   }
 
//   render() {
//     const data = this.state.data;
 
//     return (
//       <div>
//         <button onClick={() => this.handleClick()}>Add node</button>
//         <br/><br/>
//         <TreeView treeData={data} selectNode={this.state.selectNode} onChange={(e, data) => this.handleChange(e, data)} />
//         <br />
//         <p>Selected nodes: {this.state.selected.join(', ')}</p>
//       </div>
//     );
//   }
// }

// export default Tree