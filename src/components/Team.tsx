import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, ChevronRight } from 'lucide-react';
import { FiLinkedin as Linkedin, FiGithub as Github } from 'react-icons/fi';
import Marquee from 'react-fast-marquee';
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
    socials?: SocialLinks;
};

type Advisor = {
    id: string;
    name: string;
    department: string;
    image: string;
    socials?: SocialLinks;
};

// --- DATA ---
const FACULTY_ADVISORS: Advisor[] = teamData.facultyAdvisors || [];
const CORE_TEAM: TeamMember[] = teamData.coreTeam || [];
const FACULTY_MEMBERS: TeamMember[] = (teamData as any).facultyMembers || [];
const STUDENT_MEMBERS: TeamMember[] = (teamData as any).studentMembers || [];

const chair = CORE_TEAM.find(m => m.role.toLowerCase().includes('chair'));
const viceChair = CORE_TEAM.find(m => m.role.toLowerCase().includes('vice'));
const secretary = CORE_TEAM.find(m => m.role.toLowerCase().includes('secretary'));
const treasurer = CORE_TEAM.find(m => m.role.toLowerCase().includes('treasurer'));
const webmaster = CORE_TEAM.find(m => m.role.toLowerCase().includes('webmaster'));

const coreTeamLayout = [
    { member: treasurer, className: 'core-card-outer' },
    { member: secretary, className: 'core-card-inner' },
    { member: chair, className: 'core-card-center' },
    { member: viceChair, className: 'core-card-inner' },
    { member: webmaster, className: 'core-card-outer' },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
    <div className="team-section-heading">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
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
    <a href={href} target="_blank" rel="noreferrer" className="team-social-button">
        <Icon className="team-social-button-icon" />
    </a>
);

const CoreTeamCard = ({ member, className }: { member?: TeamMember, className: string }) => {
    if (!member) return <div className={`core-member-card ${className} empty-card`}></div>;

    return (
        <motion.div
            variants={cardVariant}
            whileHover={{ y: -15, scale: 1.03 }}
            className={`core-member-card ${className}`}
        >
            <div className="core-card-glow" />
            <div className="core-card-image-wrapper">
                <img src={member.image} alt={member.name} className="core-card-image" loading="lazy" decoding="async" />
                <div className="core-card-overlay">
                    <div className="core-card-socials">
                        {(member.socials?.linkedin || true) && <SocialIconButton href={member.socials?.linkedin || '#'} icon={Linkedin} />}
                        {(member.socials?.github || true) && <SocialIconButton href={member.socials?.github || '#'} icon={Github} />}
                        {(member.socials?.email || true) && <SocialIconButton href={member.socials?.email || '#'} icon={Mail} />}
                    </div>
                </div>
            </div>
            <div className="core-card-info">
                <h3 className="core-card-name">{member.name}</h3>
                <p className="core-card-role">{member.role}</p>
                <p className="core-card-department">{member.department || 'BPPIMT'}</p>

                <a href={member.socials?.linkedin || '#'} className="core-card-profile-btn" target="_blank" rel="noreferrer">
                    <span>View Profile</span>
                    <ChevronRight className="btn-icon" size={16} />
                </a>
            </div>
        </motion.div>
    );
};

const AdvisorCard = ({ advisor, index }: { advisor: Advisor, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{ scale: 1.02 }}
        className="team-advisor-card"
    >
        <div className="team-advisor-glow" />
        <div className="team-advisor-image-frame">
            <img src={advisor.image} alt={advisor.name} className="team-advisor-image" loading="lazy" decoding="async" />
        </div>
        <div className="team-advisor-body">
            <h3 className="team-advisor-name">{advisor.name}</h3>
            <p className="team-advisor-designation">{advisor.department}</p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
                {(advisor.socials?.linkedin) && (
                    <a href={advisor.socials.linkedin} target="_blank" rel="noreferrer" className="team-advisor-link">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                )}
                {(advisor.socials?.email) && (
                    <a href={`mailto:${advisor.socials.email}`} className="team-advisor-link" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}>
                        <Mail size={20} /> Contact
                    </a>
                )}
            </div>
        </div>
    </motion.div>
);

const CarouselCard = ({ member }: { member: TeamMember }) => (
    <div className="carousel-card">
        <div className="carousel-card-image-box">
            <img src={member.image} alt={member.name} className="carousel-card-image" loading="lazy" decoding="async" />
            <div className="carousel-card-socials">
                {(member.socials?.linkedin || true) && <SocialIconButton href={member.socials?.linkedin || '#'} icon={Linkedin} />}
                {(member.socials?.github || true) && <SocialIconButton href={member.socials?.github || '#'} icon={Github} />}
            </div>
        </div>
        <div className="carousel-card-details">
            <h4 className="carousel-card-name">{member.name}</h4>
            <p className="carousel-card-role">{member.role}</p>
            {member.department && <p className="carousel-card-department">{member.department}</p>}
        </div>
    </div>
);

function Team() { 
  // FIX 1: Safely handle CommonJS/ESM interop without upsetting TypeScript.
  // If Marquee is an object containing 'default', use that. Otherwise, use Marquee.
  const MarqueeComponent = (Marquee as any).default || Marquee;

  return (
    <div className="team-page">
      <div className="team-background">
        <motion.div 
           animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
           className="team-background-glow-1" 
        />
        <motion.div 
           animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
           className="team-background-glow-2" 
        />
        <div className="team-background-noise" />
        <div className="team-background-grid" />
        
        <motion.div 
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} 
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} 
          className="deco-element circle-1" 
        />
        <motion.div 
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }} 
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} 
          className="deco-element circle-2" 
        />
      </div>

      <div className="team-page-content">
        <section className="team-section team-section-core heroic-section">
          <div className="hero-text-center">
             <motion.h1 
               initial={{ opacity: 0, y: -30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
               className="hero-main-title"
             >
               Meet The <span className="hero-highlight">Core</span>
             </motion.h1>
             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="hero-subtitle"
             >
               The fearless leaders driving IEEE innovation and excellence forward.
             </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="core-team-container"
          >
            {/* FIX 2: Added optional chaining to prevent undefined crashes */}
            {coreTeamLayout?.map((item, idx) => (
              <CoreTeamCard key={item?.member?.id || idx} member={item?.member} className={item?.className} />
            ))}
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="core-team-mobile"
          >
            {CORE_TEAM?.map((member, idx) => (
              <CoreTeamCard key={member?.id || idx} member={member} className="core-card-mobile" />
            ))}
          </motion.div>
        </section>

        {FACULTY_ADVISORS?.length > 0 && (
          <section className="team-section team-section-advisors">
            <SectionHeading subtitle="Mentors guiding our path with immense experience and wisdom.">Faculty Advisors</SectionHeading>
            <div className="team-list-advisors">
              {FACULTY_ADVISORS?.map((advisor, i) => (
                <AdvisorCard key={advisor?.id || i} advisor={advisor} index={i} />
              ))}
            </div>
          </section>
        )}

        {FACULTY_MEMBERS?.length > 0 && (
          <section className="team-section team-section-carousel">
            <SectionHeading>Faculty Members</SectionHeading>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="carousel-wrapper"
            >
              {/* FIX 3: Replaced <Marquee> with <MarqueeComponent> */}
              <MarqueeComponent gradient={true} gradientColor="#020617" speed={40} pauseOnHover={true}>
                {FACULTY_MEMBERS?.map((member, idx) => (
                  <CarouselCard key={member?.id || idx} member={member} />
                ))}
              </MarqueeComponent>
            </motion.div>
          </section>
        )}

        {STUDENT_MEMBERS?.length > 0 && (
          <section className="team-section team-section-carousel">
            <SectionHeading subtitle="The amazing students making it all happen.">Student Members</SectionHeading>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="carousel-wrapper"
            >
               {/* FIX 3: Replaced <Marquee> with <MarqueeComponent> */}
              <MarqueeComponent gradient={true} gradientColor="#020617" speed={50} direction="right" pauseOnHover={true}>
                {STUDENT_MEMBERS?.map((member, idx) => (
                  <CarouselCard key={member?.id || idx} member={member} />
                ))}
              </MarqueeComponent>
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}

export default React.memo(Team);
