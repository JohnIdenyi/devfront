import { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";

export default function JobListing(props) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleMore = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{props.type}</div>
          <h3 className="text-xl font-bold">{props.title}</h3>
        </div>

        <div className="mb-5">
          {showFullDescription
            ? props.description
            : props.description.substring(0, 90)}
        </div>

        <button className="text-indigo-500 mb-2" onClick={toggleMore}>
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{props.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mr-1" />
            {props.location}
          </div>
          <Link
            to={`/jobs/${props.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
