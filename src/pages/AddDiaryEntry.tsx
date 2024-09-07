import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { breakpoints, colors, weatherOptions } from "../constants";
import TitleInput from "../components/add-diary-entry/TitleInput";
import DateInput from "../components/add-diary-entry/DateInput";
import DescriptionInput from "../components/add-diary-entry/DescriptionInput";
import WeatherConditionsInput from "../components/add-diary-entry/WeatherConditionsInput";
import ImageUpload from "../components/add-diary-entry/ImageUpload";
import ResourceSection from "../components/add-diary-entry/ResourceSection";
import VisitorSection from "../components/add-diary-entry/VisitorSection";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import DiaryLayout from "../components/DiaryLayout";
import SubmitButton from "../components/add-diary-entry/SubmitButton";
import { supabase } from "../supabaseClient";

const BackgroundGlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    height: 100%;
    background-color: ${colors.lightest};
  }

  #root {
    height: 100%;
  }
`;

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface Resource {
  type: string;
  description: string;
}

const initialResource: Resource = {
  type: "",
  description: "",
};

interface Visitor {
  type: string;
  organization?: string;
  person?: string;
  date: string;
}

const initialVisitor: Visitor = {
  type: "",
  organization: "",
  person: "",
  date: "",
};

const SiteDiaryForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [weatherConditions, setWeatherConditions] = useState(weatherOptions[0]);
  const [image, setImage] = useState<string | null>(null);
  const [resources, setResources] = useState<Resource[]>([initialResource]);
  const [visitors, setVisitors] = useState<Visitor[]>([initialVisitor]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("$$before that!");
    const file = event.target.files?.[0];
    console.log("$$file", file);
    // Check if a file was uploaded
    if (!file) return;

    // Generate a unique file name
    const fileName = `${Date.now()}_${file.name}`;

    // Upload the file to Supabase Storage
    const { data, error } = await supabase.storage
      .from("buildpass-coding-test-bucket") // Replace with your Supabase bucket name
      .upload(fileName, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return null;
    }
    // Get the public URL of the uploaded file
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("buildpass-coding-test-bucket")
      .getPublicUrl(fileName);
    console.log("$$public url:", publicUrl);
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

  const handleAddResource = () => {
    setResources([...resources, { ...initialResource }]);
  };

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

  const handleAddVisitor = () => {
    setVisitors([...visitors, { ...initialVisitor }]);
  };

  const handleRemoveVisitor = (index: number) => {
    const newVisitors = visitors.filter((_, i) => i !== index);
    setVisitors(newVisitors);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      title,
      date,
      description,
      weatherConditions,
      resources,
      visitors,
      image,
    });

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
          // { instructions },
          image,
        },
      ])
      .select();
  };

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <form onSubmit={handleSubmit}>
          <InputGroupWrapper>
            <TitleInput title={title} setTitle={setTitle} />
            <DateInput date={date} setDate={setDate} />
            <WeatherConditionsInput
              weatherConditions={weatherConditions}
              setWeatherConditions={setWeatherConditions}
              weatherOptions={weatherOptions}
            />
          </InputGroupWrapper>
          <DescriptionInput
            description={description}
            setDescription={setDescription}
          />

          <ImageUpload handleImageUpload={handleImageUpload} />
          <ResourceSection
            resources={resources}
            handleResourceChange={handleResourceChange}
            handleAddResource={handleAddResource}
            handleRemoveResource={handleRemoveResource}
          />
          <VisitorSection
            visitors={visitors}
            handleVisitorChange={handleVisitorChange}
            handleAddVisitor={handleAddVisitor}
            handleRemoveVisitor={handleRemoveVisitor}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>
      </DiaryLayout>
    </>
  );
};

export default SiteDiaryForm;
