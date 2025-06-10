// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RouteHome from "./RouteHome.jsx";
import RouteAbout from "./RouteAbout.jsx";
import EmpList from "./EmpList.jsx";
import EmpDetail from "./EmpDetail.jsx";
import EmpAdd from "./EmpAdd.jsx";
import EmpMod from "./EmpMod.jsx";


function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">홈</Link>
                    <Link to="/about">소개</Link>
                    <Link to="/emp_list.do">사원관리</Link>
                </nav>
                <br />
                <Routes>
                    <Route path="/" element={<RouteHome />} />
                    <Route path="/about" element={<RouteAbout />} />
                    <Route path="/emp_list.do" element={<EmpList />} />
                    <Route path="/emp_detail.do" element={<EmpDetail />} />
                    <Route path="/emp_add.do" element={<EmpAdd />} />
                    <Route path="/emp_mod.do" element={<EmpMod />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;