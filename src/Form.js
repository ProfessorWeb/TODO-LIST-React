import React from "react";

const Form = function ({
  handlerSubmit,
  nameTask,
  setNameTask,
  setPriority,
  list,
  RemoveTask,
  completeTask,
}) {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-10">
          <div className="card mask-custom">
            <div className="card-body p-4 text-white">
              <div className="text-center pt-3 pb-2">
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-todo-list/check1.png"
                  alt="Check"
                  width="60"
                />
                <h2 className="my-4">Task List</h2>
              </div>

              <form className="form-task" onSubmit={(e) => handlerSubmit(e)}>
                <div className="col-auto">
                  <input
                    name="name-task"
                    type="text"
                    className="form-control task-input"
                    id="autoSizingInput"
                    placeholder="Add Task"
                    value={nameTask}
                    onChange={(e) => setNameTask(e.target.value)}
                  />
                </div>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="High">High</option>
                </select>
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </form>
              <table className="table text-white mb-0">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody className="fw-normal">
                  {list.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>
                          <span className="ms-2" data-name={`${item.title}`}>
                            {item.title}
                          </span>
                        </th>
                        <td className="align-middle priority-class">
                          <span className={`badge ${item.priority}`}>
                            {item.priority}
                          </span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0" data-id={`${item.id}`}>
                            <a
                              className="remove-link"
                              href="#"
                              onClick={(e) => RemoveTask(e)}
                            >
                              <span className="badge bg-gradient remove">
                                ❌
                              </span>
                            </a>
                            <a
                              className="complete-link"
                              href="#"
                              onClick={(e) => completeTask(e)}
                            >
                              <span className="badge bg-gradient complete">
                                ✔
                              </span>
                            </a>
                          </h6>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
