import Navbar from "../components/Navbar/Navbar";
// import Hero from "../components/Hero/Hero";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      {/* <Hero /> */}
    </main>
  );
}                       

export default Layout;