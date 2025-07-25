import React from "react";
import "./Testimonial.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I didn’t realize how much my shampoo impacted the oceans. GreenPrint opened my eyes.",
    name: "Mehak, 21",
  },
  {
    quote: "Finally, an aesthetic site that doesn’t bore me to sleep. 10/10 UI.",
    name: "Jay, 19",
  },
  {
    quote: "GreenPrint made me rethink what I buy. It’s like sustainability, but cool.",
    name: "Aarav, 22",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <motion.h2
        className="testimonial-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What Users Are Saying 💬
      </motion.h2>

      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <p className="testimonial-name">— {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
