import { useEffect, useState } from "react";
import { signIn, getUser } from "api/login";
import PassInput from "components/passInput";

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
      <PassInput width="280px" value={a} onChange={(v) => setA(v)} />
    </div>
  );
}

export default Test;
