import data from "@public/assets/data.json";

const About = () => {
  const aboutText = data.aboutus.replace(/\n/g, "<br>");
  return (
    <div id="about" className="bg-white w-full">
      <div className="px-4 sm:px-10 md:px-14 lg:px-36 py-9">
        <h1 className="text-[#0b0924] font-semibold text-[27px] xs:text-[35px] leading-normal w-full">
          About Us
        </h1>
        <p
          className="text-[16px] leading-[28px]"
          dangerouslySetInnerHTML={{ __html: aboutText }}
        ></p>

        {/* Testimonial section */}
      </div>
    </div>
  );
};

export default About;
