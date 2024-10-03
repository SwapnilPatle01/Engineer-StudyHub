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
import AboutUsComponent from "./Components/AboutUs/AboutUsComponent";
import ContactUs from "./Components/ContactUs/ContactUs";
import KnowMorePage from "./Components/JobPortal/KnowMore";

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />{" "}
            {/* Set this as the default page */}
            <Route path="homePage" element={<HomePage />} />
            <Route path="Dashboard" element={<Dashboardpage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="learning-material" element={<LearningMaterial />} />
            <Route path="JobPortal" element={<JobPortalPage />} />

            <Route path="DevelopersHub" element={<DeveloperPage />} />
            <Route path="job/:id" element={<JobDetails />} />
            
                        <Route path="/know-more/:jobId" element={<KnowMorePage />} /> {/* Dynamic route */}

            <Route path="AboutUs" element={<AboutUsComponent />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="engineerLib" element={<LearningMaterial />} />
            <Route path="*" element={<JobPortalPage />} />{" "}
            {/* Catch-all route */}
          </Route>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
