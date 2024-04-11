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
            </>
        );
    }
}

export default MyComponent;
