'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type ModalOptions = {
  label?: string
}

type ModalContextType = {
  openModal: (content: React.ReactNode, options?: ModalOptions) => void
  closeModal: () => void
}

type ModalState = {
  content: React.ReactNode
  label: string
} | null

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalState>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  const openModal = useCallback(
    (content: React.ReactNode, options?: ModalOptions) => {
      lastFocused.current = document.activeElement as HTMLElement | null
      setModal({ content, label: options?.label ?? 'Окно' })
    },
    [],
  )

  const closeModal = useCallback(() => setModal(null), [])

  useEffect(() => {
    if (!modal) {
      lastFocused.current?.focus?.()
      return
    }

    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth

    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${scrollbar}px`
    }

    panelRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [modal, closeModal])

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {modal ? (
        <div
          className="animate-overlay-in fixed inset-0 z-50 flex items-end justify-center bg-ink/70 backdrop-blur-sm sm:items-center sm:p-6"
          onMouseDown={closeModal}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={modal.label}
            tabIndex={-1}
            className="animate-modal-in relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-paper shadow-2xl outline-none sm:rounded-3xl"
            onMouseDown={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Закрыть"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-muted transition-colors hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M13.5 4.5 4.5 13.5M4.5 4.5l9 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {modal.content}
          </div>
        </div>
      ) : null}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal должен быть использован вместе с ModalProvider!')
  return context
}
