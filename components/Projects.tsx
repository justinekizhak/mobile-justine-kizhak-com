import React, { useState } from "react";
import axios from "axios";
import { kea, useActions, useValues } from "kea";

import { logicType } from "./ProjectsType";

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
  return res?.data?.stories;
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
          <div key={item.id} className="p-8">
            {item.name}
          </div>
        ))}
        <div className="p-8">
          <button onClick={handleClick}>Show More</button>
        </div>
      </div>
    </section>
  );
}
