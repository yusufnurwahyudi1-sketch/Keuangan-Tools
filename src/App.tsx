import { useState } from 'react';
import { LayoutDashboard, Receipt, PlusCircle, BarChart2, HelpCircle, LogOut, Bell, Settings, Search, Menu, X } from 'lucide-react';
import Dashboard from './views/Dashboard';
import Transactions from './views/Transactions';
import AddTransaction from './views/AddTransaction';
import Reports from './views/Reports';

function Sidebar({ currentView, setView, mobileOpen, setMobileOpen }: { currentView: string; setView: (v: string) => void, mobileOpen: boolean, setMobileOpen: (v: boolean) => void }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'transactions', label: 'Transactions', icon: Receipt },
    { id: 'add', label: 'Add Transaction', icon: PlusCircle, solid: true },
    { id: 'reports', label: 'Reports', icon: BarChart2 },
  ];

  const bottomItems = [
    { id: 'help', label: 'Help Center', icon: HelpCircle },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  const baseClasses = `fixed left-0 top-0 h-full w-72 bg-surface-container-lowest border-r border-outline-variant/30 flex-col p-5 z-40 transform transition-transform duration-300 md:translate-x-0 ${mobileOpen ? 'translate-x-0 overflow-y-auto' : '-translate-x-full'}`;

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <nav className={baseClasses + " flex"}>
        <div className="flex items-center justify-between mb-10 px-2 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl overflow-hidden shrink-0">
               {/* Faked logo */}
               <div className="w-full h-full bg-primary flex items-center justify-center text-on-primary font-display font-black text-xl">W</div>
            </div>
            <div>
              <h1 className="text-xl font-black font-display tracking-tight text-on-surface">WealthPulse</h1>
              <p className="text-[12px] font-semibold text-on-surface-variant font-sans">Financial Workspace</p>
            </div>
          </div>
          <button className="md:hidden p-2 text-on-surface-variant" onClick={() => setMobileOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1.5 flex-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setView(item.id); setMobileOpen(false); }}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-[12px] font-semibold text-sm transition-all duration-200 cursor-pointer w-full text-left ${
                  isActive 
                    ? 'bg-surface-container-low text-primary' 
                    : item.solid 
                      ? 'bg-surface-container-lowest text-on-surface border border-outline-variant/50 hover:bg-surface-container-low'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50'
                }`}
              >
                <Icon className={`w-[22px] h-[22px] ${item.solid && isActive ? 'fill-current' : ''}`} strokeWidth={item.solid && isActive ? 0 : 2} />
                <span className="font-display">{item.label}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-auto flex flex-col gap-1.5 pt-6 border-t border-surface-container">
          {bottomItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3.5 px-4 py-3 rounded-[12px] font-semibold text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low/50 transition-all cursor-pointer w-full text-left"
              >
                <Icon className="w-[22px] h-[22px]" strokeWidth={2} />
                <span className="font-display">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  );
}

function Topbar({ setMobileOpen }: { setMobileOpen: (v: boolean) => void }) {
  return (
    <header className="sticky top-0 z-20 flex justify-between items-center w-full px-5 md:px-8 py-3 bg-surface/80 backdrop-blur-md md:bg-transparent h-16 md:h-24">
      <div className="flex items-center gap-3 md:hidden">
        <button 
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-xl font-bold font-display text-on-surface tracking-tight">WealthPulse</span>
      </div>
      
      {/* Desktop empty spacer for logo alignment if needed, or left-side elements */}
      <div className="hidden md:flex flex-1"></div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant w-[18px] h-[18px]" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded-full text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary/50 text-on-surface outline-none transition-all placeholder:text-on-surface-variant shadow-sm"
          />
        </div>
        
        <div className="flex items-center gap-1 md:gap-2 md:border-l border-outline-variant/30 md:pl-5">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-lowest hover:shadow-sm hover:text-primary transition-all cursor-pointer">
            <Bell className="w-[20px] h-[20px]" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-lowest hover:shadow-sm hover:text-primary transition-all cursor-pointer hidden sm:flex">
            <Settings className="w-[20px] h-[20px]" />
          </button>
          <div className="ml-2 w-10 h-10 rounded-full bg-surface-container-high border-2 border-surface-container-lowest shadow-sm overflow-hidden cursor-pointer shrink-0 relative group">
            {/* Simple silhouette since we don't have an image asset universally loaded */}
            <div className="w-full h-full bg-primary-fixed-dim/50 flex items-center justify-center text-on-surface group-hover:bg-primary-fixed transition-colors">
              <span className="font-bold text-sm">A</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  const [view, setView] = useState('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background overflow-hidden text-on-background font-sans">
      <Sidebar 
        currentView={view} 
        setView={setView} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />
      
      <div className="flex-1 flex flex-col min-h-0 md:pl-72 transition-all">
        <Topbar setMobileOpen={setMobileOpen} />
        <main className="flex-1 overflow-y-auto w-full px-5 md:px-8 pb-8 pt-4">
          <div className="max-w-[1280px] mx-auto w-full">
            {view === 'dashboard' && <Dashboard navigate={setView} />}
            {view === 'transactions' && <Transactions />}
            {view === 'add' && <AddTransaction />}
            {view === 'reports' && <Reports />}
          </div>
        </main>
      </div>
    </div>
  );
}
