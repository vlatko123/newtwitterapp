import { useEffect } from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useFetch} from 'src/hooks/useFetch';
import type {Posts} from '../home/components/main/types';



export const PostPage = (props: any) => {

  const navigate = useNavigate();

  const params = useParams();

  const location = useLocation();
  
  console.log(params)
  
  const {data, fetchFromApi} = useFetch<Posts>(
    `posts/${params.id}`,
    {} as Posts[]
  );
 

  useEffect(() => {
    if (!(location?.state as any)?.id) {
         fetchFromApi();
        }
      }, [params.id]);
    

  return (
    <div>
      <div>Posts</div>
 
      <button onClick={() => navigate('/')}>Back to all posts</button>
    </div>
  );
};
