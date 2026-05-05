import React from 'react';
import { Wallet, TrendingUp, ArrowDown, ArrowUp, MoreHorizontal, ShoppingCart, CreditCard, Zap, Youtube } from 'lucide-react';

export default function Dashboard({ navigate }: { navigate: (v: string) => void }) {
  const transactions = [
    {
      name: 'Whole Foods Market',
      desc: 'Groceries • Oct 24, 2023',
      amount: '-$142.50',
      status: 'Completed',
      icon: <ShoppingCart className="w-5 h-5" />,
      colorBg: 'bg-primary-fixed',
      colorIcon: 'text-on-primary-fixed',
      amountColor: 'text-on-surface',
    },
    {
      name: 'TechCorp Inc. Salary',
      desc: 'Income • Oct 22, 2023',
      amount: '+$4,200.00',
      status: 'Completed',
      icon: <CreditCard className="w-5 h-5" />,
      colorBg: 'bg-secondary-container',
      colorIcon: 'text-on-secondary-container',
      amountColor: 'text-secondary',
    },
    {
      name: 'City Power & Light',
      desc: 'Utilities • Oct 20, 2023',
      amount: '-$85.20',
      status: 'Pending',
      icon: <Zap className="w-5 h-5" />,
      colorBg: 'bg-tertiary-fixed',
      colorIcon: 'text-on-tertiary-fixed',
      amountColor: 'text-on-surface',
    },
    {
      name: 'Netflix Subscription',
      desc: 'Entertainment • Oct 18, 2023',
      amount: '-$15.99',
      status: 'Completed',
      icon: <Youtube className="w-5 h-5" />,
      colorBg: 'bg-surface-variant',
      colorIcon: 'text-on-surface-variant',
      amountColor: 'text-on-surface',
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-in fade-in duration-500">
      <div className="mb-2">
        <h2 className="text-[32px] font-bold font-display text-on-surface mb-2 tracking-tight">
          Good morning, Alex
        </h2>
        <p className="text-on-surface-variant text-base">
          Here's a snapshot of your finances today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary text-on-primary rounded-2xl p-6 shadow-card flex flex-col justify-between relative overflow-hidden group min-h-[220px]">
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet className="w-16 h-16" strokeWidth={1} />
          </div>
          <div>
            <p className="text-[12px] font-semibold text-on-primary/80 uppercase tracking-wider mb-2">
              Total Balance
            </p>
            <h3 className="text-[40px] font-bold font-display tracking-tight leading-tight mb-2">
              $124,500.00
            </h3>
            <div className="flex items-center gap-1.5 text-sm text-secondary-fixed-dim font-medium">
              <TrendingUp className="w-4 h-4" />
              <span>+2.4% from last month</span>
            </div>
          </div>
          <div className="mt-8 flex gap-3 relative z-10">
            <button className="bg-on-primary text-primary text-sm font-semibold py-2.5 px-4 rounded-lg flex-1 hover:bg-surface-container-high transition-colors text-center cursor-pointer">
              Withdraw
            </button>
            <button className="bg-primary border border-on-primary/30 text-on-primary text-sm font-semibold py-2.5 px-4 rounded-lg flex-1 hover:bg-on-primary/10 transition-colors text-center cursor-pointer">
              Transfer
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-soft border border-outline-variant/30 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary-fixed/20 text-secondary flex items-center justify-center">
                <ArrowDown className="w-5 h-5" />
              </div>
              <p className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
                Total Income
              </p>
            </div>
            <h4 className="text-[24px] font-bold font-display text-on-surface leading-tight">
              $18,240.50
            </h4>
            <p className="text-sm text-on-surface-variant mt-1.5">This month</p>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-soft border border-outline-variant/30 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center">
                <ArrowUp className="w-5 h-5" />
              </div>
              <p className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
                Total Expense
              </p>
            </div>
            <h4 className="text-[24px] font-bold font-display text-on-surface leading-tight">
              $4,832.00
            </h4>
            <p className="text-sm text-on-surface-variant mt-1.5">This month</p>
          </div>
        </div>

        {/* CSS Chart representation */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-soft border border-outline-variant/30 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold font-display text-on-surface">
              Monthly Flow
            </h3>
            <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 flex items-end gap-2 h-full pb-2">
            {[
              { m: 'Jan', h: '40%', c: 'bg-secondary-fixed/50 hover:bg-secondary-fixed/70' },
              { m: 'Feb', h: '60%', c: 'bg-secondary-fixed/70 hover:bg-secondary-fixed' },
              { m: 'Mar', h: '50%', c: 'bg-secondary-fixed/60 hover:bg-secondary-fixed/80' },
              { m: 'Apr', h: '80%', c: 'bg-secondary-fixed hover:opacity-80' },
              { m: 'May', h: '30%', c: 'bg-secondary-fixed/40 hover:bg-secondary-fixed/60' },
              { m: 'Jun', h: '90%', c: 'bg-secondary hover:opacity-80' },
            ].map((bar, i) => (
              <div key={i} className={`w-1/6 rounded-t-sm h-[${bar.h}] ${bar.c} transition-all cursor-pointer relative group`} style={{height: bar.h}}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-[10px] font-bold py-1 px-2 rounded hidden group-hover:block pointer-events-none">
                  {bar.m}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs font-semibold text-on-surface-variant mt-2 border-t border-surface-variant pt-3">
            <span>Jan</span>
            <span>Jun</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-soft border border-outline-variant/30">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-display text-on-surface">
            Recent Transactions
          </h3>
          <button
            onClick={() => navigate('transactions')}
            className="text-[12px] uppercase tracking-wider font-bold text-primary hover:underline cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="flex flex-col">
          {transactions.map((tx, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-4 border-b border-surface-container-low last:border-0 hover:bg-surface-container-low/50 transition-colors rounded-xl px-3 -mx-3 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${tx.colorBg} ${tx.colorIcon} flex items-center justify-center group-hover:scale-105 transition-transform`}
                >
                  {tx.icon}
                </div>
                <div>
                  <p className="text-[16px] font-medium text-on-surface">
                    {tx.name}
                  </p>
                  <p className="text-[14px] text-on-surface-variant mt-0.5">
                    {tx.desc}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[16px] font-medium font-sans ${tx.amountColor}`}>
                  {tx.amount}
                </p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-surface-variant text-on-surface-variant">
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
