import { useForm } from "react-hook-form";

const ToDo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const taskData = data.task;
    const taskDetails = data.taskDetils;
    // console.log(taskDetails);
    const tasks = {
      todayTask: taskData,
      todayTaskDetails: taskDetails,
    };
    fetch("https://true-crown-37106.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tasks),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <>
      <div className="text-left w-2/4 m-auto mb-12">
        <div className="card my-auto ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="task"
                className="input input-bordered w-full max-w-3/4"
                {...register("task")}
              />
              <label className="label">
                <span className="label-text">Task details</span>
              </label>
              <input
                type="text"
                placeholder="Type task details"
                name="taskDetils"
                className="input input-bordered w-full max-w-3/4"
                {...register("taskDetils")}
              />
              <input
                className="btn w-full max-w-xs text-white btn-primary m-auto mt-5"
                type="submit"
                value="add"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ToDo;
