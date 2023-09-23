import {FC} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes,routesEnum } from './routes';

const AppRouter:FC = () => {
   return( 
    <Routes>
         {routes.map((my_route)=>{
            return (
                <Route  key={my_route.path} Component={my_route.component} path={my_route.path}/>
            )
        })}
          <Route path="*" element={<Navigate to={routesEnum.MAIN} />} />
    </Routes>
   )
};

export default AppRouter;