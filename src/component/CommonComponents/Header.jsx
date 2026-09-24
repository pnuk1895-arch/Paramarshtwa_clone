import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
    FiMenu,
    FiX,
    FiChevronDown,
} from "react-icons/fi";
import logo from '/Logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [changeHeaderPosition, setchangeHeaderPosition] = useState()
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const headerRef = useRef()
    const navigate = useNavigate()


    const openMenu = () => {
        setIsMenuVisible(true);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setIsMenuOpen(true);
            });
        });
    };


    const closeMenu = () => {
        setIsMenuOpen(false);

        setTimeout(() => {
            setIsMenuVisible(false);
            setOpenDropdown(null);
        }, 800);
    };


    const toggleDropdown = (index) => {
        setOpenDropdown(
            openDropdown === index ? null : index
        );

        // Close nested dropdown when changing top-level dropdown
        setOpenSubDropdown(null);
    };

    const toggleSubDropdown = (key) => {
        setOpenSubDropdown(
            openSubDropdown === key ? null : key
        );
    };


    const navLinks = [
        {
            name: "Home",
            path: "/",
            Css: "",
            dropdown: false,
            contents: ''
        },
        {
            name: "About Us",
            path: "",
            dropdown: true,
            Css: 'group',
            contents: [['About Us', '/About_Us'], ['Mission & Vision', '/Mission&Vision '], ['Our Team', '/Our_Team'], ['Our Management', "/Our_Management"]]
        },
        {
            name: "Our Sectors",
            path: "/sectors",
            dropdown: true,
            Css: 'group',
            contents: [['Building', [["Residential", "/Residential"], ["Commercial", "/Commercial"], ["Education, Institutional", "/Education_Institutional"], ["Health care", "/HealthCare"], ["Hotels And Resorts", "/Hotels_And_Resorts"], ["IT And IT Enabled", "/IT_And_IT_Enabled"], ["Retail", "/Retail"]]], ['Transport System', [["MRT/LRT", "/MRT_LRT"], ["Railways", "/Railways"], ["Highway And Bridges", "/Highway_And_Bridges"]]], ['Urban Infrastructure', '/Urban_infrastructure'], ['Urban Land Development', '/Urban_land_development'], ['Urban Renewal', '/Urban_Renewal'], ['Environmental', '/Environment'], ['Industrial/SEZ', '/Industrial/SEZ'], ['Sewage And Drainage', '/Sewage_and_Drainage'], ['Water Supply & Sanitation', 'Water_supply&sanitation'], ['Sport Complexes', '/Sport_complexes'], ['Aviation', '/Aviation']]

        },
        {
            name: "Our Services",
            path: "/services",
            dropdown: true,
            Css: 'group',
            contents: [['Fesibility Studies', '/Feasibility_studies'], ['Project Management', '/Project_management'], ['Master Planning', '/Master_Planning'], ['Architecture', '/Architecture'], ['Detailed Design', '/Detailed_design'], ['Value Engineering', '/Value_engineering'], ['Contract Documentations', '/Contract_documentations'], ['Due_Diligence', '/Due_diligence'], ['Proof Diligence', '/Proof_diligence'], ['Bid Process Management', '/Bid_project_menagement']]
        },
        {
            name: "Our Services",
            path: "/Services",
            dropdown: false,
            Css: '',
            contents: ''
        },
        {
            name: "Contact Us",
            path: "/contact",
            dropdown: false,
            Css: '',
            contents: ''
        },
    ];

    useEffect(() => {
        function handleScroll() {
            if (!headerRef.current) return;

            if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
                if (window.scrollY > 170) {
                    setchangeHeaderPosition(true)
                } else {
                    if (window.scrollY < 50) {
                        setchangeHeaderPosition(false)
                    }
                }
            } else {
                if (window.scrollY > 120) {
                    setchangeHeaderPosition(true);
                } else {
                    if (window.scrollY < 50) {
                        setchangeHeaderPosition(false)
                    }
                }
            }


        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header className=" absolute w-full bg-white z-10">

            {/* TOP BAR */}

            <div className="relative bg-slate-900 text-white transition-all duration-500 ease-in-out ">
                <div className="mx-auto flex h-12 w-full max-w-7xl items-center justify-center md:justify-between px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out">

                    {/* Phone + Email */}
                    {/* Swapped 'hidden md:flex' for max-width/opacity transitions to avoid sudden snapping */}
                    <div className="flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out max-md:max-w-0 max-md:gap-0 max-md:opacity-0 md:max-w-xl md:gap-6 md:opacity-100">
                        <Link
                            href="tel:+91999997869"
                            className="flex items-center gap-2 text-base transition-all duration-300 ease-in-out hover:text-orange-400"
                        >
                            <FaPhoneAlt />
                            <span>+91-9999997869</span>
                        </Link>

                        <Link
                            href="mailto:info@paramarshtwa.in"
                            className="flex items-center gap-2 text-base transition-all duration-300 ease-in-out hover:text-orange-400"
                        >
                            <FaEnvelope />
                            <span>info@paramarshtwa.in</span>
                        </Link>
                    </div>

                    {/* Social Icons */}
                    {/* Removed 'md:absolute md:right-7' to keep it in the normal Flexbox flow, allowing smooth gliding during window resizing */}
                    <div className=" md:absolute md:right-6 flex items-center gap-5 transition-all duration-500 ease-in-out">
                        <Link
                            href="#"
                            aria-label="Facebook"
                            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-orange-400 will-change-transform"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="#"
                            aria-label="Twitter"
                            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-orange-400 will-change-transform"
                        >
                            <FaTwitter />
                        </Link>

                        <Link
                            href="#"
                            aria-label="Instagram"
                            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-orange-400 will-change-transform"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="#"
                            aria-label="LinkedIn"
                            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-orange-400 will-change-transform"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>


            {/* DESKTOP HEADER */}
            <div ref={headerRef} className="hidden w-full border-b border-slate-100 bg-white transition-all duration-500 ease-in-out lg:block">
                <div className="mx-auto flex h-20 w-full items-center transition-all duration-500 ease-in-out">

                    {/* Logo */}
                    <Link to="/" className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105 will-change-transform">
                        <img
                            src={logo}
                            alt="Paramarshtwa Infinite Solution"
                            className="h-auto w-40 object-contain pl-8"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="ml-auto flex h-full items-center transition-all duration-500 ease-in-out">
                        {navLinks.map((link, index) => {
                            const Click = ["/", "/contact", "/Services"].includes(link.path)
                                ? () => navigate(link.path)
                                : undefined;

                            return (
                                <div
                                    onClick={Click}
                                    key={`${link.name}-${index}`}
                                    className={`group relative px-4 py-6 text-xl text-slate-800 transition-all duration-300 ease-in-out hover:text-orange-600 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:bg-black cursor-pointer                       xl:text-xl max-xl:text-lg ${link.Css}`}
                                >
                                    {link.name}

                                    {link.contents && (
                                        <div className="invisible absolute left-0 top-20 z-50 w-58 origin-top -translate-y-3 scale-95 rounded-md border-t-4 border-red-700 bg-white opacity-0 shadow-lg transition-all duration-400 ease-in-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 will-change-transform">
                                            {link.contents.map(([name, path], index) => (
                                                name !== "Building" && name !== "Transport System" ? (
                                                    <Link
                                                        key={index}
                                                        to={path}
                                                        className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white "
                                                    >
                                                        {name}
                                                    </Link>
                                                ) : (
                                                    <div key={index} className="group/sub relative">

                                                        {/* The Trigger Item */}
                                                        <div className="flex cursor-pointer items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white ">
                                                            {name} <MdKeyboardArrowRight className=" h-6 w-6 text-base transition-transform duration-300 " />
                                                        </div>

                                                        {/* The Nested Dropdown (Building -> sub-items) */}
                                                        {/* Added: pointer-events-none and group-hover/sub:pointer-events-auto */}
                                                        {/* Double check: Ensure absolutely NO "group-hover:" classes are in this div, ONLY "group-hover/sub:" */}
                                                        <div className="pointer-events-none invisible absolute left-full top-0 z-50 w-58 origin-top-left -translate-y-2 scale-95 rounded-md border-t-4 border-red-700 bg-white opacity-0 shadow-lg transition-all duration-400 ease-out group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:scale-100 group-hover/sub:opacity-100 will-change-transform">

                                                            {/* Note: In your original code, `path` was mapped here as if it was an array. Ensure `path` is actually an array of sub-links in your data structure for "Building". */}
                                                            {Array.isArray(path) && path.map(([content, path], idx) => (
                                                                <Link
                                                                    key={idx}
                                                                    to={path}
                                                                    className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white"
                                                                >
                                                                    {content}
                                                                </Link>
                                                            ))}
                                                        </div>

                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Enquire */}
                        <Link
                            to="tel:+91-9999997869"
                            className="ml-8 flex h-full items-center justify-center bg-linear-to-r from-red-600 to-orange-500 px-10 text-xl font-medium text-white transition-all duration-500 ease-in-out hover:from-red-700 hover:to-orange-600 hover:shadow-inner lg:ml-4 xl:ml-20"
                        >
                            Enquire Now
                        </Link>
                    </nav>
                </div>
            </div>

            {/* Sticky / Fixed Header */}
            {changeHeaderPosition && (
                <div
                    className={`fixed left-0 top-0 z-50 hidden w-full border-b border-slate-100 bg-white/95 backdrop-blur-sm transition-all duration-500 ease-in-out lg:block will-change-transform ${changeHeaderPosition
                        ? "translate-y-0 opacity-100 shadow-md"
                        : "-translate-y-full opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="mx-auto flex h-20 w-full items-center transition-all duration-500 ease-in-out">

                        {/* Logo */}
                        <Link to="/" className="flex shrink-0 items-center transition-transform duration-300 hover:scale-105 will-change-transform">
                            <img
                                src={logo}
                                alt="Paramarshtwa Infinite Solution"
                                className="h-auto w-40 object-contain pl-8"
                            />
                        </Link>

                        {/* Navigation */}
                        <nav className="ml-auto flex h-full items-center transition-all duration-500 ease-in-out">
                            {navLinks.map((link, index) => {
                                const Click = ["/", "/contact", "/Services"].includes(link.path)
                                    ? () => navigate(link.path)
                                    : undefined;

                                return (
                                    <div
                                        onClick={Click}
                                        key={`${link.name}-${index}`}
                                        className={`group relative px-4 py-6 text-xl text-slate-800 transition-all duration-300 ease-in-out hover:text-orange-600 before:absolute before:left-0 before:top-1/2 before:h-5 before:w-px before:-translate-y-1/2 before:bg-black cursor-pointer xl:text-xl max-xl:text-lg ${link.Css}`}
                                    >
                                        {link.name}

                                        {link.contents && (
                                            <div className="invisible absolute left-0 top-20 z-50 w-58 origin-top -translate-y-3 scale-95 rounded-md border-t-4 border-red-700 bg-white opacity-0 shadow-lg transition-all duration-400 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 will-change-transform">
                                                {link.contents.map(([name, path], index) => (
                                                    name !== "Building" && name !== "Transport System" ? (
                                                        <Link
                                                            key={index}
                                                            to={path}
                                                            className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white "
                                                        >
                                                            {name}
                                                        </Link>
                                                    ) : (
                                                        <div key={index} className="group/sub relative">

                                                            {/* The Trigger Item */}
                                                            <div className="flex cursor-pointer items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white ">
                                                                {name} <MdKeyboardArrowRight className=" h-6 w-6 text-base transition-transform duration-300 " />
                                                            </div>

                                                            {/* The Nested Dropdown (Building -> sub-items) */}
                                                            {/* Added: pointer-events-none and group-hover/sub:pointer-events-auto */}
                                                            {/* Double check: Ensure absolutely NO "group-hover:" classes are in this div, ONLY "group-hover/sub:" */}
                                                            <div className="pointer-events-none invisible absolute left-full top-0 z-50 w-58 origin-top-left -translate-y-2 scale-95 rounded-md border-t-4 border-red-700 bg-white opacity-0 shadow-lg transition-all duration-400 ease-out group-hover/sub:pointer-events-auto group-hover/sub:visible group-hover/sub:translate-y-0 group-hover/sub:scale-100 group-hover/sub:opacity-100 will-change-transform">

                                                                {/* Note: In your original code, `path` was mapped here as if it was an array. Ensure `path` is actually an array of sub-links in your data structure for "Building". */}
                                                                {Array.isArray(path) && path.map(([content, path], idx) => (
                                                                    <Link
                                                                        key={idx}
                                                                        to={path}
                                                                        className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 px-4 py-3 text-base text-slate-700 transition-all duration-400 hover:bg-black hover:text-white"
                                                                    >
                                                                        {content}
                                                                    </Link>
                                                                ))}
                                                            </div>

                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {/* Enquire */}
                            <Link
                                to="tel:+91-9999997869"
                                className="ml-8 flex h-full items-center justify-center bg-linear-to-r from-red-600 to-orange-500 px-10 text-xl font-medium text-white transition-all duration-500 ease-in-out hover:from-red-700 hover:to-orange-600 hover:shadow-inner lg:ml-4 xl:ml-20"
                            >
                                Enquire Now
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            {/* TABLET HEADER */}
            <div ref={headerRef} className='w-full hidden bg-white md:block lg:hidden'>

                {/* Logo */}

                <div className="flex h-24 items-center justify-center border-b border-slate-100">

                    <Link to="/">

                        <img
                            src={logo}
                            alt="Paramarshtwa Infinite Solution"
                            className="h-auto w-34 object-contain"
                        />

                    </Link>

                </div>


                {/* Tablet Navigation */}

                <nav className="flex h-16 items-center justify-center transition-all duration-500 ease-in-out">

                    {navLinks.map((link, index) => (

                        <Link
                            key={`${link.name}-${index}`}
                            to={link.path}
                            className={`px-3 py-2 text-lg text-slate-800 transition-all duration-300 ease-in-out hover:text-orange-600 ${index !== 0 ? "border-l border-slate-300" : ""}`}
                        >
                            {link.name}
                        </Link>

                    ))}
                </nav>

            </div>

            {
                changeHeaderPosition &&
                <div className='fixed left-0 top-0 z-50 w-full hidden bg-white md:block lg:hidden'>

                    {/* Logo */}

                    <div className="flex h-24 items-center justify-center border-b border-slate-100">

                        <Link to="/">

                            <img
                                src={logo}
                                alt="Paramarshtwa Infinite Solution"
                                className="h-auto w-34 object-contain"
                            />

                        </Link>

                    </div>


                    {/* Tablet Navigation */}

                    <nav className="flex h-16 items-center justify-center transition-all duration-500 ease-in-out">

                        {navLinks.map((link, index) => (

                            <Link
                                key={`${link.name}-${index}`}
                                to={link.path}
                                className={`px-3 py-2 text-lg text-slate-800 transition-all duration-300 ease-in-out hover:text-orange-600 ${index !== 0 ? "border-l border-slate-300" : ""}`}
                            >
                                {link.name}
                            </Link>

                        ))}

                    </nav>

                </div>
            }


            {/* MOBILE HEADER */}
            <div ref={headerRef} className='w-full bg-white transition-all duration-500 ease-in-out md:hidden '>

                <div className="flex h-20 items-center justify-between px-4">

                    {/* Logo */}

                    <Link to="/">

                        <img
                            src={logo}
                            alt="Paramarshtwa Infinite Solution"
                            className="h-auto w-24 object-contain"
                        />

                    </Link>


                    {/* Menu */}

                    <button
                        type="button"
                        onClick={openMenu}
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        className="rounded-md p-2 text-3xl text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-100"
                    >

                        <FiMenu />

                    </button>

                </div>

            </div>

            {
                changeHeaderPosition &&
                <div className=' fixed left-0 top-0 z-50 w-full bg-white transition-all duration-500 ease-in-out md:hidden '>

                    <div className="flex h-20 items-center justify-between px-4">

                        {/* Logo */}

                        <Link to="/">

                            <img
                                src={logo}
                                alt="Paramarshtwa Infinite Solution"
                                className="h-auto w-24 object-contain"
                            />

                        </Link>


                        {/* Menu */}

                        <button
                            type="button"
                            onClick={openMenu}
                            aria-label="Open menu"
                            aria-expanded={isMenuOpen}
                            className="rounded-md p-2 text-3xl text-slate-800 transition-all duration-300 ease-in-out hover:bg-slate-100"
                        >

                            <FiMenu />

                        </button>

                    </div>

                </div>

            }
            {/* MOBILE DRAWER */}

            {
                isMenuVisible && (

                    <div className="fixed inset-0 z-50 overflow-y-scroll md:hidden">


                        {/* BLACK PANEL */}

                        <button
                            type="button"
                            aria-label="Close menu"
                            onClick={closeMenu}
                            className={`absolute right-0 top-0 z-0 h-full w-full bg-black opacity-80 transition-transform duration-600 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                        />


                        {/* SIDEBAR */}

                        <aside
                            className={`absolute right-0 top-0 z-10 flex h-full w-80 max-w-full flex-col bg-white shadow-2xl transition-transform duration-1200 ease-in-out ${isMenuOpen ? "translate-x-0 " : "translate-x-full"}`}
                        >

                            {/* DRAWER HEADER */}

                            <div className="relative flex h-48 items-center justify-center border-b border-slate-200">

                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                >

                                    <img
                                        src={logo}
                                        alt="Paramarshtwa Infinite Solution"
                                        className="h-auto w-48 object-contain"
                                    />

                                </Link>


                                {/* Close Button */}

                                <button
                                    type="button"
                                    onClick={closeMenu}
                                    aria-label="Close menu"
                                    className="absolute right-3 top-3 rounded-md p-2 text-2xl text-slate-700 transition-all duration-300 ease-in-out hover:bg-slate-100"
                                >

                                    <FiX />

                                </button>

                            </div>


                            {/* MOBILE NAVIGATION */}

                            <nav className="flex flex-col">

                                {navLinks.map((link, index) => (

                                    <div
                                        key={`${link.name}-${index}`}
                                        className="border-b border-slate-200"
                                    >

                                        {/* ================= TOP LEVEL ================= */}

                                        <div className="flex items-center">

                                            <Link
                                                to={link.path}
                                                onClick={() => {
                                                    if (!link.dropdown) {
                                                        closeMenu();
                                                    }
                                                }}
                                                className={`flex-1 px-5 py-3 text-base transition-all duration-300 ease-in-out hover:text-red-600 ${index === 0
                                                        ? "text-red-600"
                                                        : "text-slate-700"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>


                                            {/* Top level arrow */}

                                            {link.dropdown && (

                                                <button
                                                    type="button"
                                                    onClick={() => toggleDropdown(index)}
                                                    aria-label={`Open ${link.name} submenu`}
                                                    className="border-l border-slate-200 px-4 py-3 text-slate-700 transition-all duration-300 ease-in-out hover:text-red-600"
                                                >

                                                    <FiChevronDown
                                                        className={`transition-transform duration-300 ease-in-out ${openDropdown === index
                                                                ? "rotate-180"
                                                                : ""
                                                            }`}
                                                    />

                                                </button>

                                            )}

                                        </div>


                                        {/* ================= TOP LEVEL DROPDOWN ================= */}

                                        {link.dropdown && openDropdown === index && (

                                            <div className="bg-slate-50">

                                                {link.contents.map(
                                                    ([content, path], downIndex) => {

                                                        /*
                                                            If path is an array,
                                                            this is a nested dropdown.
                            
                                                            Example:
                            
                                                            [
                                                                "Building",
                                                                [
                                                                    ["Residential", "/Residential"],
                                                                    ["Commercial", "/Commercial"]
                                                                ]
                                                            ]
                                                        */

                                                        const isNestedDropdown =
                                                            Array.isArray(path);

                                                        const subKey = `${index}-${downIndex}`;


                                                        return (

                                                            <div
                                                                key={`${content}-${downIndex}`}
                                                                className="border-t border-slate-200"
                                                            >

                                                                {/* ================= NESTED DROPDOWN ================= */}

                                                                {isNestedDropdown ? (

                                                                    <>

                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                toggleSubDropdown(
                                                                                    subKey
                                                                                )
                                                                            }
                                                                            className="flex w-full items-center justify-between px-7 py-3 text-left text-sm text-slate-600 transition-all duration-300 ease-in-out hover:text-red-600"
                                                                        >

                                                                            <span>
                                                                                {content}
                                                                            </span>

                                                                            <FiChevronDown
                                                                                className={`transition-transform duration-300 ease-in-out ${openSubDropdown === subKey
                                                                                        ? "rotate-180"
                                                                                        : ""
                                                                                    }`}
                                                                            />

                                                                        </button>


                                                                        {/* ================= NESTED ITEMS ================= */}

                                                                        {openSubDropdown === subKey && (

                                                                            <div className="bg-white">

                                                                                {path.map(
                                                                                    (
                                                                                        [
                                                                                            subContent,
                                                                                            subPath
                                                                                        ],
                                                                                        subIndex
                                                                                    ) => (

                                                                                        <Link
                                                                                            key={`${subContent}-${subIndex}`}
                                                                                            to={subPath}
                                                                                            onClick={closeMenu}
                                                                                            className="block border-t border-slate-100 px-10 py-2.5 text-sm text-slate-500 transition-all duration-300 ease-in-out hover:text-red-600"
                                                                                        >
                                                                                            {subContent}
                                                                                        </Link>

                                                                                    )
                                                                                )}

                                                                            </div>

                                                                        )}

                                                                    </>

                                                                ) : (

                                                                    /* ================= NORMAL DROPDOWN ITEM ================= */

                                                                    <Link
                                                                        to={path}
                                                                        onClick={closeMenu}
                                                                        className="block px-7 py-3 text-sm text-slate-600 transition-all duration-300 ease-in-out hover:text-red-600"
                                                                    >
                                                                        {content}
                                                                    </Link>

                                                                )}

                                                            </div>

                                                        );

                                                    }
                                                )}

                                            </div>

                                        )}

                                    </div>

                                ))}

                            </nav>

                        </aside>

                    </div>

                )
            }

        </header >
    );
};

export default Header;


