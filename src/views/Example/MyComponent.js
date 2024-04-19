import React from "react";

class MyComponent extends React.Component {
    /**
     *JSX ==> return block (JSX sẽ trả về một khối - 1 phần tử của HTML)
     *Khi đặt class cho một phần tử
     *thay vì khai báo class thì trong React => className
     *
     *Tìm hiểu: fragment
     */

    //State
    //key:value
    state = {
        name: "T.Break",
        facebook: "Vũ Văn Sỹ",
    };
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    //Events DOM chính là việc người dùng tương tác với giao diện web app,
    //từ việc click button, hover text, image... cho đến nhấn ký tự keyboard.

    handleClickButton = () => {
        console.log("hit the button");
        alert("Click Me!!");
    };

    render() {
        return (
            <>
                <div className="first">
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => {
                            this.handleOnChangeName(event);
                        }}
                    />
                    <br></br>
                    My name is: {this.state.name}
                </div>
                <div>My Facebook chanel: {this.state.facebook}</div>
                <div>
                    <button onClick={() => this.handleClickButton()}>
                        ClickMe
                    </button>
                </div>
            </>
        );
    }
}

export default MyComponent;
