
const Navbar = () => {
  return (
    <div className="flex justify-evenly pt-5 text-white">
        <div className="flex"><img src="" alt="logo" /><p className="font-semibold text-xl">BrainyLingo</p></div>
        <div className="flex text-white">
          <div className="mx-3">Home</div>
          <div className="mx-3">Leaderboard</div>
          <div className="mx-3">Daily Quiz</div>
          <div className="mx-3 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">Genre</div>
        </div>
        <div className="bg-slate-400 rounded-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500">Sign Out</div>
    </div>
  );
};

export default Navbar;
