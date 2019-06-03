import React, { Component } from 'react'

//Regular class creation
// class Table extends Component{
//     render(){
//         return(
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Job</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Charlie</td>
//                         <td>Janitor</td>
//                     </tr>
//                     <tr>
//                         <td>Mac</td>
//                         <td>Bouncer</td>
//                     </tr>
//                     <tr>
//                         <td>Dee</td>
//                         <td>Aspiring actress</td>
//                     </tr>
//                     <tr>
//                         <td>Dennis</td>
//                         <td>Bartender</td>
//                     </tr>
//                 </tbody>
//             </table>
//         )
//     }
// }

class Table extends Component{
    render(){
        const { characterdata } = this.props

        return(
            <table>
                <TableHeader />
                <TableBody characterData={ characterdata } />
            </table>
        )
    }
}

//ES6 Arrow function to create simple components
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

//ES6 Arrow function to create simple components
// const TableBody = () => {
//     return(
//         <tbody>
//             <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//             </tr>
//             <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//             </tr>
//             <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//             </tr>
//             <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//             </tr>
//         </tbody>
//     )
// }

//ES6 Arrow function to create simple components
const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    }
    
    return <tbody>{rows}</tbody>
}

export default Table