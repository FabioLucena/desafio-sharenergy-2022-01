import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    )
}