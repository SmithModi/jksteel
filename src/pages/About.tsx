import { Users, Target, Award, Clock, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return <div className="min-h-screen pt-20">
    {/* Hero Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-playfair font-bold mb-6 liquid-text-glow">
            Our <span className="liquid-price-glow">Story</span>
          </h1>
          <p className="text-xl liquid-text-glow leading-relaxed">
            For over 15 years, JK Steel has been dedicated to creating premium kitchenware and household items that combine
            exceptional functionality with elegant design. From kitchen essentials to everyday household products, we believe that the right tools can transform
            your daily routines into delightful experiences!
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-2xl">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-4 text-slate-200">Our Mission</h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              To empower home chefs and culinary professionals with innovative, beautifully designed kitchenware
              that enhances their cooking experience and inspires creativity in the kitchen.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-slate-200">Uncompromising quality in every product</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-slate-200">Innovative design that solves real problems</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm text-slate-200">Exceptional customer experience</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-playfair font-bold mb-4 text-slate-200">Our Vision</h2>
            <p className="text-slate-200 leading-relaxed mb-6">
              To become the world's most trusted and beloved kitchenware brand, known for products that bring
              joy to cooking and create lasting memories around the table.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-slate-200">Global presence with local understanding</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-slate-200">Sustainable and eco-friendly practices</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm text-slate-200">Continuous innovation and improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gradient-primary">Values</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-200">
            These core values guide every decision we make and every product we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center glass-card p-8 rounded-2xl">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Excellence</h3>
            <p className="text-slate-200">
              We never compromise on quality. Every product undergoes rigorous testing to ensure it meets
              our highest standards of durability, functionality, and design.
            </p>
          </div>

          <div className="text-center glass-card p-8 rounded-2xl">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Passion</h3>
            <p className="text-slate-200">
              Our love for cooking and design drives everything we do. We're passionate about creating
              products that inspire others to discover the joy of cooking.
            </p>
          </div>

          <div className="text-center glass-card p-8 rounded-2xl">
            <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Community</h3>
            <p className="text-slate-200">
              We believe in building relationships with our customers and supporting the culinary community
              through education, inspiration, and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Company Stats */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gradient-primary">Journey</span> So Far
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-zinc-400">
            Over the years, we've grown from a small startup to a trusted global brand.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-slate-200 mb-2">15+</div>
            <div className="text-sm text-slate-200">Years of Excellence</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-slate-200 mb-2">50K+</div>
            <div className="text-sm text-slate-200">Happy Customers</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-slate-200 mb-2">200+</div>
            <div className="text-sm text-slate-200">Premium Products</div>
          </div>
          <div className="text-center glass-card p-6 rounded-2xl">
            <div className="text-3xl font-bold text-slate-200 mb-2">95%</div>
            <div className="text-sm text-slate-200">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Meet Our <span className="text-gradient-primary">Team</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-slate-200">
            Behind every great product is a passionate team of designers, engineers, and culinary experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            name: "Sarah Mitchell",
            role: "Founder & CEO",
            image: "SM",
            description: "Culinary arts graduate with 20+ years in product design"
          }, {
            name: "David Chen",
            role: "Head of Design",
            image: "DC",
            description: "Award-winning industrial designer passionate about functionality"
          }, {
            name: "Maria Rodriguez",
            role: "Quality Assurance",
            image: "MR",
            description: "Former professional chef ensuring every product meets perfection"
          }].map((member, index) => <div key={index} className="text-center glass-card p-8 rounded-2xl">
            <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-slate-200">{member.image}</span>
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-1">{member.name}</h3>
            <div className="text-sm text-primary mb-3">{member.role}</div>
            <p className="text-sm text-slate-200">{member.description}</p>
          </div>)}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Our <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Key milestones that shaped our journey to becoming a leading kitchenware brand.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {[{
            year: "2009",
            title: "Company Founded",
            description: "Started with a vision to create beautiful, functional kitchenware in a small workshop."
          }, {
            year: "2012",
            title: "First Major Product Line",
            description: "Launched our signature storage collection, gaining recognition for innovative design."
          }, {
            year: "2015",
            title: "International Expansion",
            description: "Expanded to European markets, establishing partnerships with premium retailers."
          }, {
            year: "2018",
            title: "Sustainability Initiative",
            description: "Committed to eco-friendly materials and sustainable manufacturing processes."
          }, {
            year: "2021",
            title: "Digital Transformation",
            description: "Launched our e-commerce platform and direct-to-consumer sales model."
          }, {
            year: "2024",
            title: "Innovation Lab",
            description: "Opened our research facility focused on next-generation kitchen technology."
          }].map((milestone, index) => <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-2xl font-bold text-slate-200">{milestone.year}</span>
                <h3 className="text-xl font-playfair font-semibold">{milestone.title}</h3>
              </div>
              <p className="text-slate-200">{milestone.description}</p>
            </div>
          </div>)}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-2xl text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Join Our Culinary Journey
          </h2>
          <p className="text-xl mb-8 text-slate-200">
            Discover how our premium kitchenware can transform your cooking experience and inspire your culinary creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glass-button" asChild>
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-button" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>;
};
export default About;