import React from "react";
import Menu from "../components/Menu";
import HomeIcon from "../components/HomeIcon";
import JoinMembership from "../components/JoinMembership";

const trainers = [
  {
    name: "Kuldeep Singh",
    title: "Head Trainer",
    bio: "Kuldeep has over 10 years of experience in personal training and specializes in weightlifting and endurance training.",
    image:
      "https://c8.alamy.com/comp/2M0KW1J/proud-fitness-trainer-in-his-gym-confident-exercise-coach-in-the-gym-indian-fit-man-arms-crossed-bodybuilding-creates-strong-muscle-portrait-of-2M0KW1J.jpg",
    specialties: ["Weightlifting", "Endurance", "Nutrition"],
  },
  {
    name: "Shreya Sharma",
    title: "Yoga Instructor",
    bio: "Shreya is a certified yoga instructor with a passion for holistic wellness and mindfulness practices.",
    image:
      "https://media.istockphoto.com/id/1466987324/photo/a-female-trainer-is-helping-sportswoman-with-workouts-in-a-gym.jpg?s=612x612&w=0&k=20&c=tiVBFxu3LKKsQj795NmatCInV0gnqpQF00plSrhLW2M=",
    specialties: ["Yoga", "Meditation", "Wellness"],
  },
  {
    name: "Mike Johnson",
    title: "CrossFit Coach",
    bio: "Mike is an experienced CrossFit coach who excels in high-intensity interval training and functional fitness.",
    image:
      "https://t3.ftcdn.net/jpg/06/45/17/94/360_F_645179444_EtQDcQw5Mcyv1MSH25K5FrEkb3LfH5Vk.jpg",
    specialties: ["CrossFit", "HIIT", "Strength Training"],
  },
];

const TrainersPage = () => {
  return (
    <div>
      <HomeIcon />
      <Menu />

      {/* Trainers Section */}
      <section className="max-w-7xl bg-black mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-6xl p-10 font-bold text-center mb-6 text-white">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-transparent text-white shadow-md border rounded-lg overflow-hidden"
            >
              <img
                src={trainer.image}
                alt={`Portrait of ${trainer.name}, ${trainer.title}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-start">
                <h3 className="text-xl text-blue-500 font-bold">{trainer.name}</h3>
                <p className="text-gray-400">{trainer.title}</p>
                <p className="mt-2 text-gray-300">{trainer.bio}</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Specialties:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {trainer.specialties.map((specialty, i) => (
                      <li key={i}>{specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Membership Section */}
      <JoinMembership />
    </div>
  );
};

export default TrainersPage;
