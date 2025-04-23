
import { useEffect } from "react";
import { Scissors, Clock, Bed, Users, Star, Calendar, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import GalleryItem from "@/components/GalleryItem";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  // Set background color on load
  useEffect(() => {
    document.body.className = "bg-barber-light";
  }, []);

  const priceCardList = [
    {
      title:"Hair Kut & Beard",
      price:"$30 & up",
      description:"If you prefer Dry Shave instead of Beard, please inform the barber"
    },
    {
      title:"Hair Kut",
      price:"$30 & up",
      description:""
    },
    {
      title:"Hot Towel Shave",
      price:"$35 & up",
      description:""
    },
    {
      title:"Kidz Kutz (2yrs - 13yrs)",
      price:"$25 & up",
      description:""
    },
    {
      title:"Line Up, Taper & Beard",
      price:"$25 & up",
      description:""
    },
    {
      title:"Line Up & Taper",
      price:"$20 & up",
      description:""
    },
    {
      title:"Line Up",
      price:"$17 & up",
      description:""
    },
    {
      title:"Beard Trim",
      price:"$15 & up",
      description:""
    },
    {
      title:"Razor",
      price:"$5 extra",
      description:""
    },
    {
      title:"Designs",
      price:"$5 & up",
      description:""
    },
    {
      title:"Shampoo",
      price:"$8 & up",
      description:""
    },
    {
      title:"Services Scheduled after 6pm",
      price:"$10 & up",
      description:""
    },
    {
      title:"Additional Fee for all services after 7pm",
      price:"$10",
      description:""
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen bg-barber-black relative flex items-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 py-20 mt-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-heading">
              PREMIER <span className="text-barber-gold">BARBER</span> EXPERIENCE
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-body">
              Where precision meets style. Specializing in fade haircuts, beard grooming, and expert styling for all hair types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking" className="btn-primary w-full sm:w-auto text-center">
                Book Appointment
              </a>
              <a href="#services" className="border-2 border-white text-white font-heading uppercase px-6 py-3 rounded-sm hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
                Our Services
              </a>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-barber-black/80 border-l-4 border-barber-gold p-4">
                <h3 className="text-barber-gold font-heading text-lg font-bold mb-1">Expert Barbers</h3>
                <p className="text-gray-300">Skilled professionals with years of experience</p>
              </div>
              <div className="bg-barber-black/80 border-l-4 border-barber-gold p-4">
                <h3 className="text-barber-gold font-heading text-lg font-bold mb-1">Premium Products</h3>
                <p className="text-gray-300">Only the best products for your hair and skin</p>
              </div>
              <div className="bg-barber-black/80 border-l-4 border-barber-gold p-4">
                <h3 className="text-barber-gold font-heading text-lg font-bold mb-1">Relaxing Atmosphere</h3>
                <p className="text-gray-300">Enjoy a comfortable experience in our shop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of premium barbering services, specializing in all hair types with a focus on precision and quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceCardList.map(card => (
              <ServiceCard 
                title={card.title} 
                price={card.price}
                description={card.description}
                icon={<Scissors size={24} />}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="#booking" className="btn-primary inline-block">
              Book Now
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">About Kingdom Kutz</h2>
              <p className="text-gray-700 mb-4">
               At Kingdom Kuts, we are committed to providing unparalleled hair styling and grooming services that are tailored to your unique lifestyle!
              </p>
              <p className="text-gray-700 mb-6">
               Based in Portland, Oregon, we value every client and their individual needs. Our barbers and stylists pair modern-day cutting edge grooming techniques with timeless traditional services which leaves you feeling like royalty.
              </p>
              <p className="text-gray-700 mb-6">
               The experience begins when you walk through the door; The smell, the music, the décor. We have created the perfect atmosphere where you can relax and get your desired haircut. Join us for a family-friendly environment that welcomes everyone together for memory-making, barbershop experiences.
              </p>
              
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1568&auto=format&fit=crop" 
                alt="Barber Shop Interior" 
                className="rounded-sm w-full h-auto object-cover shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-barber-black text-white p-6 rounded-sm shadow-lg max-w-xs">
                <h3 className="font-heading text-xl font-bold mb-2">10+ Years</h3>
                <p>Of providing exceptional barbering services to our community</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Work</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Browse through our gallery to see examples of our precision cuts, fades, designs, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1596702874230-b5706dfb5bc7?q=80&w=1587&auto=format&fit=crop" 
              title="Classic Fade"
              subtitle="Precision cut with clean lines" 
            />
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1593702288056-f5b372ebad7b?q=80&w=1587&auto=format&fit=crop" 
              title="Beard Styling"
              subtitle="Expert grooming and shaping" 
            />
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop" 
              title="Modern Cut"
              subtitle="Contemporary style with texture" 
            />
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1587&auto=format&fit=crop" 
              title="Razor Fade"
              subtitle="Sharp definition and detail" 
            />
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1622296176731-a215859ae5f2?q=80&w=1470&auto=format&fit=crop" 
              title="Design Work"
              subtitle="Artistic patterns and lines" 
            />
            <GalleryItem 
              imgSrc="https://images.unsplash.com/photo-1580486757277-7683d76243ed?q=80&w=1470&auto=format&fit=crop" 
              title="Classic Haircut"
              subtitle="Timeless style and precision" 
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about their experience with Kingdom Kuts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Best barbershop in Portland hands down. My barber always gives me a clean fade and takes his time to make sure everything is perfect."
              author="Michael Johnson"
              role="Client for 3 years"
            />
            <TestimonialCard 
              quote="I've been going to Kingdom Kuts for over 5 years. The atmosphere is great and they really know how to handle black hair. Highly recommend!"
              author="David Williams"
              role="Loyal Customer"
            />
            <TestimonialCard 
              quote="The attention to detail is unmatched. From the moment you walk in to the hot towel finish, the whole experience is top notch."
              author="Robert Thompson"
              role="Client for 1 year"
            />
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section 
        id="booking" 
        className="py-20 bg-barber-black text-white"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready for a Fresh Cut?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your appointment today and experience the Kingdom Kuts difference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="https://booksy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-barber-gold text-black flex items-center justify-center font-heading uppercase px-6 py-4 rounded-sm hover:opacity-90 transition-opacity"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Online
              </a>
              <a 
                href="tel:+15035555555" 
                className="border-2 border-white text-white flex items-center justify-center font-heading uppercase px-6 py-4 rounded-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call to Book
              </a>
            </div>
            
            <div className="text-gray-300">
              <p className="mb-4">Walk-ins are welcome based on availability.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                <div className="flex items-center">
                  <Clock className="text-barber-gold mr-2 h-5 w-5" />
                  <span>Mon-Fri: 9AM - 7PM</span>
                </div>
                <div className="hidden md:block mx-4 text-barber-gold">|</div>
                <div className="flex items-center">
                  <Clock className="text-barber-gold mr-2 h-5 w-5" />
                  <span>Sat: 8AM - 5PM</span>
                </div>
                <div className="hidden md:block mx-4 text-barber-gold">|</div>
                <div className="flex items-center">
                  <Clock className="text-barber-gold mr-2 h-5 w-5" />
                  <span>Sun: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact/Map Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-6">Find Us</h2>
              <p className="text-gray-700 mb-6">
                We're conveniently located in the heart of Portland, with easy access to parking and public transportation.
              </p>
              
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-2">Kingdom Kuts PDX</h3>
                <address className="not-italic text-gray-600">
                  123 Barber Street<br />
                  Portland, OR 97205<br />
                  <a href="tel:+15035555555" className="text-barber-gold hover:underline mt-2 inline-block">
                    (503) 555-5555
                  </a>
                </address>
              </div>
              
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-2">Hours of Operation</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl mb-2">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-barber-black text-white p-3 rounded-sm hover:bg-barber-gold hover:text-black transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-barber-black text-white p-3 rounded-sm hover:bg-barber-gold hover:text-black transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-sm overflow-hidden">
              {/* This is a placeholder for an actual Google Map integration */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-barber-gold mx-auto mb-4" />
                  <p className="text-gray-600">Map integration will be implemented here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Barber Street, Portland, OR 97205</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
