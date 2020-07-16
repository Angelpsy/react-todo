import React from "react";
import classNames from "classnames";
import { Layout } from "antd";
import {ComponentProps} from "@/types/component";

import "./styles.css";

const { Header, Content, Footer } = Layout;

const ViewBase: React.FC<ComponentProps> = (props) => {
  return (
    <Layout className={classNames("v-base", "layout", props.className)}>
      <Header>
        <div className="logo" />
      </Header>
      <Content>
        {props.children}
      </Content>
      <Footer>Copy &copy;</Footer>
    </Layout>
  );
};

export default ViewBase;
