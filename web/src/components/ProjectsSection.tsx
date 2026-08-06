import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";

interface Project {
  number: string;
  title: string;
  category: string;
  images: {
    col1: string[];
    col2: string;
  };
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

function ProjectCard({ project, index, total, scrollYProgress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <motion.div
      style={{
        scale,
        top: `${index * 28}px`,
      }}
      className="project-card p-4 sm:p-6 md:p-8 sticky top-24 md:top-32 h-[85vh]"
    >
      {/* Top row */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <span
            className="font-black text-[#0C0C0C]"
            style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
          >
            {project.number}
          </span>
          <div>
            <span className="text-[#D7E2EA]/60 text-xs font-mono uppercase tracking-widest">
              {project.category}
            </span>
            <h3
              className="text-[#D7E2EA] font-medium uppercase"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 2rem)" }}
            >
              {project.title}
            </h3>
          </div>
        </div>
        <LiveProjectButton />
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100%-120px)]">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5 flex-1"
            style={{ minHeight: "clamp(130px, 16vw, 230px)" }}
          >
            <img
              src={project.images.col1[0]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5 flex-1"
            style={{ minHeight: "clamp(160px, 22vw, 340px)" }}
          >
            <img
              src={project.images.col1[1]}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:col-span-2 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-white/5">
          <img
            src={project.images.col2}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projects: Project[] = [
    {
      number: "01",
      title: "Nextlevel Studio",
      category: "Client",
      images: {
        col1: [
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
        ],
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
      },
    },
    {
      number: "02",
      title: "Aura Brand Identity",
      category: "Personal",
      images: {
        col1: [
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
        ],
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
      },
    },
    {
      number: "03",
      title: "Solaris Digital",
      category: "Client",
      images: {
        col1: [
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
          "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
        ],
        col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
      },
    },
  ];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="bg-[#0C0C0C] relative overflow-hidden rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10"
    >
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 bg-tech-lines opacity-20 pointer-events-none" />

      <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </motion.h2>

        <div className="mt-16 sm:mt-20 md:mt-28 max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              total={projects.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
