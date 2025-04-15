import React from "react";

const PricingSection = () => {
 

  return (
    <section id="pricing" className="py-20 bg-white text-black">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Choose Your Plan</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <div className="bg-[#FBFBFB] shadow-lg p-8 rounded-lg text-center border-t-4 border-[#FFDDAE] hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4">Starter Plan</h3>
          <p className="text-4xl font-extrabold mb-4">$19</p>
          <ul className="text-gray-600 mb-6">
            <li>✅ Basic Features</li>
            <li>✅ Community Support</li>
            <li>✅ Limited Access</li>
          </ul>
          <button className="bg-[#FFDDAE] text-black px-6 py-3 rounded-lg hover:bg-[#FFCC88] transition-colors duration-300">Get Started</button>
        </div>
        <div className="bg-[#D4F6FF] shadow-lg p-8 rounded-lg text-center border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4">Professional Plan</h3>
          <p className="text-4xl font-extrabold mb-4">$49</p>
          <ul className="text-gray-700 mb-6">
            <li>✅ All Basic Features</li>
            <li>✅ Priority Support</li>
            <li>✅ Full Access</li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-400 transition-colors duration-300">Buy Now</button>
        </div>
        <div className="bg-[#FBFBFB] shadow-lg p-8 rounded-lg text-center border-t-4 border-[#C6E7FF] hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-4">Enterprise Plan</h3>
          <p className="text-4xl font-extrabold mb-4">$99</p>
          <ul className="text-gray-600 mb-6">
            <li>✅ Advanced Features</li>
            <li>✅ 24/7 Support</li>
            <li>✅ Unlimited Access</li>
          </ul>
          <button className="bg-[#C6E7FF] text-black px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
