import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../components/HomeIcon";
import Menu from "../components/Menu";

const AboutUs = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/73/16/32/731632e44bdf21489d4d7632e59a8894.jpg')",
      }}
    >
      <HomeIcon />
      <Menu />

      <div className="relative z-10 bg-black bg-opacity-70 text-white py-16 px-8">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold text-center mb-12">About Us</h1>

          <div className="space-y-12">
            {/* Our Mission */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                At FITALITY, our mission is to empower individuals to
                lead healthier, more active lives. We believe in providing a
                comprehensive fitness experience that combines state-of-the-art
                facilities, expert coaching, and a supportive community.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg">
                Our core values are at the heart of everything we do. We are
                committed to:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li className="mt-2">
                  Excellence: Providing top-tier fitness services and
                  facilities.
                </li>
                <li className="mt-2">
                  Community: Fostering a supportive and inclusive environment.
                </li>
                <li className="mt-2">
                  Innovation: Continuously improving and embracing the latest
                  fitness trends.
                </li>
                <li className="mt-2">
                  Integrity: Upholding the highest standards of honesty and
                  transparency.
                </li>
              </ul>
            </div>

            {/* Our Story */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-lg">
                FITALITY was founded in [Year] with the goal of
                creating a space where people of all fitness levels can come
                together to achieve their health and wellness goals. What
                started as a small community gym has grown into a full-service
                fitness center offering a wide range of programs and services.
                Our journey is marked by a commitment to excellence and a
                passion for fitness, and we continue to evolve to meet the needs
                of our members.
              </p>
            </div>

            {/* Our Facilities */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Facilities</h2>
              <p className="text-lg">
                Our gym is equipped with the latest fitness equipment, spacious
                workout areas, and dedicated spaces for group classes, personal
                training, and relaxation. We take pride in maintaining a clean
                and welcoming environment where our members can focus on their
                fitness goals.
              </p>
            </div>

            {/* Meet Our Team */}
            <div>
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg">
                Our team of expert trainers and staff are here to support you
                every step of the way. Whether you're a seasoned athlete or just
                starting your fitness journey, our knowledgeable and friendly
                team is ready to help you succeed.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h2 className="text-4xl font-bold">Join Us Today!</h2>
              <p className="text-lg mt-4">
                Ready to take the next step in your fitness journey? Visit our
                gym, meet our team, and see for yourself why FITALITY
                is the perfect place for you.
              </p>
              <Link
                to="/contact" // Use Link to navigate to the Contact page
                className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
