import React from "react";
import { Button, Empty, Typography } from "antd";

function AboutUs() {
  return (
    <div>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{ height: 200, marginTop: 50 }}
        description={
          <Typography.Text>
            Currently we are woring on it this component is under review 
          </Typography.Text>
        }
      >
        <Button type="primary" style={{ marginBottom: "50px" }}>
          Know More
        </Button>
      </Empty>
    </div>
  );
}

export default AboutUs;
