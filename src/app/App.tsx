import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Building2, User, MessageSquare, Menu, X } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import placeholderImg from '../imports/image.png';
import adImg from '../imports/廣告投放.png';
import socialImg from '../imports/社群.png';
import brandImg from '../imports/品牌企業識別.png';
import marketingImg from '../imports/口碑行銷.png';
import videoImg from '../imports/短影音.png';
import salesImg from '../imports/銷售頁-1.png';
import shortVideoImg from '../imports/短影音-1.png';
import advantageImg1 from '../imports/四大優勢-整合行銷一把罩.jpg';
import advantageImg2 from '../imports/四大優勢-實戰經驗超豐富.jpg';
import advantageImg3 from '../imports/四大優勢-服務內容客製化.jpg';
import advantageImg4 from '../imports/四大優勢-團隊陣容超堅強.jpg';
import partner1 from '../imports/合作品牌demo01.jpeg';
import partner2 from '../imports/合作品牌demo02.jpeg';
import partner3 from '../imports/合作品牌demo03.jpeg';
import case1 from '../imports/勇者進化之路-768x512.png';
import case2 from '../imports/滷味-768x512.png';
import case3 from '../imports/NFT-768x512.png';
import logoImage from '../imports/logo.png';
import bannerImage from '../imports/1-電腦1600x640-01-300x120.jpg';

const bannerImg = bannerImage;
const logoImg = logoImage;

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['服務項目', '關於我們', '合作品牌', '案例分享', '知識分享', '聯絡我們'];

  const services = [
    { name: '廣告投放', image: adImg, delay: 0.1 },
    { name: '社群經營', image: socialImg, delay: 0.2 },
    { name: '品牌企業識別', image: brandImg, delay: 0.3 },
    { name: '短影音', image: shortVideoImg, delay: 0.4 },
    { name: '口碑行銷', image: marketingImg, delay: 0.5 },
    { name: '銷售頁', image: salesImg, delay: 0.6 },
  ];

  const advantages = [
    {
      image: advantageImg1,
      title: '整合行銷一把罩',
      description: '跨平台整合行銷策略，一站式管理所有社群媒體與數位工具，讓您的品牌無所不在',
      delay: 0.1
    },
    {
      image: advantageImg2,
      title: '實戰經驗超豐富',
      description: '累積多年實戰經驗，服務過各產業客戶，深入了解市場需求，提供最適合的行銷解決方案',
      delay: 0.2
    },
    {
      image: advantageImg3,
      title: '服務內容客製化',
      description: '根據客戶需求量身打造專屬行銷方案，確保每一個項目都能達到最佳效果與投資報酬率',
      delay: 0.3
    },
    {
      image: advantageImg4,
      title: '團隊陣容超堅強',
      description: '由經驗豐富的行銷專家組成，確保每個項目都能順利執行並達成目標',
      delay: 0.4
    }
  ];

  const partners = [
    { image: partner1, name: '合作品牌 1' },
    { image: partner2, name: '合作品牌 2' },
    { image: partner3, name: '合作品牌 3' },
    { image: partner1, name: '合作品牌 4' },
    { image: partner2, name: '合作品牌 5' },
    { image: partner3, name: '合作品牌 6' },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const cases = [
    {
      image: case1,
      title: '勇者進化之路',
      description: '透過創意整合行銷策略，成功打造品牌形象與市場定位',
      delay: 0.1
    },
    {
      image: case2,
      title: '特色滷味',
      description: '運用數位行銷與口碑策略，成功打造在地美食品牌知名度',
      delay: 0.2
    },
    {
      image: case3,
      title: 'NFT 行銷',
      description: '結合社群經營與廣告投放，有效提升產品曝光與銷售轉換',
      delay: 0.3
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f6b111] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#f6b111]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex gap-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={item === '服務項目' ? '#services' : '#'}
                className="text-sm text-gray-300 hover:text-[#f6b111] transition-all duration-300 cursor-pointer"
                onClick={(e) => {
                  if (item === '服務項目') {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-[#f6b111] hover:text-yellow-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-[#f6b111]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={item === '服務項目' ? '#services' : '#'}
                    className="block text-base text-gray-300 hover:text-[#f6b111] transition-all duration-300 cursor-pointer py-2 border-b border-[#f6b111]/10"
                    onClick={(e) => {
                      if (item === '服務項目') {
                        e.preventDefault();
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                      setMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bannerImg}
            alt="Banner"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f6b111]/10 rounded-full blur-[120px]"
            style={{
              transform: `translate(-50%, -50%) translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8 font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span
              className="inline-block text-white"
              style={{
                textShadow: '3px 3px 0px rgba(246, 177, 17, 0.2), 6px 6px 0px rgba(246, 177, 17, 0.1)',
                fontWeight: '900'
              }}
            >
              享受<span
                className="text-[#f6b111]"
                style={{
                  textShadow: '3px 3px 0px rgba(246, 177, 17, 0.3), 6px 6px 0px rgba(246, 177, 17, 0.15)',
                  fontWeight: '900'
                }}
              >創意</span>整合行銷
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            ENJOY INTEGRATED MARKETING
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#f6b111]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#f6b111] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl text-center mb-24 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            服務<span className="text-[#f6b111]">項目</span>
          </motion.h2>

          <div className="space-y-12 md:space-y-20">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={service.name}
                  className={`group relative flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 md:gap-12 lg:gap-16`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: service.delay }}
                >
                  <motion.div
                    className="relative w-full md:w-2/5 lg:w-1/3 aspect-square rounded-3xl overflow-hidden border-2 bg-gradient-to-br from-black via-zinc-900 to-black p-6 md:p-8"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgba(212, 175, 55, 0.8)',
                      boxShadow: '0 0 60px rgba(212, 175, 55, 0.3)'
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-[#f6b111]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <motion.img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)] relative z-10"
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    <div className="absolute top-6 left-6 w-14 h-14 rounded-full border-2 border-[#f6b111]/60 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                      <span className="text-2xl font-serif text-[#f6b111]">
                        0{index + 1}
                      </span>
                    </div>

                    <motion.div
                      className="absolute top-8 right-8 w-3 h-3 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(246,177,17,0.8)]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>

                  <div className="w-full md:w-3/5 lg:w-2/3 space-y-6">
                    <motion.h3
                      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: service.delay + 0.2 }}
                    >
                      {service.name}
                    </motion.h3>

                    <motion.div
                      className="h-1 bg-gradient-to-r from-[#f6b111] via-[#f6b111] to-transparent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: service.delay + 0.4 }}
                    />

                    <motion.p
                      className="text-gray-400 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: service.delay + 0.3 }}
                    >
                      專業的{service.name}服務，為您的品牌創造最大價值，提升市場競爭力與品牌影響力。
                    </motion.p>

                    <motion.div
                      className="flex gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: service.delay + 0.5 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-[#f6b111] rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="relative pt-5 pb-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl text-center mb-24 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            四大<span className="text-[#f6b111]">優勢</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="group relative bg-gradient-to-br from-black via-zinc-900 to-black border-2 rounded-3xl overflow-hidden"
                style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: advantage.delay }}
                whileHover={{
                  borderColor: 'rgba(212, 175, 55, 0.8)',
                  boxShadow: '0 0 60px rgba(212, 175, 55, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-radial from-[#f6b111]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#f6b111]/40 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20">
                  <span className="text-xl font-serif text-[#f6b111]">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row min-h-[350px]">
                  <div className="flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#f6b111]/10 to-[#f6b111]/5">
                    <motion.img
                      src={advantage.image}
                      alt={advantage.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold mb-3 text-white transition-all duration-500"
                      whileHover={{ x: 5 }}
                    >
                      {advantage.title}
                    </motion.h3>

                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-[#f6b111] via-[#f6b111] to-transparent rounded-full mb-4 w-20 group-hover:w-32 transition-all duration-500"
                    />

                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                      {advantage.description}
                    </p>

                    <motion.div
                      className="flex gap-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: advantage.delay + 0.3 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute top-10 right-10 w-2 h-2 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(246,177,17,0.6)] z-30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 h-px bg-gradient-to-r from-transparent via-[#f6b111]/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative pt-5 pb-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            合作<span className="text-[#f6b111]">品牌</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 text-lg mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            與眾多知名品牌攜手合作，共同創造卓越成果
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="partner-slider"
          >
            <Slider {...sliderSettings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-3">
                  <motion.div
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}
                    whileHover={{
                      borderColor: 'rgba(212, 175, 55, 0.6)',
                      boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
                      scale: 1.05
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-radial from-[#f6b111]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(246,177,17,0.8)]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>

          <motion.div
            className="mt-24 h-px bg-gradient-to-r from-transparent via-[#f6b111]/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative pt-5 pb-32 px-6 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl text-center mb-16 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            案例<span className="text-[#f6b111]">分享</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 text-lg mb-20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            精選成功案例，見證我們為客戶創造的卓越成果
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                className="group relative rounded-3xl overflow-hidden border-2 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"
                style={{ borderColor: 'rgba(212, 175, 55, 0.3)' }}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: caseItem.delay }}
                whileHover={{
                  borderColor: 'rgba(212, 175, 55, 0.7)',
                  boxShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
                  scale: 1.03
                }}
              >
                <div className="absolute inset-0 bg-gradient-radial from-[#f6b111]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />

                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-[#f6b111]/60 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                    <span className="text-xl font-serif text-[#f6b111]">
                      0{index + 1}
                    </span>
                  </div>

                  <motion.div
                    className="absolute top-8 right-8 w-2.5 h-2.5 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(246,177,17,0.8)] z-30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>

                <div className="relative p-8 z-20">
                  <motion.h3
                    className="text-2xl font-bold mb-3 text-white transition-all duration-500"
                    whileHover={{ x: 3 }}
                  >
                    {caseItem.title}
                  </motion.h3>

                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-[#f6b111] via-[#f6b111] to-transparent rounded-full mb-4 w-16 group-hover:w-24 transition-all duration-500"
                  />

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {caseItem.description}
                  </p>

                  <motion.div
                    className="flex gap-2 mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: caseItem.delay + 0.3 }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className="group relative px-12 py-4 rounded-full border-2 bg-gradient-to-r from-black via-zinc-900 to-black overflow-hidden"
              style={{ borderColor: 'rgba(246, 177, 17, 0.5)' }}
              whileHover={{
                borderColor: 'rgba(246, 177, 17, 0.9)',
                boxShadow: '0 0 40px rgba(246, 177, 17, 0.4)',
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative z-10 text-lg text-white transition-all duration-300">
                更多案例
              </span>

              <motion.div
                className="absolute top-1/2 left-4 w-1 h-1 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(246,177,17,0.8)]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute top-1/2 right-4 w-1 h-1 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(246,177,17,0.8)]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-24 h-px bg-gradient-to-r from-transparent via-[#f6b111]/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative pt-5 pb-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl md:text-7xl text-center mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            聯繫<span className="text-[#f6b111]">我們</span>
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 text-lg mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            讓我們一起創造卓越成果
          </motion.p>

          <motion.div
            className="relative bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-800 border-2 border-[#f6b111]/50 rounded-3xl p-8 md:p-12 overflow-hidden shadow-[0_0_60px_rgba(246,177,17,0.15)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#f6b111]/10 via-transparent to-transparent opacity-70" />

            <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-base text-gray-300 mb-3 flex items-center gap-2">
                    <User className="w-6 h-6 text-[#f6b111]" />
                    姓名
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="請輸入您的姓名"
                      className="w-full bg-black/50 border-2 border-[#f6b111]/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#f6b111]/60 focus:outline-none focus:ring-2 focus:ring-[#f6b111]/20 transition-all duration-300 group-hover:border-[#f6b111]/40"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f6b111]/0 via-[#f6b111]/5 to-[#f6b111]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <label className="block text-base text-gray-300 mb-3 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-[#f6b111]" />
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="請輸入您的 Email"
                      className="w-full bg-black/50 border-2 border-[#f6b111]/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#f6b111]/60 focus:outline-none focus:ring-2 focus:ring-[#f6b111]/20 transition-all duration-300 group-hover:border-[#f6b111]/40"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f6b111]/0 via-[#f6b111]/5 to-[#f6b111]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-base text-gray-300 mb-3 flex items-center gap-2">
                    <Phone className="w-6 h-6 text-[#f6b111]" />
                    電話號碼
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="請輸入您的電話號碼"
                      className="w-full bg-black/50 border-2 border-[#f6b111]/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#f6b111]/60 focus:outline-none focus:ring-2 focus:ring-[#f6b111]/20 transition-all duration-300 group-hover:border-[#f6b111]/40"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f6b111]/0 via-[#f6b111]/5 to-[#f6b111]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                <motion.div
                  className="group relative"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <label className="block text-base text-gray-300 mb-3 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-[#f6b111]" />
                    公司名稱
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="請輸入您的公司名稱"
                      className="w-full bg-black/50 border-2 border-[#f6b111]/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#f6b111]/60 focus:outline-none focus:ring-2 focus:ring-[#f6b111]/20 transition-all duration-300 group-hover:border-[#f6b111]/40"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f6b111]/0 via-[#f6b111]/5 to-[#f6b111]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="block text-base text-gray-300 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-[#f6b111]" />
                  訊息
                </label>
                <div className="relative">
                  <textarea
                    rows={6}
                    placeholder="請輸入您的訊息內容"
                    className="w-full bg-black/50 border-2 border-[#f6b111]/20 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#f6b111]/60 focus:outline-none focus:ring-2 focus:ring-[#f6b111]/20 transition-all duration-300 resize-none group-hover:border-[#f6b111]/40"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f6b111]/0 via-[#f6b111]/5 to-[#f6b111]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>

              <motion.div
                className="flex justify-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  className="group relative px-16 py-4 rounded-full border-2 bg-gradient-to-r from-black via-zinc-900 to-black overflow-hidden"
                  style={{ borderColor: 'rgba(246, 177, 17, 0.5)' }}
                  whileHover={{
                    borderColor: 'rgba(246, 177, 17, 0.9)',
                    boxShadow: '0 0 40px rgba(246, 177, 17, 0.4)',
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f6b111]/10 via-[#f6b111]/20 to-[#f6b111]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <span className="relative z-10 text-lg text-white transition-all duration-300">
                    送出訊息
                  </span>

                  <motion.div
                    className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(246,177,17,0.8)]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-[#f6b111] rounded-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_rgba(246,177,17,0.8)]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                </motion.button>
              </motion.div>
            </form>

            <motion.div
              className="absolute top-8 right-8 w-2 h-2 bg-[#f6b111] rounded-full shadow-[0_0_15px_rgba(246,177,17,0.8)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            <motion.div
              className="absolute bottom-8 left-8 w-2 h-2 bg-[#f6b111] rounded-full shadow-[0_0_15px_rgba(246,177,17,0.8)]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5,
              }}
            />
          </motion.div>

          <motion.div
            className="mt-20 h-px bg-gradient-to-r from-transparent via-[#f6b111]/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-[#f6b111]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={logoImg}
              alt="Logo"
              className="h-8 w-auto object-contain mx-auto mb-6 opacity-60"
            />
            <p className="text-gray-500 text-sm">
              © 2026 All rights reserved. | 享受創意整合行銷
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
