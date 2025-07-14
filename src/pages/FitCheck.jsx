import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import useSuggestion from "../context/userContext";

export default function FitCheck() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);

  const { setSuggestions } = useSuggestion();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(",");
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo) {
      alert("Please upload a photo");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", dataURLtoFile(photo, "upload.jpg"));

      const [skinRes, bodyRes, faceRes] = await Promise.all([
        axios.post(
          `http://localhost:8000/api/predict/predict-skin-tone`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        ),
        axios.post(
          `http://localhost:8000/api/predict/predict-body-shape`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        ),
        axios.post(
          `http://localhost:8000/api/predict/predict-face-shape`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        ),
      ]);

      const skin_tone = skinRes.data.skin_tone;
      const body_shape = bodyRes.data.body_shape;
      const face_shape = faceRes.data.face_shape;

      const models = [
        "kurti",
        "saree",
        "festive",
        "top",
        "bottom",
        "dress",
        "accessory",
      ];

      const suggestionPromises = models.map((model) =>
        axios.post(`http://localhost:8002/api/suggestions/${model}`, {
          face_shape,
          body_shape,
          skin_tone,
        })
      );

      const suggestionResponses = await Promise.all(suggestionPromises);

      const allSuggestions = {};
      models.forEach((model, i) => {
        allSuggestions[model] = suggestionResponses[i].data.data;
      });

      setSuggestions(allSuggestions);

      navigate("/results");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4">
          Upload or Click a Photo
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'll analyze it and show you AI-powered outfit ideas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white rounded-lg shadow p-6 space-y-6"
        >
          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose or click an image:
            </label>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              required
              onChange={handlePhotoChange}
              className="block w-full text-gray-700 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
            />
            {photo && (
              <img
                src={photo}
                alt="Preview"
                className="mt-4 w-full rounded-md shadow max-h-64 object-cover"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring transition"
          >
            Get My Style Recommendations
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
