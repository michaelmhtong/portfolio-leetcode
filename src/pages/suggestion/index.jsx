import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import QuestionGroups from "../../data/QuestionGroup.json";
import QuestionList from "@/components/Table/QuestionList";
import { Container } from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";

const SuggestionPage = () => {
  const router = useRouter();
  let group = router.query.group || "week";
  const [groupData, setGroupData] = useState({});

  // Call getGroupData to group the data by week on initial render
  useEffect(() => {
    getGroupData();
  }, []);

  useEffect(() => {
    if (group) {
      getGroupData();
    }
  }, [group]);

  const handleChange = (event) => {
    const newGroup = event.target.value;
    // Update the URL to include the group value
    router.push(`/suggestion?group=${newGroup}`);
  };

  const getGroupData = () => {
    const groupedData = {};
    // Group the data
    QuestionGroups.forEach((item) => {
      const value = item[group];
      if (!groupedData[value]) {
        groupedData[value] = [];
      }
      groupedData[value].push(item);
    });

    setGroupData(groupedData);
  };

  return (
    <Container>
      <Heading
        heading="Suggestion"
        subheading="Curated List of Top 75 LeetCode Questions to Save Your Time"
      />
      <label className="block text-sm font-medium text-gray-700">Group by</label>
      <select
        id="group"
        name="group"
        className="max-w-xs mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="week"
        onChange={handleChange}
      >
        <option value="week">Weeks</option>
        <option value="topic">Topics</option>
        <option value="difficulty">Difficulty</option>
      </select>
      <QuestionList data={groupData} />
    </Container>
  );
};

export default SuggestionPage;
