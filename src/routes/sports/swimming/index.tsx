import { Card } from "antd";
import Header from "components/Header";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const types = [
  {
    name: "Freestyle",
    description:
      "The most popular and efficient swimming stroke, featuring alternating arm movements and a flutter kick.",
    benifits:
      "Great for overall fitness, builds endurance, improves cardiovascular health, and strengthens core muscles.",
    videos: [
      {
        name: "Learn Freestyle Swimming - Perfect Technique for Beginners",
        link: "https://www.youtube.com/watch?v=uiI6Z_0Q2Io",
      },
      {
        name: "Freestyle Swimming Drills for Better Efficiency and Speed",
        link: "https://www.youtube.com/watch?v=_n6c8ehOTb4",
      },
    ],
  },
  {
    name: "Backstroke",
    description:
      "Swimming on your back with alternating arm movements and a flutter kick.",
    benifits:
      "Excellent for posture correction, strengthens upper back and shoulders, reduces stress on joints, and provides a different perspective of the water.",
    videos: [
      {
        name: "How to Swim Backstroke: The Easy Way to Learn Backstroke!",
        link: "https://www.youtube.com/watch?v=wL2g2Q_bbUw",
      },
      {
        name: "Backstroke Swimming Drills for Beginners: Improve Technique and Efficiency",
        link: "https://m.youtube.com/watch?v=-hayxgpNw6s",
      },
    ],
  },
  {
    name: "Breaststroke",
    description:
      "Swimming on your front with simultaneous arm strokes and a frog-like kick.",
    benifits:
      "Gentle on joints, improves flexibility and coordination, strengthens chest and leg muscles, and offers a relaxed swimming experience.",
    videos: [
      {
        name: "Breaststroke Swimming: Perfect Technique for Beginners",
        link: "https://m.youtube.com/watch?v=-V6TwcSs1nk",
      },
      {
        name: "Breaststroke Swimming Drills - Improve Your Glide and Kick for Efficiency",
        link: "https://m.youtube.com/watch?v=Elb2uTpW7qQ",
      },
    ],
  },
];

export default function Swimming() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <h3 className="pt-8 text-xl font-bold text-center">Swiming</h3>
        <h3 className="pt-8 text-xl font-bold">
          Dive into a world of health and happiness with swimming, a low-impact
          exercise that tones your body, boosts your mood, and strengthens your
          heart – all while keeping you cool under the summer sun! ‍♀️☀️
        </h3>
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
