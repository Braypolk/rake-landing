<!-- 
https://codepen.io/georgedoescode/pen/XWNmvro 
https://animista.net/play/entrances/slide-in-blurred/slide-in-blurred-bottom
-->
<script>
  import { onMount } from "svelte";
  import {
    colorPalette,
    hue,
    hueComplimentary1,
    hueComplimentary2,
  } from "$lib/stores.js";

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

    // Create orbs
    orbs = [];

    $hue = $colorPalette.hue;
    $hueComplimentary1 = $colorPalette.complimentaryHue1;
    $hueComplimentary2 = $colorPalette.complimentaryHue2;

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
    $colorPalette.setColors();
    $hue = $colorPalette.hue;
    $hueComplimentary1 = $colorPalette.complimentaryHue1;
    $hueComplimentary2 = $colorPalette.complimentaryHue2;

    orbs.forEach((orb) => {
      orb.fill = $colorPalette.randomColor();
    });
  }
</script>

<!-- todo: would be cool if it followed the mouse on a delay or at least the mouse influenced it -->
<canvas class={`absolute ${width} ${height} z-0`} bind:this={orbCanvas} />
