import React, { useState } from 'react'
import PostList from './PostList';

function Post() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <div>
      <PostList posts={posts} setPosts={setPosts}/>
    </div>
    {
      posts.map((p)=>(
        <div>
         <h3>{p.content}</h3>
         {p.image && <img src={URL.createObjectURL(p.image)} width={400} />}
        </div>
      ))
    }
        </div>
  )
}

export default Post;