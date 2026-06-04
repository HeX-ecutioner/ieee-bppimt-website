import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, ChevronRight, GraduationCap } from 'lucide-react';
import { FiLinkedin as Linkedin, FiGithub as Github } from 'react-icons/fi';
import teamData from '../data/team.json';
import './Team.css';

// --- TYPES ---
type SocialLinks = {
  linkedin?: string;
  github?: string;
  email?: string;
  scholar?: string;
};

type TeamMember = {
  id: number;
  name: string;
  role?: string;
  society?: string;
  department?: string;
  image?: string;
  socials?: SocialLinks;
};

const team = {
  coreTeam: teamData.coreTeam as TeamMember[],
  facultyMentors: teamData.facultyMentors as TeamMember[],
  facultyMembers: teamData.facultyMembers as TeamMember[],
  studentMembers: teamData.studentMembers as TeamMember[],
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } }
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

const CoreTeamCard = ({ member, className }: { member: TeamMember, className: string }) => (
  <motion.div variants={cardVariant} whileHover={{ y: -15, scale: 1.03 }} className={`core-member-card ${className}`}>
    <div className="core-card-glow" />
    <div className="core-card-image-wrapper">
      <img src={member.image} alt={member.name} className="core-card-image" loading="lazy" decoding="async" />
      <div className="core-card-overlay">
        <div className="core-card-socials">
          {member.socials?.linkedin && <SocialIconButton href={member.socials.linkedin} icon={Linkedin} />}
          {member.socials?.github && <SocialIconButton href={member.socials.github} icon={Github} />}
          {member.socials?.email && <SocialIconButton href={member.socials.email} icon={Mail} />}
        </div>
      </div>
    </div>
    <div className="core-card-info">
      <h3 className="core-card-name">{member.name}</h3>
      <p className="core-card-role">{member.role}</p>
      <p className="core-card-department">{member.department || 'BPPIMT'}</p>
      {member.socials?.linkedin && (
        <a href={member.socials.linkedin} className="core-card-profile-btn" target="_blank" rel="noreferrer">
          <span>View Profile</span>
          <ChevronRight className="btn-icon" size={16} />
        </a>
      )}
    </div>
  </motion.div>
);

const AdvisorCard = ({ advisor, index }: { advisor: TeamMember, index: number }) => (
  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} whileHover={{ scale: 1.02 }} className="team-advisor-card">
    <div className="team-advisor-glow" />
    <div className="team-advisor-image-frame">
      <img src={advisor.image} alt={advisor.name} className="team-advisor-image" loading="lazy" decoding="async" />
    </div>
    <div className="team-advisor-body">
      <h3 className="team-advisor-name">{advisor.name}</h3>
      <p className="team-advisor-role">{advisor.role}</p>
      <p className="team-advisor-designation">{advisor.department}</p>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
        {advisor.socials?.linkedin && <a href={advisor.socials.linkedin} target="_blank" rel="noreferrer" className="team-advisor-link"><Linkedin size={20} /> LinkedIn</a>}
        {advisor.socials?.scholar && <a href={advisor.socials.scholar} target="_blank" rel="noreferrer" className="team-advisor-link" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}><GraduationCap size={20} /> Scholar</a>}
        {advisor.socials?.email && <a href={advisor.socials.email} className="team-advisor-link" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.2)' }}><Mail size={20} /> Contact</a>}
      </div>
    </div>
  </motion.div>
);

const CarouselCard = ({ member }: { member: TeamMember }) => (
  <div className="carousel-card">
    <div className="carousel-card-image-box">
      <img src={member.image} alt={member.name} className="carousel-card-image" loading="lazy" decoding="async" />
      <div className="carousel-card-socials">
        <SocialIconButton href={member.socials?.linkedin || '#'} icon={Linkedin} />
        <SocialIconButton href={member.socials?.email || '#'} icon={Mail} />
      </div>
    </div>
    <div className="carousel-card-details">
      <h4 className="carousel-card-name">{member.name}</h4>
      <p className="carousel-card-role">{member.role}</p>
      {member.department && <p className="carousel-card-department">{member.department}</p>}
    </div>
  </div>
);

const StudentCard = ({ member }: { member: TeamMember }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className="student-card">
    <div className="student-card-content">
      <h4 className="student-card-name">{member.name}</h4>
      {member.society && <p className="student-card-society">{member.society}</p>}
      {member.department && <p className="student-card-dept">{member.department}</p>}
    </div>
    <div className="student-card-socials">
      {member.socials?.linkedin && <a href={member.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>}
      {member.socials?.github && <a href={member.socials.github} target="_blank" rel="noreferrer"><Github size={16} /></a>}
      {member.socials?.email && <a href={member.socials.email} target="_blank" rel="noreferrer"><Mail size={16} /></a>}
    </div>
  </motion.div>
);

const DraggableList = ({ members }: { members: TeamMember[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate elements for infinite scrolling illusion
  const displayMembers = [...members, ...members, ...members, ...members];

  React.useEffect(() => {
    if (scrollRef.current) {
      // Start near the middle to allow scrolling left immediately
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 4;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    scrollRef.current.classList.add('active');
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (scrollRef.current) scrollRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) scrollRef.current.classList.remove('active');
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // Smooth looping
    if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollWidth / 2;
    } else if (scrollLeft + clientWidth >= scrollWidth - 1) {
      scrollRef.current.scrollLeft = (scrollWidth / 2) - clientWidth;
    }
  };

  return (
    <div
      ref={scrollRef}
      className="draggable-scroll-container"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
    >
      {displayMembers.map((member, idx) => (
        <CarouselCard key={`${member.id}-${idx}`} member={member} />
      ))}
    </div>
  );
};

function Team() {
  const { coreTeam, facultyMentors, facultyMembers, studentMembers } = team;

  const coreRows: TeamMember[][] = [];
  for (let i = 0; i < coreTeam.length; i += 5) {
    coreRows.push([...coreTeam.slice(i, i + 5)].sort((a, b) => a.id - b.id));
  }

  const getCoreCardClass = (id: number) => {
    if (id === 1 || id === 5) return 'core-card-outer';
    if (id === 2 || id === 4) return 'core-card-inner';
    if (id === 3) return 'core-card-center';
    return '';
  };

  return (
    <div className="team-page">
      <div className="team-background">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="team-background-glow-1" />
        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="team-background-glow-2" />
        <div className="team-background-noise" />
        <div className="team-background-grid" />
        <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="deco-element circle-1" />
        <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="deco-element circle-2" />
      </div>

      <div className="team-page-content">
        <section className="team-section team-section-core heroic-section">
          <div className="hero-text-center">
            <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }} className="hero-main-title">
              Meet The <span className="hero-highlight">Core</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="hero-subtitle">
              The fearless leaders driving IEEE innovation and excellence forward.
            </motion.p>
          </div>

          <div className="core-team-container">
            {coreRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="core-team-row"
              >
                {row.map((member) => (
                  <CoreTeamCard key={member.id} member={member} className={getCoreCardClass(member.id)} />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="core-team-mobile">
            {coreRows.flat().map((member) => (
              <CoreTeamCard key={member.id} member={member} className="core-card-mobile" />
            ))}
          </motion.div>
        </section>

        {facultyMentors.length > 0 && (
          <section className="team-section team-section-advisors">
            <SectionHeading subtitle="Teachers guiding our path with immense experience and wisdom.">Faculty Mentors</SectionHeading>
            <div className="team-list-advisors">
              {facultyMentors.map((advisor, i) => (
                <AdvisorCard key={advisor.id} advisor={advisor} index={i} />
              ))}
            </div>
          </section>
        )}

        {facultyMembers.length > 0 && (
          <section className="team-section team-section-carousel">
            <SectionHeading subtitle="Our strength for making things amazing.">Faculty Members</SectionHeading>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="carousel-wrapper">
              <DraggableList members={facultyMembers} />
            </motion.div>
          </section>
        )}

        {studentMembers.length > 0 && (
          <section className="team-section">
            <SectionHeading subtitle="The amazing folks that complete the squad.">Student Members</SectionHeading>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="student-grid">
              {studentMembers.map((member) => (
                <StudentCard key={member.id} member={member} />
              ))}
            </motion.div>
          </section>
        )}
      </div>
    </div>
  );
}

export default React.memo(Team);
