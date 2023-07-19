import classNames from "classnames/bind";
import styles from "./Course.module.scss";

const cx = classNames.bind(styles);
function Course({ children }) {
  return <div className={cx("container")}>{children}</div>;
}

export default Course;
