import { Card } from "antd";
import Header from "components/Header";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const types = [
  {
    name: "Zumba Classic",
    description:
      "The OG Zumba! Get ready for a fiesta of merengue, salsa, cumbia, and more, all blended into an infectious workout.",
    benifits:
      "Tones your whole body, boosts energy levels, improves coordination, and sparks major joy (bonus points for wearing those bright Zumba pants!).",
    videos: [
      {
        name: "Zumba Classic Party Mix: Get your heart pumping and spirits soaring with this energetic mix!",
        link: "https://m.youtube.com/watch?v=xdVE1JnxyrU",
      },
      {
        name: "Zumba Classic Full Body Workout",
        link: "https://m.youtube.com/watch?v=mZeFvX3ALKY",
      },
    ],
  },
  {
    name: "Zumba Gold",
    description:
      "A gentler approach to Zumba, designed for older adults or those with joint limitations. Enjoy the music and movement at your own pace.",
    benifits:
      "Improves balance and flexibility, promotes low-impact cardio, boosts mood, and builds community among participants.",
    videos: [
      {
        name: "Zumba Gold Chair Workout",
        link: "https://m.youtube.com/watch?v=d9zSlhGYpvw",
      },
      {
        name: "Zumba Gold Full Body Workout",
        link: "https://m.youtube.com/watch?v=3HUcIwEb0vs",
      },
    ],
  },
  {
    name: "Zumba Aqua",
    description:
      "Take Zumba to the pool! Aqua Zumba adds a refreshing twist with water resistance, making it a cool and effective workout.",
    benifits:
      "Zero-impact on joints, improves cardiovascular health, boosts buoyancy and balance, and provides a fun and refreshing workout.",
    videos: [
      {
        name: "Zumba Aqua Party Mix",
        link: "https://m.youtube.com/watch?v=mxkwzBdhqoc",
      },
      {
        name: "Zumba Aqua Full Body Workout:",
        link: "https://m.youtube.com/watch?v=NaDXrb5nVow",
      },
    ],
  },
];

export default function Zumba() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <h3 className="pt-8 text-xl font-bold text-center">Zumba</h3>
        <h3 className="pt-8 text-xl font-bold">
          Unleash your inner salsa star and dance your way to fitness with
          Zumba! This vibrant dance workout combines Latin rhythms with cardio
          bursts, toning your body, boosting your mood, and leaving you with a
          smile as infectious as the music. (Image of a person doing Zumba dance
          moves in a group class)
        </h3>
        <p className="mt-4 font-bold text-3xl">Benifits</p>
        <ul className="pl-5 mt-2 list-disc">
          <li>
            Full-body workout: Get your heart pumping, tone your muscles, and
            improve your coordination, all while having fun!
          </li>
          <li>
            Stress relief: Bust a move and melt away your worries as you lose
            yourself in the music and dance.
          </li>
          <li>
            No experience required: Zumba is for everyone, regardless of age or
            fitness level. Just let the rhythm take over!
          </li>
          <li>
            Boosts mood: The energizing music and social atmosphere of a Zumba
            class are sure to leave you feeling happy and uplifted.
          </li>
          <li>
            Burns calories: Dance your way to a healthier you! Zumba is a great
            way to burn calories and keep your weight in check.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-6 pt-8">
          {types.map((item) => (
            <Card
              key={item.name}
              title={
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <Link
                    to="/sports/swimming/hire"
                    className="block text-sm bg-blue-600 rounded-lg px-2 py-1 text-white hover:!text-white hover:!bg-blue-600"
                  >
                    Book Now
                  </Link>
                </div>
              }
              className="flex flex-col border-gray-400"
            >
              <div key={item.name} className="pb-4 border-b text-sm grid gap-2">
                <p className="text-sm">{item.description}</p>
                <p>Benifits</p>
                <ul className="pl-5 list-disc">
                  <li>{item.benifits}</li>
                </ul>
                <Link
                  to="/sports/swimming/hire"
                  className="mt-4 block text-sm bg-blue-600 rounded-lg px-2 py-1 text-white hover:!text-white hover:!bg-blue-600 mx-auto w-fit"
                >
                  Book Now
                </Link>
                <h3 className="mt-8 mb-2 text-2xl font-bold">Gallery</h3>
                <div className="grid gap-4">
                  {item.videos.map((subItem) => (
                    <div
                      className="rounded-lg overflow-hidden"
                      key={subItem.name}
                    >
                      <ReactPlayer url={subItem.link} height="240px" controls />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
