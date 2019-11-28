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