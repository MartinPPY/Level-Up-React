import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFound } from "../components/not-found/NotFound"


export const RoutesWithNotFound = ({children}) => {
    return (
        <BrowserRouter>
            <Routes>
                {children}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
