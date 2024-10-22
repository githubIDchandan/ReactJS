const heading =React.createElement("h1",{id:"heading"},"hello world from react");
/* <div id="parent">
    <div id="child">
        <h1>tag1</h1>
        <h2>tag2</h2>
    </div>
    <div>
        <h1>tag1</h1>
        <h2>tag2</h2>
    </div>
</div> */


const div=React.createElement("div",{id:"parent"},
   [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"tag1"),
        React.createElement("h2",{},"tag2")]
    ),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"tag1"),
        React.createElement("h2",{},"tag2")]
    )]
)












const root =ReactDOM.createRoot(document.getElementById("root"));
// here heading is object not tag reactdom convert into object to tag put into root dom of browser...
root.render(div)



