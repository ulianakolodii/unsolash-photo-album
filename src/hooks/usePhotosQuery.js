import { useEffect, useState } from "react";

export const usePhotosQuery = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "http://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    )
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  return data;
};
