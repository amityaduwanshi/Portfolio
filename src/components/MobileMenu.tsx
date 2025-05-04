'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: Array<{ href: string; label: string }>
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const { theme } = useTheme()

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />
          
          {/* Menu */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 left-0 right-0 bg-white dark:bg-dark-100 shadow-lg z-50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <motion.div
                variants={menuVariants}
                className="flex flex-col space-y-6"
              >
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    custom={index}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} custom={links.length}>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 