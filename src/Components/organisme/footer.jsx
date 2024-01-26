import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section id="footer" className="pt-8 pb-8">
        <div className="flex mt-10 justify-between items-center mb-4">
          <h1 className="font-semibold text-2xl">GET IN TOUCH</h1>

          <Button className="w-1/4 bg-secondary" variant="primary">
            <span>CONTACT ME</span>
          </Button>

          <div className="flex gap-3">
            <Link to="https://www.instagram.com/slvtbn/">
              <img src="/icon/instagram.png" alt="" className="w-8 h-8" />
            </Link>
            <Link to="https://www.linkedin.com/in/silva-anjelina-tambunan-593767207">
              <img src="/icon/linkedin.png" alt="" className="w-8 h-8" />
            </Link>
            <img src="/icon/email.png" alt="" className="w-8 h-8" />
          </div>
        </div>
        <h3 className="text-end">Copyright &copy; 2023 slvtbn</h3>
      </section>
    </>
  );
}
