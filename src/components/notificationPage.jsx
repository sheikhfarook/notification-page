import Header from "./Header";
import Mark from "../assets/mark.svg";
import Angela from "../assets/angela.svg";
import Jacob from "../assets/jacob.svg";
import Rizky from "../assets/rizky.svg";
import Kimberly from "../assets/kimberly.svg";
import Nathan from "../assets/nathan.svg";
import Anna from "../assets/anna.svg";
import rect from "../assets/Rectangle.svg";

const NotificationPage = () => {
  return (
    <div>
      <div
        className="w-[45.625rem] m-auto md:my-32
       max-sm:my-8 max-sm:w-[21.4375rem]">
        <div>
          <Header />
        </div>
        <div className="space-y-5">
          {/* */}
          <div className="h-[5rem] bg-[#F7FAFD] rounded-[0.5rem] flex">
            <div className="py-4 mx-4 ">
              <img
                className="max-sm:w-[4.33rem] max-sm:h-[3rem]"
                src={Mark}
                alt=""
              />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] cursor-pointer hover:text-[#0A327B]">
                Mark Webber
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  reacted to your recent post
                </span>{" "}
                <span className="text-[#5E6778] font-[800] cursor-pointer hover:text-[#0A327B]">
                  My first tournament today!
                </span>
              </p>
              <p className="font-[500] text-[#939CAD]">1m ago</p>
            </div>
          </div>
          {/* */}
          <div className="h-[5rem] bg-[#F7FAFD] rounded-[0.5rem] flex">
            <div className="py-4 mx-4">
              <img src={Angela} alt="" />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] cursor-pointer hover:text-[#0A327B]">
                Angela Gray
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  followed you
                </span>{" "}
              </p>
              <p className="font-[500] text-[#939CAD]">5m ago</p>
            </div>
          </div>
          {/* */}
          <div className="h-[5rem] bg-[#F7FAFD] rounded-[0.5rem] flex">
            <div className="py-4 mx-4">
              <img className="w-[3.3rem]" src={Jacob} alt="" />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] cursor-pointer hover:text-[#0A327B]">
                Jacob Thompson
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  has joined your group
                </span>{" "}
                <span className="text-[#0A327B] font-[800] cursor-pointer hover:text-[#0A327B]">
                  Chess Club
                </span>
              </p>
              <p className="font-[500] text-[#939CAD]">1 day ago</p>
            </div>
          </div>
          {/* */}
          <div className="h-[5rem] rounded-[0.5rem] flex ">
            <div className="py-4 mx-4">
              <img src={Rizky} alt="" />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] ">
                Rizky Hasanuddin
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  sent you a private message
                </span>{" "}
              </p>
              <p className="font-[500] text-[#939CAD]">5 days ago</p>
            </div>
          </div>
          <div
            className="w-[35rem] m-auto h-[6.0625rem] rounded-[0.3125rem] cursor-pointer  border-2 border-[#DDE7EE]
          hover:bg-[#c0cde6] max-sm:w-[16.4375rem] max-sm:h-[8.25rem]">
            <p className="w-[32rem] m-auto py-3 text-[#5E6778] font-[500] max-sm:w-[14.4375rem] max-sm:text-[0.875rem] ">
              Hello, thanks for setting up the Chess Club. I’ve been a member
              for a few weeks now and I’m already having lots of fun and
              improving my game.
            </p>
          </div>
          {/* */}
          <div className="h-[5rem]  rounded-[0.5rem] flex justify-between">
            <div className="py-4 mx-4 gap-4 flex">
              <img className="max-sm:w-[4rem]" src={Kimberly} alt="" />
              <div className=" text-[1rem] max-sm:text-[0.875rem]">
                <p className="text-[#1C202B] font-[800] ">
                  Kimberly Smith
                  <span className="text-[#5E6778] font-[500]">
                    {" "}
                    commented on your picture
                  </span>{" "}
                </p>
                <p className="font-[500] text-[#939CAD]">1 week ago</p>
              </div>
            </div>
            <div className="mt-5 cursor-pointer">
              <img className="max-sm:w-[4rem]" src={rect} alt="" />
            </div>
          </div>
          {/* */}
          <div className="h-[5rem]  rounded-[0.5rem] flex max-sm:w-[21rem] ">
            <div className="py-4 mx-4">
              <img className="max-sm:w-[5.3rem]" src={Nathan} alt="" />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] ">
                Nathan Peterson
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  reacted to your recent post
                </span>{" "}
                <span className="text-[#5E6778] font-[800]">
                  5 end-game strategies to <br /> increase your win rate
                </span>
              </p>
              <p className="font-[500] text-[#939CAD]">2 weeks ago</p>
            </div>
          </div>
          {/* */}
          <div className="h-[5rem]  rounded-[0.5rem] flex">
            <div className="py-4 mx-4">
              <img src={Anna} alt="" />
            </div>
            <div className="my-4 text-[1rem] max-sm:text-[0.875rem]">
              <p className="text-[#1C202B] font-[800] ">
                Anna Kim
                <span className="text-[#5E6778] font-[500]">
                  {" "}
                  left the group
                </span>{" "}
                <span className="text-[#0A327B] font-[800]">Chess Club</span>
              </p>
              <p className="font-[500] text-[#939CAD]">2 weeks ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
