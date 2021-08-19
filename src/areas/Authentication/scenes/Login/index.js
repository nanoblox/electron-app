import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${window.api.rootPath}/assets/images/RobloxGamesBackground.jpg)`,
      }}
    >
      <div className="absolute w-full h-full flex bg-black bg-opacity-70">
        <div className="m-auto bg-gray-900 rounded-lg shadow-lg">
          <div className="m-4 flex flex-col">
            <svg
              className="mx-auto w-32 h-32 m-8 my-4 bg-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              stroke="currentColor"
            >
              <path d="M0 0h100v100H0z" />
              <path
                d="M33.5 28.479h9.924l16.026 32.999-.711.77v-33.77h7.761v43.041h-9.983L40.55 39.025l.711-.77v33.266H33.5z"
                fill="#fff"
              />
            </svg>
            <div className="mx-4 mt-1 text-3xl leading-tight font-bold text-center text-white">
              NANOBLOX
            </div>
            <div className="text-center leading-tight text-white">
              STAFF PORTAL
            </div>
            <button
              className="px-4 py-1 mx-auto mt-12 mb-4 flex items-center text-sm text-gray-900 tracking-tight rounded-lg font-bold bg-purple-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-purple-400 focus:bg-purple-500 hover:bg-purple-700 active:bg-purple-800"
              onClick={() => history.push("/account/profile")}
            >
              <svg
                className="w-8 h-8 inline"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d=" M 386 203C 387 203 388 203 388 203C 388 203 395 212 395 212C 267 248 209 304 209 304C 209 304 224 296 250 284C 326 250 386 241 411 239C 415 238 419 238 423 238C 466 232 515 231 566 236C 633 244 705 264 779 304C 779 304 723 251 603 214C 603 214 612 203 612 203C 612 203 709 201 811 277C 811 277 913 462 913 689C 913 689 853 792 697 797C 697 797 671 767 650 740C 743 714 778 656 778 656C 749 675 721 688 697 697C 661 712 627 722 594 728C 526 740 464 737 411 727C 371 719 336 708 307 697C 291 690 273 682 255 673C 253 671 251 670 249 669C 248 668 247 668 246 667C 233 660 226 655 226 655C 226 655 260 711 350 738C 329 765 303 797 303 797C 146 792 87 689 87 689C 87 462 189 277 189 277C 284 206 375 203 386 203C 386 203 386 203 386 203M 368 467C 327 467 296 502 296 545C 296 588 328 624 368 624C 408 624 440 588 440 545C 441 502 408 467 368 467C 368 467 368 467 368 467M 626 467C 586 467 554 502 554 545C 554 588 586 624 626 624C 666 624 698 588 698 545C 698 502 666 467 626 467C 626 467 626 467 626 467" />
              </svg>
              <span className="ml-2">LOGIN WITH DISCORD</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
