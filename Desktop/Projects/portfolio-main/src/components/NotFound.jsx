import Layout from "./Layout";
import AnimatedText from "./AnimatedText";

export default function NotFound() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 sm:!p-6 xs:p-5 pb-0">
          <AnimatedText
            text="Page not Found!"
            className="mb-16 lg:!text-[3.9rem] sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
        </Layout>
      </main>
    </>
  );
}
