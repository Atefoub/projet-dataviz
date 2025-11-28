import { Outlet } from "react-router-dom";
import Footer from "./Footer";

interface LayoutProps {
  backgroundImage?: string; // optionnel, pour passer le fond
}

const Layout: React.FC<LayoutProps> = ({ backgroundImage }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-between relative`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Contenu central */}
      <main className="flex-1 relative z-10 flex justify-center items-start pt-20 px-6">
        <Outlet />
      </main>

      {/* Footer au-dessus du fond */}
      <Footer />
    </div>
  );
};

export default Layout;
