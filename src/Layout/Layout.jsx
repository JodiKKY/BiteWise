import Navbar from "../components/Navbar/Navbar";


function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
     
    </main>
  );
}                       

export default Layout;