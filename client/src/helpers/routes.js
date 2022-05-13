const routes = {
    home: "/",
    login: "/login",
    register: "/register",
    questions: "/questions",
    question: (questionId) => (questionId ? `/question:${questionId}` : '/question:questionId'),
    answers: "/answers"
}

export default routes;