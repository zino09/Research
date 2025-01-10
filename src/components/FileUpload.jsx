import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        const response = await axios.post("/api/upload/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
        });
        alert(`File "${file.name}" uploaded successfully!`);
      } catch (error) {
        if (error.response) {
          // Server responded with a status other than 200 range
          setError(`Upload failed: ${error.response.data.message}`);
        } else if (error.request) {
          // Request was made but no response received
          setError("Upload failed: No response from server.");
        } else {
          // Something else happened
          setError(`Upload failed: ${error.message}`);
        }
      }
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {file && <p>Selected File: {file.name}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default FileUpload;