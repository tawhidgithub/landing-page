import React from "react";
import personOne from "../../../assets/person/p1.png";
import personTwo from "../../../assets/person/p2.png";
const UserSaySection = () => {
  return (
    <section className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
            <img
              src={personOne}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-600 mb-4">
                "Themefrey has transformed how we approach web design. It's
                intuitive and powerful!"
              </p>
              <strong>- John Doe, Designer</strong>
            </div>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
            <img
              src={personTwo}
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-600 mb-4">
                "A must-have tool for developers seeking performance and
                flexibility."
              </p>
              <strong>- Jons Smith, Developer</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSaySection;
