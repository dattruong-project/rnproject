import axiosGraphQL from "../../network";
import { GET_ALL_BOOKS } from "./query";

const HomeService = () => {
  const getAllBooks = async () => {
    const response = await axiosGraphQL(GET_ALL_BOOKS);
    return response;
  };

  return {
    getAllBooks
  };
};

export default HomeService;