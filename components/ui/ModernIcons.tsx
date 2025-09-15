'use client';

import { 
  LucideIcon,
  Plane,
  Package,
  BarChart3,
  Wrench,
  Shield,
  Globe,
  Users,
  GraduationCap,
  Award,
  Star,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  Building,
  Heart,
  Target,
  Lightbulb,
  TrendingUp,
  BookOpen,
  Briefcase,
  User,
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Play
} from 'lucide-react';

// Icônes modernes avec variantes
export interface ModernIconProps {
  icon: LucideIcon;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'outline' | 'filled' | 'gradient';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'gray' | 'white';
  className?: string;
  animated?: boolean;
}

const sizeClasses = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-12 w-12',
};

const colorClasses = {
  primary: 'text-blue-600',
  secondary: 'text-purple-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
  info: 'text-cyan-600',
  gray: 'text-gray-600',
  white: 'text-white',
};

const variantClasses = {
  default: '',
  outline: 'stroke-2',
  filled: 'fill-current',
  gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
};

export function ModernIcon({ 
  icon: Icon, 
  size = 'md', 
  variant = 'default', 
  color = 'primary',
  className = '',
  animated = false
}: ModernIconProps) {
  const baseClasses = sizeClasses[size];
  const colorClass = colorClasses[color];
  const variantClass = variantClasses[variant];
  const animationClass = animated ? 'transition-all duration-300 hover:scale-110 hover:rotate-3' : '';

  return (
    <Icon 
      className={`${baseClasses} ${colorClass} ${variantClass} ${animationClass} ${className}`}
    />
  );
}

// Icônes spécialisées EPIKAÏZO
export const EpikaizoIcons = {
  // Formations
  Aviation: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Plane} {...props} />,
  Logistique: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Package} {...props} />,
  Gestion: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={BarChart3} {...props} />,
  Certifiantes: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Wrench} {...props} />,
  QHSE: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Shield} {...props} />,
  Communication: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Globe} {...props} />,
  Tourisme: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Building} {...props} />,

  // Général
  Students: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Users} {...props} />,
  Graduation: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={GraduationCap} {...props} />,
  Award: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Award} {...props} />,
  Star: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Star} {...props} />,
  Sparkles: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Sparkles} {...props} />,
  CheckCircle: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={CheckCircle} {...props} />,
  ArrowRight: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={ArrowRight} {...props} />,
  Clock: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Clock} {...props} />,
  MapPin: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={MapPin} {...props} />,
  Phone: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Phone} {...props} />,
  Mail: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Mail} {...props} />,
  BookOpen: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={BookOpen} {...props} />,
  Briefcase: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Briefcase} {...props} />,
  User: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={User} {...props} />,
  Search: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Search} {...props} />,
  Bell: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Bell} {...props} />,
  Menu: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Menu} {...props} />,
  X: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={X} {...props} />,
  ChevronDown: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={ChevronDown} {...props} />,

  // Social
  Facebook: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Facebook} {...props} />,
  Twitter: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Twitter} {...props} />,
  Linkedin: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Linkedin} {...props} />,
  Instagram: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Instagram} {...props} />,

  // Media
  Play: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Play} {...props} />,

  // Spéciales
  Target: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Target} {...props} />,
  Lightbulb: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Lightbulb} {...props} />,
  TrendingUp: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={TrendingUp} {...props} />,
  Heart: (props: Omit<ModernIconProps, 'icon'>) => <ModernIcon icon={Heart} {...props} />,
};

// Composant d'icône avec badge
export function IconWithBadge({ 
  icon, 
  badge, 
  badgeColor = 'red',
  ...props 
}: ModernIconProps & { 
  badge?: string | number; 
  badgeColor?: 'red' | 'blue' | 'green' | 'yellow' | 'purple';
}) {
  const badgeColorClasses = {
    red: 'bg-red-500 text-white',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    purple: 'bg-purple-500 text-white',
  };

  return (
    <div className="relative inline-block">
      <ModernIcon icon={icon} {...props} />
      {badge && (
        <span className={`absolute -top-2 -right-2 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${badgeColorClasses[badgeColor]}`}>
          {badge}
        </span>
      )}
    </div>
  );
}

// Composant d'icône avec animation
export function AnimatedIcon({ 
  icon, 
  animation = 'pulse',
  ...props 
}: ModernIconProps & { 
  animation?: 'pulse' | 'bounce' | 'spin' | 'ping' | 'wiggle';
}) {
  const animationClasses = {
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    spin: 'animate-spin',
    ping: 'animate-ping',
    wiggle: 'animate-wiggle',
  };

  return (
    <ModernIcon 
      icon={icon} 
      {...props} 
      className={`${animationClasses[animation]} ${props.className || ''}`}
    />
  );
}

export default ModernIcon;
