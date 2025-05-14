import Image from "next/image";

export type SiteInfo = {
  name: string;
  description: string;
  url: string;
  logo: string;
  category?: string;
};

export default function SiteCard({ site }: { site: SiteInfo }) {
  return (
    <div className="w-[880px] h-[880px] bg-[#fff9db] rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center text-gray-800">
      <div className="mb-8">
        <Image
          src={site.logo}
          alt={`${site.name}のロゴ`}
          width={160}
          height={160}
          className="rounded-lg shadow-md bg-gray-100"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4">{site.name}</h2>
      {site.category && (
        <span className="text-sm text-white bg-blue-500 rounded-full px-4 py-2 mb-4 inline-block">
          {site.category}
        </span>
      )}
      <p className="mb-8 text-lg">{site.description}</p>
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-lg hover:text-blue-800"
      >
        サイトを見る
      </a>
    </div>
  );
}
