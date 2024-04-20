import React from "react";

class ChildComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    };

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>>> Check Data input: ", this.state);
    };

    render() {
        console.log(">>>> Call render: ", this.state);
        return (
            <>
                <div>Child Component: {this.props.name}</div>
            </>
        );
    }
}

export default ChildComponent;
