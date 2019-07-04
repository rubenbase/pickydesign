import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
    if (!starterPalette) return false;

    const newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {}
    };
    for (const level of levels) {
        newPalette.colors[level] = [];
    }
    for (const color of starterPalette.colors) {
        const scale = generateScale(color.color, 10).reverse();
        for (const scaleValue in scale) {
            newPalette.colors[levels[scaleValue]].push({
                name: `${color.name} ${levels[scaleValue]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[scaleValue],
                rgb: chroma(scale[scaleValue]).css(),
                rgba: chroma(scale[scaleValue])
                    .css()
                    .replace("rgb", "rgba")
                    .replace(")", ",1.0)")
            });
        }
    }
    return newPalette;
}
function generateRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor)
            .darken(1.4)
            .hex(),
        hexColor,
        end
    ];
}

function generateScale(hexColor, numberOfColors) {
    return chroma
        .scale(generateRange(hexColor))
        .mode("lab")
        .colors(numberOfColors);
}

export { generatePalette };
