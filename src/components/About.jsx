import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Database,
  Shield,
  Rocket,
  Award,
  Users,
} from "lucide-react";

const About = () => {
  // Separate refs for each section
  const heroRef = useRef(null);
  const missionVisionRef = useRef(null);
  const valuesRef = useRef(null);
  const founderRef = useRef(null);

  // Individual inView states for each section
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const missionVisionInView = useInView(missionVisionRef, {
    once: true,
    margin: "-100px",
  });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const founderInView = useInView(founderRef, { once: true, margin: "-150px" });

  const values = [
    {
      icon: Heart,
      title: "Human-First Design",
      description:
        "We build with people at the center — prioritizing trust, safety, accessibility, and real user needs over trends.",
    },
    {
      icon: Database,
      title: "Data with Purpose",
      description:
        "We use data responsibly to drive clarity, fairness, and better outcomes, not just automation.",
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description:
        "Transparency, privacy, and ethical technology are non-negotiable in everything we create.",
    },
    {
      icon: Rocket,
      title: "Innovation that Scales",
      description:
        "We focus on solutions that are not only innovative but practical, scalable, and built for long-term impact.",
    },
    {
      icon: Award,
      title: "Execution Excellence",
      description:
        "Great ideas matter, but disciplined execution and continuous improvement set us apart.",
    },
    {
      icon: Users,
      title: "Diversity of Thought",
      description:
        "We believe strong products come from diverse perspectives, collaboration, and open thinking.",
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-linear-to-b from-white to-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={heroInView ? { width: "150px" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-0.5 bg-linear-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-8 text-center">
            About ReeViy
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={heroInView ? { width: "200px" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-linear-to-r from-transparent via-gray-400 to-transparent mx-auto mb-16"
          />

          <div className="max-w-6xl mx-auto space-y-10">
            {/* Intro Card - Reduced text size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-linear-to-br from-white to-gray-50 p-8 rounded-sm shadow-lg border-2 border-gray-300 relative vintage-texture"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-400 opacity-50"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-gray-400 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-400 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gray-400 opacity-50"></div>

              <p
                className="text-lg md:text-xl text-gray-700 leading-relaxed text-center"
                style={{ fontFamily: "'Lora', serif" }}
              >
                ReeViy is a{" "}
                <span className="font-bold text-gray-900">
                  next-generation digital platform company
                </span>{" "}
                focused on building meaningful, human-first social and
                thoughtful experiences.
              </p>
            </motion.div>

            {/* ReckMe Feature Card - Reduced padding and text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-linear-to-br from-gray-800 to-gray-900 p-8 rounded-sm shadow-xl border-2 border-gray-700 relative overflow-hidden"
            >
              {/* Vintage corner ornaments */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-gray-600 opacity-40"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-gray-600 opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-gray-600 opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gray-600 opacity-40"></div>

              <div className="relative z-10">
                {/* Ornamental header */}
                <div className="flex items-center justify-center mb-5">
                  <div className="h-px w-16 bg-gray-600"></div>
                  <div className="mx-4 w-2 h-2 border-2 border-gray-500 rotate-45"></div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mx-4 font-serif tracking-wide">
                    ReckMe
                  </h3>
                  <div className="mx-4 w-2 h-2 border-2 border-gray-500 rotate-45"></div>
                  <div className="h-px w-16 bg-gray-600"></div>
                </div>

                <p
                  className="text-base md:text-lg text-gray-200 leading-relaxed text-center mb-3"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Launching this month — a fresh approach to human connection
                  designed to combat loneliness through meaningful interactions
                  and real conversations.
                </p>

                <div className="flex items-center justify-center gap-3 mt-4">
                  <div className="h-px w-8 bg-gray-600"></div>
                  <p
                    className="text-sm text-gray-400 italic"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    ReckMe is just the beginning.
                  </p>
                  <div className="h-px w-8 bg-gray-600"></div>
                </div>
              </div>
            </motion.div>

            {/* Vision Grid - Reduced text size */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-linear-to-br from-gray-50 to-white p-6 rounded-sm shadow-md border border-gray-300 relative"
              >
                <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-gray-300 opacity-40"></div>

                <div className="mb-3">
                  <div className="inline-block px-3 py-1.5 bg-gray-800 rounded-sm shadow-sm mb-2">
                    <span className="text-white text-lg font-bold font-serif">
                      5+
                    </span>
                  </div>
                  <h4
                    className="text-lg font-bold text-gray-800"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    More Apps Coming
                  </h4>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3"></div>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Each crafted to serve different connection needs, communities,
                  and interaction styles.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-linear-to-br from-gray-50 to-white p-6 rounded-sm shadow-md border border-gray-300 relative"
              >
                <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-gray-300 opacity-40"></div>

                <div className="mb-3">
                  <div className="inline-block px-3 py-1.5 bg-gray-800 rounded-sm shadow-sm mb-2">
                    <span className="text-white text-lg font-bold font-serif">
                      ∞
                    </span>
                  </div>
                  <h4
                    className="text-lg font-bold text-gray-800"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Ecosystem Vision
                  </h4>
                </div>
                <div className="h-px w-16 bg-gray-300 mb-3"></div>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  Our vision is to become a trusted global technology ecosystem,
                  powering innovative products across social platforms, fintech,
                  healthcare, real estate, and supply chain domains—enabling
                  smarter interactions, improved user experiences, and
                  sustainable growth through technology.
                </p>
              </motion.div>
            </div>

            {/* Philosophy Card - Reduced text size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-linear-to-br from-gray-50 to-white p-8 rounded-sm shadow-lg border-l-4 border-gray-700 vintage-texture relative"
            >
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-gray-300 opacity-30"></div>

              <p
                className="text-base text-gray-700 leading-relaxed mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                At ReeViy, we blend{" "}
                <span className="font-semibold text-gray-900">
                  data-driven insights
                </span>
                ,{" "}
                <span className="font-semibold text-gray-900">
                  intuitive product design
                </span>
                , and{" "}
                <span className="font-semibold text-gray-900">
                  behavioral understanding
                </span>{" "}
                to move beyond swipe culture.
              </p>
              <div className="h-px w-24 bg-gray-400 mb-3 mx-auto"></div>
              <p
                className="text-sm text-gray-600 text-center"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Every product we build prioritizes{" "}
                <span className="font-semibold">
                  simplicity, trust, safety, and authenticity.
                </span>
              </p>
            </motion.div>

            {/* Final Statement - NO BOX, just decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-center py-8"
            >
              {/* Top ornament */}
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gray-400"></div>
                <div className="mx-3 w-2 h-2 border-2 border-gray-400 rotate-45"></div>
                <div className="h-px w-16 bg-gray-400"></div>
              </div>

              <p
                className="text-xl md:text-3xl font-serif font-bold text-gray-800 italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We're not just building apps —<br />
                we're building experiences that help people connect better.
              </p>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center mt-6">
                <div className="h-px w-16 bg-gray-400"></div>
                <div className="mx-3 w-2 h-2 border-2 border-gray-400 rotate-45"></div>
                <div className="h-px w-16 bg-gray-400"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div ref={missionVisionRef} className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={missionVisionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-sm shadow-lg border-2 border-gray-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-gray-300 opacity-40" />
            <div className="flex items-center gap-4 mb-4">
              <Target className="text-gray-700" size={32} />
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                Our Mission
              </h3>
            </div>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              To build intelligent, human-centered digital platforms that
              simplify connections, improve decision-making, and create
              meaningful impact across everyday life and business.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={missionVisionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-sm shadow-lg border-2 border-gray-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-gray-300 opacity-40" />
            <div className="flex items-center gap-4 mb-4">
              <Eye className="text-gray-700" size={32} />
              <h3 className="text-3xl font-serif font-bold text-gray-800">
                Our Vision
              </h3>
            </div>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              We build technology that enhances how people meet, communicate,
              and engage meaningfully, fostering comfort, trust, and long-term
              value across digital experiences.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          ref={valuesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl font-serif font-bold text-gray-800 text-center mb-4">
            Our Values
          </h3>
          <motion.div
            initial={{ width: 0 }}
            animate={valuesInView ? { width: "120px" } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-0.5 bg-gray-400 mx-auto mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-sm border border-gray-200 shadow-md"
              >
                {/* Icon and Title in Row */}
                <div className="flex items-center gap-4 mb-4">
                  {/* linear Icon Box */}
                  <div className="bg-linear-to-br from-gray-700 to-gray-900 p-3 rounded-md shadow-md shrink-0">
                    <value.icon className="text-white" size={28} />
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl font-semibold text-gray-800 flex-1"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {value.title}
                  </h4>
                </div>

                {/* Description */}
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          ref={founderRef}
          initial={{ opacity: 0, y: 50 }}
          animate={founderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-br from-gray-100 to-gray-50 p-8 md:p-12 rounded-sm shadow-lg border-2 border-gray-200 relative"
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-gray-300 opacity-40" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gray-300 opacity-40" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gray-300 opacity-40" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-gray-300 opacity-40" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Founder Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={founderInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-48 h-48 bg-gray-300 rounded-sm shrink-0 overflow-hidden shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                Founder Photo
              </div>
            </motion.div>

            {/* Founder Info */}
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2"
              >
                Shubham Pant
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={founderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 mb-6 font-medium"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Founder & CEO
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={founderInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4 text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                <p>
                  Shubham Pant is an experienced Business & Supply Chain
                  Planning & Analytics Manager with over 7+ years of
                  cross-industry expertise spanning construction, real estate,
                  retail, service, and international trade.
                </p>
                <p>
                  He specializes in supply chain planning, logistics, business
                  analytics, project planning, inventory management, and process
                  optimization, helping organizations convert complex data into
                  strategic business value.
                </p>
                <p>
                  In his last role at Masters of Luxury, Shubham led analytics
                  initiatives for large-scale construction and interior
                  projects, developing cost estimation models, profitability
                  dashboards, and KPI frameworks that improved financial and
                  operational decision-making by up to 25%.
                </p>
                <p>
                  Previously, at Reliance Retail, he managed regional planning
                  and inventory optimization for 65 FOFO stores, reducing
                  overstock by 20% and increasing market share through
                  data-backed strategies.
                </p>
                <p>
                  Proficient in Power BI, Tableau, SQL, and Advanced Excel,
                  Shubham is known for building scalable reporting systems,
                  mentoring analytics teams, and collaborating closely with
                  leadership to support growth initiatives. His diverse
                  background gives him a holistic perspective on aligning
                  people, processes, and performance.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
