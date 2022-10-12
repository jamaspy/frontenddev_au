import {
  Article,
  Avatar,
  ContactSection,
  Footer,
  Hero,
  IntroSection,
  PageHead,
  ProjectSection,
  RoundedWrapper,
  TiltImage,
  WorkSection,
} from "../components";
import { getAllPostsWithFrontMatter } from "../lib";
const Home = ({ description, title, articles }) => {
  return (
    <div className="container mx-auto">
      <PageHead title={title} description={description} />
      <main className="p-4">
        <RoundedWrapper>
          <Hero title="Beachy Vibes" subtitle="design | develop | host" />
          <IntroSection />
          <hr className="mt-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-12 w-full justify-between px-4">
            <div className="flex-flex-col">
              {articles.map((article, index) => {
                const { frontMatter } = article;
                return (
                  <Article
                    key={`article_${index}`}
                    title={frontMatter.title}
                    summary={frontMatter.description}
                    date={frontMatter.date}
                    slug={article.slug}
                  />
                );
              })}
            </div>
            <div className="flex flex-col flex-1">
              <ContactSection />
              <WorkSection />
              <ProjectSection />
            </div>
          </div>
          <hr className="mt-12" />
          <Footer />
        </RoundedWrapper>
      </main>
    </div>
  );
};
export default Home;
export async function getStaticProps() {
  const articles = await getAllPostsWithFrontMatter();

  return {
    props: {
      articles,
      title: "Home",
      description: "James Aspinall | Frontend Developer",
    },
  };
}
