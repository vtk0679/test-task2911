import s from "./Square.module.css";

export default function Square({ id, state }) {
  return (
    <>
      <div id={id} className={`${s.square} ${state && s.hovered}`}></div>
    </>
  );
}
