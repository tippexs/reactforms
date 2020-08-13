import * as React from "react";
import MySelect from "./Select";




class MyForm extends React.Component {


    options = {
        "test": {"value": "Test Nummer 1", "class": "custome-css-class"},
        "test1": {"value": "TEST Nummer 2"},
        "test2": {"value": "Nochmal"},
        "test3": {"value": "test4"},

    };

    constructor(props) {
        super(props);
        this.state = null;

    }

    render() {
        return (
            <form>
                <MySelect options={this.options} />
                <input type="submit"/>
            </form>
        );
    }
}

export default MyForm;