import { cn } from "../../lib/utils.ts";
import { AnimatePresence, motion } from "framer-motion";
import {NavLink} from "react-router-dom";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
      {items.map((item, idx) => (
        <NavLink
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle icons={item.icons}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </NavLink>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-green-700 border border-transparent  group-hover:border-lime-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({ className, children, icons }) => {
    return (
      <div className="flex items-center space-x-2">
        <h2 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-2xl", className)}>
          {children}
        </h2>
        {icons && <div className="text-neutral-500 ">{icons}</div>}
      </div>
    );
  };
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-green-200 tracking-wide leading-relaxed text-sm text-justify", className)}>
      {children}
    </p>)
  );
};
