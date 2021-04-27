import React, { useState } from "react";
import axios from "axios";
import { kea, useActions, useValues } from "kea";
import { cx } from "@emotion/css";

import { logicType } from "./ProjectsType";

interface T_ProjectUrl {
  url: string;
}

interface T_ProjectCard {
  title: string;
  domain: string;
  summary: string;
  description: string;
  project_url: T_ProjectUrl;
  background_image: T_ProjectUrl;
  background_image_alt: string;
  background_image_credit: string;
}

interface T_Story {
  id: string;
  content: T_ProjectCard;
}

const logic = kea<logicType>({
  loaders: {
    stories: [
      [],
      {
        loadStories: async (params: object = { pageNumber: 1 }) =>
          await fetchProjects(params),
      },
    ],
  },
  // start the loaders after mounting the logic
  events: ({ actions }) => ({
    afterMount: [actions.loadStories],
  }),
});

const baseUrl = "https://api.storyblok.com/v1/cdn";
const token = "QcidRr0B5ytSNhz7RCptbAtt";

async function fetchProjects({ pageNumber = 1, perPage = 4 }) {
  const res = await axios.get(`${baseUrl}/stories`, {
    params: {
      version: "published",
      token,
      // cv: cv,
      page: pageNumber,
      per_page: perPage,
    },
  });
  return res?.data?.stories as T_Story[];
}

function ProjectCard({ data }: { data: T_ProjectCard }) {
  return (
    <div className="relative p-8 font-jost">
      <div className="relative z-10 text-white">
        <div className="h-64">
          <div className="text-2xl">{data.title}</div>
          <div className="mt-2 text-sm uppercase">{data.domain}</div>
        </div>
        <div className="text-lg">{data.summary}</div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <img
          src={data.background_image.url}
          alt={data.background_image_alt}
          className="object-cover h-full z-[-10]"
        />
      </div>
    </div>
  );
}

export default function ProjectSection() {
  const { stories, storiesLoading } = useValues(logic());
  const { loadStories } = useActions(logic());
  const [pageNumber, setPageNumber] = useState(1);

  const eachPage = 4;

  const handleClick = () => {
    setPageNumber(pageNumber + 1);
    loadStories({ perPage: eachPage * pageNumber });
  };

  return (
    <section className="justify-start text-black bg-white">
      <h1 className="p-8 text-2xl shadow-lg font-major">My Projects</h1>
      <div className="overflow-auto divide-y divide-gray-300">
        {stories.map((item) => (
          <div key={item.id}>
            <ProjectCard data={item.content} />
          </div>
        ))}
        <div className="flex justify-center p-8">
          {!storiesLoading ? (
            <button onClick={handleClick} className={style.button}>
              Load More
            </button>
          ) : (
            <div className={cx(style.button, "border-none")}>Loading</div>
          )}
        </div>
      </div>
    </section>
  );
}

const style = {
  button: "px-4 py-2 border border-gray-400",
};
