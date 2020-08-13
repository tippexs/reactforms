import * as React from "react";

class MySelect extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
        console.log(this.props.options);
    }

    handleCssClass = (element) => {
        return element.class !== undefined ? element.class : 'standard-css-class';
    };


    render() {
        return (
            <div>
                <h2>This is my Custom Select</h2>
                <select>
                    {Object.keys(this.props.options).map((object, index) => {
                        return <option value={object}
                                       className={this.handleCssClass(this.props.options[object])}>
                            {this.props.options[object].value}
                        </option>
                    })}
                </select>
            </div>
        );
    }

}

export default MySelect;