import "./App.css";
import { Breadcrumb, Layout } from 'antd';
import React, { useState } from 'react';
import PageRouter from "./common/pageRouters.js";
import PageMenu from "./common/pageMenu.js";
import PageFooter from "./common/pageFooter";
import PageHeaer from "./common/pageHeader";

const { Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout
      id='components-layout-demo-side'
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" ></div>
        <PageMenu />
      </Sider>
      <Layout className="site-layout">
        <PageHeaer />
        <Content className="layout-content"
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Move</Breadcrumb.Item>
            <Breadcrumb.Item>World</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 520,
            }}
          >
            <PageRouter />
          </div>
        </Content>
        <PageFooter />
      </Layout>
    </Layout >
  );
};

export default App;