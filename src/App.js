import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import MenuBar from "./Components/MenuBar/MenuBar"
import Home from './Components/Home/Home';
import ContactMe from './Components/ContactMe/ContactMe';

function App() {
    return (
        <div>
            <AnimatedCursor
                innerSize={7}
                outerSize={9}
                color='51, 46, 46'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <Router>
                <MenuBar></MenuBar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/projects">
                    </Route>
                    <Route path="/blog">
                    </Route>
                    <Route path="/about">
                    </Route>
                    <Route path="/contact">
                        <ContactMe />
                    </Route>
                    <Route path="*">
                    </Route>


                </Switch>
            </Router>
        </div>
    );
}

export default App;
