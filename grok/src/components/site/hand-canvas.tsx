import { useEffect, useRef } from "react";
import { HAND_EDGES, type Pt } from "@/data/landmarks";
import { cn } from "@/lib/cn";

type Variant = "onInk" | "onPaper";

function lerpPose(from: Pt[], to: Pt[], t: number): Pt[] {
  return from.map((point, index) => {
    const target = to[index] ?? point;
    return [point[0] + (target[0] - point[0]) * t, point[1] + (target[1] - point[1]) * t];
  });
}

function breathePose(pose: Pt[], amount: number): Pt[] {
  const wrist = pose[0] ?? [50, 70];
  return pose.map((point, index) => {
    if (index === 0) return point;
    return [wrist[0] + (point[0] - wrist[0]) * amount, wrist[1] + (point[1] - wrist[1]) * amount];
  });
}

const TIPS = new Set([4, 8, 12, 16, 20]);

export function HandCanvas({
  pose,
  breathe = false,
  variant = "onInk",
  className,
}: {
  pose: Pt[];
  breathe?: boolean;
  variant?: Variant;
  className?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const poseRef = useRef(pose);
  poseRef.current = pose;

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const lines = Array.from(svg.querySelectorAll("line"));
    const dots = Array.from(svg.querySelectorAll("circle"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let visible = true;
    let current = poseRef.current.map((point) => [...point] as Pt);

    const paint = (time: number) => {
      const target = poseRef.current;
      current = reduce ? target.map((point) => [...point] as Pt) : lerpPose(current, target, 0.16);
      const drawn = breathe && !reduce ? breathePose(current, 0.94 + Math.sin(time / 900) * 0.06) : current;

      lines.forEach((line, index) => {
        const edge = HAND_EDGES[index];
        if (!edge) return;
        const a = drawn[edge[0]];
        const b = drawn[edge[1]];
        if (!a || !b) return;
        line.setAttribute("x1", String(a[0]));
        line.setAttribute("y1", String(a[1]));
        line.setAttribute("x2", String(b[0]));
        line.setAttribute("y2", String(b[1]));
      });
      dots.forEach((dot, index) => {
        const point = drawn[index];
        if (!point) return;
        dot.setAttribute("cx", String(point[0]));
        dot.setAttribute("cy", String(point[1]));
      });

      if (visible && !reduce) frame = requestAnimationFrame(paint);
    };

    frame = requestAnimationFrame(paint);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? true;
      if (visible && !reduce) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(paint);
      }
    });
    observer.observe(svg);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [breathe]);

  const lineClass = variant === "onInk" ? "stroke-paper/70" : "stroke-ink/50";
  const dotClass = variant === "onInk" ? "fill-paper" : "fill-ink";

  return (
    <svg
      ref={svgRef}
      viewBox="8 0 84 100"
      className={cn("h-full w-full", className)}
      aria-hidden="true"
    >
      {HAND_EDGES.map((edge, index) => {
        const a = pose[edge[0]] ?? [0, 0];
        const b = pose[edge[1]] ?? [0, 0];
        return (
          <line
            key={index}
            x1={a[0]}
            y1={a[1]}
            x2={b[0]}
            y2={b[1]}
            className={lineClass}
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        );
      })}
      {pose.map((point, index) => (
        <circle
          key={index}
          cx={point[0]}
          cy={point[1]}
          r={index === 0 ? 2.1 : TIPS.has(index) ? 1.7 : 1.25}
          className={TIPS.has(index) ? "fill-lacquer" : dotClass}
        />
      ))}
    </svg>
  );
}
