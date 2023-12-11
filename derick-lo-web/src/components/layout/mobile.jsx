import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { isMobile } from '../../utils/platfrom';

export const Mobile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMobile()) {
      navigate('/', { replace: true });
    }
  }, [location.hash]);
  return <h1>mobile</h1>;
};
