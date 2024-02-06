import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((each) => (
          <CoreConcept
            key={each.title}
            title={each.title}
            description={each.description}
            image={each.image}
          />
        ))}
      </ul>
    </section>
  );
}
