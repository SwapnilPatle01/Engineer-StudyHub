import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainLayout from "./Layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobPortalPage from "./pages/JobPortalPage";
import DeveloperPage from "./pages/DeveloperPage";
import LearningMaterial from "./Components/Learning Material/LearningMaterial";
import RegisterPage from "./pages/RegistrationPage";
import JobDetails from "./Components/JobPortal/JobDetails";
import Dashboardpage from "./pages/Dashboardpage";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import KnowMorePage from "./Components/JobPortal/KnowMore";
import CompanyDashboardPage from "./pages/CompanyDashboardPage";
import CompanyProfile from "./Components/CompanyDashboard/CompanyDashbordComponents/CompanyProfile";
import CreateJobPost from "./Components/CompanyDashboard/CompanyDashbordComponents/CreateJobPost";
import CreateEvent from "./Components/CompanyDashboard/CompanyDashbordComponents/CreateEvent";
import Notifications from "./Components/CompanyDashboard/CompanyDashbordComponents/CreateEvent";
import ProfilePage from "./pages/Profile";
import CompanyDetail from "./Components/CompanyDashboard/CompanyDashbordComponents/CompanyDetail";


function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="homePage" element={<HomePage />} />
            <Route path="Dashboard" element={<Dashboardpage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="learning-material" element={<LearningMaterial />} />
            <Route path="JobDetails" element={<JobPortalPage />} />
            <Route path="DevelopersHub" element={<DeveloperPage />} />
            <Route path="job/:id" element={<JobDetails />} />
            <Route path="/know-more/:jobId" element={<KnowMorePage />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="engineerLib" element={<LearningMaterial />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<JobPortalPage />} />

            {/* Nested Routes for CompanyDashboard */}
            <Route path="/company-dashboard" element={<CompanyDashboardPage />}>
              <Route path="company-profile" element={<CompanyProfile />} />
              <Route path="create-company" element={<CompanyDetail />} />
              <Route path="create-job-post" element={<CreateJobPost />} />
              <Route path="create-event" element={<CreateEvent />} />
              <Route path="view-notifications" element={<Notifications />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
