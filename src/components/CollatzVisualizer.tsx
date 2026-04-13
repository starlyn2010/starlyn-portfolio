"use client";

import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Activity } from "lucide-react";

const EASE_OUT = [0.23, 1, 0.32, 1];

export default function CollatzVisualizer() {
  const [inputVal, setInputVal] = useState("27");
  const [sequence, setSequence] = useState<number[]>([]);
  const [isComputing, setIsComputing] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const calculateSequence = (n: number) => {
    const res = [n];
    let curr = n;
    while (curr > 1 && res.length < 500) {
      if (curr % 2 === 0) curr = curr / 2;
      else curr = 3 * curr + 1;
      res.push(curr);
    }
    return res;
  };

  const handleStart = () => {
    const n = parseInt(inputVal);
    if (isNaN(n) || n < 1) return;
    setIsComputing(true);
    const seq = calculateSequence(n);
    setSequence(seq);
  };

  useEffect(() => {
    if (sequence.length === 0 || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = svgRef.current.clientWidth;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 40, left: 60 };

    const x = d3.scaleLinear()
      .domain([0, sequence.length - 1])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLog()
      .domain([1, d3.max(sequence) || 1])
      .range([height - margin.bottom, margin.top]);

    // Line generator
    const line = d3.line<number>()
      .x((_, i) => x(i))
      .y(d => y(d))
      .curve(d3.curveMonotoneX);

    // Grid lines
    svg.append("g")
      .attr("class", "grid opacity-5")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSize(-(height - margin.top - margin.bottom)).tickFormat(() => ""));

    // Path
    const path = svg.append("path")
      .datum(sequence)
      .attr("fill", "none")
      .attr("stroke", "currentColor")
      .attr("stroke-width", 2)
      .attr("class", "text-zinc-900 dark:text-zinc-100")
      .attr("d", line);

    // Animation
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);

    // Dots
    svg.selectAll(".dot")
      .data(sequence)
      .enter()
      .append("circle")
      .attr("class", "fill-zinc-900 dark:fill-zinc-100")
      .attr("cx", (_, i) => x(i))
      .attr("cy", d => y(d))
      .attr("r", 0)
      .transition()
      .delay((_, i) => (i / sequence.length) * 2000)
      .duration(500)
      .attr("r", 2);

    setIsComputing(false);
  }, [sequence]);

  return (
    <section id="research-tool" className="py-32 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div>
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-4">
            06 // Interactive Research
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
            The Hailstone <span className="italic text-zinc-500">Visualizer</span>
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Explore the convergence of orbits. Enter any positive integer to observe 
            its path towards the 4-2-1 loop.
          </p>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="number"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-3 font-mono text-2xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="27"
              />
              <span className="absolute right-0 bottom-3 font-mono text-[10px] text-zinc-400">n₀</span>
            </div>
            
            <button
              onClick={handleStart}
              disabled={isComputing}
              className="group flex items-center justify-center gap-3 bg-black dark:bg-zinc-100 text-white dark:text-black py-4 rounded-xl font-medium text-sm transition-all hover:opacity-90 active:scale-[0.98]"
            >
              {isComputing ? (
                <Activity className="w-4 h-4 animate-pulse" />
              ) : (
                <Play className="w-4 h-4 fill-current" />
              )}
              {isComputing ? "Computing..." : "Run Sequence"}
            </button>
          </div>

          <AnimatePresence>
            {sequence.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 grid grid-cols-2 gap-4"
              >
                <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5">
                  <span className="block font-mono text-[10px] text-zinc-500 mb-2 uppercase">Total Steps</span>
                  <span className="text-xl font-medium dark:text-zinc-100">{sequence.length - 1}</span>
                </div>
                <div className="p-4 bg-zinc-50 dark:bg-white/5 rounded-lg border border-black/5 dark:border-white/5">
                  <span className="block font-mono text-[10px] text-zinc-500 mb-2 uppercase">Peak Value</span>
                  <span className="text-xl font-medium dark:text-zinc-100">{Math.max(...sequence).toLocaleString()}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative aspect-video bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl border border-black/5 dark:border-white/5 overflow-hidden">
          {!sequence.length && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-mono text-xs text-zinc-400">Awaiting input sequence...</p>
            </div>
          )}
          <svg
            ref={svgRef}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
      </div>
    </section>
  );
}
