import React, { useEffect, useRef, useState } from 'react'

function PostList({setPosts, posts}) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const imageRef = useRef();
  const contentRef = useRef();

  useEffect(()=>{
    console.log("update:" , posts)
  },[posts])

  const handleSubmit = (e) =>{
    e.preventDefault();

    setPosts([{content, image}, ...posts ])
    console.log('After update:', posts);
    setContent("")
    contentRef.current.value = "";
    contentRef.current.focus();

    setImage(null)
    imageRef.current.value = "";

  };

  return (
    <div className='titlePost'> 
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Create New Post'value={content}
              onChange={(e)=> setContent(e.target.value)} ref={contentRef}
            />
            <input type='file' placeholder='Upload'
              onChange={(e)=> setImage(e.target.files[0])} ref={imageRef}
            />
            <button type='submit'>Upload</button>
        </form>
    </div>
    
  )
}

export default PostList

