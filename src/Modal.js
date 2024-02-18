import React from 'react';
import './styles.scss';

const Modal = ({ post, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <img src={post.thumbnail.large} className='thumbnail' />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div className="foot">
          <img src={post.author.avatar} className='avatar' />
          <p>{post.author.name} - {post.author.role}</p>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
