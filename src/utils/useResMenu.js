import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

function useResMenu(resId) {
  const [resDetails, setResDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    setResDetails(response.data);
  };
  return resDetails;
}

export default useResMenu;
