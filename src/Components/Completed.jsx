
function CompletedtTask (){
    return            <div className="completed-tasks">
          <h2 className="completed">Completed Task</h2>
              <table>
          <thead>
            <tr>
            <th></th>
            <th>Task</th>
            <th>Created</th>
            <th>Completed Date</th>
            <th>Prioraty</th>
            <th></th>

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
  </td>

            </tr>
          </tbody>
          
        </table>
        </div>
}
export default CompletedtTask