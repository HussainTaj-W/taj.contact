"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const BackgroundBeams = React.memo(({ className }: { className?: string }) =>
{
    return (
        <div
            className={cn(
                "absolute h-full w-full inset-0 flex items-center justify-center", className
            )}
        >
            <svg
                className="z-0 h-full w-full pointer-events-none absolute"
                width="100%"
                height="100%"
                viewBox="-800 -800 1600 1600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {Array.from({ length: 10 }, (_, i) =>
                {
                    const radius = 200 + i * 150; // Increasing radius
                    const progress = 10 + Math.random() * 80; // Random progress
                    const circumference = 2 * Math.PI * radius;
                    const dashOffset = circumference * (1 - progress / 100); // Calculate offset based on progress

                    const initialRotation = Math.random() * 360; // Random initial rotation

                    return (
                        <>
                            <motion.circle
                                r={radius}
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeWidth={1}
                                strokeDasharray={circumference}
                                strokeLinecap="round"
                            />
                            <motion.circle
                                r={radius}
                                stroke="white"
                                strokeWidth={1}
                                strokeDasharray={circumference}
                                strokeDashoffset={dashOffset}
                                strokeLinecap="round"
                                initial={{ rotate: initialRotation, opacity: 0 }}
                                // animate={{ rotate: [initialRotation, initialRotation + 360], opacity: 1 }}
                                animate={["rotate", "opacity"]}
                                variants={{
                                    rotate: {
                                        rotate: [initialRotation, initialRotation + 360],
                                        transition: {
                                            duration: 30 + Math.random() * 10,
                                            ease: "linear",
                                            repeat: Infinity,
                                        }
                                    },
                                    opacity: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            ease: "linear",
                                            // delay: (10 - i) * .25,
                                            delay: Math.random(),
                                        }
                                    }
                                }}
                            />
                        </>
                    )
                })}
            </svg>
        </div >
    )
})

BackgroundBeams.displayName = "BackgroundBeams"
