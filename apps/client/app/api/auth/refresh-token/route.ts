import axios from "axios";
import { cookies } from "next/headers";
import {
  API_BASE,
  ENV,
  PARENT_DOMAIN,
  REFRESH_TOKEN_EXPIRATION,
} from "@/constants/api";

const GET = async () => {
  const cookiesStore = cookies();
  const refreshToken = cookiesStore.get("refresh_token");

  try {
    const { data, status } = await axios.get(
      `${API_BASE}/users/refresh-token`,
      {
        headers: {
          Authorization: `Bearer ${refreshToken?.value}`,
        },
      },
    );

    cookies().set({
      name: "refresh_token",
      value: data.refreshToken,
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: REFRESH_TOKEN_EXPIRATION,
      ...(ENV === "production"
        ? { secure: true, domain: PARENT_DOMAIN }
        : { secure: false }),
    });
    cookies().set({
      name: "is_logged_in",
      value: "true",
      sameSite: "strict",
      path: "/",
      ...(ENV === "production"
        ? { secure: true, domain: PARENT_DOMAIN }
        : { secure: false }),
    });

    return Response.json({ accessToken: data.accessToken }, { status });
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
