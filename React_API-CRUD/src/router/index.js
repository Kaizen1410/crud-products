import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import StuffList from '../pages/Stuff';
import StuffAdd from '../pages/StuffAdd';
import StuffEdit from '../pages/StuffEdit';


function MyRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/stuff' element={<StuffList />} />
            <Route path='/stuff/add' element={<StuffAdd />} />
            <Route path='/stuff/:id/edit' element={<StuffEdit />} />
        </Routes>

    )
}

export default MyRouter;