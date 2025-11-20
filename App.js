// const heading=React.createElement("h1",{id:"heading"},"Hello world from React")
const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading"},"I am h1 tag inside child1 div"),
        React.createElement("h2",{id:"heading"},"I am h2 tag inside child1 div")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading"},"I am h1 tag inside child1 div"),
        React.createElement("h2",{id:"heading"},"I am h2 tag inside child1 div")
    ])
])

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);