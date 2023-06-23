import React from "react"
import {Routes,Route} from "react-router-dom"
import Login from "./Login/Login"

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/auth/login" Component={Login}></Route>
        </Routes>
    )
}
export default AuthRouter