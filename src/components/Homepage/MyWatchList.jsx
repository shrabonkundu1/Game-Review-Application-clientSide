import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyWatchList = () => {
  const { user } = useContext(AuthContext);

  const email = user.email;
  const [WatchList, setWatchList] = useState([]);

  console.log(WatchList);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/gamewatchlist?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setWatchList(data);
        });
    }
  }, []);

  return (
    <div className="mb-24 mt-16 text-center">
      <p className="text-4xl text-blue-900 font-bold ">My Game WatchList</p>

      <div className="overflow-x-auto mt-10 w-[98%] mx-auto">
        <table className="table">
          <thead className="border-b-[3px]  border-blue-900">
            <tr>
              <th className="text-xl text-black font-semibold">Game Cover</th>
              <th className="text-xl text-black font-semibold">Game Title</th>
              <th className="text-xl text-black font-semibold">Rating</th>
              <th className="text-xl text-black font-semibold">Year</th>
              <th className="text-xl text-black font-semibold">Genre</th>
              <th className="text-xl text-black font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Rowe-Schoen</td>
              <td>Crimson</td>
              <td>Crimson</td>
              <td>Crimson</td>

              <div>
                <td>
                  <button>E</button>
                </td>
                <td>
                  <button>X</button>
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWatchList;
