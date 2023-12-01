import { Card } from "antd";

const exercisesList = [
  {
    id: "1",
    title: "Air Squats",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fair%20squats.mp4?alt=media",
    content:
      "They target your thighs, hamstrings, quadriceps, and glutes in particular, helping you to add muscle mass in these areas. Because balance is necessary, air squats can also engage your core.",
  },
  {
    id: "2",
    title: "High knee twists",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fhigh%20knee%20twists.mp4?alt=media",
    content:
      "High knees activate your quadriceps, hamstrings, calves, glutes, and hip flexors, helping improve muscular endurance, balance, and coordination in these muscles. When done at a high intensity and with bounding or explosive knee drives, they can also improve power in your lower body",
  },
  {
    id: "3",
    title: "Arm Circles",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Farm%20circles.mp4?alt=media",
    content:
      "Arm circles can really work on toning the muscles in your shoulder and arm—biceps and triceps. They also work on your upper back muscles. If done along with other workouts that target the arm muscles, arm circles can also help reduce the buildup of fat in your arms.",
  },
  {
    id: "4",
    title: "Squat Jacks",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fsquat%20jacks.mp4?alt=media",
    content:
      "The squat jacks is a great exercise to add to your cardio or lower body routine to help you build strength, speed and improve your aerobic fitness. This move activates and strengthens your lower body and, by engaging your core, it also improves your stability and posture.",
  },
  {
    id: "5",
    title: "Jumping oblique twists",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fjumping%20oblique%20twists.mp4?alt=media",
    content:
      "The oblique twist is a great exercise that works many muscles in your core. Not only does it exercise the rectus abdominis, but it also hits the external obliques and internal obliques. Using a weight, medicine ball or stability ball in the exercise adds tension to the core muscles, really giving them a workout.",
  },
  {
    id: "6",
    title: "Mountain climber",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fmountain%20climber.mp4?alt=media",
    content:
      "The mountain climber is a calorie-burning workout that really gets your heart rate going. It also targets your core, making it the perfect exercise to lose that stubborn belly fat and reveal your abs. To do a mountain climber, get into a standard pushup position.",
  },
  {
    id: "7",
    title: "Jumping jacks",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fjumping%20jacks.mp4?alt=media",
    content:
      "Jumping jacks involve nearly every muscle, they are metabolically demanding and can burn quite a few calories, depending on your body weight. Regularly incorporating vigorous sets of jumping jacks may support fat loss, especially when coupled with a healthy diet and a well-rounded, total-body workout routine.",
  },
  {
    id: "8",
    title: "Running in place",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Frunning%20in%20place.mp4?alt=media",
    content:
      "Running in place is an aerobic exercise that is typically used within warm-ups, cool-downs, HIITs or agility drill workouts.",
  },
  {
    id: "9",
    title: "Plank jacks",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fplank%20jacks.mp4?alt=media",
    content:
      "Plank jacks increase balance, coordination, and proprioception (knowing where your body parts are). Plank jacks are a great way to improve balance, coordination, and proprioception (knowing where your body parts are). These benefits are especially important for older adults who may be more prone to falls.",
  },
  {
    id: "10",
    title: "Ski hops",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/aerobic%20exercises%2Fski%20hops.mp4?alt=media",
    content:
      "Ski jumps target your lower body and mainly help strengthen the front and back of your calves, hamstrings and quads. As a cardio exercise, it also significantly works your heart. Because several of your muscles are hard at work, your heart has to beat faster in order to supply them with enough blood.",
  },
];

export default function AerobicExercises() {
  return (
    <div className="grid gap-10 grid-cols-2">
      {exercisesList.map((exercise) => (
        <Card
          key={exercise.id}
          title={<h3 className="text-lg font-medium">{exercise.title}</h3>}
          className="flex flex-col border-gray-400"
        >
          <div className="flex flex-col gap-4 h-full">
            <p className="text-sm font-normal flex-1">{exercise.content}</p>
            <div className="rounded-lg overflow-hidden">
              <video width="100%" height="240" controls>
                <source src={exercise.link} type="video/mp4" />
              </video>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
