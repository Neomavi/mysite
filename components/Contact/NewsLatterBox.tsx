"use client";

import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
<div data-gyg-href="https://widget.getyourguide.com/default/availability.frame" data-gyg-tour-id="22357" data-gyg-locale-code="de-DE" data-gyg-currency="EUR" data-gyg-widget="availability" data-gyg-variant="horizontal" data-gyg-partner-id="PW7MM1S"></div>
    </div>
  );
};

export default NewsLatterBox;
