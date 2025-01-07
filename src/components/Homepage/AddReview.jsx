import React from "react";
import Swal from 'sweetalert2'

const AddReview = () => {

    const handleAddReview = e => {
        e.preventDefault();
        const form = e.target;

        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genres = form.genres.value;
        const userName = form.userName.value;
        const email = form.email.value;

        const newReview = {photo, title, description, rating, year, genres, userName, email}
        console.log(newReview)

        fetch('http://localhost:5000/reviews',{
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Review Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold text-black text-center mb-4">
        Add New Review
      </h1>
      <p className="text-center mx-16 text-gray-600 mb-6">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <div className="grid grid-cols-5 gap-5 w-[90%] mx-auto border p-10 rounded-xl bg-gradient-to-r from-[#060c3b] to-[#010314]">
      <form onSubmit={handleAddReview} className="grid grid-cols-2 gap-4 col-span-3 w-[85%]">
        <input
          type="text"
          name="photo"
          placeholder="Game Cover URL"
          className="col-span-1 border  text-black bg-white border-gray-300 p-2 rounded"
        />

        <input
          type="text"
          name="title"
          placeholder="Enter Game Title"
          className="border bg-white  text-black border-gray-300 p-2 rounded"
        />
        <textarea type="text"
          name="description"
          placeholder="Enter Review Description"
          className="border bg-white  text-black border-gray-300 col-span-2 p-2 rounded"></textarea>
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          className="border bg-white  text-black border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="year"
          placeholder="Publishing Year"
          className="border bg-white  text-black border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="genres"
          placeholder="Genres"
          className="border col-span-2 bg-white  text-black border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name"
        //   defaultValue={name}
          className="border bg-white  text-black border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          name="email"
        //   defaultValue={email}
          placeholder="User Email"
          className="border bg-white text-black border-gray-300 p-2 rounded"
        />

        <input
          type="submit"
          value="Add Review"
          className="col-span-2 bg-[#ca2848] text-black p-2 rounded hover:bg-yellow-600"
        />
      </form>
      <div className="col-span-2 border"></div>
      </div>
    </div>
  );
};

export default AddReview;
