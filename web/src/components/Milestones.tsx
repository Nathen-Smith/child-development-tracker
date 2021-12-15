import { StatsCard } from "./StatsCard";
import { MilestoneCard } from "./MilestoneCard";
import { MilestonesData } from "./MilestonesData";
import { useState } from "react";
import { ScrollingCarousel } from "./Carousels/index";
import { TimelineMenu } from "./TimelineMenu";
// import { ScrollingCarousel } from "./scrolling-carousel/index";
// import { Carousel } from './OMSCarousels/components/carousel/index';

export const Milestones = () => {
  // trying to get all unique timeline values
  // https://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
  // add these into a dropdown menu or something?
  // const timelineValues = Array.from(
  //   new Set(MilestonesData.map((m) => m.timeline))
  // );
  // this value is set by the dropdown/input element
  const [timeline, setTimeline] = useState<number>(2);
  // replace 'e.timeline === 6' with 'e.timeline === timeline'
  // do the same thing on the home page
  return (
    <div className="overflow-scroll max-w-7xl mx-auto">
      <h1 className="text-lg font-semibold text-gray-900 mt-12 ml-12">
        Statistics
      </h1>
      <div className="ml-12">
        <TimelineMenu updateFunc={setTimeline} />
      </div>
      <ScrollingCarousel>
        <div className="lg:w-1/4 sm:w-full mr-12 ml-12">
          <StatsCard
            color={"primary"}
            category="Social and Emotional"
            name="Social and Emotional"
            timeline={timeline}
          />
        </div>
        <div className="lg:w-1/4 sm:w-full mr-12 ml-12">
          <StatsCard
            color={"success"}
            category="Language/Communication"
            name="Language/Communication"
            timeline={timeline}
          />
        </div>
        <div className="lg:w-1/4 sm:w-full mr-12 ml-12">
          <StatsCard
            color={"danger"}
            category="Cognitive"
            name="Cognitive Development"
            timeline={timeline}
          />
        </div>
        <div className="lg:w-1/4 sm:w-full mr-12 ml-12">
          <StatsCard
            color={"warning"}
            category="Physical"
            name="Physical"
            timeline={timeline}
          />
        </div>
      </ScrollingCarousel>

      <h1 className="text-lg font-semibold text-gray-900 ml-12">
        Milestone Completion
      </h1>
      {/* <div className="bg-white flex"> */}
      <h1 className="text-lg font-regular text-gray-900 ml-12 ">
        Social and Emotional
      </h1>
      <ScrollingCarousel>
        {MilestonesData.filter(
          (e) =>
            e.timeline === timeline && e.category === "Social and Emotional"
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
      </ScrollingCarousel>
      {/* </div> */}
      {/* <div className="overflow-scroll w-1/4" style={{ height: "56vh" }}>
       */}
      <h1 className="text-lg font-regular text-gray-900 ml-12 ">
        Language/Communication
      </h1>
      <ScrollingCarousel>
        {MilestonesData.filter(
          (e) =>
            e.timeline === timeline && e.category === "Language/Communication"
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
        {/* </div> */}
      </ScrollingCarousel>
      {/* <div className="overflow-scroll w-1/4" style={{ height: "56vh" }}>
       */}
      <h1 className="text-lg font-regular text-gray-900 ml-12 ">
        Cognitive Development
      </h1>
      <ScrollingCarousel>
        {MilestonesData.filter(
          (e) => e.timeline === timeline && e.category === "Cognitive"
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
        {/* </div> */}
      </ScrollingCarousel>
      {/* <div className="overflow-scroll w-1/4 " style={{ height: "56vh" }}> */}
      <h1 className="text-lg font-regular text-gray-900 ml-12 ">
        Physical Development
      </h1>
      <ScrollingCarousel>
        {MilestonesData.filter(
          (e) => e.timeline === timeline && e.category === "Physical"
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
        {/* </div> */}
      </ScrollingCarousel>
    </div>
    // </div>
    // </div>
    // </div>
  );
};
