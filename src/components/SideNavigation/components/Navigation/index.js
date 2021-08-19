import { useState } from "react";

export default function Navigation() {
  const [selected, setSelected] = useState("Profile");

  return (
    <div className="w-full h-full flex flex-col bg-nanobloxGray">
      <button
        className={`flex text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-nanobloxGray-light bg-nanobloxGray-dark focus:bg-nanobloxGray-darker hover:bg-nanobloxGray-darker active:bg-nanobloxGray-darker ${
          selected === "Profile" && "bg-nanobloxGray-darker text-blurple"
        }`}
        onClick={() => setSelected("Profile")}
      >
        <div className="flex items-center ml-2 mr-auto">
          <svg
            className="w-6 h-6 m-1 inline"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path d="M8.749,9.934c0,0.247-0.202,0.449-0.449,0.449H4.257c-0.247,0-0.449-0.202-0.449-0.449S4.01,9.484,4.257,9.484H8.3C8.547,9.484,8.749,9.687,8.749,9.934 M7.402,12.627H4.257c-0.247,0-0.449,0.202-0.449,0.449s0.202,0.449,0.449,0.449h3.145c0.247,0,0.449-0.202,0.449-0.449S7.648,12.627,7.402,12.627 M8.3,6.339H4.257c-0.247,0-0.449,0.202-0.449,0.449c0,0.247,0.202,0.449,0.449,0.449H8.3c0.247,0,0.449-0.202,0.449-0.449C8.749,6.541,8.547,6.339,8.3,6.339 M18.631,4.543v10.78c0,0.248-0.202,0.45-0.449,0.45H2.011c-0.247,0-0.449-0.202-0.449-0.45V4.543c0-0.247,0.202-0.449,0.449-0.449h16.17C18.429,4.094,18.631,4.296,18.631,4.543 M17.732,4.993H2.46v9.882h15.272V4.993z M16.371,13.078c0,0.247-0.202,0.449-0.449,0.449H9.646c-0.247,0-0.449-0.202-0.449-0.449c0-1.479,0.883-2.747,2.162-3.299c-0.434-0.418-0.714-1.008-0.714-1.642c0-1.197,0.997-2.246,2.133-2.246s2.134,1.049,2.134,2.246c0,0.634-0.28,1.224-0.714,1.642C15.475,10.331,16.371,11.6,16.371,13.078M11.542,8.137c0,0.622,0.539,1.348,1.235,1.348s1.235-0.726,1.235-1.348c0-0.622-0.539-1.348-1.235-1.348S11.542,7.515,11.542,8.137 M15.435,12.629c-0.214-1.273-1.323-2.246-2.657-2.246s-2.431,0.973-2.644,2.246H15.435z"></path>
          </svg>
          Profile
        </div>
      </button>
      <button
        className={`flex text-white focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-nanobloxGray-light bg-nanobloxGray-dark focus:bg-nanobloxGray-darker hover:bg-nanobloxGray-darker active:bg-nanobloxGray-darker ${
          selected === "Review" && "bg-nanobloxGray-darker text-blurple"
        }`}
        onClick={() => setSelected("Review")}
      >
        <div className="flex items-center ml-2 mr-auto">
          <svg
            className="w-6 h-6 m-1 inline"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path d="M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"></path>
          </svg>
          Review
        </div>
      </button>
    </div>
  );
}
