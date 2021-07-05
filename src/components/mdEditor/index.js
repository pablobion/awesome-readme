import { useState, useRef, useEffect } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

const MdEditorComp = () => {
    const [text, setText] = useState("");
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    const breakline = `

    `;

    const editorMdRef = useRef();

    // Finish!
    function handleEditorChange({ html, text }) {
        const lastChar = text.slice(text.length - 1, text.length);
        if (lastChar === "\n") text = `${text.substring(0, text.lastIndexOf("\n"))}\n\n${text.substring(text.lastIndexOf("\n") + 1)}`;

        setText(text);
    }

    return (
        <>
            {/* <button onClick={() => setText(text + "\n teste " + "![](https://github-readme-streak-stats.herokuapp.com/?user=pablobion&theme=buefyk&hide_border=true)" + "\n\n" + ".")}>teste</button> */}
            <MdEditor ref={editorMdRef} value={text} style={{ height: "500px" }} renderHTML={(text) => mdParser.render(text)} onChange={handleEditorChange} />
        </>
    );
};

export default MdEditorComp;
