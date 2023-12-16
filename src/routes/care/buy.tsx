import { Card } from "antd";
import Header from "components/Header";

const availableItems = [
  {
    id: "1",
    name: "Aquaphor Healing Ointment",
    categoty: "Ointments",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpD_IZJDiSzbPI3kGltLEwCdjowwrTXC0q7V46wMcpVfHE5lH5WY2eDjyOzEj",
    price: "$3.32 for 7.5 oz tube",
    rating: "4.8 stars with over 134,000 reviews",
    description:
      "This ointment is a lifesaver for my dry winter skin. It instantly soothes and hydrates without being greasy. I also love that it's fragrance-free and gentle enough for my sensitive skin.",
    link: "https://www.walmart.com/ip/Aquaphor-Healing-Ointment-Advanced-Therapy-Skin-Protectant-14-Oz-Jar/10810942",
  },
  {
    id: "2",
    name: "Muscle & Joint Pain Relief Cream",
    categoty: "Ointments",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjNq6z8HA2bqh8dxkHZqOZ4FEA8LVR3IjXc93Gb80w0EERa3iAh8TX2vFCF2z",
    price: "$4.99 for 4 oz tube",
    rating: "4.6 stars with over 12,000 reviews",
    description:
      "This cream is a godsend for my workout-induced muscle soreness. It helps me recover faster and relieves the pain so I can get back to my routine",
    link: "https://www.walmart.com/ip/Lucky-Super-Soft-Ointments-Muscle-Joint-Pain-Relieving-Cream-1-5-Oz/372151408",
  },
  {
    id: "3",
    name: "Optimum Nutrition Gold Standard 100% Whey Protein",
    categoty: "Protein Powders",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSuAHRIqvCOTUx2uDyRa_TezgqlxWApLOpxinvJaaW2d7ZOtQ2xtbK-3aCpi3a",
    price: "$19.99 for 5 lbs container",
    rating: "4.8 stars with over 100,000 reviews",
    description:
      "This protein powder is my go-to for post-workout recovery. It mixes easily, tastes great, and gives me the protein I need to build muscle.",
    link: "https://www.optimumnutrition.com/en-gb/Products/Protein-Powders/Gold-Standard-100%25-Whey-Protein-/p/gold-standard-100-whey-protein",
  },
  {
    id: "4",
    name: "PlantFusion Complete Plant Protein",
    categoty: "Protein Powders",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKDT3M_cAIIVzs0hLj1FDwhY0UOjQPrB1qGOK4S2R1Klo3MuUSRhcNqML0KTcE",
    price: "$8.72 for 2 lbs container",
    rating: "4.5 stars with over 5,000 reviews",
    description:
      "I love that this protein powder is plant-based and still provides me with all the protein I need. It also mixes well and doesn't have a chalky taste.",
    link: "https://www.amazon.com/PlantFusion-Complete-Plant-Based-Protein-Non-GMO/dp/B0021FEMZG",
  },
  {
    id: "5",
    name: "Bauerfeind GenuTrain S Knee Support",
    categoty: "Knee Supports",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCMX8KlREowG-12xi9y3IVdHiDojX9kltfd0It-NFI4MIr99U2i4vaLliQ2yjv",
    price: "$8.72 for single brace",
    rating: "4.6 stars with over 3,000 reviews",
    description:
      "This knee support has helped me significantly with my running pain. It's comfortable to wear and provides the support I need without being restrictive.",
    link: "https://www.bauerfeind.com.au/products/genutrain-s-knee-brace",
  },
  {
    id: "6",
    name: "Mueller Adjustable Knee Brace",
    categoty: "Knee Supports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTALDZcuozgha04FmtTGJxqXYQNFEBh7pqnBqoBNdTZ-IMoyPLjrYHPWcXVRDC",
    price: "$12.2 for single brace",
    rating: "4.5 stars with over 10,000 reviews",
    description:
      "I love that this knee brace is adjustable so I can get the perfect fit. It's also comfortable to wear and provides good support for my knee.",
    link: "https://www.alimed.com/mueller-adjustable-knee-support.html",
  },
  {
    id: "7",
    name: "Carhartt Dexterity Work Gloves",
    categoty: "Gloves",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRZu_9WZ8ehUKalITEYUgwoBuKLKOr_2wYF_f_WRqasfJKPC-QDj5mVMIOKxlFz",
    price: "$4.33 per pair",
    rating: "4.7 stars with over 16,000 reviews",
    description:
      "These gloves are my go-to for any task that requires hand protection. They're durable, comfortable, and grip well.",
    link: "https://www.bootbarn.com/carhartt-mens-high-dexterity-work-gloves/2000124140.html",
  },
];

export default function Buy() {
  return (
    <>
      <Header headerStyle="!bg-black" />
      <main className="flex h-full flex-col max-w-7xl mx-auto py-16 px-4">
        <div className="flex gap-8 flex-col flex-1 items-start my-6 w-full">
          <div className="w-full">
            <h3 className="text-2xl font-medium text-blue-500 text-center">
              Fitness365 Store
            </h3>
          </div>
          <div className="grid gap-6 w-full grid-cols-4">
            {availableItems.map((item) => (
              <Card
                key={item.id}
                title={<h3 className="text-lg font-medium">{item.name}</h3>}
                className="flex flex-col border-gray-400"
              >
                <img
                  src={item.image}
                  alt="image"
                  width="300"
                  height="150"
                  className="object-cover mb-6"
                />
                <p className="mb-1">
                  Category: <strong>{item.categoty}</strong>
                </p>
                <p className="mb-1">
                  Price: <strong>{item.price}</strong>
                </p>
                <p className="mb-1">
                  Rating: <strong>{item.rating}</strong>
                </p>
                <a
                  href={item.link}
                  target="blank"
                  rel="noopener"
                  className="bg-blue-600 text-white mt-4 block font-medium w-fit py-2 px-4 rounded-lg mx-auto"
                >
                  Buy now
                </a>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
