const heading = React.createElement("div",{id:"grParent"},[
    React.createElement("h3",{},"hello world"),
    React.createElement("h4",{}, React.createElement("div",{id:"parent"},[
        React.createElement("h1",{},"hello world"),
        React.createElement("h2",{},"hello world")
     ]
))
]
);
    
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
