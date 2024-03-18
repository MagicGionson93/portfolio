import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function HeadHelmet({ title }) {
  if (title === "/") {
    title = "Home";
  } else {
    title = useLocation().pathname;

    title = title.replace("/", "");
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content="About Me!" />
        </Helmet>
      </HelmetProvider>
    </>
  );
}
