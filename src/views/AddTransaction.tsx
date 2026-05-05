import React, { useState } from 'react';
import { Calendar, CheckCircle2, ChevronDown } from 'lucide-react';

export default function AddTransaction() {
  const [type, setType] = useState<'expense' | 'income'>('expense');

  return (
    <div className="flex flex-col gap-6 pb-12 w-full max-w-[720px] mx-auto animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-3xl md:text-[32px] font-bold font-display text-on-surface mb-2 tracking-tight leading-tight">
          Rekam Transaksi Baru
        </h1>
        <p className="text-base text-on-surface-variant">
          Masukkan detail transaksi untuk memperbarui pembukuan Anda.
        </p>
      </div>

      <form className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-card border border-outline-variant/30 flex flex-col gap-8">
        
        <div className="flex flex-col gap-3">
          <label className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
            Jenis Transaksi
          </label>
          <div className="bg-surface-container p-1 rounded-xl flex relative">
            <button
              onClick={(e) => { e.preventDefault(); setType('expense') }}
              className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all focus:outline-none ${
                type === 'expense' 
                  ? 'bg-surface-container-lowest shadow-sm text-on-surface' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Pengeluaran
            </button>
            <button
              onClick={(e) => { e.preventDefault(); setType('income') }}
              className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all focus:outline-none ${
                type === 'income' 
                  ? 'bg-surface-container-lowest shadow-sm text-on-surface' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              Pendapatan
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="nominal" className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
            Nominal
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 font-bold font-display text-[40px] text-on-surface-variant opacity-50 pointer-events-none">
              Rp
            </span>
            <input
              id="nominal"
              type="number"
              placeholder="0"
              required
              className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-xl pl-[80px] pr-4 py-3 font-bold font-display text-[40px] text-on-surface outline-none transition-all placeholder:text-surface-dim appearance-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="kategori" className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Kategori
            </label>
            <div className="relative flex items-center">
              <select
                id="kategori"
                required
                defaultValue=""
                className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-xl pl-4 pr-10 py-3.5 text-base font-medium text-on-surface outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Pilih Kategori</option>
                <option value="makanan">Makanan & Minuman</option>
                <option value="transportasi">Transportasi</option>
                <option value="belanja">Belanja</option>
                <option value="tagihan">Tagihan & Utilitas</option>
                <option value="gaji">Gaji</option>
                <option value="lainnya">Lainnya</option>
              </select>
              <ChevronDown className="absolute right-4 text-on-surface-variant w-5 h-5 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="tanggal" className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
              Tanggal
            </label>
            <div className="relative flex items-center">
              <input
                id="tanggal"
                type="date"
                required
                className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-xl pl-4 pr-10 py-3.5 text-base font-medium text-on-surface outline-none transition-all appearance-none cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
              />
              <Calendar className="absolute right-4 text-on-surface-variant w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="catatan" className="text-[12px] font-semibold text-on-surface-variant uppercase tracking-wider">
            Catatan (Opsional)
          </label>
          <textarea
            id="catatan"
            rows={3}
            placeholder="Tambahkan detail transaksi..."
            className="w-full bg-surface-container-low border-2 border-transparent focus:border-primary focus:bg-surface-container-lowest rounded-xl p-4 text-base font-medium text-on-surface outline-none transition-all resize-none placeholder:text-surface-tint"
          />
        </div>

        <div className="pt-6 border-t border-surface-container flex justify-end">
          <button
            type="submit"
            className="bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant rounded-xl px-8 py-3.5 text-[12px] font-bold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2 w-full md:w-auto cursor-pointer"
          >
            <CheckCircle2 className="w-[18px] h-[18px]" />
            Simpan Transaksi
          </button>
        </div>
      </form>
    </div>
  );
}
