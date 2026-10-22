export default function NavItem({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`block p-4 text-lg ${className}`}>
      {children}
    </a>
  );
}
