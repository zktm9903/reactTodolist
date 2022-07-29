
import Login from './pages/Login';
import TodoList from './pages/TodoList';
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
                <Route path="toDoList" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App