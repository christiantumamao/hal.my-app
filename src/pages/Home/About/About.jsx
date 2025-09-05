import { motion } from "framer-motion";
import gym1 from "../../../assets/10.jpeg";
import gym2 from "../../../assets/11.jpeg";
import gym3 from "../../../assets/12.jpeg";
import gym4 from "../../../assets/13.jpeg";
import "./About.css";

function About({ n1, n2, n3 }) {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Side Image */}
        <motion.div
          className="about-main-img"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={gym1} alt="Gym" />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{n1}</h2>
          <p>
            At <span>{n2}</span>, {n3}
          </p>

          {/* Mini Gallery */}
          <div className="about-gallery">
            <img src={gym2} alt="Gym 2" />
            <img src={gym3} alt="Gym 3" />
            <img src={gym4} alt="Gym 4" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;
