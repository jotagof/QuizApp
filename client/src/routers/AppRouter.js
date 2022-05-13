import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import routes from '../helpers/routes'
import AnswersPage from '../pages/AnswersPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import QuestionPage from '../pages/QuestionPage'
import QuestionsPage from '../pages/QuestionsPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from './PrivateRoute'

function AppRouter() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path={routes.home} element={<HomePage />}></Route>
                    <Route exact path={routes.login} element={<LoginPage />}></Route>
                    <Route exact path={routes.register} element={<RegisterPage />}></Route>
                    <Route exact path={routes.questions} element={<PrivateRoute />}>
                        <Route exact path={routes.questions} element={<QuestionsPage />}></Route>
                    </Route>
                    <Route exact path={routes.question()} element={<PrivateRoute />}>
                        <Route exact path={routes.question()} element={<QuestionPage />}></Route>
                    </Route>
                    <Route exact path={routes.answers} element={<PrivateRoute />}>
                        <Route exact path={routes.answers} element={<AnswersPage />}></Route>
                    </Route>

                    <Route path="*" element={<NotFoundPage />}></Route>
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter