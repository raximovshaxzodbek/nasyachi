import { useState, useEffect } from "react";
import { Axios } from "../../../api/Axios";
import { headers } from "../../components/headers";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
const CategoryList = () => {
  const [categorys, setCategorys] = useState([] as any[]);
  const [loading, setLoading] = useState<Boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const getCategorys = async (url: string) => {
      const category = await Axios.get(url, { headers });
      setCategorys(category.data);
      setLoading(true);
    };
    getCategorys("/category/");
  }, [categorys]);
  return (
    <Box className="mt-[15px] flex h-[calc(100vh-120px)] w-[calc(100vw-340px)] flex-col items-center justify-start overflow-auto rounded-xl p-4 py-6 shadow-lg shadow-gray-400">
      {loading ? (
        <table className="w-[98%] border border-black text-center">
          <thead>
            <tr className="h-[50px] border border-black">
              <th>Nomi</th>
              <th>Description</th>
              <th>Surati</th>
            </tr>
          </thead>
          <tbody>
            {categorys.map((category) => (
              <tr
                className="h-[100px] cursor-pointer border border-black"
                key={category.id}
              >
                <td className="capitalize">{category.name}</td>
                <td className="w-[300px]">{category.description}</td>
                <td className="flex justify-center">
                  <img
                    src={category.photo}
                    alt={category.id}
                    className="w-[200px]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <Loading type="spinningBubbles" color="black" />
      )}
    </Box>
  );
};

export default CategoryList;
