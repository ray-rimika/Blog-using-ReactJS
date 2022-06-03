import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from './pages/register/Register';
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./topbar/TopBar";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const user=false;
  return (
    <>
      <BrowserRouter>
      <TopBar />
        <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/register">{user?<Home/>:<Register/>}</Route>
        <Route exact path="/login">{user?<Home/>:<Login/>}</Route>
        <Route exact path="/write">{user?<Write/>:<Register/>}</Route>
        <Route path="/settings" component={Settings}/>
        <Route exact path="/post/:postId">
          <Single/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
