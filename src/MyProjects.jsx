import React from "react";

const MyProjects=()=>{
    const astyles={
        display: "block",
        marginBottom: "1rem",
    }
    const colorStyle={
        color: "#000",
        ...astyles
    }
    return (
        <>
            <h1>Projects</h1>
           <a style={colorStyle} href="#">Bigkoko Giftcards</a>
           <a style={astyles} href="#">Ikibeho Foundation</a>
           <a style={astyles} href="#">Nezerwa Foundation</a>
           <a style={astyles} href="#">Marketplace</a>
           <a style={astyles} href="#">Calm Tlt</a>
        </>
    )
}

export default MyProjects