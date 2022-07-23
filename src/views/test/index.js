import React, { useEffect, useState } from "react";
import { signIn, getUser } from "api/login";
import PassInput from "components/passInput";
import Qrcode from "components/qrcode";
import PropTypes from "prop-types";

class Iex extends React.Component {
  render() {
    return <div>Iex</div>;
  }
}
Iex.propTypes = {
  str: PropTypes.string.isRequired,
};

function Test() {
  const fn = async () => {
    const res = await signIn();
    const res2 = await getUser();
    console.log("res", res, res2);
  };
  useEffect(() => {
    fn();
  }, []);
  const [a, setA] = useState("");
  return (
    <div id="Test" className="test-container">
      test
      <Iex />
      <PassInput width="280px" value={a} onChange={(v) => setA(v)} />
      <Qrcode value={a} timeout="dddd" refresh={() => setA(a + "1")} />
    </div>
  );
}

export default Test;
