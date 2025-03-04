import React from "react";
import "./Home.css";

import { BookOutlined,CodeOutlined,SolutionOutlined, AppstoreOutlined} from '@ant-design/icons';


function Highlight() {
  return (
    <div className="highlights flex">
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <BookOutlined style={{fontSize:30,padding:"10px 0px",}}/>
          <h1>1000+</h1>
          <p>Comprehensive and top notch learning resources are available</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <CodeOutlined style={{fontSize:30,padding:"10px 0px",}}/>
          <h1>800+</h1>
          <p>Development resources which required for a sofware development</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <SolutionOutlined style={{fontSize:30,padding:"10px 0px",}}/>
          <h1>50+</h1>
          <p>Job profiles are listed yet in cureent scenario</p>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <AppstoreOutlined style={{fontSize:30,padding:"10px 0px",}}/>
          <h1>2000+</h1>
          <p>Best Learning Material and Career Guidance for Engineering Students.</p>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
