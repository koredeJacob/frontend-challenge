export interface Todo{
    item: string
    id: number
    isComplete: boolean
}

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
