
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes,useNavigate } from "react-router-dom";
import routes from "../../routes/index";

// import Sidebar from "../../components/admin/Sidebar";
import { Navbar } from '../../components/Navbar';

const Main = (props) => {

    return (
        <>
            {/* Navbar ----------------------------- */}
            <Routes>
                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar />} />;
                })}
            </Routes>

            {/* ---------------------------------- */}
            {/* Render Sidebar */}
            {/* <div style={{display:'flex',flexWrap:'wrap'}}> */}
            {/* <Routes>
                {routes.map((route) => {
                    if (route.sidebar)
                        return <Route path={route.path} element={<Sidebar />} />;
                })}
            </Routes> */}

            {/* Render Page */}
            <Routes>
                {routes.map((route) => {
                    return <Route path={route.path} element={route.component} />
                })}
            </Routes>
            {/* </div> */}
        </>
    )
}


export default Main
