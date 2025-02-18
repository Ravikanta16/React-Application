import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import CounterComp from './components/CounterComp';
import UserComp from './components/UserComp';
import RichTextComp from './components/RichTextComp';
import Home from './components/Home';
import DashboardComp from './components/DashboardComp';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(50px)' },
    reset: true,
    keys: [location.pathname],
  });

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>
          <Routes location={item}>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/counter" element={<CounterComp />} />
            <Route path="/user" element={<UserComp />} />
            <Route path="/editor" element={<RichTextComp />} />
            <Route path="/dashboard" element={<PrivateRoute element={<DashboardComp />} />} />
            {/* <Route path="/dashboard" element={<DashboardComp />} /> */}
          </Routes>
        </animated.div>
      ))}
    </>
  );
}

export default App;
