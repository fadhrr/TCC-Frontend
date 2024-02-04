'use client';

export default function Modal({ setOpenModal }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-60"></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex justify-center">
            <div className="mt-2 text-center ">
              <h4 className="text-lg font-medium mb-3 text-gray-800">Contest Id</h4>
              <input
                type="text"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg text-center bg-white focus:outline-none"
                placeholder="contest id"
                required
              />
            </div>
          </div>
          <div className="flex top-2 right-3 absolute items-center justify-center border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]  flex-none w-8 h-8 mx-auto  rounded-full" onClick={() => setOpenModal(false)}>
            <svg width="36px" height="36px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="text-black">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {/* <circle className="cls-1" cx="24" cy="24" r="23" fill="none" stroke="#1d1d1b" strokeLinecap="round" strokeLinejoin="round"></circle> */}
                <line className="cls-1" x1="12" y1="12" x2="36" y2="36" stroke="#1d1d1b" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round"></line>
                <line className="cls-1" x1="12" y1="36" x2="36" y2="12" stroke="#1d1d1b" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round"></line>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
