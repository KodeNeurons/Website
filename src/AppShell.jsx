import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './AppRoutes';

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <div className="App min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default AppShell;
