import React from "react";
import PostIndexItem from "../posts/post_index_item";
import { Link } from "react-router-dom";
class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.followStatus = this.followStatus.bind(this);
  }


  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  followStatus(props) {
    if (props.user.id === props.currentUser.id) {
      return (
        <div id="discover-link" className="flipper">
          hello {props.user.username}.
        </div>
      )
    }
    if (props.user.followers.includes(props.currentUser.id)) {
      return (
        <div onClick={() => props.unfollowUser(props.user.id)} id="discover-link">
          unfollow {props.user.username}.
        </div>
      )
    } else {
      return (
        <div onClick={() => props.followUser(props.user.id)} id="discover-link">
          follow {props.user.username}.
        </div>
      )
    }
  }

  handleClick(formType, flavor, post) {
    this.setState({ formType, flavor, post })
    this.openModel();
  }

  render () {
    if (!this.props.user) {
      return <div>loading...</div>
    }
    //
    // let author = this.props.user;
    // let posts = this.props.user.posts.map((post) => {
    //       return {
    //       author,
    //       id: post.id,
    //       content: post.content,
    //       url: post.url,
    //       title: post.title,
    //       body: post.body
    //     }
    //
    // })

    return (
      <div>

        <ul className="post-index">
          <Link to="/posts" >
            <div id="home-link">
              return home.
            </div>
          </Link>

          {
            this.props.user.posts.map((post) => (
              <PostIndexItem
                post={post}
                currentUser={this.props.currentUser}
                likePost={this.props.likePost}
                unlikePost={this.props.unlikePost}
                deletePost={this.props.deletePost}
                updatePost={this.props.updatePost}
                disabledOptions={true}

                />
            ))
          }
            {this.followStatus(this.props)}
        </ul>
      </div>
    )
  }

}

export default UserShow;
