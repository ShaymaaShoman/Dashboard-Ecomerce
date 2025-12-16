// src/auth/auth.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // ✅ من ملف التهيئة
import { onAuthStateChanged } from "firebase/auth"; // ✅ من firebase/auth مباشرة

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
