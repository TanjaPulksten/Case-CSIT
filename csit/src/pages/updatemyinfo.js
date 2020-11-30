import React, {useState, useEffect} from 'react';


import users from '../components/users.json'

function UpdateInfo() {

  const data = users;



  return (
    <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  );
}

export default UpdateInfo;
