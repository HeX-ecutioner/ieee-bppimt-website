import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, TrendingUp, Users, Calendar, Award } from 'lucide-react';
import { FiLinkedin as Linkedin, FiGithub as Github } from 'react-icons/fi';
import teamData from '../data/team.json';
import './Team.css';

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
  <div className="team-section-heading">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="team-section-title"
    >
      {children}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="team-section-divider"
    >
      <div className="team-section-divider-glow" />
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="team-section-subtitle"
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
    className="team-social-button"
  >
    <Icon className="team-social-button-icon" />
  </a>
);

const TeamCard = ({ member, compact = false }: { member: TeamMember, compact?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`team-card${compact ? ' team-card-compact' : ''}`}
  >
    {/* Hover Glow Effect */}
    <div className="team-card-glow" />
    
    <div className="team-card-image-frame">
      <img 
        src={member.image} 
        alt={member.name}
        className="team-card-image"
      />
    </div>
    
    <div className="team-card-body">
      <h3 className="team-card-name">{member.name}</h3>
      <p className="team-card-role">{member.role}</p>
      {member.department && !compact && (
        <p className="team-card-department">{member.department}</p>
      )}
      
      <div className={`team-card-socials${compact ? ' team-card-socials-compact' : ''}`}>
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
    className="team-advisor-card"
  >
    <div className="team-advisor-glow" />
    
    <div className="team-advisor-image-frame">
      <img src={advisor.image} alt={advisor.name} className="team-advisor-image" />
    </div>
    
    <div className="team-advisor-body">
      <h3 className="team-advisor-name">{advisor.name}</h3>
      <p className="team-advisor-designation">{advisor.designation}</p>
      <p className="team-advisor-bio">{advisor.bio}</p>
      <a 
        href={advisor.linkedin} 
        target="_blank" 
        rel="noreferrer"
        className="team-advisor-link"
      >
        <Linkedin className="team-advisor-link-icon" />
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
      className="team-stat-card"
    >
      <div className="team-stat-card-glow" />
      <IconComponent className="team-stat-card-icon" />
      <h4 className="team-stat-card-value">{stat.value}</h4>
      <p className="team-stat-card-label">{stat.label}</p>
    </motion.div>
  );
};

export default function Team() {
  return (
    <div className="team-page">
      {/* --- Global Background Effects --- */}
      <div className="team-background">
        <div className="team-background-glow-1" />
        <div className="team-background-glow-2" />
        <div className="team-background-noise" />
        {/* Subtle grid */}
        <div className="team-background-grid" />
      </div>

      <div className="team-page-content">
        {/* --- 1. HERO SECTION --- */}
        <section className="team-hero">
          <div className="team-hero-copy">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="team-hero-title"
            >
              Meet The <span className="team-hero-highlight">Team</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="team-hero-description"
            >
              The minds driving innovation, research, and technology at IEEE Student Branch.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="team-hero-accent"
            />
          </div>
          
          <div className="team-hero-visual">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="team-hero-orb"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="team-hero-ring"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="team-hero-ring-inner"
              />
              <div className="team-hero-orb-glow" />
              {/* Optional: Add a central 3D graphic or large sleek icon here */}
              <div className="team-hero-core-wrapper">
                 <div className="team-hero-core">
                    <TrendingUp className="team-hero-core-icon" />
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. CORE TEAM SECTION --- */}
        <section className="team-section team-section-core">
          <SectionHeading subtitle="The visionaries leading our chapter towards technological excellence.">Core Team</SectionHeading>
          <div className="team-grid team-grid-core">
            {CORE_TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* --- 3. FACULTY ADVISORS SECTION --- */}
        <section className="team-section team-section-advisors">
          <SectionHeading subtitle="Eminent professors guiding our path with experience and wisdom.">Faculty Advisors</SectionHeading>
          <div className="team-list team-list-advisors">
            {FACULTY_ADVISORS.map((advisor, i) => (
              <AdvisorCard key={advisor.id} advisor={advisor} index={i} />
            ))}
          </div>
        </section>

        {/* --- 4. EXECUTIVE COMMITTEE SECTION --- */}
        <section className="team-section team-section-executive">
          <SectionHeading subtitle="The dedicated individuals executing our vision flawlessly.">Executive Committee</SectionHeading>
          <div className="team-grid team-grid-executive">
            {EXECUTIVE_COMMITTEE.map((member) => (
              <TeamCard key={member.id} member={member} compact />
            ))}
          </div>
        </section>

        {/* --- 5. STATS SUMMARY --- */}
        <section className="team-section team-section-stats">
          <div className="team-grid team-grid-stats">
            {STATS.map((stat, i) => (
              <StatCard key={stat.id} stat={stat} index={i} />
            ))}
          </div>
        </section>

        {/* --- 6. CTA SECTION --- */}
        <section className="team-section team-section-cta">
          <div className="team-cta-gradient" />
          <div className="team-cta-panel">
            <h2 className="team-cta-title">Ready to innovate with us?</h2>
            <p className="team-cta-description">Join a community of forward-thinking engineers and researchers.</p>
            <div className="team-cta-actions">
              <button className="team-cta-primary">
                Join IEEE Now
                <ArrowRight className="team-cta-button-icon" />
              </button>
              <button className="team-cta-secondary">
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
