import MdEditor2 from "./components/uidMdEditor/index";
import Menu from "./components/Menu/index";
function App() {
    return (
        // flex items-center justify-between flex-wrap bg-teal-500 p-6
        <div className="flex h-screen w-screen">
            <Menu />
            {/* <ReactMarkdown># Hello, *world*!</ReactMarkdown>
            <MdEditor /> */}
            <MdEditor2 />
        </div>
    );
}

export default App;
