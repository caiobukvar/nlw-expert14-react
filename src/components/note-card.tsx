import * as Dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

interface NoteCardProps {
  note: {
    id: string;
    createdAt: Date;
    content: string;
  };
  onNoteDeleted: (id: string) => void;
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  return (
    <Dialog.Root>
      {/* trigger vai agir como botão */}
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>

        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60">
          {/* ! usa -translate para ir para o lado oposto e centralizar */}
          {/* overflow-hidden faz com que o botão dentro do modal não passe do tamanho da div */}
          <Dialog.Content className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-slate-700 md:rounded-md flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute top-0 right-0 p-1.5 text-slate-400 hover:text-slate-100">
              {/* size = width e height */}
              <X className="size-5" />
            </Dialog.Close>

            {/* flex-1 > ocupa o max de espaco possivel, pode reduzir caso necessario se outro elemento precisar de espaço */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                {formatDistanceToNow(note.createdAt, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>

              <p className="text-sm leading-6 text-slate-400">{note.content}</p>
            </div>

            <button
              type="button"
              // group deixa você condicionar os filhos a funcionarem separadamente (como abaixo, underline somente no span e nao no conteúdo inteiro.)
              className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group"
            >
              Deseja{" "}
              <span
                className="text-red-400 group-hover:underline"
                onClick={() => onNoteDeleted(note.id)}
              >
                apagar esta nota
              </span>
              ?
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
