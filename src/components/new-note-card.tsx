import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, useState } from "react";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }
  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col text-left bg-slate-700 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60">
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] w-full bg-slate-700 rounded-md flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute top-0 right-0 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button
                    className="text-md hover:underline text-lime-400"
                    onClick={() => handleStartEditor()}
                  >
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="text-md hover:underline text-lime-400"
                    onClick={() => handleStartEditor()}
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={(e) => handleContentChange(e)}
                />
              )}
            </div>

            <button
              type="button"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 font-medium hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
