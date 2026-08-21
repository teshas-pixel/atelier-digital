import { useEffect, useRef, useState } from "react";

export function EditorialCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.16;
      pos.y += (target.y - pos.y) * 0.16;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      setVisible(true);
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cursor]");
      setLabel(el ? (el as HTMLElement).dataset["cursor"] || null : null);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden items-center justify-center rounded-full border border-ink/60 text-[9px] tracking-[0.25em] text-ivory transition-[width,height,background-color,opacity,border-color] duration-500 ease-out md:flex"
      style={{
        width: label ? 92 : 12,
        height: label ? 92 : 12,
        opacity: visible ? 1 : 0,
        backgroundColor: label ? "var(--wine)" : "var(--ink)",
        borderColor: label ? "var(--wine)" : "transparent",
      }}
    >
      {label}
    </div>
  );
}
