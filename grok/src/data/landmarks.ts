export type Pt = [number, number];

/** MediaPipe Hands topology: 21 landmarks, wrist at index 0. */
export const HAND_EDGES: ReadonlyArray<readonly [number, number]> = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
  [5, 9], [9, 13], [13, 17],
];

/** Open palm — closest to ASL “B”. Coordinates are viewBox 0–100. */
export const POSE_OPEN: Pt[] = [
  [48, 78],
  [36, 70], [28, 58], [24, 46], [22, 34],
  [40, 46], [39, 32], [38, 20], [37, 10],
  [50, 44], [50, 28], [50, 16], [50, 6],
  [60, 46], [62, 32], [63, 20], [64, 10],
  [68, 52], [72, 40], [74, 30], [75, 22],
];

/** Closed fist, thumb alongside — closest to ASL “A”. */
export const POSE_FIST: Pt[] = [
  [50, 74],
  [38, 68], [32, 58], [36, 50], [44, 48],
  [44, 52], [46, 60], [48, 66], [50, 70],
  [54, 50], [55, 58], [56, 66], [56, 72],
  [62, 52], [63, 60], [64, 68], [64, 74],
  [70, 56], [72, 64], [73, 70], [73, 76],
];

/** Thumb and index extended — closest to ASL “L”. */
export const POSE_L: Pt[] = [
  [50, 78],
  [38, 70], [28, 62], [22, 50], [18, 38],
  [46, 48], [46, 32], [46, 20], [46, 10],
  [56, 52], [57, 60], [58, 68], [58, 74],
  [64, 54], [66, 62], [67, 70], [67, 76],
  [72, 58], [74, 66], [75, 72], [75, 78],
];

/** Index and middle extended — closest to ASL “V”. */
export const POSE_V: Pt[] = [
  [50, 80],
  [38, 72], [32, 64], [36, 56], [42, 52],
  [42, 48], [38, 32], [36, 20], [34, 10],
  [54, 46], [58, 30], [60, 18], [62, 8],
  [64, 54], [65, 62], [66, 70], [66, 76],
  [72, 58], [74, 66], [75, 72], [75, 78],
];

export type SampleSign = {
  letter: string;
  note: string;
  pose: Pt[];
  /** Relative bar weights for an illustrative ranking. Not a measured score. */
  ranking: { letter: string; weight: number }[];
};

export const SAMPLE_SIGNS: SampleSign[] = [
  {
    letter: "A",
    note: "Fist closed, thumb resting alongside the fingers.",
    pose: POSE_FIST,
    ranking: [
      { letter: "A", weight: 0.84 },
      { letter: "S", weight: 0.09 },
      { letter: "T", weight: 0.05 },
    ],
  },
  {
    letter: "B",
    note: "Palm open, fingers together and thumb tucked.",
    pose: POSE_OPEN,
    ranking: [
      { letter: "B", weight: 0.8 },
      { letter: "C", weight: 0.11 },
      { letter: "L", weight: 0.06 },
    ],
  },
  {
    letter: "L",
    note: "Thumb and index make a right angle; the rest stay folded.",
    pose: POSE_L,
    ranking: [
      { letter: "L", weight: 0.82 },
      { letter: "D", weight: 0.1 },
      { letter: "G", weight: 0.05 },
    ],
  },
  {
    letter: "V",
    note: "Index and middle split; ring and pinky stay down.",
    pose: POSE_V,
    ranking: [
      { letter: "V", weight: 0.78 },
      { letter: "U", weight: 0.13 },
      { letter: "K", weight: 0.06 },
    ],
  },
];
