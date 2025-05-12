import RootLayout from "./component/RootLayout";
import './App.css'
// React Router dom........
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index path="/" element={<Register />}></Route>
      <Route index path="/" element={<Register />}></Route>
      <Route index path="/register2" element={<Register2 />}></Route>
      <Route path="/inviteuser" element={<InviteUser />}></Route>
      <Route path="/demo" element={<Demo />}></Route>
      <Route path="/password" element={<Password />}></Route>
      <Route path="/regsuccess" element={<RegistrationSuccess />}></Route>
      <Route path="/demo2" element={<Demo2 />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/demo3" element={<Demo3 />}></Route>
      <Route
        path="/dashboard"
        element={
          <ProtectedCompany>
            <Dashboard />
          </ProtectedCompany>
        }
      ></Route>
      <Route
        path="/companyregistration"
        element={
          <LoginProtected>
            <CompanyRegistration />
          </LoginProtected>
        }
      ></Route>
      <Route path="/companyregSuc" element={<CompanyRegSuc />}></Route>
      <Route path="/companydata" element={<CompanyDataViewer />}></Route>
      <Route path="/demo4" element={<Demo4 />}></Route>
      <Route path="*" element={<Error />} /> */}
    </Route>
  )
);

let App:React.FC = () => {
  return (
    <div className="h-[100vh]">
      {/* //Router Provider..... */}
      <RouterProvider router={router} />

    </div>
  )
}

export default App
