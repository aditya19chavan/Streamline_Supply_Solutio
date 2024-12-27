import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/SElogo.png';  // Correct path to the image

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 mt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
        <div class="container ">
        <div class="row">
          {/* Company Info */}
        
          <div className="col-xl-2 col-3 mt-5">
            <h3 className="text-lg font-semibold mb-4">TechCorp</h3>
            <p className="text-sm mb-4">
              Empowering innovation through technology solutions since 2014. We build the future, one line of code at a time.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook className="w-6 h-6" /> 
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter className="w-6 h-6" /> 
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
             
            </div>
          </div>

          {/* Services */}
          <div className="col-xl-2 col-3 mt-5">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                Web Development
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Mobile Apps
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Cloud Solutions
                </a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                 UI/UX Design
                </a>
              </li>
<li class="nav-item">
                <a class="nav-link" href="#">
              Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-xl-2 col-3 mt-5">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                 Careers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                  Press Kit
                </a>
              </li>
<li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

          </div>

          {/* Contact */}
          <div className="col-xl-2 col-3 mt-5">
            
            
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            
              <ul className="nav flex-column">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4"/> 
                  <span>contact@techcorp.com</span>
                </li>
                <br/>
                <li>123 Tech Street</li>
                <li>Silicon Valley, CA 94025</li>
                <li>United States</li>
              </ul>
            </div>
          </div>
          </div>

          <hr />
        
          
       
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100px' }}>
        <div className="row w-100">
          <div className="col text-center">
            <p className="text-sm">© 2024 ShivEngineers. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
     

      
    </footer>
  );
};

export default Footer;
