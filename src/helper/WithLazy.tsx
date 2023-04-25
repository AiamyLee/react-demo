import React, { LazyExoticComponent } from 'react';
import { Col, Row } from 'antd';
export default (Comp: LazyExoticComponent<() => JSX.Element>) => {
  return (
    <React.Suspense
      fallback={
        <Row>
          <Col span={24}></Col>
        </Row>
      }
    >
      <Comp />
    </React.Suspense>
  );
};
