import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Task = ({ task }) => {
  const [complated, setCompleated]=useState(false);
  const { todayTask, todayTaskDetails } = task;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const taskData = data.task;
    const taskDetails = data.taskDetils;
    const editTasks = {
      todayTask: taskData,
      todayTaskDetails: taskDetails,
    };
    fetch("http://localhost:5000/task", {
      method: "patch",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editTasks),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
        } else {
        }
      });
  };

  return (
    <div className=" pb-3">
      <div>
        <h2 className="text-left text-secondary text-4xl mt-10">{complated ? "Completed":"Uncompleted"}</h2>
      </div>
      <div className="flex justify-between bg-base-500 shadow-xl p-12">
        <div>
          {" "}
          <input className="w-4 h-4" onClick={()=>setCompleated(!complated)} type="checkbox" name="complated" id="complated" />{" "}
          <h2 className="inline-block text-3xl text-info"> {todayTask}</h2>
          <p className="text-2xl m-5">{todayTaskDetails}</p>
        </div>
        <div>
          <label for="my-modal" className=" btn btn-primary text-left">
            Edit you task
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <div className="card my-auto ">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* <input defaultValue="test" {...register("example")} /> */}

                  <div className="form-control w-full max-w-xs mb-5">
                    <label className="label">
                      <span className="label-text">Edit task</span>
                    </label>
                    <input
                      type="text"
                      placeholder="edit task"
                      name="task"
                      className="input input-bordered w-full max-w-xs"
                      {...register("task")}
                    />
                    <label className="label">
                      <span className="label-text"> Edit Task details</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Edit task details"
                      name="taskDetils"
                      className="input input-bordered w-full max-w-3/4"
                      {...register("taskDetils")}
                    />
                    <input
                      className="btn w-full max-w-xs text-white btn-primary m-auto mt-5"
                      type="submit"
                      value="Edit tasl"
                    />
                  </div>
                </form>
              </div>

              <div className="modal-action">
                <label for="my-modal" className="btn">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
