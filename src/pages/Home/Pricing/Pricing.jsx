import React, { useEffect } from "react";
import { motion } from "framer-motion";  
import "./Pricing.css"; 

function Pricing({p1,p2}) {
  const plans = [
    { name: "Basic plan", price: "₱700/week", 
      features: ["Access to gym equipment", "1 Group Class per week", "Free suntokan"],
    },
    { name: "Standard plan", price: "₱1000/month",
      features: ["All Basic features", "5 Group Classes per week", "1 Personal Training Session"],
    },
    { name: "Premium plan", price: "₱2,500/year",
      features: ["All Standard features", "Unlimited Classes", "Unlimited Personal Training"],
     },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing">
      <div className="pricing-header">
          <h2>{p1}</h2>
        </div>
      <div className="pricing-container">
  
        {plans.map((plan, i) => (
          <motion.div
            key={i}  
            className="pricing-card"
            initial={{ opacity: 0, y: 50}}
            whileInView={{ opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: i * 0.2}}
            viewport={{ once: true, amount: 0.2}}
          >
            <h3>{plan.name}</h3>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button>{p2}</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
