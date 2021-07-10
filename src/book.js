import React from 'react'

function book(props) {      //Props
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
        <section className="book" onMouseOver = {() => {console.log(title);}}>      {/* onMouseOver Event in HTML tag */}
            <img src={img} alt="Book" />
            <h1 style={{ color: 'rgb(132, 132, 172)' }} onClick={() => {console.log(title);}}>{title}</h1>     {/* JSX CSS */}      {/* onClick Event inside HTML tag */}
            <h4>{author}</h4>
            <button style={{marginTop:'8px', fontSize:'1.2rem', borderRadius:'8px'}} onClick={btnClick}>Click Here</button>     {/* onClick Event without Parameter */}
            <button style={{marginTop:'8px', fontSize:'1.2rem', borderRadius:'8px'}} onClick={() => paramPassingFun(author)}>Click Here</button>     {/* onClick Event without Parameter */}        {/* onClick Event without Parameter */}
        </section>
    );
}

export default book;