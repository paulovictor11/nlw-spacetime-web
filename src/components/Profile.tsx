import { getUser } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export function Profile() {
    const { name, avatarUrl } = getUser();

    return (
        <div className="flex items-center gap-3 text-left">
            <Image
                src={avatarUrl}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
            />

            <p className="max-w-[140px] text-sm leading-snug">
                {name}
                <Link
                    href="#"
                    className="block text-red-500 transition-colors hover:text-red-600"
                >
                    Quero sair
                </Link>
            </p>
        </div>
    );
}
