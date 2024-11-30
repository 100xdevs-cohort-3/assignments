import "./App.css";
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";


function App(){
  return <div>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
          <Route path="/" element={<Langing/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
      Footer | Contact us
    </BrowserRouter>
  </div>
  
}


function Layout(){
  return <div style={{height: "100vh", backgroundColor: "green"}}>
     <Header/>
     <div style={{height:"90vh",backgroundColor:"red"}}>
       <Outlet/>
     </div>
    footer
  </div>
}

function Header(){
  return <div>
    <Link to="/">Allen</Link>
      |
     <Link to="/neet/online-coaching-class-11">Class 11</Link>
      |
     <Link to="/neet/online-coaching-class-12">Class 12</Link>
  </div>

}

function ErrorPage(){
  return <div>
    Sorry page not found

  </div>
}
function Class11Program(){
  return <div>
    class 11 programs
  </div>

}

function Class12Program(){
  
    const navigate=useNavigate();

    function redirectUser(){
      navigate("/");
    }

    

  return <div> 
    NEET programs for Class 12
    <button onClick={redirectUser}>Go back to the landing page</button>

  </div>
  
}

function Langing(){
  return <div>
   Welcome to Allen 
  </div>
}

export default App;
