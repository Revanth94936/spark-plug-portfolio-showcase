
import React from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import ProgressBar from '@/components/ProgressBar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import ToolCard from '@/components/ToolCard';
import SkillPill from '@/components/SkillPill';
import TimelineItem from '@/components/TimelineItem';
import { Instagram, Linkedin, Github, Mail, MessageSquare } from 'lucide-react';

const handleClick = () => {
  window.location.href = "#projects"; // This will scroll the page to the section with id="projects"
};

const Index = () => {
  // Skills data
  const technicalSkills = [

    { name: 'VLSI', percentage: 90 },
    { name: 'Digital Electronics', percentage: 85 },
    { name: 'Circuit Design', percentage: 80 },
    { name: 'Embedded Systems', percentage: 85 },
  ];

  const programmingSkills = [

    { name: 'Verilog', percentage: 85 },
    { name: 'C', percentage: 80 },
    { name: 'Python', percentage: 90 },
    { name: 'Java', percentage: 75 },
    { name: 'MATLAB', percentage: 70 },
  ];

  // Other skills
  const otherSkills = [
    'Communication', 'Problem Solving', 'Team Leadership', 
    'Project Management', 'Technical Documentation', 'Research',
    'Data Analysis', 'Time Management'
  ];

  // Projects data
  const projects = [
    {
      title: '3 Dimension Scanner',
      description: 'Developed a 3D scanner that can scan objects placed in its line of sight, creating detailed three-dimensional models for analysis and reproduction.',
      image: 'https://plus.unsplash.com/premium_photo-1715228482158-c911a17beca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Arduino', 'Sensors', 'Embedded Systems', 'Python'],
      link: 'https://github.com/REVANTH9493/3-Dimension-Portable-Scanner'
    },
    {
      title: 'Fire Fighting Robot',
      description: 'Designed and built a robot capable of detecting and extinguishing fires automatically, using sensors to locate heat sources and navigate to them.',
      image: 'https://images.unsplash.com/photo-1590912710660-aa43935cd36a?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Robotics', 'Sensors', 'Programming', 'Electronics'],
      link: 'https://github.com/REVANTH9493/Fire_Fighting_robot-project'
    },
    {
      title: 'Simple Radar System',
      description: 'Created a basic radar system that can detect objects in its vicinity and display their position on a screen, using ultrasonic sensors and microcontrollers.',
      image: 'https://plus.unsplash.com/premium_photo-1679917152484-c7b68dd0962a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Arduino', 'Sensors', 'C Programming'],
      link: 'https://github.com/REVANTH9493/Radar_project/tree/main'
    },
    {
      title: 'RISC-5 Based Processor Pipelining',
      description: 'Implemented a RISC-5 processor with pipelining using Verilog, demonstrating understanding of computer architecture and hardware description languages.',
      image: 'https://vajiram-prod.s3.ap-south-1.amazonaws.com/RISC_V_technology_a1263c7245.png',
      tags: ['VLSI', 'Verilog', 'Processor Design'],
      link: '#'
    },
    {
      title: 'Python Email Validator',
      description: 'Developed an email validation tool in Python that verifies email addresses for correct format and domain validity, improving data quality for applications.',
      image: 'https://images.unsplash.com/photo-1683117927786-f146451082fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Python', 'Validation', 'Email Processing'],
      link: 'https://github.com/REVANTH9493/Email_validator'
    }
  ];

  // Experiences data
  const experiences = [
    {
      period: 'December 2022 - May 2023',
      title: 'Embedded Systems Intern',
      company: 'Industech Solutions Pvt. Ltd., Koti',
      description: 'Gained hands-on experience with Arduino programming and Python. Obtained proficiency with tools like uKeil and Multisim for embedded systems development and simulation.'
    },
    {
      period: 'November 2022 - March 2023',
      title: 'Intern',
      company: 'Elewayte',
      description: 'Developed Python programming skills and gained practical experience working in a professional environment on various software projects.'
    },
    {
      period: 'October 2023 - November 2023',
      title: 'Intern',
      company: 'Cognifyz',
      description: 'Enhanced Python programming skills and knowledge through hands-on experience with real-world projects and professional mentorship.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-navy to-navy/80 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center">
            <div className="md:w-2/3 mt-8 md:mt-0 md:pr-12 animate-fade-in">
              <h4 className="text-teal font-medium mb-2">Hello, I'm</h4>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Nagidi Revanth</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6">Electronics & Communication Engineering Student</h2>
              <p className="text-white/80 mb-8 max-w-lg">
                Aspiring Electronics & Communication Engineer, VLSI Engineer | Skilled in Python, Embedded Systems & Circuit design | Passionate About Innovation & Problem-Solving
              </p>
              <div className="flex space-x-4">
                <button className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Download CV
                </button>
                <button className="border border-white/30 hover:border-white text-white px-6 py-2 rounded-full font-medium transition-colors hover:bg-white/10" onClick={handleClick}>
                  View Projects
                </button>
              </div>
            </div>
            <div className="md:w-1/3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-56 h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border-4 border-teal shadow-lg">
                <img 
                  src="public/revanth.jpg" 
                  alt="Nagidi Revanth" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <p className="text-gray-600 mb-4">
              Hello! I'm Revanth, an Electronics and Communication Engineering student passionate about VLSI engineering, embedded systems, and circuit design. I have a strong foundation in various programming languages including Python, C, and Verilog.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in electronics has equipped me with practical skills in designing and implementing electronic systems, with a particular focus on VLSI and embedded solutions.
            </p>
            <p className="text-gray-600">
              I am dedicated to innovation and problem-solving, continuously seeking opportunities to apply my technical knowledge to create efficient and effective solutions in the field of electronics.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500">B.Tech in ECE</p>
                <h4 className="text-lg font-medium text-navy">CMR College of Engineering and Technology, Medchal</h4>
                <p className="text-gray-600">Electronics & Communication Engineering</p>
                <p className="text-sm text-gray-500">CGPA: 8.32/10</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Diploma in ECE</p>
                <h4 className="text-lg font-medium text-navy">Government Institute of Electronics, Secunderabad</h4>
                <p className="text-gray-600">Electronics & Communication Engineering</p>
                <p className="text-sm text-gray-500">CGPA: 9.17/10</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Interests Section */}
      <Section id="interests" title="Interests" className="bg-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in">
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">VLSI</h3>
            <p className="text-gray-600 text-sm">Designing and implementing integrated circuits</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">Embedded Systems</h3>
            <p className="text-gray-600 text-sm">Creating integrated hardware-software solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 012-2H5a2 2 0 012 2v6a2 2 0 012 2h2a2 2 0 012-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">Python Programming</h3>
            <p className="text-gray-600 text-sm">Developing applications and solutions with Python</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 001 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">Circuit Design</h3>
            <p className="text-gray-600 text-sm">Creating efficient and innovative electronic circuits</p>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <TimelineItem
                period={exp.period}
                title={exp.title}
                company={exp.company}
                description={exp.description}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-gray-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold text-navy mb-4">Core Electronics Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProgressBar name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold text-navy mb-4">Programming Skills</h3>
            {programmingSkills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                <ProgressBar name={skill.name} percentage={skill.percentage} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-semibold text-navy mb-4">Other Skills</h3>
          <div className="flex flex-wrap gap-3">
            {otherSkills.map((skill, index) => (
              <SkillPill key={index} name={skill} />
            ))}
          </div>
        </div>
      </Section>

      {/* Tools Section */}
      <Section id="tools" title="Tools & Technologies">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            { name: 'Cadence Virtuoso', icon: '🛠️' },
            { name: 'Xilinx Vivado', icon: '💻' },
            { name: 'MATLAB', icon: '📊' },
            { name: 'Proteus', icon: '📈' },
            { name: 'Arduino', icon: '🛠️' },
            { name: 'uKeil', icon: '⚡' },
            { name: 'Python', icon: '🐍' },
            { name: 'Verilog', icon: '🔍' },
            { name: 'C Language', icon: '🖥️' },
            { name: 'Java', icon: '☕' },
          ].map((tool, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ToolCard name={tool.name} icon={tool.icon} />
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="bg-gray-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Me">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-navy mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out if you have any questions, opportunities, or just want to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-navy font-medium">revanthnagidi1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                  <MessageSquare className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-navy font-medium">+91 9493670109</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-navy font-medium">Telangana, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-navy font-medium mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/revanthnagidi?igsh=ZWNxMjhwZGY3d3Qw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/revanth-n-746086275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/REVANTH9493" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://wa.me/919493670109" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <ContactForm />
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="bg-navy text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Nagidi Revanth. All Rights Reserved.</p>
          <p className="text-white/60 text-sm">Electronics & Communication Engineering Student</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
