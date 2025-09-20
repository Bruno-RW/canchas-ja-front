import { useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/lib/types/user";
import SessionContext from "@/context/SessionContext";

interface SessionContextProviderProps { 
  children: React.ReactNode
};

const SessionContextProvider: React.FC<SessionContextProviderProps> = ({ children }) => {
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
};

export default SessionContextProvider;