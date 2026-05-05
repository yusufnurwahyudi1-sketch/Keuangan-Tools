import React from 'react';
import { Calendar, ChevronDown, Download, MoreVertical, Plus } from 'lucide-react';

export default function Transactions() {
  const tableData = [
    {
      date: 'Oct 24, 2023',
      descTop: 'Acme Corp Salary',
      descBot: 'Direct Deposit',
      catName: 'Income',
      catColor: 'bg-secondary-container text-on-secondary-container',
      amount: '+$5,240.00',
      amountColor: 'text-secondary',
    },
    {
      date: 'Oct 22, 2023',
      descTop: 'Whole Foods Market',
      descBot: 'Groceries',
      catName: 'Food & Dining',
      catColor: 'bg-surface-container-high text-on-surface',
      amount: '-$142.50',
      amountColor: 'text-on-surface',
    },
    {
      date: 'Oct 21, 2023',
      descTop: 'Monthly Rent',
      descBot: 'Property Management',
      catName: 'Housing',
      catColor: 'bg-surface-container-high text-on-surface',
      amount: '-$2,100.00',
      amountColor: 'text-on-surface',
    },
    {
      date: 'Oct 19, 2023',
      descTop: 'Uber Ride',
      descBot: 'Travel',
      catName: 'Transportation',
      catColor: 'bg-surface-container-high text-on-surface',
      amount: '-$24.10',
      amountColor: 'text-on-surface',
    },
    {
      date: 'Oct 15, 2023',
      descTop: 'Freelance Client X',
      descBot: 'Wire Transfer',
      catName: 'Income',
      catColor: 'bg-secondary-container text-on-secondary-container',
      amount: '+$850.00',
      amountColor: 'text-secondary',
    },
  ];

  return (
    <div className="flex flex-col gap-6 pb-12 w-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
        <div>
          <h2 className="text-[48px] leading-tight font-bold font-display text-primary tracking-tight mb-2">
            Transactions
          </h2>
          <p className="text-[18px] text-on-surface-variant">
            Review and manage your financial activity.
          </p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg bg-surface-container-lowest border border-outline-variant text-on-surface hover:bg-surface-container-low transition-colors text-sm cursor-pointer shadow-sm">
            <Download className="w-[18px] h-[18px]" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 font-semibold rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors text-sm cursor-pointer shadow-sm shadow-primary/20">
            <Plus className="w-[18px] h-[18px]" />
            New Transaction
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/50">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full md:w-1/3">
            <label className="block text-[12px] font-semibold text-on-surface-variant mb-2 tracking-wide uppercase">
              Date Range
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Oct 1, 2023 - Oct 31, 2023"
                className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all text-sm text-on-surface placeholder-on-surface-variant/50 cursor-pointer"
                readOnly
              />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-[12px] font-semibold text-on-surface-variant mb-2 tracking-wide uppercase">
              Category
            </label>
            <div className="relative flex items-center">
              <select className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all text-sm text-on-surface appearance-none cursor-pointer">
                <option>All Categories</option>
                <option>Income</option>
                <option>Housing</option>
                <option>Food & Dining</option>
                <option>Transportation</option>
              </select>
              <ChevronDown className="absolute right-3 text-on-surface-variant w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <label className="block text-[12px] font-semibold text-on-surface-variant mb-2 tracking-wide uppercase">
              Type
            </label>
            <div className="relative flex items-center">
              <select className="w-full pl-4 pr-10 py-2.5 rounded-lg bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all text-sm text-on-surface appearance-none cursor-pointer">
                <option>All Types</option>
                <option>Credit (Income)</option>
                <option>Debit (Expense)</option>
              </select>
              <ChevronDown className="absolute right-3 text-on-surface-variant w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <div className="w-full md:w-auto mt-4 md:mt-0 flex-1 flex justify-end">
            <button className="px-6 py-2.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-variant transition-colors text-sm font-semibold w-full md:w-auto cursor-pointer">
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-soft border border-outline-variant/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/50">
                <th className="py-4 px-6 text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">Date</th>
                <th className="py-4 px-6 text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">Description</th>
                <th className="py-4 px-6 text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">Category</th>
                <th className="py-4 px-6 text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider text-right">Amount</th>
                <th className="py-4 px-6 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4 px-6 text-sm text-on-surface whitespace-nowrap">{row.date}</td>
                  <td className="py-4 px-6">
                    <div className="text-base text-primary font-medium">{row.descTop}</div>
                    <div className="text-sm text-on-surface-variant mt-0.5">{row.descBot}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide ${row.catColor}`}>
                      {row.catName}
                    </span>
                  </td>
                  <td className={`py-4 px-6 text-base font-medium font-sans text-right ${row.amountColor}`}>
                    {row.amount}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer p-1 rounded-full hover:bg-surface-container-lowest">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant/50 flex items-center justify-between bg-surface-container-lowest">
          <span className="text-sm text-on-surface-variant">Showing 1 to 5 of 42 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-md border border-outline-variant text-on-surface-variant bg-surface-container-lowest opacity-50 cursor-not-allowed text-sm font-semibold">
              Previous
            </button>
            <button className="px-3 py-1.5 rounded-md border border-outline-variant text-on-surface bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-sm font-semibold cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
