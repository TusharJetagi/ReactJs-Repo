import { useParams } from "react-router";
import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";

function ResMenu() {
  const { resId } = useParams();
  const resDetails = useResMenu(resId);

  if (resDetails === null) return <Shimmer />;

  const { name } = resDetails?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resDetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  return (
    <div className="resMenu-container text-gray-100 mt-50 flex flex-col items-center">
      <h1 className="text-5xl">{name}</h1>
      <h2 className="menus-text mt-10 text-4xl underline">Menus</h2>
      <ul className="text-2xl mt-9">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="leading-12 list-disc">
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResMenu;
