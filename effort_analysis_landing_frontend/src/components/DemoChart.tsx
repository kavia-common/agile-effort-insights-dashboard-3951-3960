"use client";
import React, { useEffect, useRef } from "react";

// PUBLIC_INTERFACE
/** Interactive demo chart (animated placeholder/random data for landing page) */
export default function DemoChart() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Animation: draw a translucent chart updating every 80ms
    let progress = 0;
    let raf: number;

    function draw() {
      // Chart bg
      ctx.clearRect(0, 0, 320, 120);
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.fillStyle = "#3B82F6";
      ctx.fillRect(0, 0, 320, 120);
      ctx.restore();

      // Draw animated line
      ctx.beginPath();
      ctx.moveTo(0, 100);
      for (let i = 0; i <= 32; i++) {
        const x = (i / 32) * 320;
        const y =
          100 -
          Math.sin(i / 8 + progress * 0.08) * 35 -
          Math.cos(i / 3.5 + progress * 0.10) * 10 +
          (progress % 2) * 2;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#F59E42";
      ctx.lineWidth = 4;
      ctx.shadowColor = "#F59E42";
      ctx.shadowBlur = 12;
      ctx.stroke();

      ctx.shadowBlur = 0;

      progress += 1;
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => raf && cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="flex flex-col items-center py-20 bg-background">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-5 text-center">
        Demo Visualization
      </h2>
      <div className="rounded-2xl shadow-fancy bg-secondary p-6 mx-auto border border-primary/20">
        <canvas ref={canvasRef} width={320} height={120} />
      </div>
      <p className="text-lg text-text opacity-80 mt-4 max-w-md text-center">
        See how your sprint data can animate into actionable insights with a single click.
      </p>
    </section>
  );
}
