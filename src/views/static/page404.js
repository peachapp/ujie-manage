import { autoPrefix } from "utils";
import styles from "./index.less";

const cx = autoPrefix(styles.prefix404);

function Page404() {
  return <div className={cx("container")}>404</div>;
}

export default Page404;
