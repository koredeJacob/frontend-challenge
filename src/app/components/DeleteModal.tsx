import { ConfirmModalProps } from "../types"

const DeleteModal:React.FC<ConfirmModalProps>=({isOpen,onClose,onConfirm})=>{
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg p-6 w-80 sm:w-96"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-lg font-semibold text-gray-800">Confirm Delete</h3>
                <p className="mt-4 text-gray-600">Are you sure you want to delete this items?</p>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>

    )
}

export default DeleteModal