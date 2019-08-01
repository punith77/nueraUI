import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactModal from 'react-modal';
import { getItems, deleteItem, addItem } from './action';
import ItemDetail from './itemDetail';



ReactModal.setAppElement('#root')




class MainPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            inputItem: '',
            inputCost: '',
            inputCategory: ''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    handleChange(e) {
        let stateKey = e.target.name;
        let stateValue = e.target.value;
        this.setState({
            [stateKey]: stateValue
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let formData = {
            itemName: this.state.inputItem,
            itemCost: JSON.parse(this.state.inputCost),
            id: new Date().valueOf(),
            category: this.state.inputCategory
        }
        this.props.addItem(formData);
        e.target.reset();
        this.setState({
            showModal: false,
            inputItem: '',
            inputCost: '',
            inputCategory: ''
        })
    }


    componentDidMount() {
        this.props.getItems();


    }





    calculateTotalSum(data) {
        let totalSum = 0;
        data.forEach(item => {
            totalSum += item.itemCost
        })
        return totalSum;
    }

    calculateCategorySum(category, data) {
        let categorySum = 0;
        data.forEach(item => {
            if (item.category === category)
                categorySum += item.itemCost
        })
        return categorySum;
    }

    getItemsByCategory(data, categories) {

        let modelData = Object.assign({}, ...categories.map(key => ({ [key]: { items: [], total: 0 } })));
        data.forEach((item) => {
            modelData[item.category].items.push(item)


        })
        return modelData
    }


    getCategories(data) {
        var categories = []
        data.forEach(element => {
            if (categories.indexOf(element.category) < 0) {
                categories.push(element.category)
            }
        });
        return categories
    }

    renderTable() {
        var categories = this.getCategories(this.props.items)
        this.props.items.forEach(element => {
            if (categories.indexOf(element.category) < 0) {
                categories.push(element.category)
            }
        });
        let itemsByCategory = this.getItemsByCategory(this.props.items, categories)

        const handleDelete = (id) => {
            this.props.deleteItem(id);
        }
        return (
            <div className="main-wrapper">
                {categories ? (categories.map((category, index) => {
                    let categorySum = this.calculateCategorySum(category, this.props.items)
                    return (
                        <table key={index}>
                            <thead>
                                <tr >
                                    <th>{category}</th>
                                    <th></th>
                                    <th>{categorySum}</th>
                                </tr>
                            </thead>
                            <tbody>

                                <ItemDetail itemsData={itemsByCategory[category].items} handleDelete={handleDelete} />
                            </tbody>
                        </table>
                    )
                })) : ''}
            </div>
        )

    }


    render() {
        console.log(this.state)
        return (
            <div className="main-container">

                <div>
                    <button onClick={this.handleOpenModal}>Trigger Modal</button>
                    <ReactModal
                        isOpen={this.state.showModal}
                        contentLabel="onRequestClose Example"
                        onRequestClose={this.handleCloseModal}
                        className="Modal"
                        overlayClassName="Overlay"
                    >
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <label>Item Name</label>
                                <input name="inputItem" value={this.state.inputItem} onChange={this.handleChange} />
                                <label>Item Cost</label>
                                <input name="inputCost" value={this.state.inputCost} onChange={this.handleChange} />
                                <label>Select Category</label>
                                <select name="inputCategory" value={this.state.inputCategory} onChange={this.handleChange}>
                                    <option>Select an category</option>
                                    {this.getCategories(this.props.items).map(category => (
                                        <option value={category} key={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>

                                <button type="submit">Submit</button>
                            </form>

                        </div>

                    </ReactModal>
                </div>
                {this.renderTable()}
                <h1>{this.calculateTotalSum(this.props.items)}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.items }
}


export default connect(mapStateToProps, { getItems, deleteItem, addItem })(MainPage)