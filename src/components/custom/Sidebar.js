import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import 'react-pro-sidebar/dist/css/styles.css';

const Home = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          ssss
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <MenuItem icon={<FaTachometerAlt />} >'dashboard'</MenuItem>
          <MenuItem icon={<FaTachometerAlt />} ><Link to="/elections">Elections</Link></MenuItem>
          <MenuItem icon={<FaTachometerAlt />} >'dashboard'</MenuItem>
          <MenuItem icon={<FaTachometerAlt />} >'dashboard'</MenuItem>
          <MenuItem icon={<FaTachometerAlt />} >'dashboard'</MenuItem>
        </Menu>
        
      </SidebarContent>

      
    </ProSidebar>
  );
};

export default Home