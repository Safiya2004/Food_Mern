import React from "react";

export default function Error({error}) {
  return (
    <div>
      <div class="alert alert-danger" style={{fontSize:'20px',fontWeight:'Bold'}} role="alert">
        {error}
      </div>
    </div>
  );
}
