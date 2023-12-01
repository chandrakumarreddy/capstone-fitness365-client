import { Card } from "antd";

const exercisesList = [
  {
    id: "1",
    title: "Wind relieving pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/wind%20relieving%20pose.mp4?alt=media",
    content:
      "Wind Relieving yoga pose not only combats gas and bloating, it also increases blood circulation in the hip joints and eases tension in the lower back. By gently pulling the legs into the chest, we strengthen the back and abdominal muscles while toning the leg and arm muscles",
  },
  {
    id: "2",
    title: "Boat pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/boat%20pose.mp4?alt=media",
    content:
      "Boat pose is a tricky core stabiliser that strengthens the abs, obliques, lower back, hip flexors, adductors, upper back and neck. It's also great for improving your balance and can help to alleviate lower back pain.",
  },
  {
    id: "3",
    title: "Fish pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/fish%20pose.mp4?alt=media",
    content: `1) Promotes Respiration
      2) Benefits to women health
      3) Improves Posture
      4) Stronger Neck And Abs
      5) Relieves Stress
      6) Strengthens spine
      7) Detoxifies the Body
      8) Reduces abdominal fat`,
  },
  {
    id: "4",
    title: "Extended Side Angle pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/extended%20side%20angle.mp4?alt=media",
    content:
      "Extended Side Angle pose is particularly great; it strengthens the legs, opens the hips, stretches the spine and lengthens the side body. The pose has a few therapeutic applications for sciatica, menstrual discomfort, constipation, low backache and osteoporosis.",
  },
  {
    id: "5",
    title: "Cobra pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/cobra%20pose.mp4?alt=media",
    content: `
      Opens the shoulder blades, neck, and collar bones
Improves spinal posture, flexibility, and alignment
Reduces back pain
Improves circulation
Opens the lungs
Stimulates the abdominal and digestive organs, improving digestion
Massages and regulates the adrenal and thyroid glands
Reduces stress
      `,
  },
  {
    id: "6",
    title: "Child pose",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/childs%20pose.mp4?alt=media",
    content: `
      Opening your hips
Lengthening your spine
Stretching out your ankles
Relaxing your back muscles
Relieving any tension in your pelvis
Increasing blood flow to your head and neck
Stimulating your digestive system
Potentially relieving constipation
      `,
  },
  {
    id: "8",
    title: "Warrior 1",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/warrior.mp4?alt=media",
    content: `
      Strengthens your shoulders, arms, legs, ankles and back.
Opens yours hips, chest and lungs.
Improves focus, balance and stability.
Encourages good circulation and respiration.
Stretches your arms, legs, shoulders, neck, belly, groins and ankles.
Energizes the entire body.
      `,
  },
  {
    id: "9",
    title: "Warrior 2",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/warrior%201.mp4?alt=media",
    content: `
      Stretches your hips, groins and shoulders.
Opens your chest and lungs.
Energizes tired limbs.
Stimulates your abdominal organs.
Develops balance and stability.
Improves circulation and respiration.
      `,
  },
  {
    id: "10",
    title: "Downward facing dog",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/downwars%20facing%20dog.mp4?alt=media",
    content: `
      Strengthens the upper body
Elongates the spine
Strengthens hands, wrists, and fingers
Opens up the backs of the legs
Improves circulation
Relieves tension and stress
      `,
  },
  {
    id: "10",
    title: "Upward Plank",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/upward%20plank.mp4?alt=media",
    content:
      "Ski jumps target your lower body and mainly help strengthen the front and back of your calves, hamstrings and quads. As a cardio exercise, it also significantly works your heart. Because several of your muscles are hard at work, your heart has to beat faster in order to supply them with enough blood.",
  },
  {
    id: "10",
    title: "Tree",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/the%20tree.mp4?alt=media",
    content:
      "Ski jumps target your lower body and mainly help strengthen the front and back of your calves, hamstrings and quads. As a cardio exercise, it also significantly works your heart. Because several of your muscles are hard at work, your heart has to beat faster in order to supply them with enough blood.",
  },
  {
    id: "10",
    title: "Plank",
    link: "https://firebasestorage.googleapis.com/v0/b/practice-95ede.appspot.com/o/plank.mp4?alt=media",
    content:
      "A plank exercise is the best exercise to strengthen your core and abdomen. These exercises strengthen your hips, lower back and abdomen and improve your body balance. It is used in yoga, by professional boxers and sports like hockey, cricket and football.",
  },
];

export default function YogaPoses() {
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
