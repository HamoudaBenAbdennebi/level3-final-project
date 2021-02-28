import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./components/Login/loginComponents/Form";
import FormLog from "./components/Login/loginComponents/FormLog";
import LogSign from "./components/Login/LogSign";
import Index from "./components/Home/Index";
import ShowBooks from "./components/book/components/ShowBooks";
import BookMain from "./components/book/BookMain";
const Home = () => <div>welcome to home</div>;

const App = () => {
  return (
    <div>
      {/* <Index /> */}
      <Switch>
        <Route exact path={"/register"} component={Form} />
        <Route exact path={"/login"} component={FormLog} />
        <Route exact path={"/"} component={Index} />
        <Route exact path={"/show-books"} component={BookMain} />
      </Switch>
    </div>
  );
};

export default App;
