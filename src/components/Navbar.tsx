import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      name: "About",
      url: "#",
    },
    {
      name: "Skills",
      url: "#",
    },
    {
      name: "Experiences",
      url: "#",
    },
    {
      name: "Projects",
      url: "#",
    },
    {
      name: "Contact Me",
      url: "#",
    },
  ];

  return (
    <nav className="bg-primary py-2 border-y-4 border-black ">
      <div className="container flex gap-6 justify-center items-center font-bold">
        {navLinks.map((link, idx) => (
          <Link key={idx} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
