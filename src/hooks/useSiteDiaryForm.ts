import { ChangeEvent, FormEvent, useState } from "react";
import {
  SUPABASE_BUCKET_NAME,
  SUPABASE_TABLE_NAME,
  weatherOptions,
} from "../constants";
import { supabase } from "../supabaseClient";
import { clearCache } from "./useGetAllDiaryEntries";

interface Resource {
  type: string;
  description: string;
}

interface Visitor {
  type: string;
  organization?: string;
  person?: string;
  date: string;
}

const initialResource: Resource = {
  type: "",
  description: "",
};

const initialVisitor: Visitor = {
  type: "",
  organization: "",
  person: "",
  date: "",
};

const useSiteDiaryForm = () => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [weather, setWeatherConditions] = useState(weatherOptions[0]);
  const [imagePath, setImagePath] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string>("");
  const [incidents, setIncidents] = useState<string>("");
  const [resources, setResources] = useState<Resource[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [uniqueId, setUniqueId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return null;

    const fileName = `${Date.now()}_${file.name}`;

    const { error } = await supabase.storage
      .from(SUPABASE_BUCKET_NAME)
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return null;
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from(SUPABASE_BUCKET_NAME).getPublicUrl(fileName);

    setImagePath(publicUrl);
  };

  const handleResourceChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newResources = [...resources];
    newResources[index] = { ...newResources[index], [name]: value };
    setResources(newResources);
  };

  const handleAddResource = () =>
    setResources([...resources, { ...initialResource }]);

  const handleRemoveResource = (index: number) => {
    const newResources = resources.filter((_, i) => i !== index);
    setResources(newResources);
  };

  const handleVisitorChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newVisitors = [...visitors];
    newVisitors[index] = { ...newVisitors[index], [name]: value };
    setVisitors(newVisitors);
  };

  const handleAddVisitor = () =>
    setVisitors([...visitors, { ...initialVisitor }]);

  const handleRemoveVisitor = (index: number) => {
    const newVisitors = visitors.filter((_, i) => i !== index);
    setVisitors(newVisitors);
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setWeatherConditions(weatherOptions[0]);
    setResources([initialResource]);
    setVisitors([initialVisitor]);
    setImagePath(null);
    setInstructions("");
    setIncidents("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Simulated delay to demonstrate loading state handling
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const { data, error } = await supabase
      .from(SUPABASE_TABLE_NAME)
      .insert([
        {
          title,
          date,
          description,
          weather: weather,
          resources,
          visitors,
          imagePath,
          instructions,
          incidents,
        },
      ])
      .select();

    if (error) {
      setErrorMessage(
        `Error submitting diary entry "${title}". Please try again.`
      );
      resetForm();
    } else {
      setSuccessMessage(`Diary entry "${title}" submitted successfully!`);
      resetForm();
      setUniqueId(data?.[0]?.id);
      // Clear the cache for all diary entries after successful update
      clearCache();
    }
  };

  const showForm = !loading && !successMessage && !errorMessage;

  return {
    title,
    setTitle,
    date,
    setDate,
    description,
    setDescription,
    weather,
    setWeatherConditions,
    imagePath,
    handleImageUpload,
    instructions,
    setInstructions,
    incidents,
    setIncidents,
    resources,
    handleResourceChange,
    handleAddResource,
    handleRemoveResource,
    visitors,
    handleVisitorChange,
    handleAddVisitor,
    handleRemoveVisitor,
    loading,
    successMessage,
    errorMessage,
    handleSubmit,
    showForm,
    uniqueId,
  };
};

export default useSiteDiaryForm;
