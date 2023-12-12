import React from "react";

// function FunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello, {props.greeting} {props.name}. I know you are {props.age} years old.</h1>;
} 

export default FunctionalGreetingWithProps;