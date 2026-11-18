import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { SAMPLE_SIGNS } from "@/data/landmarks";
import { studioSteps } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { HandCanvas } from "@/components/site/hand-canvas";

export function Studio() {
  const [step, setStep] = useState(0);
  const [signIndex, setSignIndex] = useState(1);
  const [playing, setPlaying] = useState(false);
  const sign = SAMPLE_SIGNS[signIndex] ?? SAMPLE_SIGNS[0];
  const current = studioSteps[step] ?? studioSteps[0];

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % studioSteps.length);
    }, 1600);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-4">
        <ol className="grid gap-2">
          {studioSteps.map((item, index) => {
            const active = index === step;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => {
                    setPlaying(false);
                    setStep(index);
                  }}
                  className={cn(
                    "tap flex w-full items-baseline gap-4 border px-4 py-3 text-left transition-colors duration-200",
                    active
                      ? "border-lacquer bg-paper/5 text-paper"
                      : "border-paper/15 text-paper/70 hover:border-paper/40 hover:text-paper",
                  )}
                  aria-current={active ? "step" : undefined}
                >
                  <span className="font-display text-lg text-lacquer">{item.kicker}</span>
                  <span className="text-sm font-medium tracking-wide">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          className="tap mt-4 inline-flex h-11 items-center gap-3 border border-paper/30 px-4 text-sm text-paper hover:border-paper"
          aria-pressed={playing}
        >
          <span className="relative grid size-4 place-items-center">
            <Play
              className={cn(
                "col-start-1 row-start-1 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                playing ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-none",
              )}
              aria-hidden
            />
            <Pause
              className={cn(
                "col-start-1 row-start-1 size-4 transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                playing ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]",
              )}
              aria-hidden
            />
          </span>
          {playing ? "Pause the walkthrough" : "Play the walkthrough"}
        </button>
      </div>

      <div className="lg:col-span-8">
        <div className="flex min-h-80 flex-col border border-paper/15 bg-ink">
          <div className="flex items-center justify-between border-b border-paper/15 px-4 py-3 text-xs tracking-widest text-paper/60 uppercase">
            <span>Stage · {current.title}</span>
            <span>Illustration, not a live model</span>
          </div>
          <div key={current.id} className="stage-in relative flex flex-1 flex-col justify-center px-4 py-6 md:px-8">
            {current.id === "capture" ? <CaptureStage /> : null}
            {current.id === "landmarks" ? (
              <div className="mx-auto aspect-square w-full max-w-sm">
                <HandCanvas pose={sign.pose} variant="onInk" className="h-full w-full" />
              </div>
            ) : null}
            {current.id === "prepare" ? <PrepareStage /> : null}
            {current.id === "classify" ? <ClassifyStage weights={sign.ranking} /> : null}
            {current.id === "show" ? <ShowStage letter={sign.letter} note={sign.note} /> : null}
          </div>
          <p className="border-t border-paper/15 px-4 py-4 text-sm text-paper/80 md:px-8">{current.body}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Sample letters">
          {SAMPLE_SIGNS.map((item, index) => (
            <button
              key={item.letter}
              type="button"
              onClick={() => setSignIndex(index)}
              className={cn(
                "tap h-11 w-11 border text-sm transition-colors duration-200",
                index === signIndex
                  ? "border-lacquer bg-lacquer text-paper"
                  : "border-paper/25 text-paper hover:border-paper",
              )}
              aria-pressed={index === signIndex}
            >
              {item.letter}
            </button>
          ))}
          <p className="basis-full pt-1 text-sm text-paper/60">
            Sample poses for the interface. Rankings on the classify step are illustrative — this page does not run the trained network.
          </p>
        </div>
      </div>
    </div>
  );
}

function CaptureStage() {
  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative aspect-video overflow-hidden border border-paper/30">
        <div className="frame-glow absolute inset-0" />
        <div className="scan-line absolute inset-x-0 top-0 h-px bg-lacquer" />
        <span className="absolute bottom-3 left-3 text-xs tracking-widest text-paper/70 uppercase">Frame</span>
      </div>
    </div>
  );
}

function PrepareStage() {
  return (
    <div className="mx-auto grid w-full max-w-sm grid-cols-6 gap-2">
      {Array.from({ length: 24 }, (_, index) => (
        <span
          key={index}
          className="feature-cell aspect-square border border-paper/20 bg-lacquer/80"
          style={{ animationDelay: `${index * 35}ms` }}
        />
      ))}
    </div>
  );
}

function ClassifyStage({ weights }: { weights: { letter: string; weight: number }[] }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mx-auto grid w-full max-w-md gap-4">
      {weights.map((item) => (
        <div key={item.letter} className="grid grid-cols-[2rem_1fr] items-center gap-3">
          <span className="font-display text-2xl text-paper">{item.letter}</span>
          <span className="block h-2 bg-paper/15">
            <span
              className="rank-bar block h-full bg-lacquer"
              style={{ width: ready ? `${Math.round(item.weight * 100)}%` : "0%" }}
            />
          </span>
        </div>
      ))}
      <p className="text-xs tracking-widest text-paper/50 uppercase">Sample ranking, not a measured score</p>
    </div>
  );
}

function ShowStage({ letter, note }: { letter: string; note: string }) {
  return (
    <div className="px-2 text-center">
      <p className="font-display text-8xl text-lacquer italic md:text-9xl">{letter}</p>
      <p className="mx-auto mt-3 max-w-sm text-sm text-paper/75">{note}</p>
    </div>
  );
}
