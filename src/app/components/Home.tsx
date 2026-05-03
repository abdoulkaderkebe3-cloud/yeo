import { Smartphone, Wifi, Book, ShoppingBag, Bell } from 'lucide-react';

interface HomeProps {
  onNavigateToPortal: () => void;
}

export function Home({ onNavigateToPortal }: HomeProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="font-bold text-xl">Orange</span>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 font-semibold">JM</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold mb-4">Orange Student</h1>
              <p className="text-xl mb-6 text-orange-100">Portail Universitaire - Tout pour réussir vos études</p>
              <button
                onClick={onNavigateToPortal}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-105"
              >
                Accéder au portail →
              </button>
            </div>
            <div className="absolute right-0 top-0 w-64 h-64 bg-orange-400 rounded-full opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute right-20 bottom-0 w-48 h-48 bg-orange-400 rounded-full opacity-20 -mb-24"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Campus Data</h3>
            <p className="text-gray-600 text-sm">Forfaits étudiants à prix réduit</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Book className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">BiblioCampus</h3>
            <p className="text-gray-600 text-sm">Bibliothèque numérique complète</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Campus Life</h3>
            <p className="text-gray-600 text-sm">Restaurants et services partenaires</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Information</h3>
            <p className="text-gray-600 text-sm">Stages, bourses et formations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">1500 FCFA</div>
            <p className="text-gray-700 font-medium mb-1">10 Go / 2 semaines</p>
            <p className="text-gray-600 text-sm">Forfait étudiant</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">500 FCFA</div>
            <p className="text-gray-700 font-medium mb-1">Data illimitée nocturne</p>
            <p className="text-gray-600 text-sm">18h - 8h</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">15000 FCFA</div>
            <p className="text-gray-700 font-medium mb-1">Data Tontine (5 étudiants)</p>
            <p className="text-gray-600 text-sm">Connexion illimitée partagée</p>
          </div>
        </div>
      </main>
    </div>
  );
}