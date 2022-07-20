import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix500);

function Page500() {
  return <div className={cx("container")}>500</div>;
}

export default Page500;
