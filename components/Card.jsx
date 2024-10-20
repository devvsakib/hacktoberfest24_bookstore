import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState(items);

    useEffect(() => {
        startFlipping();
    }, []);
    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards) => {
                const lastCard = prevCards[prevCards.length - 1];
                return [lastCard, ...prevCards.slice(0, prevCards.length - 1)];
            });
        }, 5000);

        return () => clearInterval(interval);
    };

    return (
        <div className="relative  h-60 w-60 md:h-60 md:w-96">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="font-normal text-neutral-700 dark:text-neutral-200">
                            {card.content}
                        </div>
                        <div>
                            <p className="text-neutral-500 font-medium dark:text-white">
                                {card.name}
                            </p>
                            <p className="text-neutral-400 font-normal dark:text-neutral-200">
                                {card.designation}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
