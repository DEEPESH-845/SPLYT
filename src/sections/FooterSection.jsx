import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const FooterSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

   const [email, setEmail] = useState("");

  const handleEmailSubmit = () => {
    if (email.trim()) {
      console.log("Email submitted:", email);
      // Add your email submission logic here
      // For example: send to API, show success message, etc.
      alert(`Thank you! Email ${email} has been submitted.`);
      setEmail(""); // Clear the input after submission
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEmailSubmit();
    }
  };

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="social-btn">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-100 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 md:mb-45 gap-20">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg 2xl:max-w-2xl ">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10 group hover:border-white/70 transition-all duration-300">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClick={handleKeyPress}
                className="w-full placeholder:font-sans placeholder:text-[#999999] bg-transparent text-white outline-none border-none focus:placeholder-white/50 hover:placeholder-white/70 transition-all duration-300"
              />  
              <img 
                src="/images/arrow.svg" 
                alt="arrow"
                onClick={handleEmailSubmit}
                className="ml-2 cursor-pointer opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300" 
              />
            </div>
          </div>
        </div>

        <div className="copyright-box  ">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex  items-center  gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
