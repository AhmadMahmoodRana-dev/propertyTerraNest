import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import onetime from "../../assets/onetime.jpg";
import { RxCross1 } from "react-icons/rx";


const FirstlyShowModel = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full max-w-xs sm:max-w-3xl md:max-w-4xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-[#f7f7f7]">
              <div className="flex flex-col sm:flex-row w-full h-full">
                {/* Image Section */}
                <div className="w-full sm:w-[50%] h-full">
                <RxCross1 className="absolute right-5 top-3 cursor-pointer" color="#3e4044" onClick={() => setOpen(!open)} />
                  <img 
                    src={onetime} 
                    alt="Newsletter" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-[50%] p-4 sm:p-8 md:p-14">
                  <h3 className="text-base sm:text-lg text-gray-800 font-light tracking-wider italic">
                    Weekly Updates
                  </h3>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold italic mt-2">
                    Let's join our newsletter!
                  </h2>
                  <p className="text-sm sm:text-base text-gray-800 font-light mb-4 sm:mb-6 tracking-wider italic">
                    Do not worry we don't spam!
                  </p>

                  <div>
                    <label className="text-sm sm:text-base">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full py-2 rounded-sm px-4 border my-3 border-gray-300 outline-none text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button className="w-full bg-[#974216] my-1 text-white py-2 sm:py-3 rounded-sm text-sm sm:text-base md:text-lg">
                    Subscribe
                  </button>

                  <div className="flex mt-4 gap-2 sm:gap-4 items-start">
                    <input
                      type="checkbox"
                      className="h-4 w-4 sm:h-5 sm:w-5 mt-1 accent-blue-600 rounded border-gray-200 focus:ring-1 outline-none focus:ring-blue-500"
                    />
                    <p className="text-xs sm:text-sm md:text-base text-gray-800 font-light tracking-wider italic">
                      Don't show this popup again
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default FirstlyShowModel;