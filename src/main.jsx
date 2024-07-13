// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {ContextData} from "./components/ContextFile.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
<ContextData>
<App />
</ContextData>
)