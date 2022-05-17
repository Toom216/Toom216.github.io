import "./App.css";
import IncrDecrComponent from "./Components/IncrDecrComponent";
import ToDoList from "./Components/ToDoList";
import RandomImgColorQuote from "./Components/RandomImgColorQuote";

function App() {
    return (
        <div className="app">
            <header className="app__header">
                <RandomImgColorQuote />
            </header>
        </div>
    );
}

export default App;
