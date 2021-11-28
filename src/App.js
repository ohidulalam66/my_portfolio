import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AnimatedCursor from "react-animated-cursor";
import MenuBar from './Components/MenuBar/MenuBar';

function App() {
    return (
        <div className="App">
            <AnimatedCursor
                innerSize={7}
                outerSize={9}
                color='193, 11, 111'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <MenuBar />
        </div>
    );
}

export default App;
