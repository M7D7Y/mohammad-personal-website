import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, BookOpen, Users, Star, Github, Linkedin, Globe, Code, Database, Smartphone, Server, UserCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال الرسالة!",
      description: "شكراً لك على رسالتك. سأتواصل معك قريباً.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const services = [
    {
      title: "تطوير الواجهات الأمامية",
      description: "مواقع ويب حديثة ومتجاوبة باستخدام React و TypeScript وأحدث تقنيات الويب.",
      icon: BookOpen
    },
    {
      title: "تطبيقات الويب المتكاملة",
      description: "تطبيقات ويب كاملة مع تكامل الخادم وقواعد البيانات ونظام المصادقة.",
      icon: Users
    },
    {
      title: "تحسين المواقع",
      description: "تحسين الأداء وتحسين محركات البحث والاستجابة للأجهزة المحمولة.",
      icon: Star
    }
  ];

  const projects = [
    {
      title: "منصة الحاسوب المجدد",
      description: "متجر إلكتروني شامل لبيع الحاسوب والأجهزة المجددة مع واجهة سهلة الاستخدام وتصميم متجاوب",
      tech: ["React", "Node.js", "E-commerce", "Responsive Design"],
      images: [
        "/lovable-uploads/24926cba-bb6b-4cb0-9c94-11b53947df65.png",
        "/lovable-uploads/99ace392-fbb7-4958-a9af-53fb42b5c419.png",
        "/lovable-uploads/4dc8780a-2434-444d-b152-d86a00dbce7a.png",
        "/lovable-uploads/c838c36e-a08a-439f-9182-0b6337e63325.png"
      ]
    },
    {
      title: "تطبيق إدارة المهام",
      description: "أداة إدارة المشاريع التعاونية مع التحديثات الفورية",
      tech: ["TypeScript", "Express", "PostgreSQL", "Socket.io"],
      images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"]
    },
    {
      title: "موقع المعرض الشخصي",
      description: "موقع معرض متجاوب مع الرسوم المتحركة السلسة والتصميم الحديث",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"]
    }
  ];

  const testimonials = [
    {
      name: "سارة أحمد",
      role: "صاحبة عمل",
      content: "محمد قدم موقعاً استثنائياً فاق توقعاتنا. اهتمامه بالتفاصيل وخبرته التقنية متميزة.",
      rating: 5
    },
    {
      name: "داود تشين",
      role: "مؤسس شركة ناشئة",
      content: "العمل مع محمد كان تجربة رائعة. فهم رؤيتنا وأنشأ منصة تخدم مستخدمينا بشكل مثالي.",
      rating: 5
    },
    {
      name: "ليزا رودريجيز",
      role: "مديرة التسويق",
      content: "الموقع الذي بناه محمد لنا حسن حضورنا الإلكتروني بشكل كبير. عمل احترافي مسلم في الوقت المحدد.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">محمد</h1>
            <div className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">عني</a>
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">الخدمات</a>
              <a href="#work" className="text-slate-300 hover:text-blue-400 transition-colors">أعمالي</a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">اتصل بي</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-4 animate-fade-in">
              {/* Replace with your real photo if available */}
              <img src="/my-photo.jpg" alt="محمد عبدالعزيز" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              محمد عبدالعزيز – مطور ويب محترف
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              أصنع مواقع وتطبيقات ويب عصرية، سريعة، متجاوبة، وتجذب العملاء.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 shadow-lg">
                <a href="#work">شاهد أعمالي</a>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <a href="#contact">تواصل معي</a>
              </Button>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" aria-label="Website" className="hover:text-blue-400 transition-colors">
                <Globe className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/70 animate-fade-in-up">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">مهاراتي</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              أستخدم أحدث تقنيات الويب وأهتم بالكود النظيف وتجربة المستخدم.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Code className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">JavaScript / TypeScript</div>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">React / Next.js</div>
            </div>
            <div className="flex flex-col items-center">
              <Server className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">Node.js / Express</div>
            </div>
            <div className="flex flex-col items-center">
              <Database className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">SQL / MongoDB</div>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">Responsive Design</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">UI/UX & Animations</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">Teamwork & Communication</div>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-blue-400 mb-3" />
              <div className="text-white font-semibold">Client Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">عني</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              مع أكثر من 5 سنوات من الخبرة في تطوير الويب، أتخصص في إنشاء 
              تطبيقات حديثة وقابلة للتطوير باستخدام أحدث التقنيات. أنا شغوف 
              بالكود النظيف وتجربة المستخدم ومواكبة أحدث اتجاهات الصناعة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+50</div>
                <div className="text-slate-300">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+5</div>
                <div className="text-slate-300">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+30</div>
                <div className="text-slate-300">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-slate-300">دعم</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">الخدمات</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              أقدم خدمات تطوير ويب شاملة لمساعدتك على تحقيق أفكارك
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">أعمال مميزة</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              هنا بعض من مشاريعي الحديثة التي تعرض مهاراتي وخبرتي
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  {project.images && project.images.length > 1 ? (
                    <div className="grid grid-cols-2 h-full gap-1">
                      {project.images.slice(0, 4).map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image} 
                          alt={`${project.title} - صورة ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <img 
                      src={project.images?.[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-600/20 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">آراء العملاء</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              ما يقوله عملائي عن العمل معي
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-slate-300 italic text-lg">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">تواصل معي</h2>
              <p className="text-xl text-slate-300">
                مستعد لبدء مشروعك القادم؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أهدافك.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">لنتحدث</h3>
                <p className="text-slate-300 mb-8">
                  أنا دائماً مهتم بالفرص الجديدة والمشاريع المثيرة. 
                  سواء كنت تحتاج موقعاً بسيطاً أو تطبيق ويب معقد، 
                  أنا هنا لمساعدتك في تحقيق رؤيتك.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-slate-300">
                    <Mail className="w-5 h-5 ml-3 text-blue-400" />
                    <span>mohamed@webdev.com</span>
                  </div>
                </div>
              </div>
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">أرسل لي رسالة</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="اسمك"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="بريدك الإلكتروني"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                    <Textarea
                      placeholder="رسالتك"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-32"
                      required
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      إرسال الرسالة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <div className="flex gap-4 mb-2">
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mohamed@webdev.com" aria-label="Email" className="hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-slate-400">
            © 2024 محمد - مطور ويب. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
