import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space / Page Down', desc: 'Next slide' },
    { key: '← / Page Up', desc: 'Previous slide' },
    { key: 'Home / End', desc: 'First / Last slide' },
    { key: 'F', desc: 'Toggle Fullscreen presentation' },
    { key: 'N', desc: 'Toggle Presenter Guidance Notes' },
    { key: 'G', desc: 'Toggle All-Slides Grid Overview' },
    { key: 'P', desc: 'Toggle Autoplay (5s timer)' },
    { key: 'Esc', desc: 'Close modals / Exit Fullscreen' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs">
      <div className="bg-white border border-neutral-300 w-full max-w-md flex flex-col shadow-xl">
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <Keyboard className="w-4 h-4 text-red-600" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-800">
              Presentation Keyboard Navigation
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-900 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 divide-y divide-neutral-100 text-xs">
          {shortcuts.map((item, i) => (
            <div key={i} className="py-2 flex items-center justify-between">
              <span className="text-neutral-600 font-medium">{item.desc}</span>
              <kbd className="px-2 py-1 bg-neutral-100 border border-neutral-300 font-mono text-[11px] font-bold text-neutral-800">
                {item.key}
              </kbd>
            </div>
          ))}
        </div>

        <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
