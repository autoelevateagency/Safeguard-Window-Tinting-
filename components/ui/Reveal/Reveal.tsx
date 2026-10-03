"use client";

import {
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
  type HTMLAttributes,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "h2" | "h3" | "p" | "span";
} & HTMLAttributes<HTMLElement>;

export const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
  ...rest
}: RevealProps): ReactElement => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`rv ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};
