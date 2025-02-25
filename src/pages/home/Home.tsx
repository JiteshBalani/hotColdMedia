import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Play,
  ArrowRight,
  Camera,
  Video,
  Music,
  Radio,
  Award,
  Users,
  Mail,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { name: "work", href: "#work" },
    { name: "services", href: "#services" },
    { name: "about", href: "#about" },
    { name: "contact", href: "#contact" },
  ];

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Capturing moments that tell your story",
      link: "photography",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videography",
      description: "Cinematic storytelling that moves",
      link: "videography",
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Audio",
      description: "Professional sound that resonates",
      link: "audio",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Podcasting",
      description: "Voices that reach millions",
      link: "podcast",
    },
  ];

  const projects = [
    {
      title: "DIL-LUMINATI TOUR",
      subtitle: "Music Festival Coverage",
      image:
        "https://platinumlist.net/guide/wp-content/uploads/2024/06/Diljit-Dosanjh.webp",
      year: "2024",
    },
    {
      title: "BRAND CAMPAIGN",
      subtitle: "Brand Campaign",
      image:
        "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content12481.jpg",
      year: "2024",
    },
    {
      title: "FIGURING OUT",
      subtitle: "Podcast Series",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkCji0GSMMLBIVdeHqcREKPj5_h7RJzFaa5Q&s",
      year: "2023",
    },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Awards Won" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "py-4 bg-black/90 backdrop-blur-lg" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-gradient">HOT&COLD</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <a
                  key={section.name}
                  href={section.href}
                  className="text-sm tracking-wider hover:text-gradient transition-all"
                >
                  {section.name.toUpperCase()}
                </a>
              ))}
              <button className="px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
                Let's Talk
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {sections.map((section) => (
              <a
                href={section.href}
                key={section.name}
                className="text-3xl font-light tracking-wider hover:text-gradient transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1920"
          >
            <source
              src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
            <span className="block text-stroke">CREATIVE</span>
            <span className="block text-gradient">STORYTELLING</span>
            <span className="block text-stroke">STUDIO</span>
          </h1>
          <p className="max-w-xl text-xl text-white/70 mb-12">
            We craft compelling narratives through photography, film, and sound.
            Your story, told differently.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-gradient rounded-full flex items-center gap-2 hover:opacity-90 transition-all">
              <Play className="w-5 h-5" />
              Watch Showreel
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all">
              View Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-8 bg-gradient-to-b from-transparent to-black">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center space-x-8">
                {[
                  "PHOTOGRAPHY",
                  "VIDEOGRAPHY",
                  "AUDIO PRODUCTION",
                  "PODCASTING",
                ].map((text) => (
                  <span
                    key={text}
                    className="text-2xl font-light tracking-wider mx-8"
                  >
                    {text} <Star className="inline w-4 h-4" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 md:mb-0">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="max-w-xl text-white/70">
              From concept to execution, we provide end-to-end creative
              solutions that help brands stand out in today's digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card hover-card p-8 rounded-2xl flex flex-col"
              >
                <div className="mb-6 text-gradient">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <button
                  onClick={() => navigate(`/${service.link}`)}
                  className="mt-auto flex items-center gap-2 text-sm group"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-16">
            <span className="text-gradient">Selected Works</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm mb-2">{project.year}</p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-12 md:p-20">
            <div className="grid md:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                    {stat.number}
                  </p>
                  <p className="text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-12 md:p-20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                  <span className="text-gradient">Let's Create</span>
                  <br />
                  <span className="text-stroke">Something Great</span>
                </h2>
                <p className="text-white/70 mb-8">
                  Ready to bring your vision to life? We're here to help you
                  create content that resonates with your audience and achieves
                  your goals.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-4">
                    <Mail className="w-5 h-5" />
                    hello@hotcoldmedia.com
                  </p>
                  <p className="flex items-center gap-4">
                    <Users className="w-5 h-5" />
                    Mumbai • India • World
                  </p>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={4}
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-gradient rounded-lg hover:opacity-90 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-6">
                <span className="text-gradient">HOT&COLD</span>
              </h3>
              <p className="text-white/70">
                Creating content that moves people and drives results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 cursor-pointer">
                <li onClick={() => navigate("/photography")}>Photography</li>
                <li onClick={() => navigate("/videography")}>Videography</li>
                <li onClick={() => navigate("/audio")}>Audio Production</li>
                <li onClick={() => navigate("/podcast")}>Podcasting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <ul className="space-y-2 text-white/70">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Vimeo</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-white/50">
            © {new Date().getFullYear()} Hot & Cold Media. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
