import Layout from "./Layout";

export default function Footer() {
  return (
    <>
      <footer
        className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg
      sm:text-base"
      >
        <Layout className="py-8 flex items-center justify-between dark:text-light lg:flex-col lg:py-6 sm:!p-6 xs:p-6 ">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className="flex items-center lg:py-2 xs:text-sm">
            Built With{" "}
            <span className="text-primary text-2xl px-1 ">&hearts;</span>{" "}
            by&nbsp;
            <a
              href="/"
              target={"_blank"}
              className="underline underline-offset-2"
            >
              Giovanni Pasini
            </a>
          </div>
        </Layout>
      </footer>
    </>
  );
}
