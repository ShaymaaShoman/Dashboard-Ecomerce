import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

 return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-rose-300">
    <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
      
      {/* Logo / Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          💖
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Sign in to access your dashboard
      </p>

      {/* Button */}
      <button
        onClick={handleLogin}
        className="
          w-full flex items-center justify-center gap-3
          bg-gradient-to-r from-pink-500 to-rose-500
          text-white py-3 rounded-xl font-semibold
          shadow-lg hover:scale-[1.02] hover:shadow-xl
          transition-all duration-300
        "
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.6 20.4H42V20H24v8h11.3C33.7 32.5 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.2-.4-3.6z"
          />
          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.5 16 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35.5 26.7 36 24 36c-5.3 0-9.7-3.6-11.3-8.5l-6.5 5C9.4 39.6 16.1 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.6 20.4H42V20H24v8h11.3c-.8 2.1-2.3 3.9-4.2 5.2l6.3 5.3C36.9 41.4 44 36 44 24c0-1.3-.1-2.2-.4-3.6z"
          />
        </svg>

        Sign in with Google
      </button>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400 mt-6">
        Secure login powered by Google
      </p>
    </div>
  </div>
);

}
