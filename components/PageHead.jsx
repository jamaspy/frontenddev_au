import { NextSeo } from "next-seo";

const PageHead = ({ title, description }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        type: "website",
        url: "https://www.frontenddev.au",
        title: "Frontend Dev | Beachy Vibes",
        twitter: {
          handle: "@frontenddevau",
          site: "@frontenddevau",
          cardType: "summary_large_image",
        },
        description:
          "Web Development, Design, Hosting on the Northern Beach NSW",

        images: [
          {
            url: "https://images.unsplash.com/photo-1583005229895-45023367567a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvbnRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            width: 800,
            height: 600,
            alt: "beachy vibes",
          },
          {
            url: "https://images.unsplash.com/photo-1605685375168-b7461c221d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyb250ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            width: 800,
            height: 600,
            alt: "beach sunset",
          },
        ],
      }}
    />
  );
};
export default PageHead;
