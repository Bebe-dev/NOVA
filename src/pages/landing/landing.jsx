import React, { useEffect, useRef } from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faChartLine, faTicketAlt, faUsers, faCodeBranch } from '@fortawesome/free-solid-svg-icons';


const useIntersectionObserver = (elementRef, callback, options) => {
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry.target);
          }
        });
      }, options);
  
      const element = elementRef.current;
      if (element) {
        observer.observe(element);
      }
  
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [elementRef, callback, options]);
  };
  
const HeroSection = () => {
  useEffect(() => {
    const customerText = document.getElementById('customer');
    const backgroundSvg = document.getElementById('background-svg');
    const blueCurveSvg = document.getElementById('blue-curve-svg');

    customerText.style.animation = 'moveIn 2s ease-in-out forwards';
    backgroundSvg.style.animation = 'fadeIn 2s ease-in-out forwards';
    blueCurveSvg.style.animation = 'fadeIn 2s ease-in-out forwards';
  }, []);

  return (
    <section className="hero py-20 bg-gray-50 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center space-x-8 relative z-10">
        <div className="text-content text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Provide exceptional <span id="customer" className="text-blue-600">customer</span> support with a system designed for speed and simplicity.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Enjoy smooth and efficient issue resolution with our ticketing system, crafted to improve customer satisfaction and simplify your support processes.
          </p>
          <div className="cta-buttons flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded transition hover:bg-blue-700">
              Sign Up for Free
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded transition hover:bg-gray-100">
              Request Demo
            </button>
          </div>
        </div>
        <div className="image-content relative w-1/2">
          <img src="./public/images/landing-one.png" alt="Customer Support Graphic" className="w-full h-auto" />
        </div>
      </div>
      <svg id="background-svg" className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f0f4f8" fillOpacity="1" d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,213.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <svg id="blue-curve-svg" className="absolute bottom-0 right-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#93c5fd" fillOpacity="1" d="M0,288L40,280C80,272,160,256,240,250.7C320,245,400,256,480,240C560,224,640,192,720,186.7C800,181,880,203,960,213.3C1040,224,1120,224,1200,240C1280,256,1360,288,1400,304L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </section>
  );
};

const FeaturesSection = () => {
    const imageRef = useRef(null);
    const textRef = useRef(null);
  
    useIntersectionObserver(imageRef, (element) => {
      element.classList.add('visible');
    }, { threshold: 0.1 });
  
    useIntersectionObserver(textRef, (element) => {
      element.querySelectorAll('h2, p, button').forEach(el => el.classList.add('visible'));
    }, { threshold: 0.1 });
  
    return (
      <section className="features py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center space-x-8 relative z-10">
          <div className="image-content w-1/2 pr-8 flex justify-center">
            <img ref={imageRef} src="./public/images/landing-two.png" alt="Feature Graphic" className="max-w-xs rounded transition-transform duration-500" />
          </div>
          <div ref={textRef} className="text-content w-1/2 pl-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
              Our Exceptional Features
              <svg className="blue-curve" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0 15 Q50 5, 100 15 T200 15" fill="transparent" stroke="#1e90ff" strokeWidth="4"/>
              </svg>
            </h2>
            <p className="text-lg text-gray-700 mb-8">We offer a variety of interesting features that can help increase your productivity at work and manage your project easily.</p>
            <div className="cta-buttons flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded transition hover:bg-blue-700">Sign Up for Free</button>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded transition hover:bg-gray-100">Request Demo</button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const UnifiedAndMultichannelSection = () => {
    return (
      <section className="combined-section py-20 relative bg-[#eff6ff]">
        {/* Decorative SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#93c5fd"
            fillOpacity="1"
            d="M0,160L48,186.7C96,213,192,267,288,272C384,277,480,235,576,208C672,181,768,171,864,186.7C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192V320H0Z"
          ></path>
        </svg>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="content px-4 md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unified Dashboard</h2>
            <p className="text-lg text-gray-700 mb-8">
              Access comprehensive views of customer interactions, ticket statuses, and team performance. Customize the dashboard to fit your workflow, ensuring all critical information is at your fingertips for quick and informed decision-making.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
          <div className="image px-4 md:px-0 flex justify-center">
            <img src="/images/seamless image.png" alt="Unified Dashboard" className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0" onError={(e) => e.target.src = "/images/fallback-image.png"} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
          <div className="image order-2 md:order-1 px-4 md:px-0 flex justify-center">
            <img src="/images/multichannel image.png" alt="Multichannel Support" className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0" onError={(e) => e.target.src = "/images/fallback-image.png"} />
          </div>
          <div className="content order-1 md:order-2 px-4 md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multichannel Support</h2>
            <p className="text-lg text-gray-700 mb-8">
              Engage with your customers wherever they are. Nova offers seamless multichannel support, allowing you to manage communications across email, social media, live chat, and more from a single platform.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
          <div className="content px-4 md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Ticket Management</h2>
            <p className="text-lg text-gray-700 mb-8">
              Streamline your customer service process with NOVA's robust Ticket Management system. Easily organize, prioritize, and track customer inquiries from submission to resolution, ensuring nothing slips through the cracks.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
          <div className="image px-4 md:px-0 flex justify-center">
            <img src="/images/seamless image.png" alt="Unified Dashboard" className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0" onError={(e) => e.target.src = "/images/fallback-image.png"} />
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
          <div className="image order-2 md:order-1 px-4 md:px-0 flex justify-center">
            <img src="/images/multichannel image.png" alt="Multichannel Support" className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0" onError={(e) => e.target.src = "/images/fallback-image.png"} />
          </div>
          <div className="content order-1 md:order-2 px-4 md:px-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Analytics And Report</h2>
            <p className="text-lg text-gray-700 mb-8">
              Monitor key performance metrics and customer interactions as they happen. Identify trends, measure team performance, and make data-driven decisions to optimize your support strategy and improve customer satisfaction.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Learn more →</a>
          </div>
        </div>
      </section>
    );
  };
  
  
const Landing = () => {
  return (
    <div className="landing-page">
      <header className="flex justify-between items-center w-full p-5 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-600">
          <img src="./public/images/logo.png" alt="logo" className="h-9" />
        </div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="hover:text-blue-600 cursor-pointer transition duration-300">Product</a>
          <a href="#" className="hover:text-blue-600 cursor-pointer transition duration-300">Resources</a>
          <a href="#" className="hover:text-blue-600 cursor-pointer transition duration-300">Solutions</a>
          <a href="#" className="hover:text-blue-600 cursor-pointer transition duration-300">Pricing</a>
          <a href="./login" className="hover:text-blue-600 cursor-pointer transition duration-300">Sign In</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          <a href="./signup"> Start Free Trial</a>
          </button>
        </nav>
      </header>

      <HeroSection />
      

      <section className="services py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">We provide great services for our customers based on needs</h2>
        <div className="services-list grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faEnvelope} className="icon mr-2" /> Shared Inbox
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faComments} className="icon mr-2" /> Feedback Sharing
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faChartLine} className="icon mr-2" /> Analytics & Report
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faTicketAlt} className="icon mr-2" /> Ticket Management
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faUsers} className="icon mr-2" /> Team Collaboration
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faCodeBranch} className="icon mr-2" /> Integration
          </div>
        </div>
      </section>
      <FeaturesSection />

     < UnifiedAndMultichannelSection/>
    </div>
  );
};

export default Landing;
