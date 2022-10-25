import { Route, Routes } from "react-router"
import { Navbar } from "./components"
import { Covid19, Indonesia, Login, NotFound, Programing, Saved, SerachGlobal } from "./pages"
import { Islogin } from "./Utils/Condition/Islogin"
import { PrivateRouterFalseLogin, PrivateRouterTrueLogin } from "./Utils/PrivateRoute/PrivateRouter"

function App() {   
                    
  return (
   <div className="h-screen ">
    <Navbar />
    <div className={Islogin() ? `pt-16 px-6` : ``}>
      <Routes>

        <Route element={<PrivateRouterTrueLogin/>}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateRouterFalseLogin/>}>
          <Route path="/" element={<Indonesia/>}/>
          <Route path="/programing" element={<Programing/>}/>
          <Route path="/covid-19" element={<Covid19/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/:src" element={<SerachGlobal/>}/>
          <Route path="notFound" element={<NotFound/>} />
        </Route>

      </Routes>
      </div>
      
   </div>
  )
}

export default App
