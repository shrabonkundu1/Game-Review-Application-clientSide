import React from "react";

const AddReview = () => {
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
      <div className="grid grid-cols-6 gap-5 w-[90%] mx-auto">
      <form className="grid grid-cols-2 gap-4 col-span-4">
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
          className="col-span-2 bg-orange-400 text-black p-2 rounded hover:bg-yellow-600"
        />
      </form>
      <div className="col-span-2 border"></div>
      </div>
    </div>
  );
};

export default AddReview;
