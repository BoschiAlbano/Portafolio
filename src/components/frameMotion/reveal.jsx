import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Reveal = ({ children, width = "100%" }) => {
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
                    hidden: { opacity: 0, x: "100%" },
                    visible: { opacity: 1, x: "0%" },
                }}
                initial={"hidden"}
                animate={mainControls}
                transition={{ duration: 3, delay: 0.5, type: "spring" }}
                className=" flex flex-row justify-center items-center"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
