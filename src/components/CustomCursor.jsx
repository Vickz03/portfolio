import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element without expensive style recalculation
            const target = e.target;
            setIsPointer(
                Boolean(
                    target && (
                        target.tagName === 'A' ||
                        target.tagName === 'BUTTON' ||
                        (target.closest && target.closest('a, button, [role="button"], input, textarea, select, .cursor-pointer'))
                    )
                )
            );
        };

        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    return (
        <div className="hidden md:block">
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-secondary rounded-full pointer-events-none z-[9998] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
            />
        </div>
    );
};

export default CustomCursor;
