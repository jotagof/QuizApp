import { useState } from 'react'
import useAuth from '../auth/useAuth';

function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();

    function makeLogin(e) {
        e.preventDefault();
        login({username,password})
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={makeLogin}>
                <div className='row justify-content-center'>
                    <div className='col-3'>
                        <div className='row'>
                            <div className="mb-3">
                                <input className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mb-3">
                                <input className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="mb-3">
                                <input className='btn btn-success' value="Login" type="submit" />
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default LoginPage