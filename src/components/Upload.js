import React from "react";

const Upload = ({ onUpload }) => {
  const handleUpload = (event) => {
    const files = event.target.files;
    if (onUpload) {
      onUpload(files);
    }
  };

  return (
    <input
      type="file"
      accept="image/*,video/*"
      multiple
      onChange={handleUpload}
      className="mt-10 p-3 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
    />
  );
};

export default Upload;