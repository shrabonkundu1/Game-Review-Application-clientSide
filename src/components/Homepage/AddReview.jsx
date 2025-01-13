import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
// import { Navigate } from "react-router-dom";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;

    const photo = form.photo.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const userName = form.userName.value;
    const email = form.email.value;

    const newReview = {
      photo,
      title,
      description,
      rating,
      year,
      genre,
      userName,
      email,
    };
    console.log(newReview);

    fetch("https://game-review-theta.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="mt-20 mb-32">
      <h1 className="text-4xl text-blue-900 font-bold text-center mb-6 ">
        Add New Review
      </h1>
     
      <div className="grid grid-cols-5 gap-5 w-[90%] mx-auto border p-10 rounded-xl bg-gradient-to-r from-[#060c3b] to-[#010314]">
        <form
          onSubmit={handleAddReview}
          className="grid grid-cols-2 gap-4 col-span-3 w-[85%]"
        >
          <input
            type="text"
            required
            name="photo"
            placeholder="Game Cover URL"
            className="col-span-1 border  text-black bg-white border-gray-300 p-2 rounded"
          />

          <input
            type="text"
            name="title"
            required
            placeholder="Enter Game Title"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          <textarea
            type="text"
            name="description"
            required
            placeholder="Enter Review Description"
            className="border bg-white  text-black border-gray-300 col-span-2 p-2 rounded"
          ></textarea>
          <input
            type="number"
            name="rating"
            required
            placeholder="Rating"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="year"
            required
            placeholder="Publishing Year"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          {/* <input
          type="text"
          name="genres"
          placeholder="Genres"
          className="border col-span-2 bg-white  text-black border-gray-300 p-2 rounded"
        /> */}

          
            <select
              // id="genres"
              name="genre"
              
              className="border col-span-2 bg-white  text-black border-gray-300 p-2 rounded"
              required
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Shooter">Shooter</option>
              <option value="Simulation">Simulation</option>
              <option value="Sports">Sports</option>
            </select>
          

          <input
            type="text"
            name="userName"
            placeholder="User Name"
            value={user?.displayName || ''}
            readOnly
            //   defaultValue={name}
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={user?.email || ''}
            readOnly
            //   defaultValue={email}
            placeholder="User Email"
            className="border bg-white text-black border-gray-300 p-2 rounded"
          />

          <input
            type="submit"
            value="Add Review"
            className="col-span-2 bg-gradient-to-r from-[#6376ff] to-[#061170]  text-slate-200 text-[18px] font-semibold p-2 rounded hover:bg-yellow-600 cursor-pointer"
          />
        </form>
        <div className="col-span-2 border"></div>
      </div>
    </div>
  );
};

export default AddReview;
