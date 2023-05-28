import React from "react";
import '../styles/clip.css'
import KafkaService from "../services/kafka.service";

function reaction(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush(status);
  e.preventDefault();
}


function ReactionsComponent() {
  return (
    <div class="reactions">
      <div className="reaction reaction-like" onClick={(e) => {
        e.preventDefault();
        reaction(e, "like");
      }}>
      </div>
      
      <div className="reaction reaction-love" onClick={(e) => {
        e.preventDefault();
        reaction(e, "love");
      }}>
      </div>

      <div className="reaction reaction-haha" onClick={(e) => {
        e.preventDefault();
        reaction(e, "haha");
      }}>
      </div>

      <div className="reaction reaction-wow" onClick={(e) => {
        e.preventDefault();
        reaction(e, "wow");
      }}>
      </div>

      <div className="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        reaction(e, "sad");
      }}>
      </div>

      <div className="reaction reaction-angry" onClick={(e) => {
        e.preventDefault();
        reaction(e, "angry");
      }}>
      </div>
    </div>
  );
}

export default ReactionsComponent;

