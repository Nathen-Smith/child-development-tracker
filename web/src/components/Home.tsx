import React, { useEffect, useState } from "react";
import { StatsCard } from "./StatsCard";
import { JournalCard } from "./journal/JournalCard";
import axios from "../axios";
import { useUser } from "reactfire";
import { HomeNoAuth } from "./HomeNoAuth";

import { JournalArrProps } from "./journal";

export const Home = () => {
  const { data: user } = useUser();
  const [journals, setJournals] = useState<JournalArrProps>();

  useEffect(() => {
    async function getUserData() {
      try {
        const userParams = { where: `{"email": "${user?.email}"}` };
        const journalRes = await axios.get("/journal", { params: userParams });
        setJournals(journalRes.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    user && getUserData();
  }, [user]);

  if (!user) return <HomeNoAuth />;

  return (
    <div className="bg-white flex overflow-hidden max-w-7xl mx-auto">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h1 className="text-lg font-semibold text-gray-900">
            Child Development Monitor
          </h1>
          <div className="columns-3 mt-6 flex flex-row">
            <div className="column">
              <img src="https://i.ibb.co/HpXknVP/image1.png" alt="logo" />
            </div>
            <div className="column">
              <div className="column">
                <img src="https://i.ibb.co/26zN4bM/image2.png" alt="logo" />
              </div>
            </div>
            <div className="column">
              <div className="column">
                <img src="https://i.ibb.co/NtSHHYj/image3.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-lg font-semibold text-gray-900 mt-12">
          Statistics
        </h1>

        <StatsCard color={"primary"} category="Social and Emotional" name="Social and Emotional" timeline={6} />
        <StatsCard
          color={"success"}
          category="Language/Communication"
          name="Language/Communication"
          timeline={6}
        />
        <StatsCard color={"danger"} category="Cognitive" name="Cognitive Development" timeline={6} />
        <StatsCard color={"warning"} category="Physical" name="Physical" timeline={6} />
      </div>
      <div className="w-full">
        <div
          className="flex-auto flex flex-row-reverse mt-4 mr-12"
          style={{ height: "5vh" }}
        >
          <button
            className="h-10 px-6 font-semibold rounded-md bg-indigo-700 text-white"
            type="submit"
          >
            New Journal Entry
          </button>
          <button
            className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 mr-6"
            type="button"
          >
            Update Milestones
          </button>
        </div>
        <div className="overflow-scroll pt-12" style={{ height: "88vh" }}>
          {journals?.map(({ title, createdAt, body }, idx) => {
            return (
              <JournalCard
                body={body}
                title={title}
                createdAt={createdAt}
                key={idx}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
