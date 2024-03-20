import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 text-center">
        <div className="container">
          <SectionTitle
            title="Ägypten Regionen"
            paragraph="Ägypten erstreckt sich über verschiedene Regionen, die von den antiken Wundern entlang des Nils bis zu den atemberaubenden Küsten des Roten Meeres reichen und Besuchern eine faszinierende Vielfalt an historischen Schätzen und natürlicher Schönheit bieten."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
