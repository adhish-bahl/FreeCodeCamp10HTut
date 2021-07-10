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
const data = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Clean Code",
        author: "Robert C Martin",
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/81RkzIXMFxL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Grokking Algorithms",
        author: "Aditya Bhargava ",
    },
    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UY327_FMwebp_QL65_.jpg",
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke ",
    },
];

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

function Book(props) {      //Props
    // const {img, title, author} = props.book;
    const { img, title, author } = props;       // Destructuring

    function btnClick(e) {
        console.log(e);
        console.log(e.target);
    }

    const paramPassingFun = (author) => {
        console.log(author);
    }

    return (
        <section className="book">
            <img src={img} alt="Book" />
            <h1 style={{ color: 'rgb(132, 132, 172)' }} onClick={() => console.log(title)}>{title}</h1>     {/* JSX CSS */}      {/* onClick Event inside HTML tag */}
            <h4>{author}</h4>
            <button style={{marginTop:'8px', fontSize:'1.2rem', borderRadius:'8px'}} onClick={btnClick}>Click Here</button>     {/* onClick Event without Parameter */}
            <button style={{marginTop:'8px', fontSize:'1.2rem', borderRadius:'8px'}} onClick={() => paramPassingFun(author)}>Click Here</button>     {/* onClick Event without Parameter */}        {/* onClick Event without Parameter */}
        </section>
    );
}

ReactDom.render(<Books />, document.getElementById("root"));
