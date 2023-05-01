import React, { Component } from "react";
import ClipsDataService from "../services/clip.service";
import '../styles/clip.css'

export default class Clip extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateClip = this.updateClip.bind(this);
    this.deleteClip = this.deleteClip.bind(this);

    this.state = {
      currentClip: {
        id: null,
        title: "",
        description: "",
        published: false,
        url: "",
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { clip } = nextProps;
    if (prevState.currentClip.id !== clip.id) {
      return {
        currentClip: clip,
        message: ""
      };
    }

    return prevState.currentClip;
  }

  componentDidMount() {
    this.setState({
      currentClip: this.props.clip,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentClip: {
          ...prevState.currentClip,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentClip: {
        ...prevState.currentClip,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    ClipsDataService.update(this.state.currentClip.id, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentClip: {
            ...prevState.currentClip,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateClip() {
    const data = {
      title: this.state.currentClip.title,
      description: this.state.currentClip.description,
      url: this.state.currentClip.url,
    };

    ClipsDataService.update(this.state.currentClip.id, data)
      .then(() => {
        this.setState({
          message: "The Clip was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteClip() {
    ClipsDataService.delete(this.state.currentClip.id)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentClip } = this.state;

    return (
      <div className="clip-container">
        <div class="clip">
          {currentClip ? (
            <div className="edit-form">
              <form>
                <div class="video-container">
                  <video controls>
                    <source src={currentClip.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h4>{currentClip.title}</h4>
                <div class="reactions">
                  <div class="reaction reaction-like"></div>
                  <div class="reaction reaction-love"></div>
                  <div class="reaction reaction-haha"></div>
                  <div class="reaction reaction-wow"></div>
                  <div class="reaction reaction-sad"></div>
                  <div class="reaction reaction-angry"></div>
                </div>
                <div class="comments-section">
                  <h4>Comments</h4>
                  <form>
                    <div class="form-group">
                      <label for="comment-input">Leave a comment:</label>
                      <textarea id="comment-input" name="comment" rows="4" placeholder="Write your comment here..."></textarea>
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                  <div class="comments-list">
                    <div class="comment">
                      <h5>User1</h5>
                      <p>This is a comment.</p>
                    </div>
                    <div class="comment">
                      <h5>User2</h5>
                      <p>This is another comment.</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          ) : (
            <div>
              <br />
              <p>Please click on a Clip...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}