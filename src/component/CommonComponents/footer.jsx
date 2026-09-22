import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaHouse,
} from "react-icons/fa6";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const usefulLinks = [
  ["Home",'/'],
  ["About Us","/About_Us"],
  ["Mission & Vision","/Mission&Vision"],
  ["Our Management","/Our_Management"],
  ["Our Team","/Our_Team"],
  ["Contact Us","Contact_us"],
];
import logo from '/Logo.png'
const Evermore="https://www.evermolpro.com/"

export default function Footer() {
  return (
    <footer className="w-full bg-[#10172e]">

     
      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ================= COMPANY ================= */}
          <div className=" md:col-span-2 md:max-lg:mb-5" >
            <img
              src={logo}
              alt="Paramarshtwa"
              className="h-auto w-40 object-contain"
            />

            <p className="mt-4 text-base font-normal font-sans leading-6 text-white sm:text-base sm:leading-6">
              The leap of 20th century to 21st is not ordinary
              “NEXT LEVEL”. The 21st century entered to GALAXY –
              with GALA MEGA-TECHNO thrust, which was never ever
              been felt or even imagined. There comes the gigantic
              need for building-enclosures & infra development
              well-suited, adequately budgeted, environmentally-meant
              for their respective purposes.
            </p>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white">
                Follow Us:
              </h3>

              <div className="mt-4 flex gap-1">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center border border-white text-white transition-colors duration-300 hover:bg-orange-600"
                >
                  <FaFacebookF />
                </Link>

                <Link
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center border border-white text-white transition-colors duration-300 hover:bg-orange-600"
                >
                  <FaTwitter />
                </Link>

                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center border border-white text-white transition-colors duration-300 hover:bg-orange-600"
                >
                  <FaInstagram />
                </Link>

                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border border-white text-white transition-colors duration-300 hover:bg-orange-600"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>

          {/* ================= USEFUL LINKS ================= */}
          <div className=" md:col-span-1">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Useful Links
            </h3>

            <ul className="mt-6 space-y-5">
              {usefulLinks.map(([link,path]) => (
                <li key={link}>
                  <Link
                    to={path}
                    className="group flex items-center gap-2 text-sm text-white transition-colors duration-300 hover:text-orange-500 sm:text-base"
                  >
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT US ================= */}
          <div className="self-start md:col-span-1">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Contact Us
            </h3>

            <div className="mt-5 space-y-3 ">

              {/* Phone */}
              <div className="flex items-start gap-3 text-white">
                <FaPhone className="mt-1 shrink-0 text-lg" />

                <Link
                  href="tel:+919999997869"
                  className="text-sm hover:text-orange-500 sm:text-base"
                >
                  +91-9999997869
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 text-white">
                <FaEnvelope className="mt-1 shrink-0 text-lg" />

                <Link
                  href="mailto:info@paramarshtwa.in"
                  className="break-all text-sm hover:text-orange-500 sm:text-base"
                >
                  info@paramarshtwa.in
                </Link>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 text-white">
                <FaHouse className="mt-1 shrink-0 text-lg" />

                <p className="text-sm leading-6 sm:text-base">
                  Astralis, 1407, 14th floor,
                  Paramarshtwa Supernova
                  New Delhi
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-orange-600 px-6 py-5 text-center">
        <p className="text-sm text-white sm:text-base">
          All rights reserved. Designed &amp; Developed By :
          <Link to={Evermore} target="_blank" className="font-semibold"> Evermore Tech</Link>
        </p>
      </div>
    </footer>
  );
}