import { FaEdit } from "react-icons/fa";   // FontAwesome
import { FaTrash } from "react-icons/fa";   // FontAwesome
import CompletedtTask from "./Components/Completed";
import CurrentTask from "./Components/CurrentTask";
function App() {

  return (
    <div className="container">
     <CurrentTask/>
<CompletedtTask/>
    </div>
  )
}

export default App
