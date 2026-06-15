export default function ExternalLink({
  href,
  children,
  className = '',
  ariaLabel,
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer nofollow'
      referrerPolicy='no-referrer'
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
