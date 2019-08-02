import React from 'react';




const ItemField = props => {
    return (
        <tr>
            <td>{props.data.itemName}</td>
            <td>{props.data.itemCost}</td>
            <td><i onClick={props.handleDelete} className="far fa-trash-alt"></i></td>
        </tr>
    )
}



export default ItemField;