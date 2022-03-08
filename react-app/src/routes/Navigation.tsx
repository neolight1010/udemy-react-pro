import React from "react";
import {
    BrowserRouter,
    Navigate,
    NavLink,
    Route,
    Routes,
} from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages/index";
import logo from "../logo.svg";

export const Navigation: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />

                    <ul>
                        <li>
                            <NavLink
                                to="/lazy1"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy2"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/lazy3"
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : ""
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="lazy1" element={<LazyPage1 />}></Route>
                    <Route path="lazy2" element={<LazyPage2 />}></Route>
                    <Route path="lazy3" element={<LazyPage3 />}></Route>
                    <Route
                        path="/*"
                        element={<Navigate to="/lazy1" replace />}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};