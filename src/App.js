import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";

import MdEditor from "./components/mdEditor/index";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
            <ReactMarkdown># Hello, *world*!</ReactMarkdown>
            <MdEditor />
        </div>
    );
}

export default App;
