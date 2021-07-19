import MdEditor2 from "./components/uidMdEditor/index";
import Menu from "./components/Menu/index";
function App() {
    return (
        <div className="flex h-screen w-screen p-4 bg-hero-pattern bg-repeat-round">
            <Menu />
            <MdEditor2 />
        </div>
    );
}

export default App;
