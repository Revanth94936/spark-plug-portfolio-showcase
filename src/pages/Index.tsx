
import React from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import ProgressBar from '@/components/ProgressBar';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import ToolCard from '@/components/ToolCard';
import SkillPill from '@/components/SkillPill';
import TimelineItem from '@/components/TimelineItem';

const Index = () => {
  // Skills data
  const technicalSkills = [
    { name: 'Digital Electronics', percentage: 90 },
    { name: 'Circuit Design', percentage: 85 },
    { name: 'Embedded Systems', percentage: 80 },
    { name: 'Signal Processing', percentage: 75 },
    { name: 'PCB Design', percentage: 70 },
  ];

  const programmingSkills = [
    { name: 'C/C++', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'MATLAB', percentage: 75 },
    { name: 'VHDL', percentage: 70 },
    { name: 'JavaScript', percentage: 65 },
  ];

  // Other skills
  const otherSkills = [
    'Communication', 'Problem Solving', 'Team Leadership', 
    'Project Management', 'Technical Documentation', 'Research',
    'Data Analysis', 'Critical Thinking', 'Time Management'
  ];

  // Projects data
  const projects = [
    {
      title: 'Smart Home Automation System',
      description: 'Designed and implemented a comprehensive home automation system using Arduino and IoT technologies to control lights, temperature, and security.',
      image: 'https://images.unsplash.com/photo-1557337710-93aa2d586d88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['Arduino', 'IoT', 'Embedded Systems', 'C++'],
      link: '#'
    },
    {
      title: 'Digital Signal Processing Toolkit',
      description: 'Developed a comprehensive DSP toolkit in MATLAB for audio signal processing, featuring filters, spectral analysis, and audio effects.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBzaWduYWx8ZW58MHx8MHx8fDA%3D',
      tags: ['MATLAB', 'DSP', 'Audio Processing'],
      link: '#'
    },
    {
      title: 'FPGA-based Traffic Light Controller',
      description: 'Implemented a traffic light control system on an FPGA using VHDL, featuring multiple modes and pedestrian crossing signals.',
      image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D',
      tags: ['FPGA', 'VHDL', 'Hardware Design'],
      link: '#'
    }
  ];

  // Experiences data
  const experiences = [
    {
      period: 'May 2022 - August 2022',
      title: 'Electronics Engineering Intern',
      company: 'TechCircuits Inc.',
      description: 'Assisted in PCB design and testing, worked on debugging electronic circuits, and contributed to the development of a new sensor interface module.'
    },
    {
      period: 'December 2021 - February 2022',
      title: 'Research Assistant',
      company: 'University Research Lab',
      description: 'Worked on a research project focused on low-power IoT systems, conducted experiments, collected data, and assisted in the publication of a research paper.'
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
                Passionate about embedded systems, signal processing, and IoT solutions. 
                Currently exploring the intersection of hardware and software to build innovative solutions.
              </p>
              <div className="flex space-x-4">
                <button className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-full font-medium transition-colors">
                  Download CV
                </button>
                <button className="border border-white/30 hover:border-white text-white px-6 py-2 rounded-full font-medium transition-colors hover:bg-white/10">
                  View Projects
                </button>
              </div>
            </div>
            <div className="md:w-1/3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-56 h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border-4 border-teal shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbiUyMHBvcnRyYWl0fGVufDB8fDB8fHww" 
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
              Hello! I'm Revanth, a final year Electronics and Communication Engineering student at National Institute of Technology. I'm passionate about designing and building electronic systems, with a particular interest in embedded systems, signal processing, and IoT solutions.
            </p>
            <p className="text-gray-600 mb-4">
              My journey in electronics began when I disassembled my first radio at the age of 12. Since then, I've been fascinated by how electronic devices work and how they can be improved or reimagined.
            </p>
            <p className="text-gray-600">
              Throughout my academic journey, I've focused on developing strong technical skills while also honing my problem-solving abilities. I believe in the power of technology to create positive change and am excited to contribute to the field of electronics engineering.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-4">Education</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500">2020 - 2024 (Expected)</p>
                <h4 className="text-lg font-medium text-navy">B.Tech in Electronics & Communication Engineering</h4>
                <p className="text-gray-600">National Institute of Technology</p>
                <p className="text-sm text-gray-500">CGPA: 8.7/10</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">2018 - 2020</p>
                <h4 className="text-lg font-medium text-navy">Higher Secondary Education</h4>
                <p className="text-gray-600">Delhi Public School</p>
                <p className="text-sm text-gray-500">Percentage: 95%</p>
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
            <h3 className="text-lg font-medium text-navy mb-2">Embedded Systems</h3>
            <p className="text-gray-600 text-sm">Designing integrated hardware-software solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">IoT Development</h3>
            <p className="text-gray-600 text-sm">Creating connected devices for modern solutions</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 002-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-navy mb-2">Signal Processing</h3>
            <p className="text-gray-600 text-sm">Analyzing and manipulating signals for applications</p>
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
            { name: 'Arduino', icon: '🔌' },
            { name: 'Raspberry Pi', icon: '💻' },
            { name: 'MATLAB', icon: '📊' },
            { name: 'Oscilloscope', icon: '📈' },
            { name: 'Altium Designer', icon: '🛠️' },
            { name: 'PSpice', icon: '⚡' },
            { name: 'Xilinx Vivado', icon: '🖥️' },
            { name: 'LTspice', icon: '📱' },
            { name: 'Proteus', icon: '🔍' },
            { name: 'Eagle PCB', icon: '🖨️' },
          ].map((tool, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ToolCard name={tool.name} icon={tool.icon} />
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" className="bg-gray-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-navy font-medium">revanth.nagidi@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 000 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 100 4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-navy font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 000 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 100 4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-navy font-medium">New Delhi, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-navy font-medium mb-3">Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white hover:bg-teal transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
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
