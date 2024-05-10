import { createSignal, onCleanup, Show } from "solid-js";
import styles from "./Layers.module.css";

const THICKNESS = 5;
const FONT_SIZE = 7;

const Glow = ({ color, id }) => (
  <filter
    id={id}
    filterUnits="userSpaceOnUse"
    x="-10"
    y="-10"
    width="120"
    height="120"
  >
    <feDropShadow
      dx="0"
      dy="1"
      stdDeviation="2"
      flood-color={color}
      flood-opacity="0.2"
    />
    <feDropShadow
      dx="0"
      dy="-1"
      stdDeviation="2"
      flood-color={color}
      flood-opacity="0.2"
    />
  </filter>
);

const Gradient = ({ from, to, id }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color={from} />
    <stop offset="100%" stop-color={to} />
  </linearGradient>
);

const Layer = ({
  text,
  textcolor,
  gradient,
  size,
  offset = [0, 0, 0],
  selected = false,
}) => {
  const w = size,
    h = 40 * (size / 100),
    t = THICKNESS;
  const gid = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  const fid = `filter-${Math.random().toString(36).substr(2, 9)}`;

  //random between 0.1 and 1
  const animationDelay = () =>
    `${Math.round((Math.random() * 1 + 0.1) * 10) / 10}s`;

  console.log(size);
  return (
    <g
      style={{
        "--offset-x": `${offset[0]}px`,
        "--offset-y": `${offset[1] - 30}px`,
        "--offset-z": `${offset[2]}px`,
        "--size": `${size}px`,
        "animation-delay": animationDelay(),
      }}
    >
      <path
        d={`M0,${h / 2 + t} v${-t} L${w / 2},${0} L${w},${h / 2} v${t} L${
          w / 2
        },${h + t} Z`}
        fill={`url(#${gid})`}
        filter={`url(#${fid})`}
      />
      <path d={`M0,${h / 2 + t} v${-t} L${w / 2},${h} v${t} Z`} />
      <path d={`M${w / 2},${h + t} v${-t} L${w},${h / 2} v${t} Z`} />
      <text
        x={w / 2}
        y={h / 2}
        dominant-baseline="middle"
        text-anchor="middle"
        style={{
          "font-size": `${(FONT_SIZE * size) / 100}px`,
          transform: `skew(-68deg, 22deg) translate(calc(-1px * ${
            size / 100
          }), calc(-3px * ${size / 100})) scaleY(0.5)`,
          fill: textcolor,
        }}
      >
        {text}
      </text>
      <defs>
        <Gradient id={gid} from={gradient[0]} to={gradient[1]} />
        <Glow id={fid} color={gradient[0]} />
      </defs>
      <Show when={selected}>
        {/* Glowing yellow ball next to the yellow layer */}
        <g transform="translate(110, 60)">
          <circle
            cx="106"
            cy="-7"
            r="2"
            fill="url(#yellowGlowGradient)"
            filter="url(#yellowGlowFilter)"
          />
          <defs>
            <Glow id="yellowGlowFilter" color="#ffeb00" />
            <linearGradient
              id="yellowGlowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#ffeb00" />
              <stop offset="100%" stop-color="#ffffff" />
            </linearGradient>
          </defs>
        </g>
      </Show>
    </g>
  );
};

const Layers = ({ children }) => (
  <svg
    class={styles.layers}
    viewBox="0 0 100 90"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const App = () => (
  <Layers>
    <Layer
      text="Lorem "
      textcolor="white"
      gradient={["#7d14e6", "#7d14e6"]}
      offset={[0, 100, 0]}
      size={100}
    />
    <Layer
      text="Lorem"
      textcolor="white"
      gradient={["#7d14e6", "#7d14e6"]}
      offset={[0, 80, 0]}
      size={100}
    />
    <Layer
      text="Lorem"
      textcolor="black"
      gradient={["#ffeb00", "#ffeb00"]}
      offset={[0, 60, 0]}
      size={100}
      selected={true}
    />

    <Layer
      text="dolor "
      gradient={["#9bd7ff", "#9bd7ff"]}
      textcolor="black"
      offset={[52, 50, 0]}
      size={48}
    />
    <Layer
      text="Lorem"
      gradient={["#9bd7ff", "#9bd7ff"]}
      textcolor="black"
      offset={[0, 50, 0]}
      size={48}
    />
    <Layer
      text="ipsum"
      gradient={["#9bd7ff", "#9bd7ff"]}
      textcolor="black"
      offset={[26, 60, 0]}
      size={48}
    />
    <Layer
      text="Lorem"
      textcolor="white"
      gradient={["#7d14e6", "#7d14e6"]}
      offset={[0, 20, 0]}
      size={100}
    />
    <Layer
      text="Lorem"
      textcolor="white"
      gradient={["#7d14e6", "#7d14e6"]}
      offset={[0, 0, 0]}
      size={100}
    />
  </Layers>
);

export default App;
