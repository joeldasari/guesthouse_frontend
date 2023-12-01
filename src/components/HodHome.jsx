import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../hooks/BaseUrl";
import axios from "axios";
export const HodHome = () => {
  const URL = BaseUrl();
  const [rd, setRd] = useState([]);
  const [checkbox, setCheckBox] = useState([]);
  const [availableRooms, setAvailableRooms] = useState([]);
  // const [Dat, setDate] = useState([]);

  useEffect(() => {
    const fetchRdData = async () => {
      const response = await axios.get(`${URL}/rd`);
      setRd(response.data);
    };
    fetchRdData();
    // var now = new Date();
    // var time = now.getDate();
    // var mon = now.getMonth();
    // var year = now.getFullYear();
    // var daysinMonth = new Date(
    //   now.getFullYear(),
    //   now.getMonth() + 1,
    //   0
    // ).getDate();
    // var dates = [];
    // for (let i = 0, k = 0; i < 30; i++) {
    //   if (k + time > daysinMonth) {
    //     dates.push(
    //       String(time + k - daysinMonth) + "-" + (mon + 1) + "-" + year
    //     );
    //     k += 1;
    //   } else {
    //     dates.push(String(time + k) + "-" + mon + "-" + year);
    //     k += 1;
    //   }
    // }
    // console.log(dates);
    // setDate(dates);
  }, []);
  const navigate = useNavigate();
  const handleBook = (room, duration) => {
    window.localStorage.setItem("room", room);
    window.localStorage.setItem("duration", JSON.stringify(duration));
    navigate("/submitForm");
  };
  const checkAvailability = async () => {
    try {
      const response = await axios.post(`${URL}/rd/availableRooms`, {
        dates: checkbox,
      });
      setAvailableRooms(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="homeComponent">
      <div className="availableDates">
        <h1>Available Dates</h1>
        <div className="checkboxes">
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 1])
              }
            />
            <span>Dec 1</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 2])
              }
            />
            <span>Dec 2</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 3])
              }
            />
            <span>Dec 3</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 4])
              }
            />
            <span>Dec 4</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 5])
              }
            />
            <span>Dec 5</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 6])
              }
            />
            <span>Dec 6</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 7])
              }
            />
            <span>Dec 7</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 8])
              }
            />
            <span>Dec 8</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 9])
              }
            />
            <span>Dec 9</span>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked && setCheckBox([...checkbox, 10])
              }
            />
            <span>Dec 10</span>
          </div>
        </div>
        <button onClick={checkAvailability}>Check Availability</button>
      </div>
      <div className="title">
        <h1>Available Rooms</h1>
        <span>AC Rooms: 1,2,3 | Non AC Rooms: 4,5,6</span>
      </div>
      <div className="body">
        <div className="rooms">
          {availableRooms.map((Room) => {
            return (
              <div className="room">
                <h3 className="roomTitle">{Room.room}</h3>
                <button onClick={() => handleBook(Room.room, checkbox)}>
                  Book
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <span>
        <Link to="/updatesPanel">Click here</Link> to see updates
      </span>
    </div>
  );
};
