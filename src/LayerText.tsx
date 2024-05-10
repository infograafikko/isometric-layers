import { type Component, For } from "solid-js";
import styles from "./LayerText.module.css";

const data = [
  {
    title: "Lorem",
    items: ["lorem ipsum"],
  },
  {
    title: "ipsum",
    items: ["lorem ipsum"],
  },
  {
    title: "dolor",
    items: [
      "lorem ipsum",
      "lorem ipsum",
      "lorem ipsum",
      "lorem ipsum",
      "lorem ipsum",
    ],
  },
];
const LayerText: Component = () => {
  return (
    <div class={styles.LayerText}>
      <div style={{ display: "flex", "align-items": "center", gap: "10px" }}>
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="8" fill="url(#yellowGlowGradient)" />
        </svg>
        <h1>Lorem ipsum layer</h1>
      </div>{" "}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
        volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante
        dui, porta eu felis nec, scelerisque pharetra turpis.
      </p>
      <div class={styles.DiagramContainer}>
        <For each={data}>
          {(row, i) => (
            <div>
              <h2>{row.title}</h2>
              <For each={row.items}>
                {(el, i) => <p class={styles.DiagramItem}>{el}</p>}
              </For>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default LayerText;
