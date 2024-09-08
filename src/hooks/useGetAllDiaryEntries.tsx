import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { SUPABASE_TABLE_NAME } from "../constants";
import { SiteDiaryEntry } from "../types";

const useGetAllDiaryEntries = () => {
  const [diaryEntries, setDiaryEntries] = useState<SiteDiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const cachedData = getCacheWithExpiry("allDiaryEntries");

        if (cachedData) {
          setDiaryEntries(cachedData);
          setLoading(false);
          return;
        }

        const { data: diaryEntries, error } = await supabase
          .from(SUPABASE_TABLE_NAME)
          .select("*");

        if (error) throw error;

        setCacheWithExpiry(
          "allDiaryEntries",
          diaryEntries,
          CACHE_EXPIRATION_TIME
        );
        setDiaryEntries(diaryEntries || []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { diaryEntries, loading, error };
};

export default useGetAllDiaryEntries;

// Cache expiry time (5 minutes in milliseconds)
const CACHE_EXPIRATION_TIME = 5 * 60 * 1000;

const setCacheWithExpiry = (key: string, value: any, ttl: number) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

const getCacheWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

export const clearCache = () => {
  localStorage.removeItem("allDiaryEntries");
};
