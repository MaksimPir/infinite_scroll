import {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from 'shared';
import './index.css'
interface IPostItemProps{
    post:IPost,
    postId?:number
}
export const PostItem:FC<IPostItemProps> = ({post,postId}) => {
    const navigate=useNavigate()
    return (
        <div className='container__postItem'>
            <div>№ {post.id}</div>
            <div className='postitem__title'>Title: {post.title}</div>
            <div  className='postitem__body'>
              Body:  {post.body.length>20 && postId===undefined?post.body.substring(0,20)+'...':post.body}
            </div>
            <button onClick={()=>navigate(postId===undefined?'/post/'+post.id:'/')} className='postitem__btn'>
                {postId===undefined?'Просмотр':'Назад'}</button>
        </div>
    );
};

