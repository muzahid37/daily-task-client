import { useForm } from "react-hook-form";
import Tasks from "./Tasks";

const ToDo = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const taskData=(data.task)
    const tasks={
        todayTask:taskData,
    };
    fetch('http://localhost:5000/task',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(tasks)
          })
          .then(res=>res.json())
          .then(data=>{
            
           
            
            
           })
};

  return (
    <div>
      {/* <!-- The button to open modal --> */}
      <label for="my-modal" class=" text-primary text-left">
        + add your task
      </label>

      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
        <div class="card my-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <input defaultValue="test" {...register("example")} /> */}

          <div class="form-control w-full max-w-xs mb-5">
            <label class="label">
              <span class="label-text">your task</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              name="task"
              class="input input-bordered w-full max-w-xs"
              {...register("task")}
            />
          </div>
        </form>
      </div>
          
          <div class="modal-action">
            <label for="my-modal" class="btn">
             Cancel
            </label>
          </div>
        </div>
      </div>
     
      <div>
        <Tasks></Tasks>
      </div>
    </div>
  );
};

export default ToDo;
