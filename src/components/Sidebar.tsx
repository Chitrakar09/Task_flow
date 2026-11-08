import {
  LayoutDashboard,
  ListTodo,
  CalendarDays,
  CalendarClock,
  AlertCircle,
  CircleCheck,
} from "lucide-react";

type NavItem={
    label:string;
    href:string;
    icon:React.ElementType
}

type SidebarProps = {
  activeItem?: string;
};

const navItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "All Tasks",
    href: "/tasks",
    icon: ListTodo,
  },
  {
    label: "Today",
    href: "/today",
    icon: CalendarDays,
  },
  {
    label: "Upcoming",
    href: "/upcoming",
    icon: CalendarClock,
  },
  {
    label: "Overdue",
    href: "/overdue",
    icon: AlertCircle,
  },
  {
    label: "Completed",
    href: "/completed",
    icon: CircleCheck,
  },
];

function Sidebar({activeItem="Dashboard"}:SidebarProps) {
  return (
    <>
      {/* Desktop / Tablet Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-20 border-r border-[#E2E8F0] bg-white md:block lg:w-65">
        <div className="flex h-full flex-col px-3 py-6 lg:px-5">
          {/* Logo */}
          <div className="mb-10 flex items-center justify-center gap-3 lg:justify-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3730A3]">
              <ListTodo size={23} className="text-white" />
            </div>

            <span className="hidden text-xl font-bold tracking-tight text-[#172033] lg:block">
              TaskFlow
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2" aria-label="Main navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.label;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  title={item.label}
                  className={`group flex items-center justify-center gap-3 rounded-xl px-3 py-3 transition-colors lg:justify-start ${
                    isActive
                      ? "bg-[#3730A3] text-white"
                      : "text-[#64748B] hover:bg-[#EEF2FF] hover:text-[#3730A3]"
                  }`}
                >
                  <Icon size={20} strokeWidth={2} />

                  <span className="hidden text-sm font-medium lg:block">
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav
        className="fixed bottom-0 left-0 z-50 grid w-full grid-cols-6 border-t border-[#E2E8F0] bg-white px-1 py-2 md:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <a
              key={item.label}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-lg py-2 transition-colors ${
                isActive
                  ? "text-[#3730A3]"
                  : "text-[#64748B] hover:text-[#3730A3]"
              }`}
            >
              <Icon size={20} strokeWidth={2} />

              <span className="whitespace-nowrap text-[9px] font-medium sm:text-[10px]">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default Sidebar;
