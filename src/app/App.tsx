import { Github, Linkedin, Mail, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import aboutPhoto from '../assets/yellow.jpg';
import profilePhoto from '../assets/profile.png';

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Portfolio</h1>
          <nav className="flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-gray-100">
              <img 
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900">Student Full-Stack Developer learning AI Integration</h2>
              <p className="text-lg text-gray-600">
                Software Development Engineer
              </p>
              <Button 
                className="mt-4 bg-gray-900 hover:bg-gray-800 rounded-full px-8"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </Button>
              
              {/* Social Icons */}
              <div className="flex gap-4 justify-center pt-2">
                <a href="https://github.com/Eswar090" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Github className="size-5" />
                </a>
                <a href="https://www.linkedin.com/in/eswar-maddoju-784863356" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <ChevronDown className="size-6 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Get To Know More</p>
            <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Profile Image */}
            <div className="rounded-3xl overflow-hidden">
              <img 
                src={aboutPhoto}
                alt="Portrait"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* About Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center py-8">
                  <CardContent className="space-y-2">
                    <div className="text-3xl mb-2">💼</div>
                    <h3 className="font-semibold text-gray-900">Experience</h3>
                    <p className="text-sm text-gray-600">Full-Stack Development<br />AI Integration</p>
                  </CardContent>
                </Card>

                <Card className="text-center py-8">
                  <CardContent className="space-y-2">
                    <div className="text-3xl mb-2">🎓</div>
                    <h3 className="font-semibold text-gray-900">Education</h3>
                    <p className="text-sm text-gray-600">
                      Anurag University<br />
                      BTech, Computer Science<br />
                      Aug 2024 - Aug 2028
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Hi! I'm a Full-Stack Developer specializing in building modern web applications with integrated AI capabilities. 
                I have extensive experience in developing end-to-end solutions using React for frontend, Node.js/Express for backend, 
                and integrating Python-based machine learning models. I'm passionate about creating intelligent, scalable applications 
                that solve real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Passionate undergraduate student at Anurag University, focusing on programming, algorithms, data structures, and software
                development. I enjoy collaborating on real-world projects that strengthen leadership, teamwork, and communication skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience/Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Explore My</p>
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend Development */}
            <Card>
              <CardContent className="py-8">
                <h3 className="text-center font-semibold text-gray-900 mb-6 pb-4 border-b">
                  Frontend Development
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">HTML</p>
                      <p className="text-xs text-gray-500">Semantic layouts</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">CSS</p>
                      <p className="text-xs text-gray-500">Responsive design</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">JavaScript</p>
                      <p className="text-xs text-gray-500">ES6+, async</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">React.js</p>
                      <p className="text-xs text-gray-500">Hooks, components</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Backend Development */}
            <Card>
              <CardContent className="py-8">
                <h3 className="text-center font-semibold text-gray-900 mb-6 pb-4 border-b">
                  Backend Development
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Node.js</p>
                      <p className="text-xs text-gray-500">Server-side logic</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Express.js</p>
                      <p className="text-xs text-gray-500">REST API dev</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">RESTful APIs</p>
                      <p className="text-xs text-gray-500">CRUD, auth</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card>
              <CardContent className="py-8">
                <h3 className="text-center font-semibold text-gray-900 mb-6 pb-4 border-b">
                  Databases
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">MongoDB</p>
                      <p className="text-xs text-gray-500">Schema, CRUD</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">MySQL</p>
                      <p className="text-xs text-gray-500">Relational queries</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">SQL</p>
                      <p className="text-xs text-gray-500">Joins, filtering</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">PostgreSQL</p>
                      <p className="text-xs text-gray-500">Basic usage</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Tools & AI */}
            <Card>
              <CardContent className="py-8">
                <h3 className="text-center font-semibold text-gray-900 mb-6 pb-4 border-b">
                  AI & Tools
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Python</p>
                      <p className="text-xs text-gray-500">ML integration</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Machine Learning</p>
                      <p className="text-xs text-gray-500">Prediction models</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Git & GitHub</p>
                      <p className="text-xs text-gray-500">Version control</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">VS Code</p>
                      <p className="text-xs text-gray-500">Development</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Browse My Recent</p>
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <Card className="w-full max-w-sm">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-rose-50 to-rose-100 flex items-center justify-center rounded-t-xl">
                  <div className="text-center p-8">
                    <div className="text-5xl mb-4">💧</div>
                    <p className="text-sm text-gray-600">AI Medical Analysis</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Hemoscan AI</h3>
                  <p className="text-sm text-gray-600">
                    AI-powered medical application for hemoglobin analysis and anemia detection using machine learning models.
                  </p>
                  <p className="text-xs text-gray-500">
                    React - Python - Machine Learning - REST APIs
                  </p>
                  <Button variant="outline" className="w-full rounded-full" asChild>
                    <a href="https://github.com/Eswar090/HemoScan-AI.git" target="_blank" rel="noopener noreferrer">
                      View Repository
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
{/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">Get In Touch</p>
            <h2 className="text-3xl font-bold text-gray-900">Contact Me</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              Actively seeking full-stack roles involving AI-driven applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="outline" 
                className="rounded-full px-6"
                asChild
              >
                <a href="mailto:eswarmaddoju129@gmail.com">
                  <Mail className="size-4" />
                  eswarmaddoju129@gmail.com
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-6"
                asChild
              >
                <a href="https://www.linkedin.com/in/eswar-maddoju-784863356" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-8">
          <nav className="flex justify-center gap-8 mb-4">
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-600 hover:text-gray-900">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-sm text-gray-600 hover:text-gray-900">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm text-gray-600 hover:text-gray-900">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </button>
          </nav>
          <p className="text-center text-xs text-gray-500">
            Copyright © 2025 Portfolio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
