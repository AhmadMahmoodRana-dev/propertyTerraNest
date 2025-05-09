export default function LatestNewsCard({image,date,mainHeading,spanHeading,secondaryHeading})  {
  return (
    <div className="rounded-lg overflow-hidden bg-white hover:cursor-pointer">
      <div className="relative group overflow-hidden">
        <img
          className="w-full h-60 object-cover transition-all duration-1000 group-hover:scale-105"
          src={image}
          alt="SeaCrest Building"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

        <div className="absolute bottom-0 left-0 flex gap-2">
          <span className="bg-[#974216] text-white text-xs font-semibold px-4 py-2  shadow">
            {date}
          </span>
        </div>
      </div>

      <div className="">
        <h1 className="text-lg flex gap-8 py-3">{mainHeading}<span className="text-gray-600 text-[1rem]">{spanHeading}</span></h1>
        <h1 className="font-semibold text-2xl hover:text-[#974216] transition-all duration-400 ease-in-out">{secondaryHeading} ...</h1>
      </div>
    </div>
  );
}
