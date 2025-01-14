import "./timeline.scss";


const Timeline = () => {
    return (
      <ul className="timeline">
        <li className="timeline-event">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">Nov 2023 - May 2024</p>
            <h3><strong> Intern Robotics Engineer </strong></h3>
            <h4>
              <strong>Arimac Lanka (Private) Limited</strong>
            </h4>
            <p>
            Work on Project "LULU" Robot which is an indoor navigation robot made for resturants.


            </p>
          </div>
        </li>
        <li className="timeline-event">
          <label className="timeline-event-icon"></label>
          <div className="timeline-event-copy">
            <p className="timeline-event-thumbnail">Aug 2020 - March 2025 </p>
            <h3> <strong>Electronic and Telecommunication Engineering Undergraduate </strong> </h3>
            <h4><strong>University of Moratuwa </strong></h4>
            <p>
            </p>
          </div>
        </li>
      </ul>
    );
  };
  
  export default Timeline;
  