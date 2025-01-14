import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateReview = () => {

    const review = useLoaderData()


    const {_id,title,photo,genre,year,rating,description} =review

    const handleUpdateReview = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        // const userName = form.userName.value;
        // const email = form.email.value;
    
        const updateReview = {
            photo,
            title,
          description,
          rating,
          year,
          genre,
        //   userName,
        //   email,
        };
        // (newReview);
    
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
            if (data.modifiedCount) {
              Swal.fire({
                title: "Success!",
                text: "Review Update Successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              
            }
          });
      };
    
    return (
        <div className="mt-20 mb-32">
          <Helmet><title>Asthetic Gamer || Update Reviews</title></Helmet>
      <h1 className="text-2xl font-bold text-black text-center mb-4 ">
        Update Review
      </h1>
     
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-5 w-[90%] md:w-[80%] mx-auto border p-4 md:p-10 rounded-xl bg-gradient-to-r from-[#060c3b] to-[#010314]">
        <form
          onSubmit={handleUpdateReview}
          className="grid grid-cols-2 gap-4 col-span-3 md:w-[85%]"
        >
          <input
            type="text"
            required
            name="photo"
            defaultValue={photo}
            placeholder="Game Cover URL"
            className="col-span-1 border  text-black bg-white border-gray-300 p-2 rounded"
          />

          <input
            type="text"
            name="title"
            defaultValue={title}
            required
            placeholder="Enter Game Title"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          <textarea
            type="text"
            name="description"
            defaultValue={description}
            required
            placeholder="Enter Review Description"
            className="border bg-white  text-black border-gray-300 col-span-2 p-2 rounded"
          ></textarea>
          <input
            type="number"
            name="rating"
            defaultValue={rating}
            required
            placeholder="Rating"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="year"
            defaultValue={year}
            required
            placeholder="Publishing Year"
            className="border bg-white  text-black border-gray-300 p-2 rounded"
          />
          

          
            <select
              // id="genres"
              name="genre"
              defaultValue={genre}
              
              className="border col-span-2 bg-white  text-black border-gray-300 p-2 rounded"
              required
            >
              <option>Select Genre</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Shooter">Shooter</option>
              <option value="Simulation">Simulation</option>
              <option value="Sports">Sports</option>
            </select>
          

          

          <input
            type="submit"
            value="Update Review"
            className="col-span-2 bg-[#ca2848] text-black p-2 rounded hover:bg-yellow-600 cursor-pointer"
          />
        </form>
        <div className="md:col-span-2 col-span-1"></div>
      </div>
    </div>
    );
};

export default UpdateReview;