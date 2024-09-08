import React from "react";
import { breakpoints, colors, weatherOptions } from "../constants";
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
import useSiteDiaryForm from "../hooks";
import TextInput from "../components/add-diary-entry/TextInput";
import Spinner from "../components/Spinner";
import StatusUpdateCard from "../components/StatusUpdateCard";

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
  width: 100%;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// TODO: Look into ununsed imports for hooks
const SiteDiaryForm: React.FC = () => {
  const {
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
  } = useSiteDiaryForm();

  return (
    <>
      <BackgroundGlobalStyle />
      <Header />

      <DiaryLayout>
        {loading && <Spinner />}
        {successMessage && uniqueId && (
          <StatusUpdateCard
            heading="Success!"
            message={successMessage}
            uniqueId={uniqueId}
          />
        )}
        {errorMessage && (
          <StatusUpdateCard
            heading="Uh oh! Looks like something went wrong."
            message={errorMessage}
          />
        )}
        {!showForm && (
          <form onSubmit={handleSubmit}>
            <InputGroupWrapper>
              <TextInput
                id="title"
                labelText="Title"
                value={title}
                setValue={setTitle}
              />
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

export default SiteDiaryForm;
