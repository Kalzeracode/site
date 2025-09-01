import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = useScrollToSection()

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Escritório', href: '#escritorio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Advogado', href: '#advogado' },
    { name: 'Artigos', href: '#artigos' },
    { name: 'Contato', href: '#contato' }
  ]

  const handleMenuClick = (href) => {
    scrollToSection(href)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">Darci Advogado</h1>
              <p className="text-sm text-gray-600">Advocacia Criminal</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              onClick={() => scrollToSection('#contato')}
            >
              Consultar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-4"
                onClick={() => handleMenuClick('#contato')}
              >
                Consultar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

