import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.js';
import Rules from './rules/Rules.js';
import AuthForm from './sign_up_in/AuthForm.js';


const RoutesFile = () => {
  return (
    <>
      <Routes>
        <Route path="/Rules" element={<Rules />} />
        <Route path="/SignIn" element={<AuthForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default RoutesFile;
