import { useState } from "react";
import Square from "components/Square/Square";

export default function Table({ setHoveredList, hoveredList, field }) {
  const [currentSquare, setCurrentSquare] = useState("");

  let rows = [];

  for (let rowIndex = 0; rowIndex < field; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < field; colIndex++) {
      row.push(
        <td key={`${rowIndex}.${colIndex}`}>
          <Square
            id={`${rowIndex}.${colIndex}`}
            state={
              hoveredList.find(
                (el) => el.row === rowIndex && el.col === colIndex
              )
                ? 1
                : 0
            }
          ></Square>
        </td>
      );
    }
    rows.push(<tr key={rowIndex}>{row}</tr>);
  }

  const onHover = (a) => {
    const hoveredSquareIdx = a.target.id;
    if (currentSquare !== hoveredSquareIdx && hoveredSquareIdx.length > 0) {
      setCurrentSquare(hoveredSquareIdx);
      const rowIndex = +hoveredSquareIdx.slice(
        0,
        hoveredSquareIdx.indexOf(".")
      );
      const columnIndex = +hoveredSquareIdx.slice(
        hoveredSquareIdx.indexOf(".") + 1,
        hoveredSquareIdx.length
      );

      setHoveredList((list) => {
        const currentItem = list.find(
          (el) => el.row === rowIndex && el.col === columnIndex
        );
        const state = currentItem ? 1 : 0;
        if (state === 0) return [...list, { row: rowIndex, col: columnIndex }];
        else {
          const id = list.indexOf(currentItem);
          const newArr = [...list];
          newArr.splice(id, 1);
          return newArr;
        }
      });
    }
  };

  const onLeave = () => {
    setCurrentSquare("");
  };

  return (
    <>
      <table
        border="1"
        cellPadding="0"
        cellSpacing="0"
        onMouseMove={onHover}
        onMouseLeave={onLeave}
      >
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
