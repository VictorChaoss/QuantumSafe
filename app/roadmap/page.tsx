import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/qsafe/shell";
import FilmPlayer from "@/components/qsafe/film";
import { Clip } from "@/components/qsafe/loop";

export const metadata: Metadata = {
  title: "Architecture Roadmap",
  description:
    "The architecture roadmap for Quantum Safe, as five milestones. Gates, not dates: each step builds on the cryptographic core.",
};

const doors: { file: string; name: string; chip: string; line: string }[] = [
  { file: "door-01-watch", name: "Quantum Watch", chip: "Live", line: "Built. Read-only monitoring that alerts when a withdrawal is announced. Holds zero keys." },
  { file: "door-02-signer-drawn", name: "Hardware Signer Spec", chip: "Specified", line: "Air-gapped LM-OTS hardware signing specification." },
  { file: "door-03-the-report", name: "RFC 8554 Vector Suite", chip: "Verified", line: "Deterministic 34-chain SHA-256 test vectors and byte-level verification." },
  { file: "door-04-signer-built", name: "Dedicated Signer Firmware", chip: "In Progress", line: "Standalone offline signing firmware for dedicated SHA-256 vault hardware." },
  { file: "door-05-build-on-qsafe", name: "Terminal Integrations", chip: "Next", line: "Direct one-click sweep hooks for Solana trading terminals and bots." },
];

function Door({ n }: { n: number }) {
  const door = doors[n];
  const number = String(n + 1).padStart(2, "0");
  const inside = (
    <>
      <div className="door-picture">
        <Clip name={door.file} />
      </div>
      <div className="door-words">
        <span className="door-label">
          ARCHITECTURE · MILESTONE {number} / 05
        </span>
        <span className="door-strip" aria-hidden="true">
          {doors.map((d, i) => (
            <i key={d.file} className={i === n ? "on" : ""} />
          ))}
        </span>
        <h2 className="bm-big">
          Phase {number}.<span className="bm-accent">{door.name}.</span>
        </h2>
        <span className={`bm-chip ${n === 0 ? "bm-chip--ice" : "bm-chip--cream"}`}>{door.chip}</span>
        <p>{door.line}</p>
        {n === 0 && <span className="door-open">Open Quantum Safe Watch →</span>}
      </div>
    </>
  );
  return (
    <li className="door">
      {n === 0 ? (
        <Link className="door-panel" href="/watch">
          {inside}
        </Link>
      ) : (
        <div className="door-panel">{inside}</div>
      )}
    </li>
  );
}

export default function Roadmap() {
  return (
    <>
      <Header />
      <main className="roadmap">
        <section className="roadmap-hero">
          <h1 className="bm-big">
            The architecture.
            <span className="bm-accent">Gates, not dates.</span>
          </h1>
          <div className="bm-panel roadmap-film">
            <div className="bm-panel__head">
              <span>Quantum Safe Telemetry</span>
              <span>LIVE</span>
            </div>
            <FilmPlayer film="roadmap" />
          </div>
        </section>
        <ol className="doors">
          {doors.map((door, n) => (
            <Door key={door.file} n={n} />
          ))}
        </ol>
        <section className="roadmap-end">
          <p>Engineering milestones, not arbitrary dates. Each layer builds on the immutable SHA-256 core.</p>
          <span className="mono">SOLANA MAINNET · RFC 8554 LM-OTS PROTOCOL</span>
        </section>
      </main>
      <Footer />
    </>
  );
}
