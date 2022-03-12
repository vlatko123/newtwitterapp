import {Routes, Route} from 'react-router-dom';
import {Main} from '../containers/home/components/main/Main';
import {PostPage} from '../containers/postPage/PostPage';

export const RoutesComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="post/:id" element={<PostPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="explore" element={<div>explore</div>} />
        <Route path="notifications" element={<div>notifications</div>} />
        <Route path="messages" element={<div>messages</div>} />
        <Route path="bookmarks" element={<div>bookmarks</div>} />
        <Route path="lists" element={<div>lists</div>} />
        <Route path="profile" element={<div>profile</div>} />
        <Route path="more" element={<div>more</div>} />
        <Route
          path="*"
          element={<div style={{color: 'white'}}>This page doesn't exist</div>}
        />
      </Routes>
    </>
  );
};
