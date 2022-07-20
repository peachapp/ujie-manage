import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix403);

function Page403() {
  return <div className={cx("container")}>403</div>;
}

export default Page403;
