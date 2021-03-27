import React from "react";

function Question1({ rooms }) {
  return (
    <ol>
      {rooms &&
        rooms.map((room) => {
          return (
            <li
              key={room.room_type}
            >{`${room.room_type}, ${room.vacant_rooms}, $${room.price}`}</li>
          );
        })}
    </ol>
  );
}

export default Question1;
