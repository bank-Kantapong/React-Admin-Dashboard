import React from "react";
import "./sidebar.css";
import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ isActive, icon, title }) => {
  return (
    <div className="sidebar__item">
      <div className={`sidebar__item-inner ${isActive}`}>
        <i className={icon}></i>
        <span>{title}</span>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();

  const activeItem = sidebar_items?.findIndex(
    (item) => item?.route === window.location.pathname
  );

  const goToRoute = (route) => {
    navigate(route);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="company logo" />
      </div>
      {sidebar_items?.map((item, index) => (
        <div key={index} onClick={() => goToRoute(item?.route)}>
          <SidebarItem
            title={item?.display_name}
            icon={item?.icon}
            isActive={index === activeItem ? 'active' : ''}
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
