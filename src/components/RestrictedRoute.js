import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
//  також можна додати ще 1 проп restricted або якийсь інший, і потім перевіряти його наявність це буде тру, відсутність false 
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
