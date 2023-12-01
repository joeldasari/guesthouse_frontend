import { useNavigate } from "react-router-dom";

export const HodUpdates = () => {
  const navigate = useNavigate();
  const handleAcceptBtn = () => {
    navigate("/acceptedList");
  };
  const handleRejectBtn = () => {
    navigate("/rejectedList");
  };
  return (
    <div className="updatesPanel">
      <h2>Updates Panel</h2>
      <div className="acceptedRejected">
        <button onClick={handleAcceptBtn}>Accepted List</button>
        <button onClick={handleRejectBtn}>Rejected List</button>
      </div>
    </div>
  );
};
