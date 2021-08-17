import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <>
      <Helmet
        defaultTitle="Templated"
        titleTemplate="%s - Design & Development"
      ></Helmet>

      <div className="">
        <header className="App-header">
          <BrowserRouter>
            <MainRoute />
          </BrowserRouter>
        </header>
      </div>
    </>
  );
};

export default App;
