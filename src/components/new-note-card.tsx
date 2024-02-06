export function NewNoteCard() {
  return (
    <button className="rounded-md flex flex-col bg-slate-700 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible: ring-lime-400">
      <span className="text-sm font-medium text-slate-200">Adicionar nota</span>

      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  );
}
