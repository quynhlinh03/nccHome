import classNames from "classnames/bind";
import styles from "./Course.module.scss";

const cx = classNames.bind(styles);

function CourseItem({ title, img, alt, content }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("inner")}>
        <div className={cx("img")}>
          <img src={img} alt={alt} />
        </div>
        <div className={cx("content")}>{content}</div>
      </div>
    </div>
  );
}

export default CourseItem;
