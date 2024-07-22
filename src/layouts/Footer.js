import React from "react";
import { Link } from "react-router-dom";
const Footer = ()=>{
return (
    <div>
          <footer className="bg-gray-400 text-right p-4  mt-[520px]">
          Built by{" "}
          <Link
            target="_blank"
            to="https://davidgrzyb.com"
            className="underline"
          >
            David Grzy
          </Link>
        </footer>
    </div>
);
}
export default Footer;