import { useRoutes } from "react-router-dom";
import { routes } from "routers";
import logo from "logo.svg";
import { Button } from "antd";
import "./App.less";

function App() {
  const elements = useRoutes(routes);
  return elements;

  // return (
  //   <div className="App">
  //     <Button type="primary">按钮</Button>
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
