import { useState, useEffect } from "react";
import type { User } from "../../shared/types/User";

export function useUserById(id: string | undefined) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMassage] = useState("");

  async function fetchUserById(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      if (err instanceof Error) setMassage(err.message);
    }
  }

  useEffect(() => {
    fetchUserById(id);
  }, [id]);
  return { user, message };
}
