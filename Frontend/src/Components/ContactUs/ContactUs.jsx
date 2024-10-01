import React from "react";
import { Button, Empty, Typography } from 'antd';

function ContactUs() {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{ height: 60 }}
      description={
        <Typography.Text>
          We are working on it <a href="#API">Waiting for API</a>
        </Typography.Text>
      }
    >
      <Button type="primary">Contribute</Button>
    </Empty>
  );
}

export default ContactUs;
