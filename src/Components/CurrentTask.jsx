import { FaEdit } from "react-icons/fa";   // FontAwesome
import { FaTrash } from "react-icons/fa";   // FontAwesome
function CurrentTask(){
    return <div> 
        <h1>Task Management System</h1>
     <div className="main-content">
      <div className="tasks-column">
        <h2>Current Tasks</h2>
        <table>
          <thead>
            <tr>
            <th></th>
            <th>Task</th>
            <th>Created</th>
            <th>Due Date</th>
            <th>Prioraty</th>
            <th>Actions</th>

          </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>Login form</td>
              <td>27.09,2025</td>
              <td>30.09.2025</td>
              <td className="priority-medium ">Medium</td>
             <td className="flex gap-2">
  <button className="btn-delete">
    <FaTrash size={18} />
  </button>
  <button className="btn-edit">
    <FaEdit size={18} />
  </button>
</td>

            </tr>
          </tbody>
          
        </table>
      </div>
<div className="task-form">
  <h2>Add Task</h2>
  <input type="text" placeholder="Write here your task"/>
  <label htmlFor="">Dua date</label>
  <input type="date" />
  <label htmlFor="">Prioraty</label>
  <select name="" id="">
    <option value="">Select</option>
    <option value="">Medium</option>
    <option value="">Low</option>
    <option value="">High</option>
  </select>

  <button className="Save-btn">Save</button>
</div>
   

     </div>
    </div>

}

export default CurrentTask