"use client";

import React from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
  import { TbCloud, TbCode, TbDatabase, TbLayoutGrid, TbServer } from "react-icons/tb";

const SkillCategory = React.memo(function SkillCategory({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-2">
        {icon && <span className="text-primary">{icon}</span>}
        <h3 className="text-xl font-semibold text-slate-200">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {(skills ?? []).map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

const categoryOrder = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases & Data Systems",
  "Cloud & DevOps",
];

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <TbCode size={18} />,
  Frontend: <TbLayoutGrid size={18} />,
  Backend: <TbServer size={18} />,
  "Databases & Data Systems": <TbDatabase size={18} />,
  "Cloud & DevOps": <TbCloud size={18} />,
};

export const TechStack = React.memo(function TechStack() {
  const orderedCategories = Object.entries(portfolioData.skills).sort(
    ([a], [b]) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA === -1 && indexB === -1) {
        return a.localeCompare(b);
      }
      if (indexA === -1) {
        return 1;
      }
      if (indexB === -1) {
        return -1;
      }
      return indexA - indexB;
    }
  );

  return (
    <div className="h-full">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with"
        center={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {orderedCategories.map(([category, skills]) => (
          <SkillCategory
            key={category}
            title={category}
            skills={skills}
            icon={categoryIcons[category]}
          />
        ))}
      </div>
    </div>
  );
});
