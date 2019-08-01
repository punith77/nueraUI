import React from 'react';
import { Field, reduxForm } from 'redux-form';


class AddItem extends React.Component {


    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div>
                    <div>{error}</div>
                </div>
            )
        }

    }
    renderInput = ({ input, label, meta }) => {

        return (
            <div>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>

        )
    }

    renderSelect = ({ input, label, meta }) => {
        const colors = ['Eletronics', 'Clothing', 'Kitchen']
        return (
            <div>
                <label>{label}</label>
                <select {...input} >
                    <option value="">Select a color...</option>
                    {colors.map(colorOption => (
                        <option value={colorOption} key={colorOption}>
                            {colorOption}
                        </option>
                    ))}
                </select>
                {this.renderError(meta)}
            </div>

        )
    }









    onSubmit(formValues) {
        console.log(formValues)
    }
    render() {

        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" label="Enter title" component={this.renderInput} />
                    <Field name="value" label="Enter the value" component={this.renderInput} />
                    <Field name="category" label="Please Select the category" component={this.renderSelect}>



                    </Field>


                    <button type="submit"> Submit</button>
                </form>
            </div>
        )
    }
}
const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'you must enter a title'
    }
    if (!formValues.value) {
        errors.value = 'You must enter a value';
    }
    if (!formValues.category) {
        errors.category = 'You must select a category';
    }
    return errors;
}
export default reduxForm({
    form: 'addItem',
    validate: validate
})(AddItem)