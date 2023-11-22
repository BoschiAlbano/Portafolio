import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Opacidad = ({ children, width = "100%" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            style={{ position: "relative", overflow: "hidden", width }}
            className=""
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 3, delay: 0.5, type: "keyframes" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Opacidad;
