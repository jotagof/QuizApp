import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function makeLogin(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await res.json()

        console.log(data)
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

export default Login