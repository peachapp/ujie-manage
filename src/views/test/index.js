import { useEffect } from "react";
import { signIn } from "api/login";

function Test() {
  const fn = async () => {
    const res = await signIn();
    console.log("res", res);
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
