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
        //=> Props (viết tắt của Properties) là cách Child Component có thể Inherit (kế thừa) lại data từ Parent Component truyền xuống.
        //Với việc sử dụng props, luồng dữ liệu sẽ được truyền theo kiểu Top to Bottom (truyền từ trên xuống dưới).

        console.log(">>>> Check props: ", this.props);
        //---Cách khai báo Js
        // let name = this.props.name;
        // let age = this.props.age;

        //---Khai báo theo ES6 Destructuring
        let { name, age, arrJobs } = this.props;
        return (
            <>
                <div className="job-list">
                    {arrJobs.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.title}- {item.salary}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ChildComponent;
