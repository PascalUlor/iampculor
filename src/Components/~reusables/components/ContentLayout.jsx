import React from "react";
import {
  ContentContainer,
  Layout,
  BackButton,
  Inners,
} from "../atoms/ContentLayoutStyles";

const ContentLayout = (
  { children } // eslint-disable-line
) => (
  <ContentContainer>
    <Layout>
      <BackButton className="btn" to="/">
        ←
      </BackButton>
      <Inners>
      {children}
      </Inners>
    </Layout>
  </ContentContainer>
);

export default ContentLayout;
