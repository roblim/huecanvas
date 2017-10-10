import React from "react";
import { Link, withRouter } from "react-router-dom";

const options = (props) => {

  if (props.post.author.id == props.currentUser.id && !props.disabledOptions) {
    return (
      <div className="post-options-match">
        <a>{props.post.body}</a>
        {likeCount(props.post)}
        <div id="edit-delete">
          <div onClick={() => props.handleClick(props.post.content, "reblog", props.post)}  className="update-button" id="edit">reblog</ div>
          <div onClick={() => props.handleClick(props.post.content, "edit", props.post)}  className="update-button" id="edit">edit</ div>
          <div onClick={() => props.deletePost(props.post.id)} className="update-button" id="delete">delete</div>
        </div>
      </div>
    )
  } else {
    if (!props.disabledOptions) {
      return (
      <div className="post-options-other">
        <a>{props.post.body}</a>
        {likeCount(props.post)}
        <div onClick={() => props.handleClick(props.post.content, "reblog", props.post)}  className="update-button" id="edit">reblog</ div>
        </div>
      )
    } else {
      return (
      <div className="post-options-other">
        <a>{props.post.body}</a>
        {likeCount(props.post)}
        </div>
      )
    }


  }
  closeModal;
}

const likeCount = (post) => {
  if (post.current_user_likes) {
    return (
      <a>{post.likes - 1} &#9825; + yours</a>
    )
  } else {
    return (
      <a>{post.likes} &#9825;</a>
    )
  }
}

const postContent = (props) => {

  let likeSetting = () => props.likePost(props.post.id);
  if (props.post.current_user_likes) {
    likeSetting = () => props.unlikePost(props.post.id);
  }

  if (props.post.content === "text") {
    if (props.disabledOptions) {
      return (
        <div className="content-container">
          <div className="item-content-text">
            {props.post.body}
          </div>

        </ div>
      )
      } else {
      return (
      <div className="content-container">
        <div className="item-content-text">
          {props.post.body}
        </div>
        <div onClick={likeSetting} className="overlay">
          {likes(props.post.current_user_likes)}
          </ div>
      </ div>
    )}
  } else if (props.post.content === "img") {

      if (props.disabledOptions) {
        return (
          <div className="content-container">
            <img className="post-img" src={props.post.url}/>
            </ div>
          )

      } else {
        return (
          <div className="content-container">
            <img className="post-img" src={props.post.url}/>
            <div onClick={likeSetting} className="overlay">
              {likes(props.post.current_user_likes)}
              </ div>
              </ div>
            )

    }

  }
  }

const likes = (currentUserLikes) => {
  if (currentUserLikes === true) {
    return (
      <p>click to unlike.</ p>
    )
  } else {
    return (
      <p>click to like.</ p>
    )
  }
}

const handleClick = (event, post) => {
  event.preventDefault();


}


const PostIndexItem = (props) => {
  return (
    <div className="item-container">

      <div className="item-header">
      <Link to={`/users/${props.post.author.id}`} id="post-author">
        <div >
          {props.post.author.username}
        </div>

        </ Link>
        <a>{props.post.title}</a>
      </ div>

        {postContent(props)}
        {options(props)}
    </div>
  )
}

export default withRouter(PostIndexItem);
