import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Alert from "./Alert";

function App() {
  const [nameTask, setNameTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handlerSubmit = function (e) {
    e.preventDefault();

    if (!nameTask) return showAlert(true, "danger", "you cannot input empty");

    const newList = {
      id: new Date().getTime().toString(),
      title: nameTask,
      priority: priority,
    };
    showAlert(true, "success", "You Add Item");
    setList([...list, newList]);
    setNameTask("");
  };

  const showAlert = function (show = false, type, msg) {
    setAlert({ show, type, msg });
  };

  const RemoveTask = function (e) {
    e.preventDefault();
    const idItem = e.target.closest("h6").dataset.id;
    setList(list.filter((item) => item.id !== idItem));
    showAlert(true, "danger", "You delete item");
  };

  const completeTask = function (e) {
    e.preventDefault();
    const idItem = e.target.closest("h6").dataset.id;
    const find = list.find((item) => item.id === idItem);
    showAlert(true, "success", "Complete Item");
    setList(
      list.map((item) => {
        if (item.id === find.id) return { ...item, priority: "Complete" };
        return item;
      })
    );
  };

  return (
    <article className="vh-100 gradient-custom-2">
      {alert.show && <Alert {...alert} showAlert={showAlert} />}
      <Form
        list={list}
        nameTask={nameTask}
        setNameTask={setNameTask}
        setPriority={setPriority}
        handlerSubmit={handlerSubmit}
        RemoveTask={RemoveTask}
        completeTask={completeTask}
      />
    </article>
  );
}

export default App;
