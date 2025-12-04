"use client";
import * as React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Array<{
        text: string;
        image: string;
        name: string;
        role: string;
    }>;
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-lg shadow-purple-500/5 max-w-xs w-full hover:border-purple-500/30 transition-all duration-300"
                                    key={i}
                                >
                                    <div className="text-slate-300 text-sm leading-relaxed italic">{text}</div>
                                    <div className="flex items-center gap-3 mt-5">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={name}
                                            className="h-10 w-10 rounded-full object-cover border-2 border-purple-500/30"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                                            <div className="leading-5 text-slate-400 text-sm tracking-tight">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
