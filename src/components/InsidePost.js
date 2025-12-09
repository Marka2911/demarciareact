import Comentaris from "./Comentaris";
import { MdSend, MdImage } from "react-icons/md";
import Proposta from "./Proposta";
import {
  MdSentimentDissatisfied,
  MdSentimentSatisfied,
  MdAutorenew,
  MdBorderColor,
} from "react-icons/md";
function InsidePost() {
  return (
    <div className="inside-post-container">
      <div className="inside-post-header">
        <div className="inside-post-header-icon-container">
          <MdSentimentDissatisfied className="icons" />
        </div>
        <div className="inside-post-header-icon-container">
          <MdAutorenew className="icons" />
        </div>
        <div className="inside-post-header-icon-container">
          <MdBorderColor className="icons" />
        </div>
        <div className="inside-post-header-icon-container">
          <MdSentimentSatisfied className="icons" />
        </div>
      </div>
      <div className="inside-post-content">
        <div className="inside-post-content-left">
          <div className="all-comentaris-container">
            <Comentaris />
            <Comentaris />
          </div>
          <div className="add-comentari-container">
            <textarea
              placeholder="Add a comment"
              className="add-comentari-textarea"
            />
            <MdImage className="iconsSmaller" />
            <MdSend className="iconsSmaller" />
          </div>
        </div>
        <div className="inside-post-content-center">
          <div className="proposta-container">
            <Proposta />
          </div>
        </div>
        <div className="inside-post-content-right">
          <div className="all-comentaris-container">
            <Comentaris />
            <Comentaris />
          </div>
          <div className="add-comentari-container">
            <textarea
              placeholder="Add a comment"
              className="add-comentari-textarea"
            />
            <MdImage className="iconsSmaller" />
            <MdSend className="iconsSmaller" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsidePost;
