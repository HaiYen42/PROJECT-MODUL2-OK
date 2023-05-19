import React from 'react'
import {MenuFoldOutlined, MenuUnfoldOutlined,UserOutlined,ShoppingCartOutlined, ShopOutlined} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

  const { Header, Sider, Content } = Layout;

export default function Admin() {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  return (
    <>
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <Link to={'/admin/customer'}>Customer</Link>
            },
            {
              key: '2',
              icon: <ShopOutlined />,
              label: <Link to={'/admin/product'}>Product</Link>
            },
            {
              key: '3',
              icon: <ShoppingCartOutlined />,
              label: <Link to={'/admin/invoice'}>Invoice</Link>,
            }
           
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background:" #ccd5ae",
          }}
        > <h1 style={{fontWeight: "bolder", padding:"13px 50px", color:"#013a63"}}>ADMIN PAGE</h1>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        
        </Header>
     
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </>
  )
}
