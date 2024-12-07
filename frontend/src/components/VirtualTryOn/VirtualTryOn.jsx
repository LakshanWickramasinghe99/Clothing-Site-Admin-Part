import React, { useRef, useState } from 'react';

const VirtualTryOn = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing the camera: ', error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const captureAvatar = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (videoRef.current) {
      // Set canvas size to video size
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      // Draw the video frame to the canvas
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      // Get the image data from the canvas
      const imageData = canvas.toDataURL('image/png');
      setAvatar(imageData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Virtual Try-On</h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <button
          onClick={isCameraActive ? stopCamera : startCamera}
          className={`px-4 py-2 font-semibold text-white rounded-lg transition duration-200 
            ${isCameraActive ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {isCameraActive ? 'Stop Camera' : 'Start Camera'}
        </button>
        <button
          onClick={captureAvatar}
          disabled={!isCameraActive}
          className={`px-4 py-2 font-semibold text-white rounded-lg transition duration-200 
            ${!isCameraActive ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        >
          Capture Avatar
        </button>
      </div>
      <video
        ref={videoRef}
        autoPlay
        className="border border-gray-300 rounded-lg shadow-lg w-full max-w-md"
      />
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {avatar && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Your Avatar:</h2>
          <img src={avatar} alt="Avatar" className="w-48 h-auto border border-gray-300 rounded-lg shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default VirtualTryOn;
