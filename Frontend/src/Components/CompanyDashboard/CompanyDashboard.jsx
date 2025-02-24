import React, { useState } from "react";
import { Calendar, Layout, Menu, Modal } from "antd";
import { useNavigate, Outlet } from "react-router-dom";
import JobForm from "./CompanyDashbordComponents/CompanyForm";
import MyBarChart from '../BarChart/Index'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import DashboardCard from "./CompanyDashbordComponents/Dashboard Card/Card";
import { Building2, CalendarFoldIcon, CircleHelp, PanelTopDashed, Plus, Repeat2, Settings, User, Users } from "lucide-react";



const { Sider, Content } = Layout;

const colorBgContainer = "#f0f2f5"; // Example background color
const borderRadiusLG = "8px"; // Example border radius

function CompanyDashboard() {
  const navigate = useNavigate();
  const[isModalVisible, setIsModalVisible] = useState(false)


  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  }

  const handleMenuClick = (e) => {
    navigate(e.key); // Navigate to the route based on the key
  };

  function handleClick() {
    alert("Button Clicked!");
  }
  function handleJobSubmit(){
    setIsModalVisible(false)

  }
  function handleCancel(){
    setIsModalVisible(false)
  }

  return (
    <Layout style={{ minHeight: "100vh", }}>
      <Sider
        width={285}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["/company-dashboard"]}
          style={{
            height: "100%",
            borderRight: 0,
            backgroundColor: "#fff",
            color: "#000",
            padding: "16px",
            fontSize: "16px",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
          onClick={handleMenuClick} // Handle menu clicks
        >
          {/* Company Menu */}
          <div className="head-sty" style={{ display: "flex", flexDirection: "column" }}>
            <h1 style={{ color: "#553CDF", fontWeight: "700" }}>Company Dashboard</h1>
          </div>
          <Menu.Item key="/company-dashboard" icon={<PanelTopDashed size={16} />} title="Company"> Dashboard </Menu.Item>
          <Menu.Item key="/company-profile" icon={<Building2 size={16} />}>Company Profile</Menu.Item>
          <Menu.Item key="all-applicants" icon={<Users size={16} />}>All Applicants</Menu.Item>
          <Menu.Item key="/create-job-post" icon={<Repeat2 size={16} />} >Create Job Post</Menu.Item>
          <Menu.Item key="create-event" icon={<CalendarFoldIcon size={16} />} >Create Event</Menu.Item>
          <Menu.Item key="view-notifications" icon={<NotificationOutlined />}> Notifications</Menu.Item>
          <Menu.Item key="settings" icon={<Settings size={16}/>}> Settings</Menu.Item>
          <Menu.Item key="help-center" icon={<CircleHelp size={16} />}> Help Center</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
        >
          <div className="flex justify-between m-5 " style={{justifyContent: "space-between", padding:"10px 35px" }}>

            {/* Left section , Greeting User  */}
            <div className="flex-wrap" style={{
              display: "flex",
              flexDirection: "column"
            }}>

              <h1 style={{ fontSize: "22px", fontWeight: "900", marginTop: "6px" }}
              >{getGreeting()}, John </h1>

              <p style={{ fontSize: "15px", fontWeight: "400", color: "gray" }}>
                Here is your job listings report </p>

            </div>

            {/* right section :- post Job button */}
            <div style={{ display: "flex", alignItems: "center" }}>

              <button onClick={()=>setIsModalVisible(!isModalVisible)} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#553CDF",
                color: "white",
                border: "none",
                padding: "10px 20px",
                gap: "2px",
                borderRadius: "6px",
                fontWeight: "600", cursor: "pointer"
              }}>

                <Plus style={{ width: "19px", height: "19px", strokeWidth: "2px" }} />
                Post a Job

              </button>
            </div>
         {
          <Modal
          title="Create a Job Post"
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null} // No footer buttons for the modal
        >
          <JobForm onSubmit={handleJobSubmit} /> {/* Pass the submission handler */}
        </Modal>
         }
          </div>
          <div className="flex flex-wrap" style={{

            justifyContent: "center",
            gap: "10px",
          }}>
            <DashboardCard
              onClick={handleClick}
              number={`${235}`}
              title={`New Candidates to review`}
              color="#553CDF"
            />

            <DashboardCard
              onClick={handleClick}
              number={`${28}`}
              title={`Scheduled For Next Rounds `}
              color="#56cdad"
            />

            <DashboardCard
              onClick={handleClick}
              number={`${27}`}
              title={`${""}Messages Received `}
              color="#27a4ff"
            />
          </div>
          <div className="main-div w-full flex flex-wrap justify-center md:gap-16 "
           style={{
            justifyContent: "space-around",
            overflow: "hidden"
            }}>
            <div className="w-[600px] mt-2 ml-2"> <MyBarChart /> </div>

             <div className=" md:mr-7 mb-40 border-[1px] border-gray-300 shad rounded w-[320px] h-[140px]">
                  <h1 className="p-4 font-extrabold text-xl">Job Open</h1>
                  <div className="w-full space-x-3 relative bottom-4 ml-4 ">
                    <span className="text-5xl font-bold cursor-pointer">12</span> {/* assign Posted Jobs Here*/}
                  <span className="text-2xl text-gray-300 font-semibold">Jobs Opened</span>
                  </div>
                </div>
          </div>

          {/* Render the selected component */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default CompanyDashboard;
