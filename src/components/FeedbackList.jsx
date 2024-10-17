import { useContext } from "react";

import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -10 }} // Initial state (hidden and slightly above)
            animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
            exit={{ opacity: 0, y: 10 }} // Fade out and move slightly down
            layout // Enable layout animations
            transition={{ duration: 0.3 }} // Duration of the animation
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
