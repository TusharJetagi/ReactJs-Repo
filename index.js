// JavaScript Method to access root and append things

// const root = document.querySelector(".root");

// const heading = document.createElement("h1");
// heading.textContent = "Hello World from JS";
// root.appendChild(heading);


// Using react below Method to access root and append things
const header = React.createElement(
  "div",
  { className: "header" },
  React.createElement("div", { className: "logo" }, [
    React.createElement("h1", {}, "image"),
    React.createElement("h2", {}, "image2"),
  ])
);

console.log(header);

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(header);
