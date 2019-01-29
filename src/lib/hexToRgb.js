export default function hexToRgb(color) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  let hex = color;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return result ? `${r},${g},${b}` : null;
}
