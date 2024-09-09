import React from "react";
import {
  BackgroundGlobalStyle,
  breakpoints,
  colors,
  weatherOptions,
} from "../constants";
import DateInput from "../components/add-diary-entry/DateInput";
import DescriptionInput from "../components/add-diary-entry/DescriptionInput";
import WeatherConditionsInput from "../components/add-diary-entry/WeatherConditionsInput";
import ImageUpload from "../components/add-diary-entry/ImageUpload";
import ResourceSection from "../components/add-diary-entry/ResourceSection";
import VisitorSection from "../components/add-diary-entry/VisitorSection";
import styled from "styled-components";
import Header from "../components/Header";
import DiaryLayout from "../components/DiaryLayout";
import SubmitButton from "../components/add-diary-entry/SubmitButton";
import useSiteDiaryForm from "../hooks/useSiteDiaryForm";
import TextInput from "../components/add-diary-entry/TextInput";
import LoadingAnimation from "../components/LoadingAnimation";
import UploadStatusCard from "../components/UploadStatusCard";

const HeadingText = styled.h1`
  color: ${colors.dark};
  margin: 0 0 20px 0;
`;

const LoadingAnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const AddDiaryEntry: React.FC = () => {
  const {
    title,
    setTitle,
    date,
    setDate,
    description,
    setDescription,
    weather,
    setWeatherConditions,
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
  } = useSiteDiaryForm();

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />
      <DiaryLayout>
        <HeadingText>Add Diary Entry</HeadingText>
        {loading && (
          <LoadingAnimationWrapper>
            <LoadingAnimation text="Submitting..." />
          </LoadingAnimationWrapper>
        )}
        {!loading && successMessage && uniqueId && (
          <UploadStatusCard message={successMessage} uniqueId={uniqueId} />
        )}
        {!loading && errorMessage && (
          <UploadStatusCard message={errorMessage} />
        )}
        {showForm && (
          <form onSubmit={handleSubmit}>
            <InputGroupWrapper>
              <TextInput
                id="title"
                labelText="Title"
                value={title}
                setValue={setTitle}
                required
              />
              <DateInput date={date} setDate={setDate} />
              <WeatherConditionsInput
                weather={weather}
                setWeatherConditions={setWeatherConditions}
                weatherOptions={weatherOptions}
              />
            </InputGroupWrapper>
            <DescriptionInput
              description={description}
              setDescription={setDescription}
            />
            <ImageUpload handleImageUpload={handleImageUpload} />
            <TextInput
              id="instructions"
              labelText="Instructions"
              value={instructions}
              setValue={setInstructions}
            />
            <TextInput
              id="incidents"
              labelText="Incidents"
              value={incidents}
              setValue={setIncidents}
            />
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
        )}
      </DiaryLayout>
    </>
  );
};

export default AddDiaryEntry;
