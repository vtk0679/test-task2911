import s from "./ListHoveredSquares.module.css";

export default function ListHoveredSquares({ hoveredList }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Hovered squares</h2>
      <ul className={s.list}>
        {hoveredList?.map((el) => (
          <li key={`${el.col}.${el.row}`} className={s.item}>
            <p className={s.text}>
              col:{el.col}, row:{el.row}
            </p>
          </li>
        ))}
      </ul>
      <></>
    </div>
  );
}
