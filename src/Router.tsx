import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { motion } from 'framer-motion'
import { Loading } from "./components/Loading";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";


export function Router() {
    return (
        <>
            <Header />
            <Routes>
                {/* <Route path="/" element={<Subscribe />} /> */}
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/event/lesson/:slug" element={<Event />} /> */}
            </Routes>
            <footer>
                <div className="section section-small container" style={{borderTop: "1px solid #666"}}>
                    <p>Footer: Minhas redes e alguns dados</p>
                </div>
            </footer>
        </>
    )
}