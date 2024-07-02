import axios from "axios";
import { cookies } from "next/headers";
import {
  API_BASE,
  ENV,
  PARENT_DOMAIN,
  REFRESH_TOKEN_EXPIRATION,
} from "@/constants/api";
import { UserModel } from "@/redux/slices";

export interface LoginServerRes {
  accessToken: string;
  refreshToken: string;
  user: UserModel;
}

const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { data, status } = await axios.post<LoginServerRes>(
      `${API_BASE}/users/login`,
      body,
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

    return Response.json(
      { accessToken: data.accessToken, user: data.user },
      { status },
    );
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

export { POST };
