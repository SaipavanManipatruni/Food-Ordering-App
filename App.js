
// const heading = React.createElement("h1",{class:"head"},"hello React");


const parent = React.createElement("div",{id:"parent"},React.createElement
                                  ("div",{id:"child"},
                                  [React.createElement("h1",{},"Hello React"),React.createElement("h1",{},"What is React?")]),
                                  React.createElement
                                    ("div",{id:"child2"},
                                    [React.createElement("h1",{},"Hello React Native"),
                                        React.createElement("h2",{},"What is React Native?")]));

               
               
               
               
               
               
               
       
{/* <div id="parent">
    <div id="child">
        <h1>hello React</h1>
        <h2>What is react</h2>
    </div>
    <div id="child2">
        <h1>Hello React native</h1>
        <h2>What is React Native</h2>
    </div>
</div> */}        
               
               
               
               
               
               
               
               
               



const root = ReactDOM.createRoot(document.getElementById("root"))
    
root.render(parent)