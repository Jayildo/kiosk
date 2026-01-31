import { useRegisterSW } from 'virtual:pwa-register/react';

export default function ReloadPrompt() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white rounded-2xl shadow-xl border-2 border-sand-200 p-5 max-w-xs">
      <p className="text-sm text-gray-700 font-semibold mb-3">
        New version available. Reload to update.
      </p>
      <button
        onClick={() => updateServiceWorker(true)}
        className="px-5 py-2 bg-duo-400 text-white rounded-xl text-sm font-bold hover:bg-duo-500 transition-all btn-duo border-b-4 border-duo-600"
      >
        Reload
      </button>
    </div>
  );
}
