import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const OAuthRedirect: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const { code } = queryString.parse(location.search);
    console.log('Code:', code);

    // 现在你可以使用code获取access_token和openid了
    // ...
  }, [location]);

  return (
    <div>Redirecting...</div>
    )

  
}

export default OAuthRedirect;