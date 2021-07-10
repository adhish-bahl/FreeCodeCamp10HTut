import React from "react";
import ReactDom from "react-dom";

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
// --------------------------------------------------------------------------------------------------------------------------------------------

// ARROW FUNCTIONS AS COMPONENTS
// const ArrowFun = () => {
//     return (
//             React.createElement("h1", {}, "Hello Friends!")
//             // React.createElement("div", {}, React.createElement("h6", {}, "This is Adhish Bahl!"));
//     );
// }
// ReactDom.render(<ArrowFun/>, document.getElementById("root"));
// --------------------------------------------------------------------------------------------------------------------------------------------

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
// --------------------------------------------------------------------------------------------------------------------------------------------

// Amazon Grid Clone
// function Books() {
//     return <section>
//         <Book/>
//         <Book/>
//         <Book/>
//     </section>;
// }

// function Book() {
//     return (
//         <section>
//             <Image />
//             <BookName />
//             <Author />
//             {/* <Price/> */}
//         </section>
//     );
// }

// const Image = () => (
//     <img
//         src="https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_UY327_FMwebp_QL65_.jpg"
//     />
// );
// const BookName = () => <h2>Clean Code</h2>;
// const Author = () => <h4>by Robert C Martin</h4>;
// const Price = () => <h3>₹950</h3>;

// ReactDom.render(<Books />, document.getElementById("root"));
// --------------------------------------------------------------------------------------------------------------------------------------------


// PROPS IN REACT, USED IN AMAZON CLONE
import "./index.css";

// importing style 1, same name as the component in source file
import {data} from './data'

// importing style 2, can be different name as the component in source file, more used
import Book from './book'

function Books() {
    return (
        <section className="container">
            {data.map((data) => {       // Making Proper List
                return (
                    //<Book key={data.id} book={book} />
                    <Book key={data.id} {...data} /> // Seperation Operator        // key for all
                );
            })}
        </section>
    );
}

ReactDom.render(<Books />, document.getElementById("root"));
