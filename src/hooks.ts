import { ChangeEvent, FormEvent, useState } from "react";
import { weatherOptions } from "./constants";
import { supabase } from "./supabaseClient";

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
  const [weatherConditions, setWeatherConditions] = useState(weatherOptions[0]);
  const [image, setImage] = useState<string | null>(null);
  const [instructions, setInstructions] = useState<string>("");
  const [incidents, setIncidents] = useState<string>("");
  const [resources, setResources] = useState<Resource[]>([initialResource]);
  const [visitors, setVisitors] = useState<Visitor[]>([initialVisitor]);
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

    const { data, error } = await supabase.storage
      .from("buildpass-coding-test-bucket")
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return null;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("buildpass-coding-test-bucket")
      .getPublicUrl(fileName);

    setImage(publicUrl);
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
    setImage(null);
    setInstructions("");
    setIncidents("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // This is not neccessary / normal but the network request was so fast and I wanted to show that I had thought about loading states
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const { data, error } = await supabase
      .from("BuildPass Site Diary")
      .insert([
        {
          title,
          date,
          description,
          weather: weatherConditions,
          resources,
          visitors,
          image,
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
      setUniqueId(data?.[0]?.id);
      resetForm();
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
    weatherConditions,
    setWeatherConditions,
    image,
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
