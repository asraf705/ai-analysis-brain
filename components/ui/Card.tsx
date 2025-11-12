import { ReactNode, HTMLAttributes } from 'react'

/**
 * Card Component
 * Container card with consistent styling
 */

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-dark-surface border border-dark-border rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

