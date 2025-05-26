import Link from "next/link";
import classes from "./navigation.module.css";
export default function Navigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navigation}>
          <NavItems item="Services" itemLink={"/#services"} />
          <NavItems item="Process" itemLink={"/#process"} />
          <NavItems item="Blog" itemLink={"/blog"} />
          <Link href={"#"}>
            <img
              className={classes.logo}
              src="/logo.png"
              alt="RamiForza's Brand Logo"
            />
          </Link>
          <NavItems item="Our Work" itemLink={"/#ourWork"} />
          <NavItems item="Contact" itemLink={"/#contact"} />
          <NavItems item="FAQ" itemLink={"/#faqId"} />
        </ul>
      </nav>
    </header>
  );
}
function NavItems({ item, itemLink }) {
  return (
    <li>
      <Link
        className={`${classes.navItem} ${classes.underline}`}
        href={itemLink}
      >
        {item}
      </Link>
    </li>
  );
}
