import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Cursor, Typewriter } from "react-simple-typewriter";

const MyWatchList = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const email = user.email;
  const [WatchList, setWatchList] = useState([]);

  useEffect(() => {
    if (email) {
      setLoading(true);
      fetch(`https://game-review-theta.vercel.app/watchlist/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setWatchList(data);
          } else {
            console.error("The data is not an array");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [email]);
  const handleDelete = (_id) => {
    (_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        (result);
        fetch(`https://game-review-theta.vercel.app/watchlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            (data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = WatchList.filter((data) => data._id !== _id);
              setWatchList(remaining);
            }
          });
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <span className="loading loading-bars loading-md mx-auto"></span>;
      </div>
    );
  }

  return (
    <div className="mb-24 mt-16 text-center">
      <p className="text-4xl text-blue-900 font-bold mb-10">
        My
        <span>
          <Typewriter
            words={[" WatchList Games"]}
            loop={8}
            typeSpeed={100}
            deleteSpeed={80}
          ></Typewriter>
        </span>
        <span className="text-blue-900">
          <Cursor cursorStyle="_"></Cursor>
        </span>
      </p>

      <div className="overflow-x-auto  w-[95%] mx-auto min-h-screen">
        {WatchList.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead className="border-b-[3px]  border-blue-900">
                <tr>
                  <th className="text-xl text-black font-semibold ">
                    Game Cover
                  </th>
                  <th className="text-xl text-black font-semibold">
                    Game Title
                  </th>
                  <th className="text-xl text-black font-semibold">Rating</th>
                  <th className="text-xl text-black font-semibold">Year</th>
                  <th className="text-xl text-black font-semibold">Genre</th>
                  {/* <th className="text-xl text-black font-semibold">
                    Created At
                  </th> */}
                  <th className="text-xl text-black font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {WatchList.map((data) => (
                  <tr
                    key={data._id}
                    className="border-b border-[#333] hover:bg-blue-200 "
                  >
                    <td className="px-2 py-2   mx-auto">
                      <div className="avatar grid justify-center">
                        <div className="  h-20 w-20 ">
                          <img
                            src={data.photo}
                            alt={data.title}
                            className="w-16 h-16 object-cover rounded-md "
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-[18px]">{data.title}</td>
                    <td className="py-2 px-4 text-[18px]">{data.rating}</td>
                    <td className="py-2 px-4 text-[18px]">{data.year}</td>
                    <td className="py-2 px-4 text-[18px]">{data.genre}</td>

                    <td className="px-2 py-2 md:space-x-2 space-y-2 ">
                      <button
                        className="px-4 py-2    bg-gradient-to-r from-[#ed6496] to-[#d30e0e] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631]"
                        onClick={() => handleDelete(data._id)}
                      >
                        <AiOutlineDelete size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-3xl font-semibold text-blue-900 min-h-screen mt-16 ">
            You haven't added any watchlist yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyWatchList;
