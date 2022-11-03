const Footer = () => {
  return (
    <footer className="grid justify-center md:grid-cols-3 md:justify-between mt-10  w-11/12">
      <img
        src={require("../images/zuri-logo.svg")}
        alt="Zuri logo"
        className="md:mb-0 mb-4 w-36"
      />
      <p className="text-base text-gray justify-self-center md:mb-0 mb-5">
        HNG Internship 9 Frontend Task
      </p>
      <img
        src={require("../images/I4G.svg")}
        alt="I4g logo"
        className="place-self-end w-28"
      />
    </footer>
  );
};
export default Footer;
