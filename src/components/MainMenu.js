import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function MainMenu() {
  const router = useRouter();

  const getLinkClass = (path) => {
    return router.pathname === path ? "current-page" : "";
  };

  return (
    <section className="menu-logo">
      <div className="header-logo">
        <a href="#">
          <Image
            src="/devloom-logo-white-side-2.png"
            width={500}
            height={200}
            alt="Devloom logo"
          />
        </a>
      </div>
      <div className="main-menu">
        <ul>
          <li className={getLinkClass("/")}>
            <div>
              <Link href="/">
                {" "}
                <Image
                  src="format-icon.svg"
                  width={20}
                  height={20}
                  alt="Devloom Formatters"
                />
                <span>ALL Formatters</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/HTMLFormatterPage")}>
            <div>
              <Link href="/HTMLFormatterPage">
                <Image
                  src="html5-line-icon.svg"
                  width={20}
                  height={20}
                  alt="HTML Formatter"
                />
                <span>HTML Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/CSSFormatterPage")}>
            <div>
              <Link href="/CSSFormatterPage">
                <Image
                  src="css3-icon.svg"
                  width={20}
                  height={20}
                  alt="CSS Formatter"
                />
                <span>CSS Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSFormatterPage")}>
            <div>
              <Link href="/JSFormatterPage">
                <Image
                  src="js-icon.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>JavaScript Formatter</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSONFormatterPage")}>
            <div>
              <Link href="/JSONFormatterPage">
                <Image
                  src="json-file-icon.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>JSON Formatter</span>
              </Link>
            </div>
          </li>
          {/* <li className="menu-converters">
            <p>Converters</p>
          </li> */}
          <li className={getLinkClass("/HTMLJSXConverterPage")}>
            <div>
              <Link href="/HTMLJSXConverterPage">
                <Image
                  src="convert-icon.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>HTML to JSX</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/JSONYAMLConverterPage")}>
            <div>
              <Link href="/JSONYAMLConverterPage">
                <Image
                  src="convert-icon.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>JSON to YAML</span>
              </Link>
            </div>
          </li>
          <li className={getLinkClass("/YAMLJSONConverterPage")}>
            <div>
              <Link href="/YAMLJSONConverterPage">
                <Image
                  src="convert-icon.svg"
                  width={20}
                  height={20}
                  alt="Format Icon"
                />
                <span>YAML to JSON</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainMenu;
