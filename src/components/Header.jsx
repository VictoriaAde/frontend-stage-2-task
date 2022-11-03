const Header = () => {
  return (
    <div>
      <div className="absolute top-9 right-9">
        <img
          src={require("../images/hamburger-button.svg")}
          alt="Hamburger / menu button"
          className=" md:hidden cursor-pointer"
        />
      </div>
      <div className="absolute top-9 right-44	">
        <img
          src={require("../images/share-button.svg")}
          alt="Click on this icon to share this profile"
          className="hidden md:block cursor-pointer"
        />
      </div>
      <header className="relative">
        <div className="mt-5 relative">
          <img
            src={require("../images/profile-img.svg")}
            alt="The profile"
            id="profile__img"
            className=" profile_img mx-auto cursor-pointer w-24 h-24"
          />
          <div className="profile_overlay absolute top-0 md:left-1 opacity-50 bg-trans-dark rounded-full w-24 h-24 cursor-pointer hidden transition-all">
            <img
              src={require("../images/camera.svg")}
              alt="camera icon"
              className="absolute bottom-3 left-9"
            />
          </div>
        </div>
        <h1
          id="twitter"
          className="mt-4 mb-12 text-gray-dark font-bold text-lg lg:text-xl"
        >
          @vickish11
        </h1>
        <h2 id="slack" className="hidden">
          Vickish
        </h2>
      </header>
    </div>
  );
};
export default Header;
