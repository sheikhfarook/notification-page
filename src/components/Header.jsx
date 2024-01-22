const Header = () => {
  return (
    <div>
      <div className="flex justify-between font-thin">
        <h1 className="font-[800] text-[1.5rem] ">Notification</h1>
        <p className="text-[#5E6778] font-[500] text-[1rem]  cursor-pointer hover:text-[#0A327B]">
          Mark all as read
        </p>
      </div>
    </div>
  );
};

export default Header;
