import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Service.css";

import Taekwando from "../../../assets/ff.jpg";
import weightImg from "../../../assets/2.jpeg";
import Boxing from "../../../assets/4.jpeg";
import PowerHour from "../../../assets/f3.jpg";
import fitSteps from "../../../assets/OIP.jpeg";

function Service({ s1, s2 }) {
  const classes = [
    { id: 1, name: "Taekwondo", image: Taekwando },
    { id: 2, name: "Weight Training", image: weightImg },
    { id: 3, name: "Boxing/Muay Thai", image: Boxing },
    { id: 4, name: "Power Hour", image: PowerHour },
    { id: 5, name: "FitSteps", image: fitSteps },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div className="service-section">
      <div className="service-container">
        <div className="service-header">
          <h2>{s1}</h2>
          <p>{s2}</p>
        </div>

        <div className="service-grid">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="service-card"
            >
              <div className="service-img">
                <img src={classItem.image} alt={classItem.name} />
              </div>

              {/* Overlay text */}
              <div className="card-overlay">
                <span className="card-number">
                  {String(classItem.id).padStart(2, "0")}
                </span>
                <span className="card-title">{classItem.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
