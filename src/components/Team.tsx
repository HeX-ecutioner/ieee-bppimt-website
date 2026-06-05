import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, GraduationCap } from 'lucide-react';
import { FiLinkedin as Linkedin, FiGithub as Github } from 'react-icons/fi';
import teamData from '../data/team.json';
import './Team.css';

type SocialLinksType = { linkedin?: string; github?: string; email?: string; scholar?: string; };
type TeamMember = { id: number; name: string; role?: string; society?: string; department?: string; image?: string; socials?: SocialLinksType; };

const coreTeam = teamData.coreTeam as TeamMember[],
  facultyMentors = teamData.facultyMentors as TeamMember[],
  facultyMembers = teamData.facultyMembers as TeamMember[],
  studentMembers = teamData.studentMembers as TeamMember[];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } }
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} className="team-section-title">
      {children}
    </motion.h2>
    <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="team-section-divider">
      <div className="team-section-divider-glow" />
    </motion.div>
    {subtitle && (
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="team-section-subtitle">
        {subtitle}
      </motion.p>
    )}
  </div>
);

const SocialLink = ({ href, icon: Icon, size }: { href: string, icon: React.ElementType, size?: number }) => (
  <a href={href} target="_blank" rel="noreferrer" className="social-icon">
    <Icon size={size} />
  </a>
);

const SocialLinksGroup = ({ socials, size }: { socials?: SocialLinksType, size?: number }) => {
  if (!socials) return null;
  return (
    <div className="socials-container">
      {socials.linkedin && <SocialLink href={socials.linkedin} icon={Linkedin} size={size} />}
      {socials.github && <SocialLink href={socials.github} icon={Github} size={size} />}
      {socials.email && <SocialLink href={socials.email} icon={Mail} size={size} />}
    </div>
  );
};

const MemberInfo = ({ name, role, dept, isAdvisor = false }: { name: string, role?: string, dept?: string, isAdvisor?: boolean }) => (
  <>
    <h3 className="member-name" style={{ fontSize: isAdvisor ? '2rem' : '1.25rem' }}>{name}</h3>
    {role && <p className="member-role">{role}</p>}
    {dept && <p className="member-dept">{dept}</p>}
  </>
);

const CoreTeamCard = ({ member, className }: { member: TeamMember, className?: string }) => (
  <motion.div variants={cardVariant} whileHover={{ y: -15, scale: 1.03 }} className={`team-card ${className || ''}`}>
    <div className="card-glow" />
    <div className="core-card-image-wrapper">
      <img src={member.image} alt={member.name} className="core-card-image" loading="lazy" decoding="async" />
      <div className="core-card-overlay">
        <SocialLinksGroup socials={member.socials} size={20} />
      </div>
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <MemberInfo name={member.name} role={member.role} dept={member.department || 'BPPIMT'} />
    </div>
  </motion.div>
);

const AdvisorCard = ({ advisor, index }: { advisor: TeamMember, index: number }) => (
  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} whileHover={{ scale: 1.02 }} className="team-card" style={{ padding: '2rem' }}>
    <div className="card-glow" />
    <div className="team-advisor-image-frame">
      <img src={advisor.image} alt={advisor.name} className="team-advisor-image" loading="lazy" decoding="async" />
    </div>
    <MemberInfo name={advisor.name} role={advisor.role} dept={advisor.department} isAdvisor />
    <div className="advisor-socials">
      {advisor.socials?.linkedin && <a href={advisor.socials.linkedin} target="_blank" rel="noreferrer" className="social-pill"><Linkedin size={18} /> LinkedIn</a>}
      {advisor.socials?.scholar && <a href={advisor.socials.scholar} target="_blank" rel="noreferrer" className="social-pill outline"><GraduationCap size={18} /> Scholar</a>}
      {advisor.socials?.email && <a href={advisor.socials.email} className="social-pill outline"><Mail size={18} /> Contact</a>}
    </div>
  </motion.div>
);

const FacultyMemberCard = ({ member }: { member: TeamMember }) => (
  <motion.div whileHover={{ y: -8, scale: 1.02 }} className="team-card">
    <div className="card-glow" />
    <div className="faculty-icon-wrapper">
      <GraduationCap className="faculty-icon" size={24} />
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      <MemberInfo name={member.name} role={member.role || 'Member'} dept={member.department} />
    </div>
    <SocialLinksGroup socials={member.socials} size={18} />
  </motion.div>
);

const StudentCard = ({ member }: { member: TeamMember }) => (
  <motion.div whileHover={{ y: -5, scale: 1.02 }} className="team-card" style={{ padding: '1.25rem' }}>
    <div style={{ flex: 1 }}>
      <MemberInfo name={member.name} role={member.society} dept={member.department} />
    </div>
    <SocialLinksGroup socials={member.socials} size={16} />
  </motion.div>
);

function Team() {
  const pcRoleOrder = ['Treasurer', 'Secretary', 'Chairperson', 'Vice Chairperson', 'Webmaster'];
  const pcOfficeBearers = pcRoleOrder
    .map(role => coreTeam.find(m => m.role === role))
    .filter((m): m is TeamMember => !!m);

  const coreMembers = coreTeam
    .filter(m => m.role === 'Core Member')
    .sort((a, b) => a.id - b.id);
  const coreRows = [pcOfficeBearers, coreMembers].filter(row => row.length > 0);

  const mobileRoleOrder = ['Chairperson', 'Vice Chairperson', 'Secretary', 'Treasurer', 'Webmaster'];
  const mobileOfficeBearers = mobileRoleOrder
    .map(role => coreTeam.find(m => m.role === role))
    .filter((m): m is TeamMember => !!m);
  const mobileCoreTeam = [...mobileOfficeBearers, ...coreMembers];

  const nabanitaMaam = facultyMentors.find(m => m.name.includes('Nabanita')), others = facultyMentors.filter(m => !m.name.includes('Nabanita'));

  return (
    <div style={{ background: '#001220', paddingBottom: '2rem' }}>
      <div className="team-background" />

      <section className="team-section" style={{ paddingTop: '4rem' }}>
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
            <motion.div key={rowIndex} variants={staggerContainer} initial="hidden" animate="show" className="core-team-row">
              {row.map((member) => (
                <CoreTeamCard key={`${member.id}-${member.name}`} member={member} className="core-card" />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="core-team-mobile">
          {mobileCoreTeam.map((member) => (
            <CoreTeamCard key={`${member.id}-${member.name}`} member={member} className="core-card-mobile" />
          ))}
        </motion.div>
      </section>

      {facultyMentors.length > 0 && (
        <section className="team-section">
          <SectionHeading subtitle="Teachers guiding our path with immense experience and wisdom.">Faculty Mentors</SectionHeading>
          {nabanitaMaam && (<div className="mentor-top-row"><AdvisorCard advisor={nabanitaMaam} index={0} /></div>)}
          {others.length > 0 && (
            <div className="grid-layout" style={{ maxWidth: '75rem' }}>
              {others.map((advisor, i) => (<AdvisorCard key={`${advisor.id}-${advisor.name}`} advisor={advisor} index={i + 1} />))}
            </div>
          )}
        </section>
      )}

      {facultyMembers.length > 0 && (
        <section className="team-section">
          <SectionHeading subtitle="Our strength for making things amazing.">Faculty Members</SectionHeading>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid-layout" style={{ maxWidth: '85rem' }}>
            {facultyMembers.map((member) => (<FacultyMemberCard key={`${member.id}-${member.name}`} member={member} />))}
          </motion.div>
        </section>
      )}

      {studentMembers.length > 0 && (
        <section className="team-section">
          <SectionHeading subtitle="The amazing folks that complete the squad.">Student Members</SectionHeading>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid-layout" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {studentMembers.map((member) => (<StudentCard key={`${member.id}-${member.name}`} member={member} />))}
          </motion.div>
        </section>
      )}
    </div>
  );
}

export default React.memo(Team);
