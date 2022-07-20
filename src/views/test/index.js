import { useEffect } from "react";
import { signIn, getUser } from "api/login";

function Test() {
  const fn = async () => {
    const res = await signIn();
    const res2 = await getUser();
    console.log("res", res, res2);
  };
  useEffect(() => {
    fn();
  }, []);
  return (
    <div id="Test" className="test-container">
      test
    </div>
  );
}

export default Test;
