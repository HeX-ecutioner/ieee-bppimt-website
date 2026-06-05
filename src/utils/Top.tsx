import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Top() {
    return (
        <motion.button
            type="button"
            className="back-to-top-fab"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -4, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            aria-label="Back to top"
            title="Back to top"
        >
            <ArrowUp aria-hidden="true" />
        </motion.button>
    );
}
