import Link from "next/link";
import BedemLogo from "../svgComp/BedemSvg";

export default function Byline({ className }) {
  return (
    <div
      className={`${className} inset-x-0 bottom-3 mx-3 rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>

          <div className="w-4 text-gray-100 hover:text-gray-50">
            <Link href="/admin" title="Admin">
              <BedemLogo />
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <Link
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="/logout"
            target="_blank"
            rel="noreferrer"
          >
            Sign out / Odjavi se
          </Link>
        </div>
      </div>
    </div>
  );
}
