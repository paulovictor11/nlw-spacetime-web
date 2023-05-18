import Link from "next/link";

export function Copyright() {
    return (
        <div className="text-s, leading-relaxed text-gray-200">
            Feito com 💜 no NLW da{" "}
            <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-gray-100"
            >
                Rocketseat
            </Link>
        </div>
    );
}
