import { useState, useEffect } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import { SUPABASE_TABLE_NAME } from "../constants";
import { SiteDiaryEntry } from "../types";
import { supabase } from "../supabaseClient";
import { useParams } from "react-router-dom";

const useGetDiaryEntryById = () => {
  const [diaryEntry, setDiaryEntry] = useState<SiteDiaryEntry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchEntryById = async () => {
      try {
        const {
          data: diaryEntry,
          error,
        }: { data: SiteDiaryEntry | null; error: PostgrestError | null } =
          await supabase
            .from(SUPABASE_TABLE_NAME)
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;
        setDiaryEntry(diaryEntry);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchEntryById();
  }, [id]);

  return { diaryEntry, loading, error };
};

export default useGetDiaryEntryById;
