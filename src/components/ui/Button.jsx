// src/components/ui/Button.jsx
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin, MessageCircle, Users } from 'lucide-react';

const iconMap = {
  whatsapp: MessageCircle,
  location: MapPin,
  arrow: ArrowRight,
  calendar: CalendarDays,
  users: Users,
};

export default function Button({
  children,
  href = '#',
  variant = 'primary',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
}) {
  const Icon = icon ? iconMap[icon] : null;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`button button--${variant} ${fullWidth ? 'button--full' : ''}`.trim()}
    >
      {Icon && iconPosition === 'left' && (
        <span className='button__icon button__icon--left' aria-hidden='true'>
          <Icon />
        </span>
      )}

      <span className='button__label'>{children}</span>

      {Icon && iconPosition === 'right' && (
        <span className='button__icon button__icon--right' aria-hidden='true'>
          <Icon />
        </span>
      )}
    </Link>
  );
}
