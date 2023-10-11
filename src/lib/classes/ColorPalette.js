// import { hue, hueComplimentary1, hueComplimentary2 } from "$lib/stores.js"

import { random } from "$lib/functions.js";

import hsl from "hsl-to-hex";

// ColorPalette class
export default class ColorPalette {
    constructor() {
        this.setColors();
        this.setCustomProperties();
    }

    setColors() {
        // pick a random hue somewhere in the blue range
        //   this.hue = ~~random(160, 210);
        this.hue = ~~random(0, 360);
        this.complimentaryHue1 = this.hue + 30;
        this.complimentaryHue2 = this.hue + 60;
        // define a fixed saturation and lightness
        this.saturation = 95;
        this.lightness = 50;

        // define a base color
        this.baseColor = hsl(this.hue, this.saturation, this.lightness);
        // define a complimentary color, 30 degress away from the base
        this.complimentaryColor1 = hsl(
            this.complimentaryHue1,
            this.saturation,
            this.lightness
        );
        // define a second complimentary color, 60 degrees away from the base
        this.complimentaryColor2 = hsl(
            this.complimentaryHue2,
            this.saturation,
            this.lightness
        );

        // store the color choices in an array so that a random one can be picked later
        this.colorChoices = [
            this.baseColor,
            this.complimentaryColor1,
            this.complimentaryColor2,
        ];
    }

    randomColor() {
        // pick a random color
        return this.colorChoices[~~random(0, this.colorChoices.length)].replace(
            "#",
            "0x"
        );
    }

    setCustomProperties() {
        // $hue = this.hue;
        // $hueComplimentary1 = this.complimentaryHue1;
        // $hueComplimentary2 = this.complimentaryHue2;
        // hue.set(this.hue);
        // hueComplimentary1.set(this.complimentaryHue1);
        // hueComplimentary2.set(this.complimentaryHue2);
        // console.log(this.hue, this.complimentaryHue1, this.complimentaryHue2);
    }
}