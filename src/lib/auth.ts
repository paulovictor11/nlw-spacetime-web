import { cookies } from "next/headers";
import decode from "jwt-decode";

interface iUser {
    sub: string;
    name: string;
    avatarUrl: string;
}

export function getUser(): iUser {
    const token = cookies().get("token")?.value;

    if (!token) {
        throw new Error("Unauthenticated.");
    }

    const user: iUser = decode(token);

    return user;
}
