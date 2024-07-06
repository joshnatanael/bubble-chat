import axios from "axios";
import { cookies } from "next/headers";
import { API_BASE } from "@/constants/api";

const GET = async () => {
  const cookiesStore = cookies();
  const refreshToken = cookiesStore.get("refresh_token");

  try {
    const { data, status } = await axios.get(`${API_BASE}/users/logout`, {
      headers: {
        Authorization: `Bearer ${refreshToken?.value}`,
      },
    });

    cookies().delete("refresh_token");
    cookies().delete("is_logged_in");

    return Response.json(data, { status });
  } catch (err) {
    if (!axios.isAxiosError(err) || !err.response) {
      return Response.json({}, { status: 500 });
    }

    const {
      response: { status, data },
    } = err;

    return Response.json(data, { status });
  }
};

export { GET };
