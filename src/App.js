
import './App.css';
import Login from "./components/Login";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChatRoom  from "./components/ChatRoom";
import AuthProvider from "./components/Context/AuthProvider";
import AppProvider from "./components/Context/AppProvider";
import AddRoomModals from "./components/Modals/AddRoomModals";
import InviteMemberModals from "./components/Modals/InviteMemberModals";
function App() {
  return (
   <>
       <BrowserRouter>
           <AuthProvider>
               <AppProvider>
                   <Routes>
                       <Route element={<Login/>} path="/login"/>
                       <Route element={<ChatRoom/>} path="/"/>
                   </Routes>
                   <AddRoomModals/>
                   <InviteMemberModals/>
               </AppProvider>
           </AuthProvider>

       </BrowserRouter>
   </>
  );
}

export default App;
