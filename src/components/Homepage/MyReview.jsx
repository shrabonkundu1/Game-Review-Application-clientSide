import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Cursor, Typewriter } from "react-simple-typewriter";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState();
  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(
        `https://game-review-theta.vercel.app/myReviews?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
          setLoading(false);
        });
    }
  }, []);

  const handleUpdate = (event) => {
    const form = event.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const rating = form.rating.value;
    const genre = form.genre.value;
    const year = form.year.value;
    const description = form.description.value;

    const updateReview = { title, photo, rating, genre, year, description };
    (updateReview);

    fetch(`https://game-review-theta.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        (data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

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
        fetch(`https://game-review-theta.vercel.app/myReviews/${_id}`, {
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
              const remaining = review.filter((rev) => rev._id !== _id);
              setReview(remaining);
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
        Mya
        <span>
          <Typewriter
            words={[" Review"]}
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
        {review.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead className="border-b-[3px]  border-blue-900">
                <tr>
                  <th className="text-xl text-black font-semibold">
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
                {review.map((rev) => (
                  <tr
                    key={rev._id}
                    className="border-b border-[#333] hover:bg-blue-200 "
                  >
                    <td className="px-2 py-2 flex  mx-auto">
                      <div className="avatar grid justify-center">
                        <div className="  h-20 w-20 ml-36">
                          <img
                            src={rev.photo}
                            alt={rev.title}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-[18px]">{rev.title}</td>
                    <td className="py-2 px-4 text-[18px]">{rev.rating}</td>
                    <td className="py-2 px-4 text-[18px]">{rev.year}</td>
                    <td className="py-2 px-4 text-[18px]">{rev.genre}</td>
                   
                    <td className="px-2 py-2 md:space-x-2 space-y-2 ">
                      <Link to={`/updateReviews/${rev._id}`}>
                        <button
                          className="px-4 py-2 bg-gradient-to-r from-[#618bff] to-[#071ff2] text-white rounded-md shadow-md hover:bg-red-700"
                          onClick={() => handleUpdate(rev._id)}
                        >
                          <FaRegEdit size={20} />
                        </button>
                      </Link>
                      <button
                        className="px-4 py-2    bg-gradient-to-r from-[#ed6496] to-[#d30e0e] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631]"
                        onClick={() => handleDelete(rev._id)}
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
            You haven't added any reviews yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyReview;
