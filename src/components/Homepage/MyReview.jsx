import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myReviews?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setReview(data);
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



    const updateReview = {title, photo, rating, genre, year, description}
  console.log(updateReview)


  
  fetch(`http://localhost:5000/reviews/${_id}`,{
    method: "PUT",
    headers: {
      "content-type":"application/json"
    },
    body: JSON.stringify(updateReview)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount > 0){
      Swal.fire({
          title: 'success!',
          text: 'Coffee Updated Successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })
  }
  })
  }

  




  const handleDelete = (_id) => {
    console.log(_id);
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
        console.log(result)
        fetch(`http://localhost:5000/myReviews/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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

  return (
    <div className="mb-24 mt-16 text-center">
      <p className="text-4xl text-blue-900 font-bold mb-10">My review</p>

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
                        <div className="  h-20 w-20 ml-20">
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
                    {/* <td className="px-2 py-2 text-[18px]">
                      {new Date(rev.createdAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                      })}
                    </td> */}
                    <td className="px-2 py-2 md:space-x-2 space-y-2 ">
                      <Link to={`/updateReviews/${rev._id}`}>
                      <button
                        className="px-4 py-2 bg-gradient-to-r from-[#618bff] to-[#071ff2] text-white rounded-md shadow-md hover:bg-red-700"
                        onClick={()=>handleUpdate(rev._id)}
                      >
                        <FaRegEdit size={20} />
                      </button>
                      </Link>
                      <button
                        className="px-4 py-2    bg-gradient-to-r from-[#ed6496] to-[#d30e0e] text-white rounded-md shadow-[#A91D3A] hover:bg-[#9c1631]"
                        onClick={() =>handleDelete(rev._id)}
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
