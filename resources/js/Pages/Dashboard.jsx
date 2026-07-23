import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import {
    LayoutDashboard, Info,
    Users, Star, ChevronRight,
    ShieldCheck, BarChart3,
    Newspaper, Settings, Clock, Award, Sun,
    Wrench, Briefcase,
    LayoutTemplate,
} from 'lucide-react';

const getModules = (counts = {}) => [
    { label: 'About',      href: '/admin/about',    icon: Info,      color: 'bg-indigo-500', desc: 'Edit about section',                              count: counts.abouts      ?? 0 },
    { label: 'Services',   href: '/admin/service',  icon: Wrench,    color: 'bg-orange-500', desc: 'Manage Mechanical, Electrical & Plumbing services', count: counts.services    ?? 0 },
    { label: 'Projects',   href: '/admin/project',  icon: Briefcase, color: 'bg-green-500',  desc: 'Edit project portfolio',                          count: counts.projects    ?? 0 },
    { label: 'Feature Project Cards', href: '/admin/feature-project-card', icon: LayoutTemplate, color: 'bg-sky-500', desc: 'Manage homepage feature project cards', count: counts.featureProjectCards ?? 0 },
    { label: 'Partners',   href: '/admin/partner',  icon: Users,     color: 'bg-purple-500', desc: 'Manage partner logos',                            count: counts.partners    ?? 0 },
    { label: 'Insights',   href: '/admin/insights', icon: Newspaper, color: 'bg-amber-500',  desc: 'Manage articles & insights',                      count: counts.insights    ?? 0 },
    { label: 'Activities', href: '/admin/activity', icon: Clock,     color: 'bg-teal-500',   desc: 'Manage latest activities feed',                   count: counts.activities  ?? 0 },
    { label: 'Team Members', href: '/admin/team-member', icon: Users, color: 'bg-rose-500', desc: 'Manage key team members & photos', count: counts.teamMembers ?? 0 },
    { label: 'Certifications', href: '/admin/certification', icon: Award, color: 'bg-blue-500', desc: 'Manage business registration certificates', count: counts.certifications ?? 0 },
    { label: 'Solar Service', href: '/admin/solar-service/overview', icon: Sun, color: 'bg-yellow-500', desc: 'Manage Solar Service content', count: counts.solarItems ?? 0 },
];

export default function Dashboard({ isAdmin, auth, counts = {} }) {
    const adminModules = getModules(counts);

    const totalRecords = Object.values(counts).reduce((total, item) => {
        if (typeof item === 'number') return total + item;
        if (Array.isArray(item)) return total + item.length;
        if (typeof item === 'object' && item !== null) return total + 1;
        return total;
    }, 0);

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="min-h-screen bg-gray-50">

                {/* HEADER */}
                <div className="bg-gradient-to-r from-[#0C2D4F] to-[#1E5BA8] px-6 py-8">
                    <div className="max-w-7xl mx-auto">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {/* LOGO */}
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center overflow-hidden">
                                    <img
                                        src="/logo.png"
                                        alt="Master MEP Logo"
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">Master MEP Admin</h1>
                                    <p className="text-blue-200 text-sm">Content Management System</p>
                                </div>
                            </div>

                            <Link
                                href="/"
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors border border-white/20"
                            >
                                View Website ↗
                            </Link>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                            {[
                                { label: 'Modules', value: adminModules.length, icon: LayoutDashboard },
                                { label: 'Records', value: totalRecords,         icon: BarChart3 },
                                { label: 'Role',    value: 'Admin',              icon: Star },
                                { label: 'Status',  value: 'Online',             icon: ShieldCheck },
                            ].map((stat) => (
                                <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                                    <div className="flex items-center gap-3">
                                        <stat.icon className="w-5 h-5 text-blue-200" />
                                        <div>
                                            <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
                                            <p className="text-blue-200 text-xs mt-0.5">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* BODY */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        {/* MODULES */}
                        <div className="lg:col-span-3">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-gray-800">Content Modules</h2>
                                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                    {adminModules.length} modules
                                </span>
                            </div>

                            {isAdmin ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {adminModules.map(({ label, href, icon: Icon, color, desc, count }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#1A3A5C]/20 hover:shadow-lg transition-all duration-200"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="font-semibold text-gray-800 group-hover:text-[#1A3A5C] text-sm">{label}</h3>
                                                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                                            {typeof count === 'object' ? Object.keys(count).length : count}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 truncate">{desc}</p>
                                                </div>
                                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1A3A5C] group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl p-8 text-center border">
                                    <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                    <h3 className="font-semibold text-gray-700 mb-2">No Admin Access</h3>
                                    <p className="text-sm text-gray-500">You don't have permission.</p>
                                </div>
                            )}
                        </div>

                        {/* SIDEBAR */}
                        <div className="space-y-4">

                            {/* USER */}
                            <div className="bg-white rounded-2xl p-5 border">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-[#1A3A5C] rounded-full flex items-center justify-center text-white font-bold">
                                        {auth?.user?.name?.charAt(0)?.toUpperCase() || 'A'}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">{auth?.user?.name || 'Admin'}</p>
                                        <p className="text-xs text-gray-500">{auth?.user?.email || ''}</p>
                                    </div>
                                </div>
                                <div className="bg-green-50 px-3 py-2 rounded-lg flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs text-green-700">System Online</span>
                                </div>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="bg-white rounded-2xl p-5 border">
                                <h3 className="font-semibold mb-3 text-sm">Quick Links</h3>
                                <div className="space-y-1">
                                    {[
                                        { label: 'Website',  href: '/' },
                                        { label: 'Contact',  href: '/contact' },
                                        { label: 'Projects', href: '/projects' },
                                        { label: 'Insights', href: '/insights' },
                                    ].map((link) => (
                                        <Link key={link.href} href={link.href}
                                            className="flex justify-between py-2 px-3 rounded-lg hover:bg-gray-50">
                                            <span className="text-sm text-gray-700">{link.label}</span>
                                            <ChevronRight className="w-3 h-3 text-gray-300" />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* TECH STACK */}
                            <div className="bg-gradient-to-br from-[#1A3A5C] to-[#2E5C8A] rounded-2xl p-5 text-white">
                                <h3 className="font-semibold mb-3 text-sm">Tech Stack</h3>
                                <div className="space-y-2 text-xs text-blue-200">
                                    {[
                                        { label: 'Framework', value: 'Laravel 13' },
                                        { label: 'Frontend',  value: 'React + Inertia' },
                                        { label: 'Styling',   value: 'Tailwind CSS' },
                                        { label: 'Database',  value: 'MySQL' },
                                        { label: 'Icons',     value: 'Lucide React' },
                                    ].map((item) => (
                                        <div key={item.label} className="flex justify-between">
                                            <span>{item.label}</span>
                                            <span className="text-white font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}