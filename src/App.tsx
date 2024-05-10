import type { Component } from "solid-js";
import Layers from "./Layers";
import LayerText from "./LayerText";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Layers />
      <LayerText />
    </div>
  );
};

export default App;
