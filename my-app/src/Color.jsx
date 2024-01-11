/* eslint-disable react/prop-types */
export function Color({ color }) {
  return <li key={color.id}>{color.name}</li>;
}
