import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isMobile } from '../../utils/platfrom';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile()) {
      navigate('/mobile', { replace: true });
    }
  }, [location.hash]);
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};
