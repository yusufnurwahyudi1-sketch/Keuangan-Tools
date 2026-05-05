import React from 'react';
import { Wallet, CreditCard, PiggyBank, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Reports() {
  return (
    <div className="flex flex-col gap-8 pb-12 w-full animate-in fade-in duration-500 max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-1 mb-2">
        <h1 className="text-[32px] md:text-[40px] leading-tight font-bold font-display text-on-surface tracking-tight">
          Laporan Keuangan
        </h1>
        <p className="text-[18px] text-on-surface-variant">
          Analisis komprehensif pengeluaran dan pendapatan Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <div className="p-2.5 bg-primary-container rounded-xl flex items-center justify-center">
              <Wallet className="w-5 h-5 text-on-primary-container" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider">Total Saldo</span>
          </div>
          <div>
            <div className="text-[32px] font-bold font-display text-on-surface leading-tight">
              Rp 45.230.000
            </div>
            <div className="text-sm font-medium text-secondary-fixed-dim mt-2 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              +12.5% dari bulan lalu
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <div className="p-2.5 bg-error-container rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-on-error-container" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider">Pengeluaran Terbesar</span>
          </div>
          <div>
            <div className="text-[32px] font-bold font-display text-on-surface leading-tight">
              Perumahan
            </div>
            <div className="text-sm text-on-surface-variant mt-2 font-medium">
              Rp 8.500.000 bulan ini
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-soft border border-outline-variant/30 flex flex-col gap-4">
          <div className="flex items-center gap-3 text-on-surface-variant">
            <div className="p-2.5 bg-secondary-container rounded-xl flex items-center justify-center">
              <PiggyBank className="w-5 h-5 text-on-secondary-container" />
            </div>
            <span className="text-[12px] font-semibold uppercase tracking-wider">Rasio Tabungan</span>
          </div>
          <div>
            <div className="text-[32px] font-bold font-display text-on-surface leading-tight">
              24%
            </div>
            <div className="text-sm font-medium text-secondary-fixed-dim mt-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Di atas target 20%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Trend Bar Chart */}
        <div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-soft border border-outline-variant/30 flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-[20px] font-bold font-display text-on-surface tracking-tight">Tren 6 Bulan Terakhir</h2>
            <button className="px-5 py-2 border border-outline-variant rounded-xl text-on-surface font-semibold text-sm hover:bg-surface-container-low transition-colors cursor-pointer">
              Filter
            </button>
          </div>
          
          <div className="h-64 relative w-full flex items-end gap-2 pt-4 border-l-2 border-b-2 border-surface-container pb-2 pl-3">
            <div className="absolute -left-9 top-0 h-full flex flex-col justify-between text-on-surface-variant text-[10px] pb-6 font-semibold">
              <span>40M</span>
              <span>30M</span>
              <span>20M</span>
              <span>10M</span>
              <span>0</span>
            </div>

            {[
              { m: 'Jan', ih: '60%', eh: '40%' },
              { m: 'Feb', ih: '65%', eh: '45%' },
              { m: 'Mar', ih: '70%', eh: '50%' },
              { m: 'Apr', ih: '68%', eh: '55%' },
              { m: 'Mei', ih: '80%', eh: '40%' },
              { m: 'Jun', ih: '85%', eh: '35%', active: true },
            ].map((d, i) => (
              <div key={i} className="flex-1 flex justify-center items-end gap-1 h-full relative group cursor-pointer">
                <div 
                  className={`w-1/3 rounded-t-sm transition-all ${d.active ? 'bg-primary' : 'bg-primary-fixed-dim group-hover:bg-primary-fixed'}`} 
                  style={{height: d.ih}}
                ></div>
                <div 
                  className={`w-1/3 rounded-t-sm transition-all ${d.active ? 'bg-error' : 'bg-error-container group-hover:bg-tertiary-fixed-dim'}`} 
                  style={{height: d.eh}}
                ></div>
                <span className={`absolute -bottom-7 text-[10px] ${d.active ? 'font-bold text-on-surface' : 'font-semibold text-on-surface-variant'}`}>{d.m}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-6 text-[12px] font-semibold text-on-surface-variant">
            <div className="flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-primary-fixed-dim"></div>
              <span>Pendapatan</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full bg-error-container"></div>
              <span>Pengeluaran</span>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="lg:col-span-4 bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-soft border border-outline-variant/30 flex flex-col gap-8">
          <h2 className="text-[20px] font-bold font-display text-on-surface tracking-tight">Alokasi Pengeluaran</h2>
          
          <div className="flex-1 flex items-center justify-center relative min-h-[220px]">
            {/* Pure CSS Donut Chart logic */}
            <div 
              className="w-56 h-56 rounded-full relative"
              style={{
                background: 'conic-gradient(var(--color-primary) 0deg 144deg, var(--color-primary-container) 144deg 234deg, var(--color-error-container) 234deg 306deg, var(--color-surface-tint) 306deg 360deg)'
              }}
            >
              <div className="absolute inset-2 m-auto bg-surface-container-lowest rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1">Total</span>
                <span className="text-[20px] font-bold font-display text-on-surface">Rp 15.2M</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            {[
              { label: 'Perumahan', val: '40%', c: 'bg-primary' },
              { label: 'Makanan', val: '25%', c: 'bg-primary-container' },
              { label: 'Transportasi', val: '20%', c: 'bg-error-container' },
              { label: 'Hiburan', val: '15%', c: 'bg-surface-tint' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-3.5 h-3.5 rounded-full ${item.c}`}></div>
                  <span className="text-on-surface font-medium">{item.label}</span>
                </div>
                <span className="font-semibold text-on-surface font-sans">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
