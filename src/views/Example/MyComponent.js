import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
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
        arrJobs: [
            { id: "abcJob1", title: "Developer", salary: "500" },
            { id: "abcJob2", title: "Testers", salary: "400" },
            { id: "abcJob3", title: "Project managers", salary: "1000" },
        ],
    };

    addNewJob = (job) => {
        console.log("check : ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
    };

    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs,
        });
    };

    //Events DOM chính là việc người dùng tương tác với giao diện web app,
    //từ việc click button, hover text, image... cho đến nhấn ký tự keyboard.

    render() {
        console.log(">>>> Call render: ", this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;
