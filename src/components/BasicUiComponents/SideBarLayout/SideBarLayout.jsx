import React from "react";
import "./sidebarLayout.css";

const SideBarLayout = ({sidebar, mainContent}) => {
  return (
    <div class="container">
    <aside class="sidebar">
    {sidebar}
    </aside>
    <main class="content">
      {mainContent}
    </main>
  </div>
  );
};

export default SideBarLayout;