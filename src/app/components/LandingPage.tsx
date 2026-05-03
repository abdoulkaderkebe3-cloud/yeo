import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { GraduationCap, Smartphone, Wallet, Globe, Gift, FileText, CreditCard, Bell, HelpCircle, ChevronDown, ChevronLeft, ChevronRight, Eye, EyeOff, ArrowRight, Tag, Zap, Video, ShoppingBag, User } from 'lucide-react';

interface LandingPageProps {
  onNavigateToAuth: () => void;
}

const navItems = ['Recharge', 'Forfaits Pass', "Transfert d'Argent", 'Paiement Marchand', 'Ma Ligne', 'Services'];

const heroSlides = [
  {
    bg: 'bg-black',
    badge: '20 juillet • 13h',
    location: 'Cocody, 20 juillet',
    cta: 'Acheter un billet',
    price: '15 000 F',
    priceLabel: 'TICKET + KIT',
    imgSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=400&fit=crop',
    title: 'Vacances GiGATÉES',
    subtitle: 'HAPPY RUN GREEN Electrik',
  },
  {
    bg: 'bg-orange-600',
    badge: 'Offre spéciale',
    location: 'Partout en CI',
    cta: 'En profiter',
    price: '0 F',
    priceLabel: 'TRANSFERTS GRATUITS',
    imgSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=400&fit=crop',
    title: 'Transferts Gratuits',
    subtitle: "Jusqu'au 31 mai 2026",
  },
  {
    bg: 'bg-gray-900',
    badge: 'Nouveau',
    location: 'Toutes universités',
    cta: 'Découvrir',
    price: '1500 F',
    priceLabel: 'FORFAIT CAMPUS',
    imgSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=400&fit=crop',
    title: 'Orange Student',
    subtitle: 'Le portail des étudiants',
  },
];

const mainServices = [
  { icon: '📱', label: 'Recharge Mobile', sub: '' },
  { icon: '📶', label: 'Achat de Forfait', sub: '' },
  { icon: '↗️', label: "Transfert d'Argent", sub: '(Orange Money)' },
  { icon: '🛒', label: 'Payer un Marchand', sub: '' },
];

const secondaryServices = [
  { icon: '↗️', label: "Transfert d'Argent", sub: '(Orange Money)' },
  { icon: '🛒', label: 'Payer un Marchand', sub: '' },
];

const promos = [
  { icon: <Tag className="w-6 h-6 text-orange-500" />, label: 'Promos', sub: '(eSim offertes)' },
  { icon: <span className="text-xl font-black text-gray-800">Zen</span>, label: 'Zen', sub: '(Forfait Bien-être)' },
  { icon: <span className="text-xs font-black text-red-600 border border-red-600 px-1 rounded">LIVE</span>, label: 'Live', sub: '(Événements)' },
  { icon: <ShoppingBag className="w-6 h-6 text-gray-700" />, label: 'Marketplace', sub: '' },
];

export function LandingPage({ onNavigateToAuth }: LandingPageProps) {
  const [activeNav, setActiveNav] = useState(0);
  const [slide, setSlide] = useState(0);
  const [balanceVisible, setBalanceVisible] = useState(true);

  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length);
  const current = heroSlides[slide];

  return (
    <div className="min-h-screen bg-[#f5f5f5]" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-11 h-11 bg-orange-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm leading-tight text-center">Max<br/>It</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
            <input
              type="text"
              placeholder="Rechercher un service, produit ou ticket..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all"
            />
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-4 ml-auto flex-shrink-0">
            <button className="relative p-1">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-white"></span>
            </button>
            <button className="p-1">
              <HelpCircle className="w-6 h-6 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1.5 rounded-xl transition-colors">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-sm font-semibold text-gray-700">John Doe</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </header>

      {/* ── NAV BAR ── */}
      <nav className="bg-white border-b border-gray-200 px-6">
        <div className="max-w-7xl mx-auto flex gap-0 overflow-x-auto">
          {navItems.map((item, i) => (
            <button
              key={item}
              onClick={() => setActiveNav(i)}
              className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeNav === i
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">

        {/* ── HERO SLIDER ── */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl h-56 md:h-72">
          <ImageWithFallback
            src={current.imgSrc}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Left content */}
          <div className="absolute inset-0 flex items-center px-10 justify-between">
            <div className="text-white max-w-xs">
              <div className="text-3xl font-black leading-tight drop-shadow-lg">{current.title}</div>
              <div className="text-sm text-orange-300 mt-1">{current.subtitle}</div>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-end gap-2">
              <div className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">{current.badge}</div>
              <div className="text-white text-right text-sm font-semibold">{current.location}</div>
              <div className="bg-white rounded-xl px-5 py-3 text-center shadow-lg min-w-40">
                <div className="text-xs text-gray-500 font-semibold">{current.priceLabel}</div>
                <div className="text-2xl font-black text-orange-500">{current.price}</div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors shadow-lg w-full">{current.cta}</button>
            </div>
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className={`rounded-full transition-all ${i === slide ? 'w-5 h-2 bg-orange-500' : 'w-2 h-2 bg-white/60'}`} />
            ))}
          </div>
        </div>

        {/* ── MAIN SERVICES + COMPTE + ORANGE STUDENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Left: service cards */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
            {mainServices.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-start gap-3 hover:shadow-lg transition-all cursor-pointer border border-gray-100 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shadow-md group-hover:bg-orange-500 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm leading-tight">{s.label}</div>
                  {s.sub && <div className="text-xs text-gray-500">{s.sub}</div>}
                </div>
                <div className="mt-auto w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover:bg-orange-600 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Orange Student */}
          <div
            onClick={onNavigateToAuth}
            className="relative bg-orange-500 rounded-2xl p-5 text-white cursor-pointer hover:bg-orange-600 transition-all hover:shadow-2xl hover:shadow-orange-200 group flex flex-col justify-between"
          >
            <div className="absolute top-3 right-3 bg-white text-orange-600 text-[10px] font-black px-2.5 py-1 rounded-full">NOUVEAU</div>
            <div>
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-xl font-black mb-1">Orange Student</div>
              <div className="text-orange-100 text-sm">Offres exclusives pour les étudiants</div>
            </div>
            <div className="mt-6 w-9 h-9 bg-white/20 group-hover:bg-white rounded-full flex items-center justify-center transition-colors">
              <ArrowRight className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </div>

        {/* ── SECONDARY SERVICES + COMPTE PRINCIPAL ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Secondary service cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-3">
            {secondaryServices.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 flex flex-col items-start gap-3 hover:shadow-lg transition-all cursor-pointer border border-gray-100 group">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-xl shadow-md group-hover:bg-orange-500 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm leading-tight">{s.label}</div>
                  {s.sub && <div className="text-xs text-gray-500">{s.sub}</div>}
                </div>
                <div className="mt-auto w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}

            {/* Compte Principal */}
            <div className="col-span-2 bg-gray-900 rounded-2xl p-5 text-white">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-black">↗</span>
                </div>
                <span className="font-bold text-sm">Compte Principal</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Solde principal</div>
                  <div className="text-orange-400 text-2xl font-black">
                    {balanceVisible ? '125 000 F CFA' : '••••••••'}
                  </div>
                </div>
                <button onClick={() => setBalanceVisible(!balanceVisible)} className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  {balanceVisible ? <Eye className="w-4 h-4 text-orange-400" /> : <EyeOff className="w-4 h-4 text-orange-400" />}
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-gray-500 text-xs tracking-widest">••••••••</div>
                <button className="text-gray-500 hover:text-white transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Orange Money upsell */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-sm font-bold text-gray-800 mb-1">Déjà client Orange ?</div>
              <div className="text-xs text-gray-600 mb-1">Profitez encore plus avec <span className="text-orange-500 font-bold">Orange Money.</span></div>
            </div>
            <div className="my-3 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&h=180&fit=crop"
                alt="Orange Money App"
                className="w-full h-28 object-cover rounded-xl"
              />
            </div>
            <button className="w-full bg-gray-900 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>

        {/* ── SERVICES ET PROMOS ── */}
        <div>
          <h2 className="text-xl font-black text-gray-900 mb-4">Services et Promos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {promos.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 hover:shadow-lg transition-all cursor-pointer border border-gray-100 group">
                <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{p.label}</div>
                  {p.sub && <div className="text-xs text-gray-500 truncate">{p.sub}</div>}
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-xs">
          &copy; 2026 Orange Money — Max It. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
