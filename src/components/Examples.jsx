import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <Section id="examples" title={"Examples"}>
      <Tabs
        DynamicWrapper = "menu"
        content={
          <>
            <TabButton
              isActive={selectedTopic == "components" ? true : false}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTopic == "jsx" ? true : false}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={selectedTopic == "props" ? true : false}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={selectedTopic == "state" ? true : false}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic ? (
          <h3>Please select topic</h3>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </Section>
  );
}
