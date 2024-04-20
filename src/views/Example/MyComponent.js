import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    /**
     *JSX ==> return block (JSX sẽ trả về một khối - 1 phần tử của HTML)
     *Khi đặt class cho một phần tử
     *thay vì khai báo class thì trong React => className
     *
     *Tìm hiểu: fragment
     */

    //State: Để thay đổi trạng thái ứng dụng React (được quản lý thông qua State),
    //React cung cấp một lựa chọn đấy là sử dụng hàm setState. Bằng cách sử dụng hàm này,
    //ứng dụng React sẽ tự động cập nhật lại State hiện tại, cũng như re-render lại giao diện của nó,
    //giúp ứng dụng có được dữ liệu mới nhất.

    //key:value
    state = {
        firstName: "",
        lastName: "",
    };

    //Events DOM chính là việc người dùng tương tác với giao diện web app,
    //từ việc click button, hover text, image... cho đến nhấn ký tự keyboard.

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
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleLastName(event)}
                    />
                    <br />
                    <br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent name={"child one"} />
                <ChildComponent name={"child tow"} />
                <ChildComponent name={"child three"} />
            </>
        );
    }
}

export default MyComponent;
