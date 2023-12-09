import Header from "components/Header";
import { trainers } from "../../constants";
import { Link } from "react-router-dom";

export default function TrainersList() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <h2 className="pt-8 text-2xl font-bold text-orange-600">
          List of Trainers available
        </h2>
        <div className="grid grid-cols-2 gap-4 pt-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="border border-gray-400 rounded-lg overflow-hidden flex"
            >
              <img
                src={trainer.image}
                width={200}
                height={300}
                alt={`Professional trainer ${trainer.name} with ${trainer.trainingExperience.fitness} experience in Fitness`}
              />
              <div className="p-8 text-sm leading-8 flex flex-col w-full">
                <div className="flex-1">
                  <h3>
                    Name: <span className="font-bold">{trainer.name}</span>
                  </h3>
                  <h3>
                    Fee/Hr:{" "}
                    <span className="font-bold">$ {trainer.chargePerHour}</span>
                  </h3>
                  <div>
                    Experience
                    <ul className="pl-6 list-disc">
                      <li>
                        Fitness:
                        <strong>
                          {trainer.trainingExperience.fitness} years
                        </strong>
                      </li>
                      <li>
                        Yoga:
                        <strong>{trainer.trainingExperience.yoga} years</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  to={`/trainer/hire?id=${trainer.id}`}
                  className="border-2 border-blue-400 text-sm px-4 py-2 rounded-lg w-fit self-end"
                >
                  Book now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
