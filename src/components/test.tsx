import React, { memo } from "react";

type TestProps = {};

const Test = (props: TestProps) => {
  return <div>Test</div>;
};

export default memo(Test);
