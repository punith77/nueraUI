import React from 'react';






export default class ItemField extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.data.itemName}</td>
                <td>{this.props.data.itemCost}</td>
                <td><i onClick={this.props.handleDelete} className="far fa-trash-alt"></i></td>
            </tr>
        )
    }
}