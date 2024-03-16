import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IShopHome from "./IShopHome";
import IShopLogin from "./IShopLogin";
import IShopRegister from "./IShopRegister";
import IShopDashboard from "./IShopDashboard";
import ISHOPNAV from "./ISHOPNAV";
import { Cookies, useCookies } from "react-cookie"

import { createContext } from "react";
export const userprofilecontext = createContext()
export const usersContext = createContext()

export default function IShopIndex() {
    const [userprofile, setUserProfile] = useState([])
    const [users, setUsers] = useState()
    return (
        <div className="container-fluid">
            <usersContext.Provider value={[users, setUsers]}>
                <userprofilecontext.Provider value={[userprofile, setUserProfile]}>
                    <BrowserRouter>
                        <section className=" row">
                            <ISHOPNAV />
                            <main className="col-12">
                                <Routes>
                                    {
                                        (Cookies == undefined) ? <Route path="/" element={<IShopHome />} /> : <Route path="/" element={<IShopDashboard />} />
                                    }
                                    <Route path="/home" element={<IShopHome />} />
                                    <Route path="/login" element={<IShopLogin />} />
                                    <Route path="/register" element={<IShopRegister />} />
                                    <Route path="/dashboard" element={<IShopDashboard />} />
                                    <Route path="/errorpage" element={
                                        <div>
                                            <h2 className="text-danger">Invalid Credentials</h2>
                                            <Link to="/login">Try Again</Link>
                                        </div>
                                    } />
                                </Routes>

                            </main>
                        </section>
                    </BrowserRouter>
                </userprofilecontext.Provider>
            </usersContext.Provider>
        </div>
    )
}

