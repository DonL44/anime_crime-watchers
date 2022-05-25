import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';


const CommentForm = ({ postId }) => {
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const [commentText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentText, postId}
      })
      setBody('');
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }

    
  };

  return(
    <div className="min-h-full">
      <div className="py-10 ">
        <form className="form-block" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-xs-12">									
              <div className="form-group bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg">
                <textarea className="form-input" value={commentText} onChange={handleChange} style={{border: 'none'}} required="" placeholder="Say something..."></textarea>
              </div>
            </div>
            <button className="btn btn-primary" type='submit'>submit</button>
          </div>
        </form>
        {error && <div>Something went wrong...</div>}
      </div>
    </div>
  )
}

export default CommentForm;