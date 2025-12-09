import org1 from '../img/org1.jpg';

function FollowingPost() {
  return (
    <div className="following-post-container">
      <div className="left-side-container">
        <div className="img-container">
            <img src={org1} alt="img" className="img-container-img" />
        </div>
      </div>
      <div className="right-side-container">
        <div className="name-container">NAME</div>
        <div className="description-container">DESCRIPTION</div>
        <div className="media-content-container">MEDIA CONTENT</div>

      </div>
    </div>
  );
}

export default FollowingPost;
