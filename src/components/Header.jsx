const Header = () => {
  return (
    <div>
      <div className="flex justify-between font-thin max-sm:mb-5 ">
        <h1 className="font-[800] text-[1.5rem] max-sm:text-[1.25rem]">
          Notification
        </h1>
        <p
          className="text-[#5E6778] font-[500] text-[1rem] cursor-pointer hover:text-[#0A327B]
          max-sm:py-2 max-sm:text-[0.875rem]">
          Mark all as read
        </p>
      </div>
    </div>
  );
};

export default Header;
