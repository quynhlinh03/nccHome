import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "../../../config/config";
import MenuItem from "./Menu/MenuItem";
import Menu from "./Menu/Menu";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="Home" to={config.routes.home} />
        <MenuItem title="Services" to={config.routes.new} />
        <MenuItem title="News" to={config.routes.new} />
        <MenuItem title="Blog" to={config.routes.new} />
        <MenuItem title="Contact" to={config.routes.new} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
