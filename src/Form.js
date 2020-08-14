import * as React from "react";
import MySelect from "./Select";




class MyForm extends React.Component {


    options = {
        "test": {"value": "Test Nummer 1", "class": "custome-css-class"},
        "test1": {"value": "TEST Nummer 2"},
        "test2": {"value": "Nochmal"},
        "test3": {"value": "test4"},

    };

    handleChange = event =>  {
        this.setState({[event.target.name]: event.target.value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    };


    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = undefined;

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} >
                <input name="dummy" type="text" onChange={this.handleChange}/>
                <MySelect name="select-1" options={this.options} onChange={this.handleChange}/>
                <MySelect name="select-2" options={this.options} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
}

export default MyForm;