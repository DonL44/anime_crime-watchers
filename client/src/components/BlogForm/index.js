import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../../utils/queries';

const BlogForm = () => {
  const [addPost, { error }] = useMutation(ADD_POST);
  const [postTitle, setTitle] = useState('');
  const [postText, setText] = useState('');

  const handleTextChange = event => {
    if (event.target.value.length <= 600) {
      setText(event.target.value);

    }
  };
  const handleTitleChange = event => {
    if (event.target.value.length <= 600) {
      setTitle(event.target.value);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      await addPost ({
        variables: { postTitle, postText }
      });
    setText('');
    setTitle('');

    } catch (e) {
      console.error(e);
    }    
  };

  return (
    <div class="container">
	<div class="row">
    <div class="col-md-8 col-md-offset-2">
        
      <h1>Create post</h1>
      
      <form onSubmit={handleFormSubmit}>
          <div class="form-group">
              <label for="title">Title <span class="require"></span></label>
              <input
              className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg" 
              value={postTitle}
              onChange={handleTitleChange}
              style={{border: 'solid 2px #6835cd', paddingRight: '1000px', marginLeft: '20px', borderRadius: '10px'}}
              type="text" class="form-control" name="title" />
          </div>
          
          <div class="form-group">
              <label for="description">Body</label>
              <textarea 
              className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg"
              style={{border: 'solid 2px #6835cd', paddingRight: '1000px', marginLeft: '20px', borderRadius: '10px'}}
              value={postText}
              onChange={handleTextChange}
              rows="5" class="form-control"  ></textarea>
          </div>
          <div class="form-group">
              <button type="submit" class="btn blog-button btn-primary" style={{color: 'black'}}>
                  Create
              </button>
          </div>
          {error && <span className="ml-2">Something went wrong...</span>}
      </form>
  </div>
  
	</div>
</div>
  )
}

export default BlogForm;