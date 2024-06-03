import {Routes,Route} from 'react-router-dom';
import Homec from './components/Homec';
import Body from './components/Body';
import Test from './components/Test';
import User from './components/User';
// import { Form } from './components/create-form';
// import { Orders } from './components/create-order';
export function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<></>}></Route>
            {/* <Route path="/create-form" element={<Form></Form>}></Route>
            <Route path="/orders" element={<Orders></Orders>}></Route>
            <Route path="/edit/:id/" element={<Form></Form>}></Route> */}
            <Route path="/home" element={<Homec/>}></Route>
            <Route path="/body" element={<Body/>}></Route>
            <Route path="/test" element={<Test/>}></Route>
            <Route path="/user" element={<User/>}></Route>

        </Routes>
    )
}