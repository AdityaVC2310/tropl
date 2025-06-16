'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  MessageSquare,
  Settings,
  UserPlus,
  Receipt,
  BarChart3,
  Calendar,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Dashboard",
    href: "/recruiter/dashboard",
    icon: LayoutDashboard,
    color: "text-orange-500",
  },
  {
    title: "Job Seekers",
    href: "/recruiter/job-seekers",
    icon: Users,
    color: "text-orange-400",
  },
  {
    title: "Clients",
    href: "/recruiter/clients",
    icon: Building2,
    color: "text-orange-500",
  },
  {
    title: "Vendors",
    href: "/recruiter/vendors",
    icon: Building2,
    color: "text-orange-400",
  },
  {
    title: "Jobs",
    href: "/recruiter/jobs",
    icon: Briefcase,
    color: "text-orange-500",
  },
  {
    title: "Bench Sales",
    href: "/recruiter/bench-sales",
    icon: BarChart3,
    color: "text-orange-400",
  },
  {
    title: "Messages",
    href: "/recruiter/messages",
    icon: MessageSquare,
    color: "text-orange-500",
  },
  {
    title: "Settings",
    href: "/recruiter/settings",
    icon: Settings,
    color: "text-orange-400",
  },
  {
    title: "User Setup",
    href: "/recruiter/user-setup",
    icon: UserPlus,
    color: "text-orange-500",
  },
  {
    title: "Expenses",
    href: "/recruiter/expenses",
    icon: Receipt,
    color: "text-orange-400",
  },
  {
    title: "Calendar",
    href: "/recruiter/calendar",
    icon: Calendar,
    color: "text-orange-500",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "hidden md:flex flex-col bg-gray-800 border-r border-gray-700 transition-all duration-300",
      isCollapsed ? "w-16" : "w-56"
    )}>
      <div className="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-400 hover:text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <nav className="flex-1 px-2 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                isCollapsed && "justify-center"
              )}
              title={isCollapsed ? item.title : undefined}
            >
              <item.icon className={cn("w-5 h-5", !isCollapsed && "mr-3", item.color)} />
              {!isCollapsed && item.title}
            </Link>
          );
        })}
      </nav>

      <div className="p-2 border-t border-gray-700">
        <button 
          className={cn(
            "flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white transition-colors",
            isCollapsed && "justify-center"
          )}
          title={isCollapsed ? "Logout" : undefined}
        >
          <LogOut className={cn("w-5 h-5", !isCollapsed && "mr-3")} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
} 