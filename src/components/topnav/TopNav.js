import Dropdown from "../dropdown/Dropdown";
import "./topnav.css";
import notifications from "../../assets/JsonData/notification.json";
import { useNavigate, Link } from "react-router-dom";
import user_image from "../../assets/images/bank.jpg";
import user_menu from "../../assets/JsonData/user_menus.json";
import ThemeMenu from "../thememenu/ThemeMenu";
const currentUser = {
  display_name: "Bank Kantapong",
  image: user_image,
};

const renderNotification = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item?.icon}></i>
    <span>{item?.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user?.image} alt="user_image" />
    </div>
    <div className="topnav__right-user__name">{user?.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item?.icon}></i>
      <span>{item?.content}</span>
    </div>
  </Link>
);

const TopNav = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(currentUser)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotification(item, index)}
            renderFooter={<div onClick={() => goToHome()}>View All</div>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
