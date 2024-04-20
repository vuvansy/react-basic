import React from "react";

//Stateless (Function component) và StateFull (Class component) là hai loại component được sử dụng phổ biến nhất của React.
//==== Class component ====
// class ChildComponent extends React.Component {
//     //re-render
//     render() {
//         //=> Props (viết tắt của Properties) là cách Child Component có thể Inherit (kế thừa) lại data từ Parent Component truyền xuống.
//         //Với việc sử dụng props, luồng dữ liệu sẽ được truyền theo kiểu Top to Bottom (truyền từ trên xuống dưới).

//         console.log(">>>> Check props: ", this.props);
//         //---Cách khai báo Js
//         // let name = this.props.name;
//         // let age = this.props.age;

//         //---Khai báo theo ES6 Destructuring
//         let { arrJobs } = this.props;
//         return (
//             <>
//                 <div className="job-list">
//                     {arrJobs.map((item) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}- {item.salary}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </>
//         );
//     }
// }

//==== Function component ====
//Dùng với hook
const ChildComponent = (props) => {
    let { arrJobs } = props;
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
};

export default ChildComponent;
