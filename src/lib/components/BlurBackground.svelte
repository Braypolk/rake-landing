<!-- https://codepen.io/georgedoescode/pen/XWNmvro -->
<script>
  import { onMount } from "svelte";
  import { colorPalette } from "$lib/stores.js"

  import * as PIXI from "pixi.js";
  import { KawaseBlurFilter } from "@pixi/filter-kawase-blur";

  import Orb from "$lib/classes/Orb.js";

  export let width = "w-full";
  export let height = "h-full";

  let orbCanvas;
  let orbs;

  onMount(() => {
    // Create PixiJS app
    const app = new PIXI.Application({
      // render to canvas from bind
      view: orbCanvas,
      // auto adjust size to fit the current window
      resizeTo: window,
      // background color is bg-primary-500
      backgroundColor: 0x39f99f,
      backgroundAlpha: 0,
    });

    app.stage.filters = [new KawaseBlurFilter(30, 10, true)];

    // Create colour palette
    // colorPalette = new ColorPalette();
    // colorPalette.update(() => {new ColorPalette()});
    console.log($colorPalette);
    // Create orbs
    orbs = [];

    for (let i = 0; i < 10; i++) {
      const orb = new Orb($colorPalette.randomColor());
      app.stage.addChild(orb.graphics);
      orbs.push(orb);
    }

    // Animate!
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      app.ticker.add(() => {
        orbs.forEach((orb) => {
          orb.update();
          orb.render();
        });
      });
    } else {
      orbs.forEach((orb) => {
        orb.update();
        orb.render();
      });
    }
  });

  export function changeColor() {
    console.log($colorPalette);
    console.log("changing color");
    $colorPalette.setColors();
    $colorPalette.setCustomProperties();

    orbs.forEach((orb) => {
      orb.fill = $colorPalette.randomColor();
    });
  }
</script>

<!-- todo: would be cool if it followed the mouse on a delay or at least the mouse influenced it -->
<canvas class={`absolute ${width} ${height} z-0`} bind:this={orbCanvas} />

<button class="relative z-99" on:click={changeColor}>
  <span>Randomise Colors</span>
  <span>🎨</span>
</button>
