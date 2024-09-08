import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { SUPABASE_TABLE_NAME } from "../constants";
import { SiteDiaryEntry } from "../types";

// Cache expiry time (5 minutes in milliseconds)
const CACHE_EXPIRATION_TIME = 5 * 60 * 1000;

// Utility function to set localStorage with an expiry time
const setCacheWithExpiry = (key: string, value: any, ttl: number) => {
  const now = new Date();
  const item = {
    value: value, // The actual data
    expiry: now.getTime() + ttl, // Expiry time (current time + TTL in ms)
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// Utility function to get localStorage with expiry check
const getCacheWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    // If item is expired, remove it and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};

// Clear cache when data is updated elsewhere in the app
export const clearCache = () => {
  localStorage.removeItem("supabaseData");
};

const useSupabaseData = () => {
  const [data, setData] = useState<SiteDiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Check if cached data exists and is still valid
        const cachedData = getCacheWithExpiry("supabaseData");

        if (cachedData) {
          console.log("Using cached data");
          setData(cachedData);
          setLoading(false);
          return;
        }

        // Fetch fresh data from Supabase if no valid cache exists
        console.log("Fetching fresh data");
        const { data: tableData, error: fetchError } = await supabase
          .from(SUPABASE_TABLE_NAME)
          .select("*");

        if (fetchError) throw fetchError;

        // Store fresh data in local storage with expiry
        setCacheWithExpiry("supabaseData", tableData, CACHE_EXPIRATION_TIME);

        setData(tableData || []); // Ensure data is always an array
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useSupabaseData;
