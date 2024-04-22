import React from "react";
import "./Demo.scss";

//==== Class component ====
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    //Hàm xử lý xự kiện
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };

    handleOnclickDelete = (job) => {
        console.log("handleOnclickDelete :", job);
        this.props.deleteAJob(job);
    };

    //re-render
    render() {
        //---Khai báo theo ES6 Destructuring
        let { arrJobs } = this.props;
        let showJobs = this.state.showJobs;
        let check = showJobs === true ? "showJobs = true" : "showJobs = false";
        console.log(">>>>> check condition: ", check);
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button
                            className="btn-show"
                            onClick={() => this.handleShowHide()}
                        >
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="job-list">
                            {arrJobs.map((item) => {
                                return (
                                    <div key={item.id}>
                                        {item.title}- {item.salary}$ <></>{" "}
                                        <span
                                            onClick={() =>
                                                this.handleOnclickDelete(item)
                                            }
                                        >
                                            x
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>
                                Hide
                            </button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

//==== Function component ====
//Dùng với hook
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-list">
//                 {arrJobs.map((item) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}$
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

export default ChildComponent;
