import { Routes, Route } from "react-router-dom";
import HelloWorld from "../pages/helloworld";
import Home from "../pages/home";

const PageRouter = () => {

    return (
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/1' element={<p>Hello page 1</p>} />
            <Route path='/2' element={<p>Hello page 2</p>} />
            <Route path='/3' element={<p>Hello page 3</p>} />
            <Route path='/4' element={<p>Hello page 4</p>} />
            <Route path='/5' element={<p>Hello page 5</p>} />
            <Route path='/6' element={<p>Hello page 6</p>} />
            <Route path='/8' element={<p>Hello page 8</p>} />
            <Route path='/9' element={<p>Hello page 9</p>} />
            <Route path='/hello' element={<HelloWorld></HelloWorld>} />
        </Routes>
    )

}


export default PageRouter;