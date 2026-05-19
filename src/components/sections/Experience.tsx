"use client";

import React, { useState } from "react";

import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { TbBriefcase, TbSchool } from "react-icons/tb";

export const ExperienceSection = React.memo(function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'professional' | 'education'>('professional');

  const renderExperienceTimeline = (items: typeof portfolioData.experience, icon: React.ReactNode) => (
    <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
      {items.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Timeline Dot */}
          <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-slate-950 border-2 border-primary" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              {exp.period}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-slate-400">
            {icon}
            <span className="font-medium">{exp.company}</span>
          </div>

          <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
            {exp.description.map((desc: string, i: number) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );

  const renderEducationTimeline = (items: typeof portfolioData.education, icon: React.ReactNode) => (
    <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
      {items.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          {/* Timeline Dot */}
          <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-slate-950 border-2 border-primary" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
            <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
              {edu.period}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4 text-slate-400">
            {icon}
            <span className="font-medium">{edu.institution}</span>
          </div>

          <ul className="list-disc list-outside ml-4 space-y-2 text-slate-400">
            {edu.description.map((desc: string, i: number) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="h-full">
      <SectionHeading
        title="Experience"
        subtitle="My professional and educational journey"
        center={false}
      />

      {/* Tabs */}
      <div className="flex mb-8 border-b border-slate-800">
        <button
          onClick={() => setActiveTab('professional')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'professional'
              ? 'text-primary border-b-2 border-primary'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          My Professional Journey
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'education'
              ? 'text-primary border-b-2 border-primary'
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          My Education Journey
        </button>
      </div>

      {/* Content */}
      {activeTab === 'professional' && renderExperienceTimeline(portfolioData.experience, <TbBriefcase size={16} />)}
      {activeTab === 'education' && renderEducationTimeline(portfolioData.education, <TbSchool size={16} />)}
    </div>
  );
});
