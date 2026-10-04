/**
 * The hero's hand-drawn underline, written like a quick scribble in one go: a long stroke to the right,
 * a short thick stroke back to the left, then a long stroke to the right again that thins to a point.
 * Think of a flattened "Z". The outline is computed once from the centre line, so tuning the look means
 * editing CENTRE or `weight` below, not a long path string.
 */
type Pt = [number, number];
type Cubic = [Pt, Pt, Pt, Pt];

// centre line, in a 300 × 30 box. Each curve starts heading the way the previous one ended;
// the two small hooks are the turns where the pen reverses direction.
const CENTRE: Cubic[] = [
  // 1. long stroke right, rising a little
  [[4, 20], [60, 17.5], [130, 10.5], [200, 7]],
  // turn at the right
  [[200, 7], [212, 6.4], [216, 10], [204, 11.2]],
  // 2. back to the left, a little lower
  [[204, 11.2], [170, 15.5], [135, 20.5], [112, 24]],
  // turn at the left
  [[112, 24], [102, 25.6], [101, 28.4], [116, 28]],
  // 3. long stroke right again, thinning out as the pen lifts
  [[116, 28], [170, 26], [240, 17], [297, 13]],
];

const bezier = ([p0, p1, p2, p3]: Cubic, t: number): Pt => {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0],
    a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1],
  ];
};

const smooth = (t: number) => {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
};

/** stroke thickness along the line, u = 0 (pen down) … 1 (pen up), measured by distance travelled */
const weight = (u: number) => {
  const press = 0.5 + 3.6 * smooth(u / 0.34); // starts hair-thin, builds as the hand speeds up
  const lift = Math.pow(1 - smooth((u - 0.6) / 0.4), 1.1); // the last stroke fades to a point
  return Math.max(0.35, press * lift);
};

const STEPS = 28;
const points: Pt[] = CENTRE.flatMap((seg, i) =>
  Array.from({ length: STEPS + (i === CENTRE.length - 1 ? 1 : 0) }, (_, k) =>
    bezier(seg, k / STEPS),
  ),
);

// distance travelled so far at each point, so thickness follows the length of the line, not the point count
const travelled = points.reduce<number[]>((acc, p, i) => {
  acc.push(
    i === 0 ? 0 : acc[i - 1] + Math.hypot(p[0] - points[i - 1][0], p[1] - points[i - 1][1]),
  );
  return acc;
}, []);
const total = travelled[travelled.length - 1];

const left: Pt[] = [];
const right: Pt[] = [];
points.forEach((p, i) => {
  const a = points[Math.max(0, i - 1)];
  const b = points[Math.min(points.length - 1, i + 1)];
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const nx = -(b[1] - a[1]) / len;
  const ny = (b[0] - a[0]) / len;
  const half = weight(travelled[i] / total) / 2;
  left.push([p[0] + nx * half, p[1] + ny * half]);
  right.push([p[0] - nx * half, p[1] - ny * half]);
});

const fmt = ([x, y]: Pt) => `${x.toFixed(2)} ${y.toFixed(2)}`;

/** the filled brush shape */
export const UNDERLINE_INK = `M${fmt(left[0])} ${left
  .slice(1)
  .map((p) => `L${fmt(p)}`)
  .join(" ")} ${right
  .reverse()
  .map((p) => `L${fmt(p)}`)
  .join(" ")}Z`;

/** the same centre line as one path; a thick stroke along it reveals the brush shape as it is drawn */
export const UNDERLINE_CENTRE = `M${fmt(CENTRE[0][0])} ${CENTRE.map(
  ([, c1, c2, p3]) => `C${fmt(c1)}, ${fmt(c2)}, ${fmt(p3)}`,
).join(" ")}`;
