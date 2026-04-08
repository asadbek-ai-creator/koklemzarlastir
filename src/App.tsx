import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TreePine,
  MapPin,
  Users,
  Leaf,
  Menu,
  X,
  Mail,
  Phone,
  MapPinned,
  Sprout,
  ShieldCheck,
  BarChart3,
  ChevronRight,
  TreeDeciduous,
} from 'lucide-react';

/* ─── Mock Data ─── */
interface District {
  id: number;
  name: string;
  planted: number;
  alive: number;
  top: string;
  left: string;
}

const districts = [
  { id: 1, name: 'Нукус', planted: 12400, alive: 11200, top: '67%', left: '54%' },
  { id: 2, name: 'Мойнак', planted: 8300, alive: 6900, top: '39%', left: '48%' },
  { id: 3, name: "Қоңырат", planted: 9500, alive: 8100, top: '54%', left: '45%' },
  { id: 4, name: 'Шымбай', planted: 7200, alive: 6400, top: '58%', left: '57%' },
  { id: 5, name: 'Тахиаташ', planted: 5800, alive: 5100, top: '71%', left: '53%' },
  { id: 6, name: 'Беруни', planted: 6100, alive: 5500, top: '82%', left: '67%' }
];

const team = [
  { name: 'Алишер Юсупов', role: 'Директор', initials: 'АЮ' },
  { name: 'Гулнара Каримова', role: 'Главный агроном', initials: 'ГК' },
  { name: 'Тимур Рахимов', role: 'IT-руководитель', initials: 'ТР' },
];

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О нас', href: '#about' },
  { label: 'Карта', href: '#map' },
  { label: 'Сотрудники', href: '#team' },
];

/* ─── Animation variants ─── */
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/* ─── App ─── */
export default function App() {
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <TreePine className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-primary-900 tracking-tight">
                Yashil Aymaq
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-md hover:shadow-lg hover:from-primary-600 hover:to-primary-700 transition-all"
              >
                Войти
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-primary-500 rounded-full mt-2"
              >
                Войти
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl" />

        {/* Floating decorative leaves */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[15%] text-primary-300 opacity-40"
        >
          <Leaf className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-48 right-[20%] text-primary-400 opacity-30"
        >
          <TreeDeciduous className="w-16 h-16" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100/80 border border-primary-200 rounded-full text-primary-700 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sprout className="w-4 h-4" />
              Платформа цифрового озеленения
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-tight tracking-tight"
          >
            Озеленение
            <br />
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Каракалпакстана
            </span>{' '}
            вместе!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Цифровая платформа для учёта, мониторинга и прозрачного управления
            посадками деревьев в Каракалпакстане. Каждое дерево на счету.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#map"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:from-primary-600 hover:to-primary-700 transition-all"
            >
              Смотреть карту
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-primary-700 bg-white border-2 border-primary-200 rounded-full hover:bg-primary-50 hover:border-primary-300 transition-all"
            >
              Узнать больше
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: '49,300+', label: 'Деревьев посажено' },
              { value: '43,200+', label: 'Деревьев живы' },
              { value: '6', label: 'Районов' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-700">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full uppercase tracking-wider mb-4">
              О нас
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Миссия <span className="text-primary-600">Yashil Aymaq</span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Мы создаём цифровую экосистему для прозрачного и эффективного озеленения
              Каракалпакстана — от посадки до мониторинга каждого дерева.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: 'Цифровой учёт',
                text: 'Каждое посаженное дерево регистрируется в системе с GPS-координатами, фотографиями и датой посадки.',
                color: 'from-primary-400 to-primary-600',
              },
              {
                icon: ShieldCheck,
                title: 'Прозрачность',
                text: 'Открытые данные о количестве посадок, их выживаемости и ответственных лицах для полной подотчётности.',
                color: 'from-emerald-400 to-emerald-600',
              },
              {
                icon: BarChart3,
                title: 'Аналитика',
                text: 'Интерактивные карты и дашборды помогают отслеживать прогресс озеленения по районам и сезонам.',
                color: 'from-teal-400 to-teal-600',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section id="map" className="py-24 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full uppercase tracking-wider mb-4">
              Карта
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Интерактивная карта посадок
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Нажмите на маркер района, чтобы увидеть статистику по посаженным и живым деревьям.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white"
          >
            {/* Map image */}
            <img
              src="./public/karakalpak.jpg"
              alt="Карта Каракалпакстана"
              className="w-full h-auto block"
              draggable={false}
            />

            {/* District pins */}
            {districts.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDistrict(selectedDistrict?.id === d.id ? null : d)}
                style={{ top: d.top, left: d.left }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-200 ${
                  selectedDistrict?.id === d.id ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                }`}
              >
                <div className="relative">
                  <div
                    className={`absolute inset-0 rounded-full blur-md transition-colors ${
                      selectedDistrict?.id === d.id
                        ? 'bg-primary-400/60'
                        : 'bg-primary-400/0 group-hover:bg-primary-400/40'
                    }`}
                    style={{ transform: 'scale(1)' }}
                  />
                  <div
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 transition-colors ${
                      selectedDistrict?.id === d.id
                        ? 'bg-primary-600 border-white'
                        : 'bg-white border-primary-400 group-hover:bg-primary-500 group-hover:border-white'
                    }`}
                  >
                    <MapPin
                      className={`w-3 h-3 transition-colors ${
                        selectedDistrict?.id === d.id
                          ? 'text-white'
                          : 'text-primary-600 group-hover:text-white'
                      }`}
                    />
                  </div>
                  {/* Label */}
                  <span
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold px-2 py-0.5 rounded-md transition-colors ${
                      selectedDistrict?.id === d.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-white/90 text-gray-700 shadow-sm'
                    }`}
                  >
                    {d.name}
                  </span>
                </div>
              </button>
            ))}

            {/* Info Card */}
            {selectedDistrict && (
              <motion.div
                key={selectedDistrict.id}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary-100 p-6 min-w-[280px]"
              >
                <button
                  onClick={() => setSelectedDistrict(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow">
                    <MapPinned className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{selectedDistrict.name}</h4>
                    <p className="text-xs text-gray-400">Статистика района</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-50 rounded-xl p-3 text-center">
                    <TreePine className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                    <p className="text-xl font-bold text-primary-700">
                      {selectedDistrict.planted.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Посажено</p>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-3 text-center">
                    <Leaf className="w-5 h-5 text-emerald-500 mx-auto mb-1" />
                    <p className="text-xl font-bold text-emerald-700">
                      {selectedDistrict.alive.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">Живых</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Выживаемость</span>
                    <span className="font-semibold text-primary-600">
                      {Math.round((selectedDistrict.alive / selectedDistrict.planted) * 100)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${(selectedDistrict.alive / selectedDistrict.planted) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full uppercase tracking-wider mb-4">
              Команда
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Наши сотрудники</h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Профессионалы, которые стоят за каждым посаженным деревом.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group text-center"
              >
                <div className="relative mx-auto w-28 h-28 mb-5">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow border-4 border-white">
                    <span className="text-2xl font-bold text-primary-700">{member.initials}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow border-2 border-white">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-primary-400" />
                </div>
                <span className="text-lg font-bold tracking-tight">Yashil Aymaq</span>
              </div>
              <p className="text-primary-200/70 text-sm leading-relaxed">
                Цифровая платформа озеленения Каракалпакстана. Прозрачность. Учёт. Результат.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4 text-primary-300">Навигация</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-200/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-semibold mb-4 text-primary-300">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-primary-200/70">
                  <MapPinned className="w-4 h-4 text-primary-400 shrink-0" />
                  г. Нукус, ул. Бердаха, 1
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-200/70">
                  <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                  +998 61 222-33-44
                </li>
                <li className="flex items-center gap-2 text-sm text-primary-200/70">
                  <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                  info@yashilaymaq.uz
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-primary-200/50">
            © {new Date().getFullYear()} Yashil Aymaq. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
