import { useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/lib/types/user";

type SessionContextProviderProps = { children: React.ReactNode };

type SessionContextType = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | null>(null);

export default function SessionContextProvider({ children }: SessionContextProviderProps) {
  const router = useRouter();

  const [ user, setUser ] = useState<User>({
    name: "",
    email: "",
    type: "C", // Default type as Client
    initials: "",
    isLogin: false,
  });

  const login = (user: User) => {
      setUser({
      name: user.name,
      email: user.email,
      type: user.type || "C", // Default to Client if type is not provided
      initials: user.initials,
      isLogin: true,
    });
    router.replace("/");
  }

  const logout = () => {
    setUser({
      name: "",
      email: "",
      type: "C", // Reset to default Client type
      initials: "",
      isLogin: false,
    });
    router.replace("/login");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (context === null) {
    throw new Error("useSession must be used within a SessionContextProvider");
  }

  return context;
};
