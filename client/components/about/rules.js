import React from 'react';

const Rules = () => {
  return (
    <div className="container" style={{color: 'white', maxHeight: '500px'}}>
      <div className="display-3 text-right">Rules</div>
      <ul className="list-unstyled">
        <li className="list-item">Stow your differences in comms</li>
        <li className="list-item">All members are welcome in A.M.M.O. property</li>
        <li className="list-item" style={{padding: '0px'}}>
          You are to follow rules in order:
          <ol className=" ">
            <li>A.M.M.O. Guidlines</li>
            <li>On long-term assignment / capital posting adhere to local captain ruling</li>
          </ol>
        </li>
        <li className=" ">A captain's duty is to their crew</li>
        <li className=" ">In combat keep comms clear of idle traffic</li>
      </ul>
    </div>
  );
};

export default Rules;
