import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Abenteuerliche Quad Safaris in Ägypten: Erkunden Sie die Wüstenlandschaften auf spannenden Touren",
  description:
    "Erleben Sie aufregende Abenteuer und entdecken Sie die atemberaubende Schönheit der ägyptischen Wüstenlandschaften auf einer Quad-Safari. Ägypten bietet einzigartige Möglichkeiten, die Wüste auf actiongeladenen Touren zu erkunden.",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("http://agypten.de"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    url: "https://agypten.de/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://agypten.de/images/blog/quad-safari.jpg",
      },
    ],
  },
};

const BlogSidebarPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black sm:text-2xl sm:leading-tight dark:text-white">
                  Abenteuerliche Quad Safaris in Ägypten: Erkunden Sie die
                  Wüstenlandschaften auf spannenden Touren
                </h1>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Erleben Sie aufregende Abenteuer und entdecken Sie die
                    atemberaubende Schönheit der ägyptischen Wüstenlandschaften
                    auf einer Quad-Safari. Ägypten bietet einzigartige
                    Möglichkeiten, die Wüste auf actiongeladenen Touren zu
                    erkunden.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/quad-safari.jpg"
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Ägypten, bekannt für seine antiken Monumente, bietet auch
                    abseits der Touristenpfade aufregende Abenteuer. Die
                    Quad-Safaris entlang der Wüstenregionen bieten eine
                    faszinierende Möglichkeit, die raue Schönheit der Natur zu
                    erleben.
                  </p>
<div>
                    <Link
                      target="blank"
                      href="https://www.check24.net/pauschalreisen-vergleich/?pid=185738&c24pp_departure_date=2024-06-01&c24pp_return_date=2024-01-31&c24pp_travel_duration=1w&c24pp_airport=FRA&c24pp_hotel_id=21208&c24pp_region_id=673&c24pp_adult=2&c24pp_childrenCount=0&c24pp_children_0%5Bage%5D=-&c24pp_children_1%5Bage%5D=-&c24pp_children_2%5Bage%5D=-&c24pp_children_3%5Bage%5D=-#/suche/angebot?airport=FRA&transportType=flight&roomCount=1&adult=2&roomAllocation=A-A&departureDate=2024-06-01&returnDate=2024-07-13&days=1w&hotelListId=b2621595-c6c2-419d-a243-dae842510441&areaId=673&dhs=21208&sorting=categoryDistribution&offerSort=default&areaSort=topregion&extendedSearch=1&oceanView=0&hotelId=21208&kopa=6&tid5=185738&kopa=6&tid5=185738&kopa=6&tid5=185738&kopa=6&tid5=185738&kopa=6&tid5=185738"
                    >
                      <button className="mb-4 w-full rounded-sm bg-primary px-6 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-red-500 sm:mb-10 sm:px-9 sm:py-4 dark:shadow-submit-dark">
                        Jetzt Kempinski Hotel Soma Bay Buchen
                      </button>
                    </Link>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Quad-Safari-Routen
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Die Wüstenregionen wie die Sinai-Halbinsel, das Rote Meer
                    und die Wüste von Hurghada sind beliebte Ziele für
                    Quad-Safaris. Mit einer Vielzahl von Routen bieten diese
                    Orte Abenteuer für Anfänger und erfahrene Fahrer
                    gleichermaßen.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Erfahrung und Ausrüstung
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Quad-Safari-Anbieter stellen die notwendige Ausrüstung
                    bereit und bieten oft auch Anleitungen für sicheres Fahren
                    in der Wüste. Die Touren werden oft von erfahrenen Guides
                    begleitet, um den Teilnehmern ein sicheres und
                    unterhaltsames Erlebnis zu bieten.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Tipp
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Bei Quad-Safaris in Ägypten sollten Sie die Gelegenheit
                    nutzen, um die atemberaubenden Sonnenuntergänge über den
                    Wüstenlandschaften zu erleben und unvergessliche Fotos zu
                    machen.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Quad Safari in Ägypten
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Quad-Safaris bieten Abenteuerlustigen eine aufregende
                    Möglichkeit, die abgelegenen Wüsten Ägyptens zu erkunden und
                    die raue Schönheit der Natur zu erleben. Tauchen Sie ein in
                    das Abenteuer und genießen Sie das aufregende Fahrerlebnis
                    auf den sandigen Pfaden der Wüste.
                  </p>

                  <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                    <div
                      data-gyg-href="https://widget.getyourguide.com/default/availability.frame"
                      data-gyg-tour-id="22357"
                      data-gyg-locale-code="de-DE"
                      data-gyg-currency="EUR"
                      data-gyg-widget="availability"
                      data-gyg-variant="horizontal"
                      data-gyg-partner-id="PW7MM1S"
                    ></div>
                  </div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"></p>
                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="quad saffari" />
                        <TagButton text="urlaub" />
                        <TagButton text="ägypten" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                  Beliebte Ziele Ägypten
                </h3>
                <ul className="px-8 py-6">
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Hurghada
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Luxor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Kairo
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      El Gouna
                    </a>
                  </li>
                  <li>
                    <a
                      href="#0"
                      className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Sharm El Sheikh
                    </a>
                  </li>
                </ul>
              </div>

              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSidebarPage;