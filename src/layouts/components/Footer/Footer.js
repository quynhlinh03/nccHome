import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <>
      <div className={cx("footer")}>Copyright © 2021</div>
    </>
  );
}
export default Footer;
