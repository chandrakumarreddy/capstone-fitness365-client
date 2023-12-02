import Header from "components/Header";

export default function FitnessCoach() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col gap-12 flex-1 items-start my-6">
          <div className="grid gap-2 text-base">
            <h3 className="text-4xl text-orange-500 font-bold text-center">
              Become a Fitness Coach
            </h3>
            <img
              src="/coach-banner.png"
              alt="become coach"
              className="my-6 rounded-lg"
            />
            <ul className="list-disc pl-8 text-lg mt-4">
              <li>Make a life-changing impact on others</li>
              <li>Help clients achieve their weight loss and fitness goals</li>

              <li>Shape the future of fitness</li>
              <li>Be a part of a growing and rewarding industry</li>
            </ul>
            <p className="text-xl mt-4 font-bold">
              Are you passionate about health and fitness?
            </p>

            <p>
              If you are passionate about health and fitness and want to make a
              difference in the lives of others, then becoming a fitness coach
              is the perfect career for you.
            </p>

            <p>As a fitness coach, you will:</p>
            <ul className="list-disc pl-6">
              <li>
                Help clients set realistic and achievable goals Develop
                personalized exercise and nutrition plans Provide guidance and
                support throughout their fitness journey Celebrate their
                successes along the way What are the benefits of becoming a
                fitness coach?
              </li>

              <li>
                Flexible schedule: you can work from anywhere and set your own
                hours High earning potential: you can earn a competitive income
                and enjoy financial stability Make a real difference: you can
                help others improve their health and well-being How to become a
                fitness coach:
              </li>

              <li>
                Get certified: there are many different fitness coach
                certifications available. Choose one that is reputable and meets
                your needs. Gain experience: volunteer or intern at a local gym
                or fitness center. Network: build relationships with other
                fitness professionals and potential clients. Take the first step
                towards your dream career today!
              </li>
            </ul>
            <p className="mt-6 font-bold">
              Visit our website to learn more about our fitness coach
              certification programs.
            </p>

            <p>
              Limited time offer: Save 10% on your certification when you
              mention this ad!
            </p>

            <p className="mt-6 font-bold">
              Call us today to speak with a fitness coach advisor.
            </p>

            <p className="text-xl text-blue-400 font-medium">1-800-FIT-COACH</p>

            <p className="mt-4 font-medium">
              We are committed to helping you succeed as a fitness coach.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
