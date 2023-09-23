import MainPage from "../MainPage"
import PostPage from "../PostPage"

interface IRoute{
    path:routesEnum,
    component:React.ComponentType
}
export enum routesEnum{
    POST='/post/:postId',
    MAIN='/'
} 
export const routes:IRoute[]=[
    {
        path:routesEnum.POST,
        component:PostPage
    },
    {
        path:routesEnum.MAIN,
        component:MainPage
    }
]