import { motion } from 'motion/react';
import { 
  Wrench, 
  Zap, 
  MonitorCheck, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Settings
} from 'lucide-react';

const WHATSAPP_NUMBER = "5519997589468";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20meu%20carro.`;

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-8 h-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900 leading-tight">
              Mecânica<br/><span className="text-orange-500">Fortunato</span>
            </span>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Agora
          </a>
        </div>
      </header>

      <main className="pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=75" 
              alt="Oficina Mecânica Moderna" 
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-3/5 max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Tradição e Confiança no Cambuí</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Cansado de mecânicos que não explicam o <span className="text-orange-500">problema do seu carro?</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                Diagnóstico preciso, transparência total e serviço rápido em Campinas. Nós mostramos a peça, explicamos o defeito e só executamos com a sua aprovação.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar direto com o mecânico
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. PROBLEMA + SOLUÇÃO */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">A oficina mecânica não precisa ser uma dor de cabeça.</h2>
              <p className="text-lg text-slate-600">Entendemos suas maiores inseguranças e trabalhamos todos os dias para eliminar cada uma delas.</p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {[
                {
                  pain: "Medo de ser enganado?",
                  solution: "Aqui você acompanha tudo. Explicamos o defeito de forma simples, mostrando os porquês.",
                  icon: <AlertTriangle className="w-8 h-8 text-orange-500" />
                },
                {
                  pain: "Orçamentos surpresa?",
                  solution: "Transparência total. Nenhum serviço é iniciado sem sua aprovação prévia do valor exato.",
                  icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
                },
                {
                  pain: "Diagnóstico errado?",
                  solution: "Usamos scanners automotivos de última geração, garantindo precisão milimétrica.",
                  icon: <MonitorCheck className="w-8 h-8 text-green-500" />
                }
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.pain}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.solution}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. SERVIÇOS PRINCIPAIS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <motion.div className="max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Serviços Especializados</h2>
                <p className="text-lg text-slate-600">Tudo que o seu carro precisa em um só lugar, com o padrão Fortunato de qualidade.</p>
              </motion.div>
              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition-colors"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              >
                Agendar diagnóstico 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: <Wrench />, title: "Mecânica Geral", desc: "Motor, suspensão, freios, correias e embreagem com peças de alta qualidade." },
                { icon: <Zap />, title: "Elétrica Automotiva", desc: "Baterias, alternadores, motores de partida, chicotes e iluminação completa." },
                { icon: <MonitorCheck />, title: "Diagnóstico Avançado", desc: "Leitura de módulos de injeção e eletrônica embarcada com scanner atualizado." },
                { icon: <Clock />, title: "Revisão Preventiva", desc: "Check-up completo para viagens e manutenção de rotina para sua segurança." }
              ].map((srv, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-900 hover:text-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{srv.title}</h3>
                  <p className="text-slate-600 group-hover:text-slate-300">{srv.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. DIFERENCIAIS (AUTORIDADE) */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                className="lg:w-1/2 relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=75" 
                    alt="Mecânico analisando motor" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl -z-0 blur-xl"></div>
              </motion.div>

              <motion.div 
                className="lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">Por que confiar o seu carro à Fortunato?</motion.h2>
                
                <div className="space-y-6">
                  {[
                    "Equipamentos de última geração para diagnósticos precisos.",
                    "Atendimento olho no olho: a gente mostra o defeito antes de mexer.",
                    "Rapidez e agilidade no diagnóstico e execução.",
                    "Profissionais altamente qualificados e atualizados."
                  ].map((item, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="flex gap-4 items-start">
                      <div className="mt-1 bg-blue-800/50 p-1.5 rounded-full text-blue-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <p className="text-lg text-slate-300 leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={fadeInUp} className="mt-10">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Tirar dúvida com o mecânico
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. PROVA SOCIAL */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Quem conhece, recomenda.</h2>
              <p className="text-lg text-slate-600">A satisfação dos nossos clientes é a nossa maior garantia.</p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { name: "Carlos Henrique", location: "Cambuí", text: "Levei em 3 lugares e ninguém achava o defeito. Na Fortunato resolveram em 1 dia. Transparência nota 10!" },
                { name: "Mariana Silva", location: "Nova Campinas", text: "Primeira vez que uma oficina me explica exatamente o que estão cobrando. Achei meu mecânico de confiança." },
                { name: "Roberto Almeida", location: "Centro", text: "Rápidos, justos e profissionais. O carro saiu perfeito e não empurraram serviços desnecessários." }
              ].map((review, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
                  <div className="flex text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 italic flex-grow mb-6 leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500">{review.location}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. LOCALIZAÇÃO & CONTATO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-slate-900 mb-6">Fácil acesso no coração de Campinas</motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8">Venha tomar um café com a gente enquanto avaliamos seu veículo. Estrutura completa para te receber bem.</motion.p>
                
                <div className="space-y-6 mb-10">
                  <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                    <div className="mt-1 bg-slate-100 p-3 rounded-full text-blue-700">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Endereço</h4>
                      <p className="text-slate-600 mt-1">Av. Anchieta, 784 - Cambuí<br/>Campinas/SP</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                    <div className="mt-1 bg-slate-100 p-3 rounded-full text-blue-700">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Horário de Funcionamento</h4>
                      <p className="text-slate-600 mt-1">Segunda a Sexta: 08:00 às 18:00<br/>Sábado: 08:00 às 12:00</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                className="h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.297787498305!2d-47.0568853A!3d-22.8988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzU1LjciUyA0N8KwMDMnMjQuOCJX!5e0!3m2!1spt-BR!2sbr!4v1" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Mecânica Fortunato"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. CTA FINAL (FORTE) */}
        <section className="py-24 bg-blue-900 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=75')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Evite problemas maiores.<br/>
              <span className="text-orange-500">Faça seu diagnóstico hoje.</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-200 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Fale agora no WhatsApp. Respondemos em poucos minutos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-green text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-green-500 transition-transform transform hover:scale-105 shadow-2xl shadow-green-500/40"
              >
                <MessageCircle className="w-7 h-7" />
                Agendar via WhatsApp
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Settings className="w-6 h-6 text-slate-300" />
                <span className="text-xl font-bold text-white">
                  Mecânica <span className="text-orange-500">Fortunato</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">Oficina especializada em mecânica geral e elétrica automotiva em Campinas. Transparência, precisão e confiança para o seu veículo.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contato Rápidos</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={WHATSAPP_LINK} className="flex items-center gap-2 hover:text-brand-green transition-colors">
                    <Phone className="w-4 h-4" /> (19) 99758-9468
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Av. Anchieta, 784 - Cambuí, Campinas/SP
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Horário</h4>
              <ul className="space-y-4 text-sm">
                <li>Seg - Sex: 08:00 às 18:00</li>
                <li>Sábado: 08:00 às 12:00</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Mecânica Fortunato. Todos os direitos reservados.</p>
            <p>Desenvolvido por <a href="https://adnove.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">AdNove Marketing</a></p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-[bounce_3s_infinite]"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
