import React from "react";
import Carousel from "../components/home/carousel/Carousel";
import InfoRow from "../components/home/infoRow/InfoRow";
import FaqsRow from "../components/home/faqsRow/FaqsRow";
import ContactRow from "../components/home/contactRow/ContactRow";

function Home() {
  return (
    <div>
      <Carousel />
      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex eum harum cum debitis similique incidunt voluptas perspiciatis sequi, veniam pariatur vero quo ad expedita obcaecati quod, totam inventore animi asperiores quam ipsa dolorum enim saepe. Magni officia perferendis itaque fugit aliquam molestias, saepe numquam qui temporibus consequatur cupiditate illo!"
      />
      <InfoRow
        src="/images/03.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex eum harum cum debitis similique incidunt voluptas perspiciatis sequi, veniam pariatur vero quo ad expedita obcaecati quod, totam inventore animi asperiores quam ipsa dolorum enim saepe. Magni officia perferendis itaque fugit aliquam molestias, saepe numquam qui temporibus consequatur cupiditate illo!"
      />
      <InfoRow
        src="/images/02.jpg"
        title="Privacy Policy"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex eum harum cum debitis similique incidunt voluptas perspiciatis sequi, veniam pariatur vero quo ad expedita obcaecati quod, totam inventore animi asperiores quam ipsa dolorum enim saepe. Magni officia perferendis itaque fugit aliquam molestias, saepe numquam qui temporibus consequatur cupiditate illo!"
      />
      <FaqsRow />
      <ContactRow />
    </div>
  );
}

export default Home;
