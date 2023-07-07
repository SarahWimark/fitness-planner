const Navbar = () => {
  return (
    <div>
      <nav className="relative container mx-auto p-3 items-center">
        <div className="flex items-center justify-between">
          <div className="pt-2 text-xl">Logo</div>
          <div className="hidden md:flex space-x-6 items-center mx-auto">
            <a className="hover:text-darkGrayishBlue" href="">
              Home
            </a>
            <a className="hover:text-darkGrayishBlue" href="">
              Activities
            </a>
            <a className="hover:text-darkGrayishBlue" href="">
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
