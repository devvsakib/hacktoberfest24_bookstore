const Layout = ({children}) => {
  return <main className="max-w-[1300px] mx-auto grid justify-between px-5 md:px-0">
    {children}
  </main>;
};

export default Layout;
