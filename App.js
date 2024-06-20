import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "headi" }, 
    "hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading)//javascript object

// root.render(heading);//converting object to h1 tag

/*
    <div id="parent">
        <div id="child">
            <h1>Hello1</h1>
            <h2>Sibling</h2>
        </div>
    </div>

*/
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(//array for multiple childs
            "h1",
            {},
            "Hello"
        ),
        React.createElement(
            "h1",
            {},
            "Sibling"
        )]
    )
)

const old = document.getElementById("old");

root.render(heading)// replaces the prev content// works only inside the root

//This become so ugly
//JSX




// old.innerHTML="hello bro"//Idk why it is getting reaplaced
