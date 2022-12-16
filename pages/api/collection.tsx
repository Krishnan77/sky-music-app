import axios from "axios";

const colletionData = async () => {
  const response = await axios.get(`${process.env.SKYMUSIC_NEXT_BASE_URL}`);
  return response.data;
};

export default colletionData;
