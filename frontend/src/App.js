import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TransformSection from "./components/TransformSection";
import TestimonialsSection from "./components/TeatimonalsSection";
import Footer from "./components/Footer";
import Store from "./components/Store";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dashboard from "./components/BuyerDashboard";
import SellerDashboard from "./components/SellerDashboard";
import CartPage from "./components/CartPage";
import RentalsPage from "./components/RentalsPage";
import InsurancePage from "./components/InsurancePage";
import "./App.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); 
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <FeaturesSection/>
            <TransformSection/>
            <TestimonialsSection/>
            <Footer/>
          </>
        } />
      <Route path="/store" element={<Store/>} />
      <Route path="/signin" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard"element={setIsSignedIn ? <Dashboard /> : <Navigate to="/signin" />}/>
      <Route path="/seller-dashboard" element={isSignedIn ? <SellerDashboard /> : <Navigate to="/signin" />} /> 
      <Route path="/cart" element={<CartPage />} />
      <Route path="/rentals" element={<RentalsPage />} /> 
      <Route path="/insurance" element={<InsurancePage />} /> 
       </Routes>
    </div>
  );
}

export default App;
