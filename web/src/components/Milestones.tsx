import { StatsCard } from "./StatsCard";
import { MilestoneCard } from "./MilestoneCard";
import { MilestonesData } from "./MilestonesData";
import { useState } from "react";

export const Milestones = () => {
  // trying to get all unique timeline values
  // https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
  // add these into a dropdown menu or something?
  const timelineValues = Array.from(
    new Set(MilestonesData.map((m) => m.timeline))
  );
  // this value is set by the dropdown/input element
  const [timeline, setTimeline] = useState<number>(2);
  // replace 'e.timeline === 6' with 'e.timeline === timeline'
  // do the same thing on the home page
  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-900 mt-12 ml-12">
        Statistics
      </h1>
      <div
        className="flex flex-row  p-12"
        style={{ justifyContent: "space-between", width: "100%" }}
      >
        <StatsCard color={"primary"} name="Social and Emotional" timeline={6} />
        <StatsCard
          color={"success"}
          name="Language/Communication"
          timeline={6}
        />
        <StatsCard color={"danger"} name="Cognitive Development" timeline={6} />
        <StatsCard color={"warning"} name="Social and Emotional" timeline={6} />
      </div>

      <h1 className="text-lg font-semibold text-gray-900 ml-12">
        Milestone Completion
      </h1>
      <div className="bg-white flex overflow-hidden" style={{ height: "59vh" }}>
        <div>
          <div
            className="flex-auto flex flex-row mt-4 mr-12"
            style={{ height: "5vh" }}
          >
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Social and Emotional
              </h1>

              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Social and Emotional"
              ).map((entry, idx) => {
                return (
                  <MilestoneCard
                    key={idx}
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                    category={entry.category}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Language/Communication
              </h1>
              {MilestonesData.filter(
                (e) =>
                  e.timeline === 6 && e.category === "Language/Communication"
              ).map((entry, idx) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                    key={idx}
                    category={entry.category}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Cognitive Development
              </h1>
              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Cognitive"
              ).map((entry, idx) => {
                return (
                  <MilestoneCard
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                    key={idx}
                    category={entry.category}
                  />
                );
              })}
            </div>
            <div className="overflow-scroll " style={{ height: "56vh" }}>
              <h1 className="text-lg font-regular text-gray-900 ml-12 ">
                Physical Development
              </h1>
              {MilestonesData.filter(
                (e) => e.timeline === 6 && e.category === "Physical"
              ).map((entry, idx) => {
                return (
                  <MilestoneCard
                    key={idx}
                    milestoneName={entry.milestoneName}
                    timeline={entry.timeline}
                    category={entry.category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
