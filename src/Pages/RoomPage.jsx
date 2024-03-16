import React from "react";
import RoomData from "../Data/RoomData.json";

const RoomPage = () => {
  return (
    <>
      <section className="mt-4">
        <div className="grid grid-cols-1 gap-y-4">
          {RoomData.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <img src={item.Url} alt="Rooms" className="rounded-lg" />
                  <div className="flex justify-between items-center">
                    <div className="p-2">
                      <h1 className="font-medium text-lg">{item.Place}</h1>
                      <p className="font-medium text-black/60 text-base max-w-[245px]">{item.Host}</p>
                      <p className="mt-1 font-medium">{item.Price}</p>
                    </div>
                    {/* Rating */}
                    <div className="mr-2 flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <p>{item.Rating}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RoomPage;
