import Head from "next/head";
import { Hero, PageHead, RoundedWrapper } from "../components";
export default function Home() {
  return (
    <div>
      <PageHead title="Home" description="Northern beaches web development" />
      <main className="p-4">
        <RoundedWrapper>
          <Hero title="Company Name" subtitle="design | develop | host" />

          <div className="bg-red-50">
            <h1 className="font-bold my-4">Hi, my name is James,</h1>
            Anim elit aliqua aliquip occaecat occaecat. Ut laborum nulla tempor
            elit cupidatat exercitation. Anim adipisicing nostrud dolore
            laborum. Velit tempor pariatur cupidatat qui consequat cillum
            proident commodo elit enim. Sit dolore enim adipisicing sunt nisi.
            Non duis et ex ex dolore.
          </div>
        </RoundedWrapper>
      </main>
    </div>
  );
}
