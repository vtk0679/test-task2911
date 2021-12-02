import { useState } from "react";
import Controls from "components/Controls";
import Table from "components/Table";
import ListHoveredSquares from "components/ListHoveredSquares";
import s from "./App.module.css";

function App() {
  const [field, setField] = useState(null);
  const [hoveredList, setHoveredList] = useState([]);

  return (
    <div className={s.container}>
      <div>
        <Controls
          setField={setField}
          setHoveredList={setHoveredList}
        ></Controls>
        <br />
        {field && (
          <Table
            setHoveredList={setHoveredList}
            hoveredList={hoveredList}
            field={field}
          ></Table>
        )}
      </div>
      {field && (
        <ListHoveredSquares hoveredList={hoveredList}></ListHoveredSquares>
      )}
    </div>
  );
}

export default App;
