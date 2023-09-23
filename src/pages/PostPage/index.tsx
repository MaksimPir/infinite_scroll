import { PostItem } from 'entities/post';
import {FC} from 'react';
import {  useParams } from 'react-router-dom';
import { postApi } from 'shared/api/typicode';

const PostPage:FC = () => {
    const {postId}=useParams()
    const {data,isLoading} =postApi.useFetchPostByIdQuery(Number(postId))
    return (
        <>
            {data && <PostItem post={data} postId={Number(postId)}/>}
            {isLoading && <div>Loading...</div>}
        </>
        
    )
};

export default PostPage;