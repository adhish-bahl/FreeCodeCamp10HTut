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
// function Final () {
//     return (
//         <>
//             <DivH1/>
//             <DivH6/>
//         </>
//     );
// }
    
// function DivH1 () {
//     return (
//         <h1>Hello Friends!</h1>
//     );
// }

// const DivH6 = () => <h6>This is Adhish Bahl here!</h6>;

// ReactDom.render(<Final/>, document.getElementById("root"));


// Amazon Grid Clone
// function Books() {
//     return(
//     <>
//         <Book/>
//         <Book/>
//         <Book/>
//         <Book/>
//         <Book/>
//         <Book/>
//     </>
//     );
// }

// function Book() {
//     return (
//     <>
//         <Image/>
//         <BookName/>
//         <Author/>
//         <Price/>
//     </>
//     );
// }


// const Image = () => (
//   <img src="https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_UY327_FMwebp_QL65_.jpg" />
// );

// const BookName = () => <h2>Clean Code</h2>;

// const Author = () => <h4>>by Robert C Martin</h4>;

// const Price = () => <h3>₹950</h3>;

// ReactDom.render(<Books/>,  document.getElementById("root"));