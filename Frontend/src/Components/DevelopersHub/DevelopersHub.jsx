import React from "react";
import { Button, Empty, Typography } from "antd";

function DevelopersHub() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 200, marginTop:50 }}
      description={
        <Typography.Text>
          This feature is comming soon! Currenty we are releaseing beta version
          of Engineer StudyHub. Stay Tuned
        </Typography.Text>
      }
    >
      <Button type="primary" style={{marginBottom:"50px"}}>Know More</Button>
    </Empty>
  );
}

export default DevelopersHub;
