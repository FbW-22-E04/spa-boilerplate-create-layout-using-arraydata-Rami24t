import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
    <li key={0} className="nav-item">
        <a className="nav-link" href="www.google.com">Link to google.com</a>
    </li>,
    <li key={1} className="nav-item">
        <a className="nav-link" href="www.facebook.com">Link to facebook.com</a>
    </li>,
    <li key={2} className="nav-item">
        <a className="nav-link" href="www.amazon.com">Link to amazon.com</a>
    </li>
];

const content = <ul className="nav">{navlinkItems}</ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
