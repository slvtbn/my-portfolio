import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="bg-primary-background font-montserrat text-primary">
        <div className="container lg:pr-[160px] lg:pl-[160px]">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
