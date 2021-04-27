import React from "react";
import { css, cx } from "@emotion/css";
import ProjectSection from "@/components/Projects";

const src =
  "https://res.cloudinary.com/justinekizhak/video/upload/v1612441077/bg_a37rnc.mp4";
const poster =
  "https://res.cloudinary.com/justinekizhak/video/upload/v1612441077/bg_a37rnc.jpg";

export default function Main() {
  return (
    <main className={cx("relative", style.main)}>
      <LandingSection />
      <ProjectSection />
      <Video />
    </main>
  );
}

function LandingSection() {
  return (
    <section className="justify-center px-8 font-mono uppercase">
      <div className={cx("h-[80vh]", style.sectionContent)}>
        <div>Hi there, I'm Justine.</div>
        <div>I Create</div>
        <div className="text-4xl font-major">Awesome digital experience</div>
      </div>
    </section>
  );
}

function Video() {
  return (
    <div>
      <div
        className={cx("bg-black opacity-50 z-[-10]", style.videoOverlay)}
      ></div>
      <video
        id="bg-video"
        autoPlay
        muted
        preload="auto"
        loop
        className={cx("object-cover z-[-20]", style.videoOverlay)}
        src={src}
        poster={poster}
      ></video>
    </div>
  );
}

const style = {
  main: css`
    section {
      height: 100vh;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      /* padding: 0 2rem; */
    }
  `,
  sectionContent: css`
    div {
      margin: 0.5rem 0;
    }
  `,
  videoOverlay: "fixed top-0 w-screen h-screen",
};
