import Login from './pages/Login';
import TodoList from './pages/TodoList';
import ChoiceDate from './pages/ChoiceDate';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="choiceDate" element={<ChoiceDate/>} />
                <Route path="toDoList" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App