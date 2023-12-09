import { Modal } from "antd";
import { useState } from "react";

export default function PremiumBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex border border-yellow-600 p-4 rounded-lg mt-4 justify-between items-center">
        <div>
          <h3 className="text-orange-500 font-bold text-lg">
            Get ready to transform your fitness journey with our exclusive
            launch offer!
          </h3>
          <p className="text-lg font-bold text-blue-600 mt-2">
            Limited time 30% off
          </p>
        </div>
        <button
          className="py-2 px-4 bg-blue-500 rounded-lg text-sm text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Subscribe Now
        </button>
      </div>
      <Modal
        title=""
        open={isModalOpen}
        centered
        footer={null}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        width={800}
      >
        <h3 className="text-orange-500 font-bold text-lg text-center">
          Limited-time 30% off
        </h3>
        <div className="text-base font-medium grid gap-4 mt-4">
          <p>
            Our state-of-the-art fitness center is opening its doors soon, and
            we're excited to celebrate with an incredible introductory offer.
          </p>
          <p className="text-blue-500 font-bold">
            Sign up today and enjoy a massive 30% discount on your membership!
          </p>
          <p className="text-xl font-bold">Membership benefits:</p>
          <p>Unlimited access to our top-notch facilities, including:</p>
          <p>
            Spacious cardio and weight training areas Group fitness classes for
            every level Personal training sessions Luxurious locker rooms and
            amenities
          </p>
          <p>Expert guidance from our certified personal trainers: </p>
          Personalized workout plans tailored to your goals Nutritional
          counseling for optimal results Ongoing support to keep you motivated A
          supportive and
          <p>
            <strong className="text-blue-500">Motivating community:</strong>{" "}
            Connect with like-minded individuals on your fitness journey
            Encourage each other to reach your full potential Experience the
            camaraderie of a thriving fitness community
          </p>
          <button
            className="py-2 px-4 bg-blue-500 rounded-lg text-sm text-white w-fit font-bold mx-auto"
            onClick={() => setIsModalOpen(false)}
          >
            Subscribe Now
          </button>
        </div>
      </Modal>
    </>
  );
}
