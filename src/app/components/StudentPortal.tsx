import { useState } from 'react';
import { ArrowLeft, Smartphone, Book, ShoppingBag, Bell, BookOpen, GraduationCap, Briefcase, Award, Calendar, MapPin, ChevronRight, Search, Download, ExternalLink } from 'lucide-react';

interface StudentPortalProps {
  onBack: () => void;
}

type ModuleType = 'campusData' | 'biblio' | 'campusLife' | 'info' | null;

export function StudentPortal({ onBack }: StudentPortalProps) {
  const [activeModule, setActiveModule] = useState<ModuleType>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <button onClick={onBack} className="hover:bg-orange-400 p-2 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-3xl font-bold">Orange Étudiant</h1>
              <p className="text-orange-100">Portail Universitaire</p>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveModule('campusData')}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeModule === 'campusData' ? 'bg-white text-orange-600' : 'bg-orange-400 text-white hover:bg-orange-300'
              }`}
            >
              📱 Campus Data
            </button>
            <button
              onClick={() => setActiveModule('biblio')}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeModule === 'biblio' ? 'bg-white text-orange-600' : 'bg-orange-400 text-white hover:bg-orange-300'
              }`}
            >
              📚 BiblioCampus
            </button>
            <button
              onClick={() => setActiveModule('campusLife')}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeModule === 'campusLife' ? 'bg-white text-orange-600' : 'bg-orange-400 text-white hover:bg-orange-300'
              }`}
            >
              🏪 Campus Life
            </button>
            <button
              onClick={() => setActiveModule('info')}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeModule === 'info' ? 'bg-white text-orange-600' : 'bg-orange-400 text-white hover:bg-orange-300'
              }`}
            >
              📢 Information
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {!activeModule && <DashboardOverview setActiveModule={setActiveModule} />}
        {activeModule === 'campusData' && <CampusDataModule />}
        {activeModule === 'biblio' && <BiblioModule />}
        {activeModule === 'campusLife' && <CampusLifeModule />}
        {activeModule === 'info' && <InfoModule />}
      </main>
    </div>
  );
}

function DashboardOverview({ setActiveModule }: { setActiveModule: (module: ModuleType) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div onClick={() => setActiveModule('campusData')} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-orange-500">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
            <Smartphone className="w-8 h-8 text-orange-600" />
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Campus Data</h2>
        <p className="text-gray-600 mb-4">Forfaits internet adaptés aux étudiants avec data illimitée nocturne et tontine</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">10 Go - 1500 FCFA</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Bonus nuit 500 FCFA</span>
        </div>
      </div>

      <div onClick={() => setActiveModule('biblio')} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-blue-500">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
            <Book className="w-8 h-8 text-blue-600" />
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">BiblioCampus</h2>
        <p className="text-gray-600 mb-4">Bibliothèque numérique avec résumés de cours, annales et livres numériques</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Abonnement mensuel</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Accès illimité</span>
        </div>
      </div>

      <div onClick={() => setActiveModule('campusLife')} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-green-500">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
            <ShoppingBag className="w-8 h-8 text-green-600" />
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Campus Life</h2>
        <p className="text-gray-600 mb-4">Restaurants partenaires avec paiement Orange Money et réduction de 1%</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Repas à 1000 FCFA</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">Cashback 1%</span>
        </div>
      </div>

      <div onClick={() => setActiveModule('info')} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-purple-500">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
            <Bell className="w-8 h-8 text-purple-600" />
          </div>
          <ChevronRight className="w-6 h-6 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Information</h2>
        <p className="text-gray-600 mb-4">Stages, bourses, formations et annonces administratives</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Stages</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Bourses</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Bootcamps</span>
        </div>
      </div>
    </div>
  );
}

function CampusDataModule() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Forfaits Campus Data</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div
            onClick={() => setSelectedPlan('standard')}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
              selectedPlan === 'standard' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'
            }`}
          >
            <div className="text-sm text-orange-600 font-semibold mb-2">FORFAIT ÉTUDIANT</div>
            <div className="text-4xl font-bold mb-2">1500 <span className="text-xl">FCFA</span></div>
            <div className="text-gray-700 font-medium mb-4">10 Go / 2 semaines</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Internet haute vitesse</li>
              <li>✓ Valable 14 jours</li>
              <li>✓ Rechargement automatique</li>
            </ul>
            <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
              Souscrire
            </button>
          </div>

          <div
            onClick={() => setSelectedPlan('night')}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
              selectedPlan === 'night' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="text-sm text-blue-600 font-semibold mb-2">BONUS ÉTUDIANT</div>
            <div className="text-4xl font-bold mb-2">500 <span className="text-xl">FCFA</span></div>
            <div className="text-gray-700 font-medium mb-4">Data illimitée nocturne</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Illimité de 18h à 8h</li>
              <li>✓ Parfait pour téléchargements</li>
              <li>✓ Valable 7 jours</li>
            </ul>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Souscrire
            </button>
          </div>

          <div
            onClick={() => setSelectedPlan('tontine')}
            className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
              selectedPlan === 'tontine' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
            }`}
          >
            <div className="text-sm text-green-600 font-semibold mb-2">DATA TONTINE</div>
            <div className="text-4xl font-bold mb-2">15000 <span className="text-xl">FCFA</span></div>
            <div className="text-gray-700 font-medium mb-4">Connexion illimitée / 5 étudiants</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ 5 étudiants cotisent 3000 FCFA chacun</li>
              <li>✓ Connexion partagée illimitée</li>
              <li>✓ Valable 1 mois</li>
            </ul>
            <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition-colors">
              Créer un groupe
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Comment créer une Data Tontine ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold mb-2">1</div>
              <p className="text-sm">Créez un groupe de 5 étudiants</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold mb-2">2</div>
              <p className="text-sm">Chacun cotise 3000 FCFA</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold mb-2">3</div>
              <p className="text-sm">Activez la connexion partagée</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="w-8 h-8 bg-white text-orange-600 rounded-full flex items-center justify-center font-bold mb-2">4</div>
              <p className="text-sm">Profitez de l'illimité pendant 1 mois</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BiblioModule() {
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    { title: 'Mathématiques L1 - Algèbre Linéaire', category: 'Mathématiques', type: 'Livre numérique', pages: 342 },
    { title: 'Physique Générale - Mécanique', category: 'Physique', type: 'Résumé de cours', pages: 87 },
    { title: 'Annales Informatique 2020-2025', category: 'Informatique', type: 'Annales', pages: 156 },
    { title: 'Introduction à la Programmation Python', category: 'Informatique', type: 'Livre numérique', pages: 289 },
    { title: 'Économie - Microéconomie', category: 'Économie', type: 'Résumé de cours', pages: 94 },
    { title: 'Chimie Organique - Niveau L2', category: 'Chimie', type: 'Livre numérique', pages: 412 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">BiblioCampus</h2>
            <p className="text-gray-600">Bibliothèque numérique accessible par abonnement mensuel</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">2500 FCFA</div>
            <div className="text-sm text-gray-600">par mois</div>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un livre, résumé ou annales..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {books.map((book, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{book.type}</span>
              </div>
              <h3 className="font-semibold mb-2 line-clamp-2">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{book.category} • {book.pages} pages</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                  <Download className="w-4 h-4" />
                  Télécharger
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">Pourquoi s'abonner à BiblioCampus ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <div className="font-medium mb-1">Accès illimité</div>
                <div className="text-sm text-gray-600">Plus de 5000 livres et ressources</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <div className="font-medium mb-1">Téléchargement hors ligne</div>
                <div className="text-sm text-gray-600">Lisez sans connexion internet</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">✓</div>
              <div>
                <div className="font-medium mb-1">Mise à jour mensuelle</div>
                <div className="text-sm text-gray-600">Nouveaux contenus chaque mois</div>
              </div>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            S'abonner maintenant - 2500 FCFA/mois
          </button>
        </div>
      </div>
    </div>
  );
}

function CampusLifeModule() {
  const restaurants = [
    { name: 'Restaurant Universitaire Central', location: 'Campus Nord', distance: '200m', price: 1000, rating: 4.5 },
    { name: 'Chez Mama Africa', location: 'Entrée principale', distance: '350m', price: 1000, rating: 4.7 },
    { name: 'Le Bon Coin', location: 'Campus Sud', distance: '180m', price: 1000, rating: 4.3 },
    { name: 'Fast Food Express', location: 'Bibliothèque', distance: '120m', price: 1000, rating: 4.6 },
    { name: 'Le Jardin Gourmand', location: 'Résidence A', distance: '450m', price: 1000, rating: 4.8 },
    { name: 'Café des Étudiants', location: 'Amphi 500', distance: '90m', price: 1000, rating: 4.4 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Campus Life - Restaurants Partenaires</h2>
        <p className="text-gray-600 mb-6">Payez avec Orange Money et bénéficiez d'un cashback de 1%</p>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Votre Cashback Campus</h3>
              <p className="text-green-100">Économisez sur chaque repas payé avec Orange Money</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold">345 FCFA</div>
              <div className="text-green-100">économisés ce mois</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {restaurants.map((resto, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-green-500">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{resto.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{resto.location} • {resto.distance}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded">
                  <span className="text-yellow-600 font-semibold">{resto.rating}</span>
                  <span className="text-yellow-500">★</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-green-600">{resto.price} FCFA</div>
                  <div className="text-xs text-green-600">+10 FCFA cashback</div>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">Comment ça marche ?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <div className="font-medium mb-1">Choisissez un restaurant</div>
                <div className="text-sm text-gray-600">Parmi nos partenaires à proximité</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <div className="font-medium mb-1">Payez avec Orange Money</div>
                <div className="text-sm text-gray-600">Repas fixe à 1000 FCFA</div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <div className="font-medium mb-1">Recevez 1% de cashback</div>
                <div className="text-sm text-gray-600">10 FCFA par repas crédités</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoModule() {
  const [activeTab, setActiveTab] = useState<'admin' | 'stages' | 'formations'>('admin');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Information Campus</h2>

        <div className="flex gap-2 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'admin' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📋 Notes Administratives
          </button>
          <button
            onClick={() => setActiveTab('stages')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'stages' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            💼 Stages & Bourses
          </button>
          <button
            onClick={() => setActiveTab('formations')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'formations' ? 'border-b-2 border-purple-500 text-purple-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            🎓 Formations
          </button>
        </div>

        {activeTab === 'admin' && (
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-900 mb-1">URGENT - Fermeture administrative</div>
                  <p className="text-red-800 text-sm mb-2">L'université sera fermée le 15 mai pour inventaire. Aucun cours ni examen ce jour-là.</p>
                  <div className="text-xs text-red-700">Publié le 1er mai 2026</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-orange-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-orange-900 mb-1">Calendrier des examens - Session 2</div>
                  <p className="text-orange-800 text-sm mb-2">Les examens de la session 2 débuteront le 20 juin. Consultez le calendrier détaillé sur le portail.</p>
                  <div className="text-xs text-orange-700">Publié le 28 avril 2026</div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-semibold text-blue-900 mb-1">Inscription pédagogique 2026-2027</div>
                  <p className="text-blue-800 text-sm mb-2">Les inscriptions pour l'année 2026-2027 sont ouvertes du 1er juin au 30 juillet. Préparez vos documents.</p>
                  <div className="text-xs text-blue-700">Publié le 25 avril 2026</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'stages' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 mb-4">
              <h3 className="text-xl font-bold mb-2">Opportunités de Stage & Bourses</h3>
              <p className="text-purple-100">Découvrez les meilleures opportunités pour votre carrière</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Stage</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Rémunéré</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Développeur Web - Orange Digital Center</h3>
                  <p className="text-gray-600 text-sm">6 mois • Dakar, Sénégal</p>
                </div>
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-gray-700 mb-3">Rejoignez notre équipe de développement pour travailler sur des projets innovants dans le domaine du digital.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Date limite: 15 mai 2026</span>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Postuler
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Bourse</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Master</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Bourse d'Excellence - Sciences de l'Ingénieur</h3>
                  <p className="text-gray-600 text-sm">2 ans • France</p>
                </div>
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <p className="text-gray-700 mb-3">Bourse complète pour Master en Sciences de l'Ingénieur dans une université partenaire en France.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Date limite: 30 mai 2026</span>
                <button className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-700 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Projet de Recherche</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Financé</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">Intelligence Artificielle & Santé</h3>
                  <p className="text-gray-600 text-sm">1 an • Campus</p>
                </div>
                <Award className="w-8 h-8 text-indigo-600" />
              </div>
              <p className="text-gray-700 mb-3">Projet de recherche sur l'application de l'IA dans le domaine médical. Financement disponible.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Date limite: 10 juin 2026</span>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Candidater
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'formations' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6 mb-4">
              <h3 className="text-xl font-bold mb-2">Bootcamps & Formations Professionnelles</h3>
              <p className="text-indigo-100">Développez vos compétences avec nos formations certifiantes</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Bootcamp</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">12 semaines</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Certifié</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Développement Web Full Stack</h3>
                  <p className="text-gray-600 mb-3">Maîtrisez React, Node.js, MongoDB et déployez vos applications professionnelles.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="text-sm">
                      <div className="text-gray-500">Début</div>
                      <div className="font-semibold">1er juin 2026</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Durée</div>
                      <div className="font-semibold">12 semaines</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Format</div>
                      <div className="font-semibold">Présentiel</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Prix</div>
                      <div className="font-semibold text-blue-600">50,000 FCFA</div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    S'inscrire maintenant
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Bootcamp</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">8 semaines</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Certifié</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Data Science & Machine Learning</h3>
                  <p className="text-gray-600 mb-3">Python, TensorFlow, analyse de données et modèles prédictifs pour devenir Data Scientist.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="text-sm">
                      <div className="text-gray-500">Début</div>
                      <div className="font-semibold">15 juin 2026</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Durée</div>
                      <div className="font-semibold">8 semaines</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Format</div>
                      <div className="font-semibold">Hybride</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Prix</div>
                      <div className="font-semibold text-purple-600">65,000 FCFA</div>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    S'inscrire maintenant
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Formation</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">6 semaines</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Certifié</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">Cybersécurité & Ethical Hacking</h3>
                  <p className="text-gray-600 mb-3">Sécurité réseau, pentest, cryptographie et protection des systèmes d'information.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="text-sm">
                      <div className="text-gray-500">Début</div>
                      <div className="font-semibold">1er juillet 2026</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Durée</div>
                      <div className="font-semibold">6 semaines</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Format</div>
                      <div className="font-semibold">Présentiel</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-gray-500">Prix</div>
                      <div className="font-semibold text-green-600">45,000 FCFA</div>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    S'inscrire maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}