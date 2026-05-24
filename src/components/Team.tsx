import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, TrendingUp, Users, Calendar, Award } from 'lucide-react';
import { FiLinkedin as Linkedin, FiGithub as Github } from 'react-icons/fi';
import teamData from '../data/team.json';

// --- TYPES ---
type SocialLinks = {
  linkedin?: string;
  github?: string;
  email?: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  department?: string;
  image: string;
  socials: SocialLinks;
};

type Advisor = {
  id: string;
  name: string;
  designation: string;
  bio: string;
  image: string;
  linkedin: string;
};

type Stat = {
  id: string;
  label: string;
  value: string;
  icon: string;
};

const iconMap: Record<string, React.ElementType> = {
  Users: Users,
  Calendar: Calendar,
  Award: Award,
  TrendingUp: TrendingUp,
};

// --- DATA ---
const FACULTY_ADVISORS: Advisor[] = teamData.facultyAdvisors;
const CORE_TEAM: TeamMember[] = teamData.coreTeam;
const EXECUTIVE_COMMITTEE: TeamMember[] = teamData.executiveCommittee;
const STATS: Stat[] = teamData.stats;

// --- COMPONENTS ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-16 relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mx-auto h-1 w-24 bg-gradient-to-r from-[#0A84FF] to-[#00C2FF] rounded-full mb-6 relative"
    >
      <div className="absolute inset-0 bg-[#00C2FF] blur-md opacity-50 rounded-full" />
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const SocialIconButton = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#00C2FF] hover:bg-[#00C2FF]/10 hover:border-[#00C2FF]/30 transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const TeamCard = ({ member, compact = false }: { member: TeamMember, compact?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative rounded-2xl overflow-hidden bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:border-[#00C2FF]/30 transition-all duration-500 flex flex-col items-center p-6 text-center"
  >
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00C2FF]/0 text-transparent group-hover:via-[#00C2FF]/5 group-hover:to-[#0A84FF]/10 transition-colors duration-500 z-0" />
    
    <div className="relative z-10 w-32 h-40 mb-5 overflow-hidden rounded-xl border border-white/10 group-hover:border-[#00C2FF]/40 group-hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all duration-500">
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    
    <div className="relative z-10 w-full">
      <h3 className="text-xl font-bold text-white mb-1 tracking-wide">{member.name}</h3>
      <p className="text-[#00C2FF] text-sm font-medium mb-1">{member.role}</p>
      {member.department && !compact && (
        <p className="text-gray-400 text-xs mb-4 uppercase tracking-wider">{member.department}</p>
      )}
      
      <div className={`flex justify-center gap-3 ${compact ? 'mt-4' : ''}`}>
        {member.socials.linkedin && <SocialIconButton href={member.socials.linkedin} icon={Linkedin} />}
        {member.socials.github && <SocialIconButton href={member.socials.github} icon={Github} />}
        {member.socials.email && <SocialIconButton href={member.socials.email} icon={Mail} />}
      </div>
    </div>
  </motion.div>
);

const AdvisorCard = ({ advisor, index }: { advisor: Advisor, index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="group relative flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] hover:border-[#0A84FF]/40 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-[#0A84FF]/0 via-[#0A84FF]/0 to-[#0A84FF]/0 group-hover:via-[#0A84FF]/5 transition-all duration-1000 blur-xl z-0" />
    
    <div className="relative z-10 shrink-0 w-32 h-40 md:w-40 md:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-[0_0_25px_rgba(10,132,255,0.2)] transition-shadow duration-500">
      <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    
    <div className="relative z-10 flex-1 text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{advisor.name}</h3>
      <p className="text-[#0A84FF] font-medium text-lg mb-4">{advisor.designation}</p>
      <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">{advisor.bio}</p>
      <a 
        href={advisor.linkedin} 
        target="_blank" 
        rel="noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#0A84FF] hover:border-[#0A84FF] transition-all duration-300 font-medium text-sm shadow-[0_0_0_rgba(10,132,255,0)] hover:shadow-[0_0_20px_rgba(10,132,255,0.4)]"
      >
        <Linkedin className="w-4 h-4" />
        Connect on LinkedIn
      </a>
    </div>
  </motion.div>
);

const StatCard = ({ stat, index }: { stat: Stat, index: number }) => {
  const IconComponent = iconMap[stat.icon] || Users;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] hover:border-[#00C2FF]/30 hover:bg-white/[0.03] transition-all duration-300 flex flex-col items-center justify-center text-center overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <IconComponent className="w-8 h-8 text-[#00C2FF] mb-4 group-hover:scale-110 transition-transform duration-300" />
      <h4 className="text-4xl font-black text-white mb-2">{stat.value}</h4>
      <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#00C2FF]/30 selection:text-white relative overflow-hidden">
      {/* --- Global Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0A84FF] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#00C2FF] opacity-[0.05] blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10">
        {/* --- 1. HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[70vh]">
          <div className="md:w-1/2 z-10 mb-12 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
            >
              Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A84FF] to-[#00C2FF]">Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed"
            >
              The minds driving innovation, research, and technology at IEEE Student Branch.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-8 h-1 w-32 bg-gradient-to-r from-[#00C2FF] to-transparent rounded-full shadow-[0_0_15px_rgba(0,194,255,0.5)]"
            />
          </div>
          
          <div className="md:w-1/2 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#00C2FF]/30"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-[#0A84FF]/20"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00C2FF]/20 to-[#0A84FF]/20 blur-3xl rounded-full" />
              {/* Optional: Add a central 3D graphic or large sleek icon here */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 md:w-48 md:h-48 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,194,255,0.2)] hover:shadow-[0_0_80px_rgba(0,194,255,0.4)] transition-all duration-500">
                    <TrendingUp className="w-16 h-16 text-[#00C2FF]" />
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. CORE TEAM SECTION --- */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
          <SectionHeading subtitle="The visionaries leading our chapter towards technological excellence.">Core Team</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* --- 3. FACULTY ADVISORS SECTION --- */}
        <section className="py-20 px-6 lg:px-12 max-w-5xl mx-auto relative">
          <SectionHeading subtitle="Eminent professors guiding our path with experience and wisdom.">Faculty Advisors</SectionHeading>
          <div className="flex flex-col gap-10">
            {FACULTY_ADVISORS.map((advisor, i) => (
              <AdvisorCard key={advisor.id} advisor={advisor} index={i} />
            ))}
          </div>
        </section>

        {/* --- 4. EXECUTIVE COMMITTEE SECTION --- */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto relative">
          <SectionHeading subtitle="The dedicated individuals executing our vision flawlessly.">Executive Committee</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {EXECUTIVE_COMMITTEE.map((member) => (
              <TeamCard key={member.id} member={member} compact />
            ))}
          </div>
        </section>

        {/* --- 5. STATS SUMMARY --- */}
        <section className="py-20 px-6 lg:px-12 max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A84FF]/5 to-transparent z-0" />
          <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-3xl p-12 shadow-[0_0_50px_rgba(0,194,255,0.1)]">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to innovate with us?</h2>
            <p className="text-gray-400 mb-10 text-lg">Join a community of forward-thinking engineers and researchers.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#0A84FF] to-[#00C2FF] rounded-lg text-white font-bold hover:shadow-[0_0_30px_rgba(0,194,255,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                Join IEEE Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-white font-bold hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
