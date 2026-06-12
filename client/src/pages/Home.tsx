import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Stethoscope, Brain, Hospital, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "ai" | "hospitals" | "hms" | "neetpg";
  date: string;
  author: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How AI is Revolutionizing Clinical Decision Making",
    excerpt: "Discover how Newton's AI clinical decision support system is helping doctors make faster, more accurate diagnoses.",
    category: "ai",
    date: "June 10, 2026",
    author: "Dr. Rajesh Kumar",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-ai-section-XmVU8rokpv5aHHMVGdMstU.webp",
    slug: "ai-clinical-decision",
  },
  {
    id: "2",
    title: "Newton's Hospitals: Setting New Standards in Patient Care",
    excerpt: "Learn about our commitment to providing world-class healthcare facilities with cutting-edge technology and compassionate care.",
    category: "hospitals",
    date: "June 8, 2026",
    author: "Dr. Priya Sharma",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hospitals-section-Qk758qz6S6Q54Tqq9rYNGv.webp",
    slug: "hospitals-patient-care",
  },
  {
    id: "3",
    title: "Streamlining Hospital Operations with Newton's HMS",
    excerpt: "Explore how our Hospital Management System is transforming administrative workflows and improving patient outcomes.",
    category: "hms",
    date: "June 5, 2026",
    author: "Amit Patel",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hms-section-h9XkNEzXsqiY9LH4WADrGD.webp",
    slug: "hms-operations",
  },
  {
    id: "4",
    title: "NEET PG Success Stories: How Newton's Prepares Future Doctors",
    excerpt: "Read inspiring stories of medical students who achieved their NEET PG goals with Newton's comprehensive preparation platform.",
    category: "neetpg",
    date: "June 1, 2026",
    author: "Dr. Neha Gupta",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-neetpg-section-Q9FAa5Exz5xKQ6CZVyMiCZ.webp",
    slug: "neetpg-success",
  },
  {
    id: "5",
    title: "The Future of Medical AI: Newton's Vision",
    excerpt: "Insights into how Newton's AI is shaping the future of healthcare with machine learning and predictive analytics.",
    category: "ai",
    date: "May 28, 2026",
    author: "Dr. Vikram Singh",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-ai-section-XmVU8rokpv5aHHMVGdMstU.webp",
    slug: "medical-ai-future",
  },
  {
    id: "6",
    title: "Building Trust in Healthcare Technology",
    excerpt: "Understanding the importance of transparency and security in healthcare systems and how Newton's prioritizes patient data.",
    category: "hospitals",
    date: "May 25, 2026",
    author: "Dr. Anjali Verma",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hospitals-section-Qk758qz6S6Q54Tqq9rYNGv.webp",
    slug: "healthcare-trust",
  },
];

const categoryConfig = {
  ai: { label: "Newton's AI", icon: Brain, color: "bg-cyan-100 text-cyan-900", accent: "text-cyan-600" },
  hospitals: { label: "Newton's Hospitals", icon: Hospital, color: "bg-green-100 text-green-900", accent: "text-green-600" },
  hms: { label: "Newton's HMS", icon: Stethoscope, color: "bg-blue-100 text-blue-900", accent: "text-blue-600" },
  neetpg: { label: "Newton's NEET PG", icon: BookOpen, color: "bg-purple-100 text-purple-900", accent: "text-purple-600" },
};

function BlogCard({ post }: { post: BlogPost }) {
  const config = categoryConfig[post.category];
  const Icon = config.icon;

  return (
    <Card className="blog-card overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <Badge className={config.color}>
            <Icon className="w-3 h-3 mr-1" />
            {config.label}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <Button variant="outline" className="w-full group">
          Read More
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}

function BrandSection({
  title,
  description,
  image,
  icon: Icon,
  color,
  reverse = false,
}: {
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  reverse?: boolean;
}) {
  return (
    <section className={`py-16 md:py-24 ${reverse ? "bg-muted/30" : ""}`}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}>
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="section-title mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>
            <Button size="lg" className="group">
              Explore More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="scroll-reveal">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(blogPosts.filter((post) => post.category === selectedCategory));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Newton's Group</h1>
              <p className="text-xs text-muted-foreground">Healthcare Innovation</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-sm font-medium transition-colors ${
                selectedCategory === null ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Posts
            </button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`text-sm font-medium transition-colors ${
                  selectedCategory === key ? `${config.accent}` : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {config.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/hero-medical-innovation-88h7vc8uPw6kMyLKEPrtbA.webp"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                Welcome to Newton's Healthcare Innovation Hub
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transforming Healthcare with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Innovation & Care</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Explore insights, stories, and breakthroughs from Newton's AI, Hospitals, HMS, and NEET PG platforms. Discover how we're revolutionizing healthcare delivery and medical education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Read Latest Posts
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <BrandSection
        title="Newton's AI: Clinical Decision Support"
        description="Empowering doctors with intelligent clinical insights. Our AI-driven platform analyzes patient data in real-time, providing evidence-based recommendations that enhance diagnostic accuracy and improve patient outcomes."
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-ai-section-XmVU8rokpv5aHHMVGdMstU.webp"
        icon={Brain}
        color="bg-cyan-100 text-cyan-600"
      />

      <BrandSection
        title="Newton's Hospitals: Excellence in Care"
        description="Delivering world-class healthcare with compassion. Our state-of-the-art facilities combine modern technology with expert medical professionals to ensure every patient receives the best possible care."
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hospitals-section-Qk758qz6S6Q54Tqq9rYNGv.webp"
        icon={Hospital}
        color="bg-green-100 text-green-600"
        reverse
      />

      <BrandSection
        title="Newton's HMS: Hospital Management Reimagined"
        description="Streamlining hospital operations with intelligent systems. Our comprehensive Hospital Management System automates administrative tasks, optimizes resource allocation, and enables data-driven decision making."
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-hms-section-h9XkNEzXsqiY9LH4WADrGD.webp"
        icon={Stethoscope}
        color="bg-blue-100 text-blue-600"
      />

      <BrandSection
        title="Newton's NEET PG: Your Path to Success"
        description="Comprehensive preparation for India's most competitive medical entrance exam. Access expert-curated content, practice tests, and personalized learning paths designed to help you achieve your NEET PG goals."
        image="https://d2xsxph8kpxj0f.cloudfront.net/310519663755679698/77CpPznb5f3jsqbG3jkpJo/newtons-neetpg-section-Q9FAa5Exz5xKQ6CZVyMiCZ.webp"
        icon={BookOpen}
        color="bg-purple-100 text-purple-600"
        reverse
      />

      {/* Blog Grid */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Latest Articles & Insights</h2>
            <p className="section-subtitle">
              {selectedCategory ? `Showing posts from ${categoryConfig[selectedCategory as keyof typeof categoryConfig].label}` : "Explore all our latest content"}
            </p>
          </div>

          {/* Category Filter - Mobile */}
          <div className="md:hidden mb-8 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {Object.entries(categoryConfig).map(([key, config]) => (
              <Button
                key={key}
                size="sm"
                variant={selectedCategory === key ? "default" : "outline"}
                onClick={() => setSelectedCategory(key)}
              >
                {config.label.split("'s ")[1]}
              </Button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div key={post.id} className="scroll-reveal" style={{ animationDelay: `${index * 50}ms` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Healthcare?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of healthcare professionals and medical students who are already part of Newton's ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Newton's Group</h3>
              <p className="text-sm text-muted-foreground">Transforming healthcare through innovation, technology, and compassionate care.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Newton's AI</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newton's Hospitals</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newton's HMS</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Newton's NEET PG</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2026 Newton's Group. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
