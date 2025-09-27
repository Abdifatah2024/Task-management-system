function App() {

  return (
    <div className="container">
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
          
        </table>
      </div>

    

     </div>

    </div>
  )
}

export default App
