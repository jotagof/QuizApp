import Login from "./components/login"
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                </div>
            </nav>
            <div className="container">
                <Login />
            </div>
        </div>
    );
}

export default App;
