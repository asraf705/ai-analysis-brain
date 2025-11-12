import Link from 'next/link'
import { Brain, Github, Twitter, Linkedin } from 'lucide-react'
import { Container } from '@/components/ui/Container'

/**
 * Footer Component
 * Site footer with links and social media
 */
export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/#features' },
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Pricing', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Security', href: '#' },
    ],
  }

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-20">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-purple rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">AI Brain</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Empowering decisions with AI-powered analysis and insights.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-dark-elevated hover:bg-dark-hover rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-dark-border">
            <p className="text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} AI Analysis Brain. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

