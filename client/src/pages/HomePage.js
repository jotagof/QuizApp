import routes from "../helpers/routes"

function HomePage() {
  return (
    <div className="container">
        <div className="row mt-6">
            <div className="col">
                <h2>Welcome to the Quiz App</h2>
                <p>Create, edit and play!</p>
                <p>
                    <a href={routes.login}>Sing In</a> or <a href={routes.register}>Sing Up</a>
                </p>
            </div>
        </div>
    </div>
  )
}
export default HomePage