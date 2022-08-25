import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { AnimatedLetters } from "./AnimatedLetters";
import { useTranslation } from "react-i18next";


export const Hero = () => {
    const { t } = useTranslation();
    const placeholderText = [
        { type: "heading1", text: t("hero.top") },
        {
            type: "heading2",
            text: t("hero.bottom")
        }
    ];


    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    const controls = useAnimationControls()
    const ref = useRef(null)
    const isInView = useInView(ref)

    useEffect(() => {
        isInView && (
            setTimeout(() => {
                controls.start("visible")
            }, 3500))
    }, [isInView])

    return (
        <motion.div
            ref={ref}
            className="banner section"
            initial="hidden"
            animate={controls}
            viewport={{ once: true }}
            variants={container}
        >

            <div >
                {placeholderText.map((item, index) => {
                    return <AnimatedLetters {...item} key={index} />;
                })}
            </div>
        </motion.div>
    );
};