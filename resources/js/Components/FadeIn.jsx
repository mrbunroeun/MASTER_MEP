// resources/js/Components/FadeIn.jsx
import useScrollFade from "@/Hooks/useScrollFade";

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
}) {
    const [ref, visible] = useScrollFade();

    const directionClass = {
        up: "translate-y-10",
        down: "-translate-y-10",
        left: "translate-x-[-60px]",
        right: "translate-x-[60px]",
        scale: "scale-95",
    };

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`
                motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:blur-none
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform
                ${visible ? "opacity-100 translate-x-0 translate-y-0 scale-100 blur-none" 
                          : `opacity-0 ${directionClass[direction]} blur-sm`}
                ${className}
            `}
        >
            {children}
        </div>
    );
}