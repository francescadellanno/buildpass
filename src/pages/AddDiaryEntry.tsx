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
import Button from "../components/Button";

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

const SuccessText = styled.div`
  background-color: ${colors.white};
  border: 2px solid ${colors.primary};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  color: ${colors.dark};
  padding: 20px;
  text-align: center;
  font-size: 1rem;
`;

const SuccessButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
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
        {!loading && successMessage && (
          <>
            <SuccessText>
              {successMessage}Diary entry "${title}" submitted successfully!
            </SuccessText>
            <SuccessButtonWrapper>
              {/* TODO Update this to include correct id from db */}
              <Button
                text="View uploaded report"
                path={`/diary-entry/${uniqueId}`}
              />
              <Button text="+ Add another report" path="/add-diary-entry" />
            </SuccessButtonWrapper>
          </>
        )}
        {!loading && errorMessage && <div>{errorMessage}</div>}
        {showForm && (
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
