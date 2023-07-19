import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
        <div className={cx("footer")}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
