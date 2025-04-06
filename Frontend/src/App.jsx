import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MainLayout from "./Layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import JobPortalPage from "./pages/JobPortalPage";
import DeveloperPage from "./pages/DeveloperPage";
import StudyMaterials from "./Components/StudyMaterials/StudyMaterials";
import CompanyDashboard from "./Components/Clients/CompanyDashboard/CompanyDashboard";
import RegisterPage from "./pages/RegistrationPage";
import Dashboardpage from "./pages/Dashboardpage";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import ProfilePage from "./pages/Profile";
import DashboardHome from "./Components/Clients/Tabs/DashboardHome";
import JobPost from "./Components/Clients/Tabs/JobPost";
import Companies from "./Components/Clients/Tabs/Companies";
import DeveloperDetailPage from "./Components/DevelopersHub/DeveloperResources/DeveloperDetailPage";
function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Menu Items */}
            <Route index element={<HomePage />} />
            <Route path="homePage" element={<HomePage />} />
            <Route path="Dashboard" element={<Dashboardpage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="learning-material" element={<StudyMaterials />} />
            <Route path="DevelopersHub" element={<DeveloperPage />} />
            <Route path="/resources/:key" element={<DeveloperDetailPage />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="JobPortal" element={<JobPortalPage />} />

            <Route path="/" element={<CompanyDashboard />}>
              {/* Nested Routes - These will be displayed inside <Outlet /> in CompanyDashboard */}
              <Route path="Company/Dashboard/" element={<DashboardHome />} />
              <Route path="job-post" element={<JobPost />} />
              <Route path="companies" element={<Companies />}/>
            </Route>
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
