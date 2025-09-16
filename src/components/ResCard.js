import { CDN_IMG } from "../utils/constant";

const ResCards = (props) => {
  const { resName, rating, dTime, cuisines, imageId } = props;
  return (
    <div className="res-card flex flex-col h-full border border-gray-700 p-3 bg-[#1F2937] rounded-lg shadow hover:border-blue-500 transition">
      <img
        className="rounded mb-3 w-full h-60 object-cover"
        src={CDN_IMG + imageId}
      />
      <h3 className="font-bold text-lg">{resName}</h3>
      <p className="rating py-3">
        ⭐ {rating} ({dTime} mins)
      </p>
      <p className="cuisins">{cuisines.join(", ")}</p>
    </div>
  );
};

export default ResCards;
