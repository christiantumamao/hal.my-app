
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Service from './pages/Home/Service/Service.jsx';
import About from './pages/Home/About/About.jsx';
import Pricing from './pages/Home/Pricing/Pricing.jsx';
import  Contact  from './pages/Home/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

import img1 from "./assets/f5.jpg";
import img2 from "./assets/fff.jpg";
import img3 from "./assets/ff.jpg";
import img4 from "./assets/f3.jpg";
import img5 from "./assets/f1.jpg";

function App() {

  const programs = [
    { number: "01", title: "Weights Training", img: img1 },
    { number: "02", title: "Power Hour", img: img2 },
    { number: "03", title: "Taekwondo", img: img3 },
    { number: "04", title: "FitSteps", img: img4 },
    { number: "05", title: "Boxing / Muay Thai", img: img5 },
  ];
  return (
    <>
      <Navbar
        hub="F3 Zone"
      /> 
      <section id="home">
      <Home 
        programs={programs}
        name1="TAKE YOUR FITNESS TO NEW HEIGHTS"
        name2=" FULL FORCE FITNESS
              For Best Results
              We transform lives through fitness and healthy living."
      /> 
      </section>
      <section id="service">
      <Service
        s1="Our Service"
        s2="Choose the best class that fits your lifestyle and goals."
      />
      </section>
      <About
        n1="ABOUT US"
        n2="F3 Zone"
        n3="We transform lives through fitness and healthy living. 
            Our trainers are committed to helping you achieve your goals 
            with modern equipment and personalized programs."
      />
      <section id="pricing">
      <Pricing
        p1="Pricing plan"
        p2="Join Now"
      />
      </section>
      <Contact
        c1="Contact  US "
        c3="Get in touch"
        c4="09277043559"
      />
      <Footer/>
      
  
    </>
  );
}

export default App;
