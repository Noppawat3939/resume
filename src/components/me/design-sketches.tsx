import type { SketchName } from "~/data";
import type { CSSProperties } from "react";

type Item =
  | { t: "p"; d: string; c: string }
  | { t: "t"; x: number; y: number; s: string; c: string; a?: "middle" }
  | { t: "r"; x: number; y: number; w: number; h: number; c: string };

/** Drawing tools handed to each sketch. Coordinates live in a 480 × 360 board. */
type Kit = {
  line: (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    w?: number,
    over?: number,
  ) => string;
  rect: (x: number, y: number, w: number, h: number) => string;
  /** a path; `c` picks the ink: "ink" (default), "ink thin", "ink acc" (pink note), "ink blue", "ink red", "ink green" */
  P: (d: string, c?: string) => void;
  /** text; `c` picks the style: "tx f" body, "tx h" heading, "tx k" blue code, "tx note" pink margin note */
  T: (x: number, y: number, str: string, c?: string, a?: "middle") => void;
  /** a filled box (no outline): "fill-blue" | "fill-green" | "fill-red" | "fill-dark" */
  R: (x: number, y: number, w: number, h: number, c: string) => void;
  /** a line with an arrow head */
  arrow: (x1: number, y1: number, x2: number, y2: number, c?: string) => void;
};

/**
 * Hand-drawn diagrams for the "How I design" strip.
 * Lines wobble from a seeded random, so the server and the browser draw exactly the same strokes.
 */
function build(seed: number, drawing: (k: Kit) => void): Item[] {
  let s = seed;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647 - 0.5;
  const f = (n: number) => n.toFixed(1);

  const line = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    w = 1.6,
    over = 3,
  ) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len;
    const uy = dy / len;
    const sx = x1 - ux * over * (rnd() + 0.5) + rnd();
    const sy = y1 - uy * over * (rnd() + 0.5) + rnd();
    const ex = x2 + ux * over * (rnd() + 0.5) + rnd();
    const ey = y2 + uy * over * (rnd() + 0.5) + rnd();
    const mx = (sx + ex) / 2 - uy * rnd() * w * 2;
    const my = (sy + ey) / 2 + ux * rnd() * w * 2;
    return `M${f(sx)} ${f(sy)} Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
  };
  const rect = (x: number, y: number, w: number, h: number) =>
    [
      line(x, y, x + w, y),
      line(x + w, y, x + w, y + h),
      line(x + w, y + h, x, y + h),
      line(x, y + h, x, y),
    ].join(" ");
  const head = (x1: number, y1: number, x2: number, y2: number) => {
    const a = Math.atan2(y2 - y1, x2 - x1);
    return `${line(x2 - 9 * Math.cos(a - 0.45), y2 - 9 * Math.sin(a - 0.45), x2, y2, 1, 0)} ${line(x2 - 9 * Math.cos(a + 0.45), y2 - 9 * Math.sin(a + 0.45), x2, y2, 1, 0)}`;
  };

  const items: Item[] = [];
  const P = (d: string, c = "ink") => items.push({ t: "p", d, c });
  const T = (x: number, y: number, str: string, c = "tx f", a?: "middle") =>
    items.push({ t: "t", x, y, s: str, c, a });
  const R = (x: number, y: number, w: number, h: number, c: string) =>
    items.push({ t: "r", x, y, w, h, c });
  const arrow = (x1: number, y1: number, x2: number, y2: number, c = "ink") => {
    P(line(x1, y1, x2, y2, 1, 0), c);
    P(head(x1, y1, x2, y2), c);
  };

  drawing({ line, rect, P, T, R, arrow });
  return items;
}

/**
 * ADD A NEW SKETCH: 1) add its name to `SketchName` in ~/data, 2) add an entry here.
 * TypeScript fails the build until both exist, so a name can never point at nothing.
 */
const DRAWINGS: Record<SketchName, { seed: number; draw: (k: Kit) => void }> = {
  // generic data model: the way I start any system, not a specific product
  model: {
    seed: 53,
    draw: ({ line, rect, P, T, R }) => {
      const table = (
        x: number,
        y: number,
        title: string,
        fields: [string, boolean?][],
        w = 150,
      ) => {
        R(x, y, w, 28, "fill-blue");
        P(rect(x, y, w, 28 + fields.length * 20 + 8));
        P(line(x, y + 28, x + w, y + 28), "ink thin");
        T(x + 10, y + 20, title, "tx h");
        fields.forEach(([label, key], i) =>
          T(x + 10, y + 48 + i * 20, label, key ? "tx k" : "tx f"),
        );
      };
      // crow's foot = the "many" side of a relation
      const crow = (x: number, y: number, dir: "r" | "d") =>
        dir === "r"
          ? `${line(x - 12, y, x, y - 8, 1, 0)} ${line(x - 12, y, x, y + 8, 1, 0)}`
          : `${line(x, y - 12, x - 8, y, 1, 0)} ${line(x, y - 12, x + 8, y, 1, 0)}`;
      table(24, 30, "customers", [["id  PK", true], ["name"], ["email"]], 130);
      table(250, 22, "orders", [
        ["id  PK", true],
        ["customer_id  FK", true],
        ["total"],
        ["status"],
      ]);
      table(
        24,
        214,
        "products",
        [["id  PK", true], ["name"], ["price"], ["stock"]],
        130,
      );
      table(300, 214, "order_items", [
        ["id  PK", true],
        ["order_id  FK", true],
        ["product_id  FK", true],
        ["qty"],
      ]);
      P(line(154, 70, 250, 70));
      P(crow(250, 70, "r"));
      P(line(370, 138, 370, 214));
      P(crow(370, 214, "d"));
      P(line(154, 262, 300, 262));
      P(crow(300, 262, "r"));
      P("M 404 168 C 398 162, 396 156, 396 150", "ink acc");
      T(386, 186, "one order,", "tx note");
      T(386, 204, "many items", "tx note");
      P("M 150 172 C 190 164, 220 152, 262 142", "ink acc");
      T(34, 172, "status = a tiny", "tx note");
      T(34, 190, "state machine", "tx note");
    },
  },
  // generic page: structure that search engines and people both read
  page: {
    seed: 59,
    draw: ({ line, rect, P, T, R }) => {
      P(rect(30, 18, 300, 324));
      P(line(30, 48, 330, 48), "ink thin");
      [46, 60, 74].forEach((x) =>
        P(`M ${x} 33 m -4 0 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0`, "ink thin"),
      );
      P(rect(92, 26, 200, 14), "ink thin");
      T(46, 76, "Logo", "tx h");
      [210, 250, 290].forEach((x) =>
        P(line(x, 70, x + 24, 70, 1, 0), "ink thin"),
      );
      T(46, 118, "A clear headline", "tx h");
      P(line(46, 134, 250, 134), "ink thin");
      P(line(46, 148, 210, 148), "ink thin");
      R(46, 162, 96, 26, "fill-dark");
      T(94, 180, "Get started", "tx w", "middle");
      [46, 140, 234].forEach((x) => {
        P(rect(x, 214, 84, 62));
        R(x + 8, 222, 24, 18, "fill-blue");
        P(line(x + 8, 254, x + 70, 254, 1, 0), "ink thin");
        P(line(x + 8, 264, x + 52, 264, 1, 0), "ink thin");
      });
      P(line(46, 306, 314, 306), "ink thin");
      P(line(46, 320, 150, 320, 1, 0), "ink thin");
      P("M 338 114 C 326 114, 316 116, 304 118", "ink acc");
      T(346, 106, "real headings,", "tx note");
      T(346, 124, "real text", "tx note");
      P("M 338 178 C 300 180, 200 176, 148 176", "ink acc");
      T(346, 172, "one clear", "tx note");
      T(346, 190, "action", "tx note");
      P("M 338 246 C 330 246, 326 246, 322 246", "ink acc");
      T(346, 242, "sections", "tx note");
      T(346, 260, "that scan", "tx note");
    },
  },
  // generic app: two audiences, every state designed
  app: {
    seed: 61,
    draw: ({ line, rect, P, T, R }) => {
      P(rect(70, 14, 170, 332));
      P(line(130, 26, 180, 26, 1, 0), "ink thin");
      T(86, 56, "Today", "tx h");
      R(88, 66, 66, 22, "fill-blue");
      P(rect(86, 64, 138, 26));
      T(121, 82, "Customer", "tx f", "middle");
      T(190, 82, "Staff", "tx f", "middle");
      [0, 1, 2].forEach((i) => {
        const y = 106 + i * 56;
        P(rect(86, y, 138, 46));
        P(
          `M 104 ${y + 23} m -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0`,
          i === 0 ? "ink blue" : "ink",
        );
        P(line(122, y + 17, 200, y + 17, 1, 0), "ink thin");
        P(line(122, y + 30, 176, y + 30, 1, 0), "ink thin");
      });
      P(line(70, 292, 240, 292), "ink thin");
      [110, 155, 200].forEach((x, i) =>
        P(
          `M ${x} 318 m -9 0 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0`,
          i === 0 ? "ink blue" : "ink",
        ),
      );
      P("M 300 76 C 282 76, 250 78, 230 78", "ink acc");
      T(306, 70, "two audiences,", "tx note");
      T(306, 88, "one design", "tx note");
      P("M 300 170 C 282 170, 250 168, 230 166", "ink acc");
      T(306, 164, "loading, empty,", "tx note");
      T(306, 182, "error — drawn too", "tx note");
      P("M 300 318 C 284 318, 252 320, 214 320", "ink acc");
      T(306, 312, "thumb-reach", "tx note");
      T(306, 330, "navigation", "tx note");
    },
  },
  lock: {
    seed: 23,
    draw: ({ rect, P, T, R, arrow }) => {
      const step = (y: number, n: string, label: string, sub: string) => {
        R(28, y, 210, 46, "fill-blue");
        P(rect(28, y, 210, 46));
        T(42, y + 20, `${n}  ${label}`, "tx h");
        T(42, y + 38, sub, "tx k");
      };
      T(28, 22, "POST /reservations");
      arrow(60, 28, 60, 40);
      step(42, "1", "Redis lock", "SETNX lock:seat:{id}");
      step(122, "2", "Row lock", "SELECT … FOR UPDATE");
      step(202, "3", "Unique index", "(showtime_id, seat_id)");
      arrow(60, 88, 60, 120);
      arrow(60, 168, 60, 200);
      arrow(60, 248, 60, 282, "ink green");
      R(28, 284, 210, 34, "fill-green");
      P(rect(28, 284, 210, 34), "ink green");
      T(42, 306, "COMMIT · DEL lock → 201", "tx ok");
      (
        [
          [65, "409 · being processed"],
          [145, "409 · already taken"],
          [225, "409 · duplicate"],
        ] as const
      ).forEach(([y, label]) => {
        arrow(238, y, 284, y, "ink red");
        R(286, y - 14, 150, 28, "fill-red");
        T(296, y + 5, label, "tx e");
      });
      P("M 292 326 C 272 326, 256 320, 244 310", "ink acc");
      T(298, 322, "3 guards — 2 people can", "tx note");
      T(298, 340, "never hold seat A1", "tx note");
    },
  },
  fsm: {
    seed: 31,
    draw: ({ line, rect, P, T, R, arrow }) => {
      const state = (
        x: number,
        y: number,
        label: string,
        fill = "fill-blue",
        c = "ink",
      ) => {
        R(x, y, 110, 36, fill);
        P(rect(x, y, 110, 36), c);
        T(x + 55, y + 24, label, "tx h", "middle");
      };
      state(16, 100, "pending");
      state(185, 100, "authorized");
      state(354, 100, "captured", "fill-green", "ink green");
      state(16, 210, "failed", "fill-red", "ink red");
      state(185, 210, "voided", "fill-red", "ink red");
      state(354, 210, "refunded");
      arrow(126, 118, 183, 118);
      T(132, 110, "auth", "tx k");
      arrow(295, 118, 352, 118);
      T(300, 110, "capture", "tx k");
      arrow(71, 136, 71, 208, "ink red");
      arrow(240, 136, 240, 208, "ink red");
      T(248, 178, "void", "tx k");
      arrow(409, 136, 409, 208);
      T(417, 178, "refund", "tx k");
      P("M 71 98 C 120 30, 360 30, 404 96", "ink blue");
      P(
        `${line(396, 88, 405, 98, 1, 0)} ${line(410, 86, 405, 98, 1, 0)}`,
        "ink blue",
      );
      T(240, 32, "direct charge", "tx k", "middle");
      P(rect(16, 286, 200, 54), "ink thin");
      T(28, 308, "Idempotency-Key", "tx h");
      T(28, 328, "same key → stored response");
      P("M 226 312 C 240 312, 248 306, 256 300", "ink acc");
      T(262, 300, "retry ≠ double charge", "tx note");
      T(262, 320, "safe to retry on timeout", "tx note");
    },
  },
};

const SKETCHES = Object.fromEntries(
  Object.entries(DRAWINGS).map(([name, { seed, draw }]) => [
    name,
    build(seed, draw),
  ]),
) as Record<SketchName, Item[]>;

export function Sketch({ name, label }: { name: SketchName; label: string }) {
  const items = SKETCHES[name];
  const strokes = items.filter((i) => i.t === "p").length;
  let n = 0;
  return (
    <svg className="sketch" viewBox="0 0 480 360" role="img" aria-label={label}>
      {items.map((it, i) => {
        if (it.t === "p") {
          // strokes draw one after another inside ~0.6s, so the whole sketch is done in about a second
          const style = {
            "--dl": `${((n++ / strokes) * 0.6).toFixed(2)}s`,
          } as CSSProperties;
          return (
            <path
              key={i}
              d={it.d}
              className={it.c}
              pathLength={1}
              style={style}
            />
          );
        }
        if (it.t === "r")
          return (
            <rect
              key={i}
              x={it.x}
              y={it.y}
              width={it.w}
              height={it.h}
              rx={4}
              className={it.c}
            />
          );
        return (
          <text key={i} x={it.x} y={it.y} className={it.c} textAnchor={it.a}>
            {it.s}
          </text>
        );
      })}
    </svg>
  );
}
