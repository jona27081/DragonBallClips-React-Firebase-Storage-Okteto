import React from "react";
import '../styles/clip.css'
import KafkaService from "../services/kafka.service";

function saveLike(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Like");
  e.preventDefault();
}

function saveLove(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Love");
  e.preventDefault();
}

function saveHaHa(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Haha");
  e.preventDefault();
}

function saveWow(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Wow");
  e.preventDefault();
}

function saveSad(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Sad");
  e.preventDefault();
}

function saveAngry(e, status) {
  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));
  KafkaService.reactionPush("Angry");
  e.preventDefault();
}

function ReactionsComponent() {
  return (
    <div class="reactions">
      <div className="reaction reaction-like" onClick={(e) => {
        e.preventDefault();
        saveLike(e, 1);
      }}>
      </div>
      
      <div className="reaction reaction-love" onClick={(e) => {
        e.preventDefault();
        saveLove(e, 1);
      }}>
      </div>

      <div className="reaction reaction-haha" onClick={(e) => {
        e.preventDefault();
        saveHaHa(e, 1);
      }}>
      </div>

      <div className="reaction reaction-wow" onClick={(e) => {
        e.preventDefault();
        saveWow(e, 1);
      }}>
      </div>

      <div className="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        saveSad(e, 1);
      }}>
      </div>

      <div className="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        saveAngry(e, 1);
      }}>
      </div>
    </div>
  );
}

export default ReactionsComponent;

