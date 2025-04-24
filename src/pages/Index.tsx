
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
      title:"Haircut and Beard",
      price:"$40 & up",
      description:"If you prefer Dry Shave instead of Beard, please inform the barber"
    },
    {
      title:"Haircut",
      price:"$35 & up",
      description:""
    },
    {
      title:"Hot Towel Shave",
      price:"$40 & up",
      description:""
    },
    {
      title:"Kids Cut (2yrs - 13yrs)",
      price:"$30 & up",
      description:""
    },
    {
      title:"Line Up, Taper",
      price:"$30 & up",
      description:""
    },
    {
      title:"Line Up",
      price:"$25 & up",
      description:""
    },
    {
      title:"Beard Trim",
      price:"$20 & up",
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
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen bg-barber-black relative flex items-center"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url('images/9a6719bedb5e4f47fbd909f2e2117222.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "left",
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
                description={card.description}
                price={card.price}
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
          </div>
            <div className="relative">
              <img 
                src="images/2ed56624fb03380d238b913baa08ae4c.jpg" 
                alt="Barber Shop Experience" 
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
              imgSrc="images/c9fba1_1e67a4a260664e6f9314235835070eb2~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_7a4f7ce9e9d9487d9f6dbda1480c40cd~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_90fb7db1769242ea92e9d999cdd76231~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_2781b6ebda6748848141948d92fcacfc~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_b1880f7f50744dbebd435ac9905f51e3~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_c6b1625818a44526bcefbd6068276a36~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_dd0a8bf00ad84aab89a5a6450a3ff72c~mv2 copy.jpg" 
              title=""
              subtitle="" 
            />
            <GalleryItem 
              imgSrc="images/c9fba1_fdbade8f56cc4ff4849a99ce7c642ed2~mv2 copy.jpg" 
              title=""
              subtitle="" 
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
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8">
              <a 
                href="tel:+15032550085 " 
                className="border-2 border-white text-white flex items-center justify-center font-heading uppercase px-6 py-4 rounded-sm hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call to Book
              </a>
            </div>
            
            {/* <div className="text-gray-300">
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
            </div> */}
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
                 7529 NE Glisan St <br/>
                  Portland, OR 97213<br />
                  <a href="tel:+15032550085" className="text-barber-gold hover:underline mt-2 inline-block">
                    503-255-0085 
                  </a>
                </address>
              </div>
              
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl mb-2">Hours of Operation</h3>
                <ul className="space-y-1 text-gray-600">
                  <li className="flex justify-between">
                    <span>Tuesday - Thursday</span>
                    <span>11:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Friday & Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monday</span>
                    <span>Appointments Only</span>
                  </li>
                </ul>
              </div>

            </div>
            
            {/* <div className="h-96 bg-gray-200 rounded-sm overflow-hidden"> */}
              {/* This is a placeholder for an actual Google Map integration */}
              {/* <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-barber-gold mx-auto mb-4" />
                  <p className="text-gray-600">Map integration will be implemented here</p>
                  <p className="text-sm text-gray-500 mt-2">123 Barber Street, Portland, OR 97205</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
