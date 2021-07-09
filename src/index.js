import React from 'react';
import ReactDom from 'react-dom';

// FIRST COMPONENT
// function FirstComponent () {
//     return (
//         <>
//             <h1>Hello Friends!</h1>
//             <h6>This is Adhish Bahl here!</h6>
//         </>
//     );
// }
// ReactDom.render(<FirstComponent/>, document.getElementById("root"));


// ARROW FUNCTIONS AS COMPONENTS
// const ArrowFun = () => {
//     return (
//             React.createElement("h1", {}, "Hello Friends!")
//             // React.createElement("div", {}, React.createElement("h6", {}, "This is Adhish Bahl!"));
//     );
// }
// ReactDom.render(<ArrowFun/>, document.getElementById("root"));


// Nested Components
function Final () {
    return (
        <>
            <DivH1/>
            <DivH6/>
        </>
    );
}
    
function DivH1 () {
    return (
        <h1>Hello Friends!</h1>
    );
}

const DivH6 = () => <h6>This is Adhish Bahl here!</h6>;

ReactDom.render(<Final/>, document.getElementById("root"));