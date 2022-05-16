import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Home from "../Pages/Home/Home";

export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>

            <Route exact path={"/news/:id"} element={<DetailsPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}