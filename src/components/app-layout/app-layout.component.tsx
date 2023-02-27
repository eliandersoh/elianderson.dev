import { FC } from "react";
import { Footer } from "../footer";
import { NavBar } from "../nav-bar";

export interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col drac-bg-black min-h-screen">
      <NavBar />
      <main className="flex-1 mx-auto container flex justify-stretch">
        {children}
      </main>
      <Footer />
    </div>
  );
};
