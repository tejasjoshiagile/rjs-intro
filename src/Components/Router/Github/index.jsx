import axios from "axios";
import { useEffect, useState } from "react";

export const Github = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    githubInfoLoader().then((res) => {
      console.log("res: ", res);
      setData(res);
    });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      User Name : {data.login}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
};
// export const LoadGitUserInfo = async () => {
//   const responce = await axios.get(
//     `https://api.github.com/users/tejasjoshiagile`
//   );
//   console.log("responce.data: ", responce.data);
//   return responce.data;
// };

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/tejasjoshiagile");
  return response.json();
};
