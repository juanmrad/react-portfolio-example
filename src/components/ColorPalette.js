import Color from './color-palette/Color';
import { useState } from 'react';

/**
 * Hex or RGB
 * 
 * Red Green Blue.  Base 16. 0 -> F two positions. 00 -> FF. 256 possibilities.
 * 
 * Red = first two
 * Green = Next Two
 * Blue = Last two
 *  Red (0->255) Green(0->255) Blue(0->255);
 */

function ColorPalette() {
  let randomColor = () => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
  }

  const [colors, updateColors] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor()
  ]);
  const [locked, setLock] = useState([false, false, false, false, false])

  let regenerate = () => {
    let new_colors = colors.map((color, index) => {
      if (locked[index]) {
        return color;
      } else {
        return randomColor();
      }
    })
    updateColors(new_colors)
  }

  let lockColor = (position) => {
    console.log(position)
    let new_lock = locked.map((lock, index) => {
      if (index === Number(position)) {
        return !lock;
      } else {
        return lock;
      }
    })

    setLock(new_lock);
  }

  return (
    <div className="App">
      <Color color={colors[1]} locked={locked[1]} lock={lockColor} position={1} />
      <Color color={colors[2]} locked={locked[2]} lock={lockColor} position={2} />
      <Color color={colors[3]} locked={locked[3]} lock={lockColor} position={3} />
      <Color color={colors[0]} locked={locked[0]} lock={lockColor} position={0} />
      <Color color={colors[4]} locked={locked[4]} lock={lockColor} position={4} />
      <div>
        <button onClick={regenerate}>Regenerate Colors</button>
      </div>
    </div>
  );
}

export default ColorPalette;
