import { useRef } from "react";

interface TabProps {
  children: React.ReactNode;
  setPosition: (position: { left: number; width: number; opacity: number }) => void;
  href: string;
}

function Tab ({ children, setPosition, href }: TabProps) {
  const ref = useRef<HTMLLIElement | null>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-1 py-1 text-xs uppercase mix-blend-difference md:px-3 md:py-1 md:text-md"
    >
      <a href={href} className="text-stone-300">
        {children}
      </a>
    </li>
  );
};


export default Tab
