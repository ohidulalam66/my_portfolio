import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import MenuBar from "./Components/MenuBar/MenuBar";
import Home from "./Components/Home/Home";
import ContactMe from "./Components/ContactMe/ContactMe";
import AboutMe from "./Components/AboutMe/AboutMe";
import AllProjects from "./Components/AllProjects/AllProjects";
import MyBlog from "./Components/MyBlog/MyBlog";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";
import HeroPanel from "./Components/HeroPanel/HeroPanel";
import ProjectBuild from "./Components/HeroPanel/ProjectBuild/ProjectBuild";
import BlogBuild from "./Components/HeroPanel/BlogBuild/BlogBuild";
import ProjectUpdate from "./Components/HeroPanel/ProjectUpdate/ProjectUpdate";
import BlogUpdate from "./Components/HeroPanel/BlogUpdate/BlogUpdate";
import ProjectEdit from "./Components/HeroPanel/ProjectUpdate/ProjectEdit/ProjectEdit";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={7}
        outerSize={9}
        color="114, 15, 15"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Router>
        <MenuBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects/:projectId">
            <ProjectDetail />
          </Route>
          <Route path="/allProjects">
            <AllProjects />
          </Route>
          <Route path="/blog">
            <MyBlog />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="/oadb_1414696437">
            <HeroPanel />
          </Route>
          <Route path="/projectBuild">
            <ProjectBuild />
          </Route>
          <Route path="/blogBuild">
            <BlogBuild />
          </Route>
          <Route path="/projectUpdate">
            <ProjectUpdate />
          </Route>
          <Route path="/updateProject/:id">
            <ProjectEdit />
          </Route>
          <Route path="/blogUpdate">
            <BlogUpdate />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
