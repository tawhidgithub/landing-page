import React from "react";
import personOne from "../../assets/person/p1.png";
import personTwo from "../../assets/person/p2.png";
import UserBox from "./Component/UserBox";
const UserSaySection = () => {
  return (
    <section className="py-20 bg-[#FBFBFB] text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <UserBox
            imageUrl={personOne}
            message={
              "Themefrey has transformed how we approach web design. It's intuitive and powerful"
            }
            userInfo={"- John Doe, Designer"}
          />
          <UserBox
            imageUrl={personTwo}
            message={
              "A must-have tool for developers seeking performance and flexibility."
            }
            userInfo={"- Jons Smith, Developer"}
          />
        </div>
      </div>
    </section>
  );
};

export default UserSaySection;
