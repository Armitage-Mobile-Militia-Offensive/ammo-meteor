import React from 'react';

const Rules = () => {
  return (
    <div className="container">
      <div className="display-3 text-right">Rules</div>
      <ul className="list-group row">
        <li className="container-fluid list-group-item row">Stow your differences in comms</li>
        <li className="container-fluid list-group-item row">All members are welcome in A.M.M.O. property</li>
        <li className="container-fluid list-group-item row">
          <p className="container-fluid col-6">You are to follow rules in order:</p>
          <ol className="container-fluid col-6">
            <li>A.M.M.O. Guidlines</li>
            <li>On long-term assignment / capital posting adhere to local captain ruling</li>
          </ol>
        </li>
        <li className="container-fluid list-group-item row">A captain's duty is to their crew</li>
        <li className="container-fluid list-group-item row">In combat keep comms clear of idle traffic</li>
      </ul>
      <br/>
      <br/>
      <h3>T0-<span style={{color: '#F59B45', fontSize: '150%'}}>Director</span></h3>
      <p>Charged with providing leadership and direction to the Council, The Director is responsible for ensuring that the Council fulfils its responsibilities for the governance and success of the club. He also works to optimize the relationship between the Council, enlisted, wayward and other members, and to achieve the organization’s agreed goals. The Director is generally the spokesperson for the organization and should work to maintain key relationships within and outside of the organization.</p>
      <br/>
      <h3>T1-<span style={{color: '#F59B45', fontSize: '150%'}}>Council</span></h3>
      <p>The Council members have ultimate responsibility for directing the actions and decisions as a whole of the organization, ensuring it is well run and delivering the outcomes for which it has been set up. Each Council member is responsible for a specific area of the Organization: Personnel management, Recruiting and Public Relations(<b>Saltycactus</b>), Logistics and Science(<b>Naz-Zackton</b>), Fleet composition and deployment(<b>Empty</b>), Military ground forces and training ( <b>Attira_Kell</b>).</p>
      <br/>
      <h3>T2-</h3>
      <h3 style={{color: '#F59B45'}}>Admiral</h3>
      <p>Responsible for the management, training, deployment and maintenance of all ships in their respective battlegroup. Answers only to Councillor of the fleet</p>
      <h3 style={{color: '#F59B45'}}>General</h3>
      <p>Control over shipboard security and ground/boarding operations and training. Answers only to Councillor Attira_Kell.</p>
      <h3 style={{color: '#F59B45'}}>PaIR Minitser</h3>
      <p>Maintains rosters, requests, complaints, teamspeak server, discord server, Org to Org diplomacy and the organization home page. The most trusted members of the HR division. Answers only to Councillor Saltycactus.</p>
      <h3 style={{color: '#F59B45'}}>LaS Minister</h3>
      <p>Maintains trade data databases, and maintains proper trade routes and will organize the large-scale trading and mining exhibitions. Answers to Councillor Naz-Zackton.</p>
      <br/>
      <h3>T3-<span style={{color: '#F59B45', fontSize: '150%'}}>Specialist</span></h3>
      <div>Highly trusted and specialized, these individuals are the epitome of their skill sets, whether it's dog-fighting or boarding parties these members are the top elite.</div>
      <br/>
      <h3>T4-<span style={{color: '#F59B45', fontSize: '150%'}}>Commander</span></h3>
      <div>Commander of Squadron or squad of their station, having situational autonomy of their vessel or team as defined by mission parameters. Answers only to Admiral/General or above</div>
      <br/>
      <h3>T5-<span style={{color: '#F59B45', fontSize: '150%'}}>Lieutenant</span></h3>
      <div>Typically second-in-command of any squadron or squad of their station, in any event of loss of life, or other unforeseen event that lead to the commander indisposed, they assume command of whichever ship they are assigned.</div>
      <br/>
      <h3>T6-<span style={{color: '#F59B45', fontSize: '150%'}}>Chief Warrant</span></h3>
      <div>Highly trusted personnel that manage and help maintain order within the ranks. Directly under the Lieutenant they run the day to day tasks of making sure things are running smooth.</div>
      <br/>
      <h3>T7-<span style={{color: '#F59B45', fontSize: '150%'}}>Warrant</span></h3>
      <div>High aptitude personnel that perform high risk/difficult operations for AMMO. They can be trusted to take care that the mission is accomplished to their utmost ability and maintains a high level of discipline in even the harshest of working conditions.</div>
      <br/>
      <h3>T8-<span style={{color: '#F59B45', fontSize: '150%'}}>Chief</span></h3>
      <div>Trusted and taking an active role in the organisation is the most basic and effective way to get promoted. A Chief is charged with making sure the transition from Civilian life to Enlisted is a smooth one in our organisation.</div>
      <br/>
      <h3>T9-<span style={{color: '#F59B45', fontSize: '150%'}}>Enlisted</span></h3>
      <div>A person who has been accepted and assigned a specific duty.</div>
      <br/>
      <h3>Recruit - Guest</h3>
      <div>The Un-sorted ranks of the AMMO organization.</div>
      <br/>
      <h3>Wayward</h3>
      <div>Those apart of AMMO that have been deemed inactive. This isn’t a negative value simply a management consideration, this will allow us to better see our actively participating members and be sure that they are catered to.</div>
    </div>
  );
};

export default Rules;
