import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };

    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        //Bắt lỗi validation form
        if (!this.state.title || !this.state.salary) {
            alert("Bạn cần nhập đầy đủ thông tin");
            return;
        }
        console.log(">>>> Check Data input: ", this.state);
        //Add dữ liệu
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });

        //Xử lý sau khi add thành công
        this.setState({
            title: "",
            salary: "",
        });
    };

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;
