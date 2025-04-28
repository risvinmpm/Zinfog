import React from 'react';

const SuccessPopup = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 bg-opacity-60">
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
      <h3 className="text-lg font-semibold mb-2">Success!</h3>
      <p className="mb-4">Your request has been submitted successfully.</p>
      <button
        onClick={onClose}
        className="mt-2 px-4 py-2 bg-[#00A19D] text-white rounded hover:bg-gray-700"
      >
        Close
      </button>
    </div>
  </div>
);

export default SuccessPopup;
