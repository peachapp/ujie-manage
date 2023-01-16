import React, { useEffect, useState } from "react";
import { signIn, getUser } from "api/login";
import PassInput from "components/passInput";
import Qrcode from "components/qrcode";
import PropTypes from "prop-types";

class Demo1 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  onClick() {
    this.setState({ count: this.state.count + 1 });
    setTimeout(() => {
      console.log("class count：", this.state.count);
    });
  }
  render() {
    return (
      <div>
        class count: {this.state.count}
        <button onClick={this.onClick.bind(this)}>class count +1</button>
      </div>
    );
  }
}
// Demo1.propTypes = {
//   str: PropTypes.string.isRequired,
// };

function Demo2() {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log("function count：", count);
    });
  };
  return (
    <div>
      function count: {count}
      <button onClick={onClick}>function count +1</button>
    </div>
  );
}

function Test() {
  const fn = async () => {
    const res = await signIn();
    const res2 = await getUser();
    // console.log("res", res, res2);
  };
  useEffect(() => {
    fn();
  }, []);
  const [a, setA] = useState("");
  return (
    <div id="Test" className="test-container">
      test
      <Demo1 />
      <Demo2 />
      <PassInput width="280px" value={a} onChange={(v) => setA(v)} />
      <Qrcode value={a} timeout="dddd" refresh={() => setA(a + "1")} />
    </div>
  );
}

export default Test;
