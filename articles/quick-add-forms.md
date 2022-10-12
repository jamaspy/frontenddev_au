---
title: "Quick Add Forms"
date: "2020-09-21"
exerpt: "A large project I did at work with some interesting bit to it"
description: "A large project I did at work with some interesting bit to it"
tags:
  - Agridigitial
  - work
  - react
  - forms
  - tailwindcss
---

This is a brief overview of the recently released Quick Add Form feature recently introduced into the Waypath Delivery Form. This is the foundational work required to replace all of our forms with responsive npm packages that can be dropped into the app anywhere. I want to touch on the thinking behind this, the design, high-level implementation and finally the long term plan.

## What is Waypath

I’ll give a quick introduction to Wayapth to give some context to some concepts that are referenced later in the article. Waypath is a cloud-based grain management application that allows Growers to manage their inventory, contracts, deliveries, storage, payments and invoices from the office or the paddock. Each of the areas mentioned has a List, Form, and Details view. The data is entered through the form, displayed on a list and individual records can be viewed on a details screen. Basic information about your farm: farm size, field information, commodities, suppliers etc are all needed to create a record. These are currently entered through the Settings area of the application and require a step through introduction when you first enter the platform.

## Start with a Why

The Quick Form project’s initial intention was to allow a user to signup, and instantly start using the platform. Previously, to get started on Waypath the user had to leave the main screen and enter information in Settings. This disconnect from the main workflow of the application missed the chance to introduce the user to how the platform works, why we required this information and where it was used. The Quick Form points of entry are located next to the input they relate to, giving an instant connection to the initial data entry.

It's worth noting that from a DRY (Don't Repeat Yourself) point of view, I know we now have two versions of the same form. In Settings & in Deliveries. The long term goal of this project is to create a shared Typescript Library of the forms that can be dropped into the platform anywhere, and are controlled by the dimensions of the parent container to show and hide certain fields as well as dictate the layout. This adds a further Why, as we will then have one code base for the form reducing code changes, bugs and increasing scalability and deployment times.

## Reusability & Design

Agridigital is working its way through the design and implementation of a design system. We currently have a number of npm packaged components that can be imported and used in the app that take a number of props to adapt to different use cases. This is increasing our reusability and consistency across the platform. Any new component that is required, is designed in Figma, reviewed by the Design Team and then coded up to a version npm package and published. This was true for the Quick form as each one contains some new elements as well as one already being used. There are three key elements that make up the Quick Form process that are now reusable components that are outlined below with code snippets.

The Delivery Form is the most used area of the platform. So, during the design phase of Quick Forms, I took the opportunity to realign and solidify the layout of the current form. Both for consistency as well as to accommodate the + Button.

## How I did it

The core functionality is to click a button, modal shows with a form on it, enter data, data populates a form. This is a high-level overview of the approach that I took and does contain some code snippets for those who are interested

However, behind the scenes:

- User clicks button
- Specific form for that section is fetched from shared Typescript library (published to npm)
- User fills in Quick Form
- Form is validated
- New entries are made in the database
- Delivery Form is auto-populated with new data
- Linked fields are auto-populated with corresponding data
- Redux store is cleared of new data and the form is closed

**N.B The Delivery Form has a number of autocomplete fields (e.g You select a Corn Field from the Field section, the Commodity input is pre-populated with Corn.)**

## To achieve this there are several parts:

**The Button**

Sends a boolean value for quickFormOpen and string value for the title of the form to redux state to toggle the modal to show/hide, to give the title to be displayed within the modal and to fetch the correct one from the library:

```javascript
const QuickAddButton = ({ clickFn, disabled = false }: IProps) => {
  const disabledClass = disabled
    ? "bg-gray hover:text-white cursor-default"
    : "bg-midnight-blue hover:text-green";
  return (
    <button
      type="button"
      name="quick_add_button"
      onClick={clickFn}
      onKeyDown={clickFn}
      className={`${disabledClass} w-6 h-6 rounded text-white text-xl font-semibold flex items-center justify-center focus:outline-none m-0`}
    >
      +
    </button>
  );
};
```

**The PopupModal**

This is the parent wrapper for the forms that restricts the width and enforces flex-direction: "row". This sits at a high z-index and is at a fixed position:

```javascript
const QuickAddModal = ({
  form_title,
  children,
  modal_heading,
  hasDropdown,
}: IProps) => {
  const quickAddArea = (
    <div className="fixed inset-0 z-50 flex p-12">
      <div className="relative h-full w-1/3 max-w-md m-auto">
        <section
          className="rounded overflow-hidden shadow-md bg-white"
          style={{
            width: "350px",
            minHeight: `${hasDropdown ? "560px" : ""}`,
          }}
        >
          <div className="bg-midnight-blue text-white text-xl font-medium py-3 px-4 w-full">
            {modal_heading} <span className="text-green font-semibold">|</span>{" "}
            {form_title}
          </div>
          <div className="bg-white py-4 px-4 w-full">{children}</div>
        </section>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    quickAddArea,
    document?.getElementById("modal-root")
  );
};
```

**The Background Blur**

I have created a full width, full height div that creates a glass blur effect that sits with a z-index to cover the main from and highlight the Quick Form. This is a reusable component that is published to npm.

```javascript
const BlurOverlay = ({ blurLevel, zIndex }: IProps) => {
  return (
    <div
      className={`fixed m-0 p-0 w-full z-${
        zIndex ? zIndex : "10"
      } bg-white inset-0 rounded bg-opacity-50 min-h-screen h-full`}
      style={{
        backdropFilter: `blur(${blurLevel}px)`,
        WebkitBackdropFilter: `blur(${blurLevel}px)`,
      }}
    />
  );
};
```

**RenderQuickAddForm( )**

At the top level, in Form Container sits the renderQuickAddForms function. This take in all the props required including dispatches, translations, tokens, and form specific variables in order to fetch and render the required form with in the modal. I used a simple switch statement based off the title that is passed from clicking the button as it is easy scale should we have more forms and I feel switch statements are very readable.

`Form Container Level`

```javascript
{
  quickFormOpen && (
    <QuickAddModal
      form_title={quickFormName}
      modal_heading="Quick Add"
      hasDropdown={hasDropdown()}
    >
      {RenderQuickAddForms(
        quickFormName,
        history,
        apiConfig,
        externalAPI,
        baseUrl,
        apiVersions,
        orgId,
        geoId,
        token,
        translate,
        values,
        ...otherThings
      )}
      <p
        role="button"
        className="text-sm text-red text-center mt-4"
        onClick={() => {
          const formName = (quickFormName || "")
            .toLowerCase()
            .replace(" ", "_");
          trackAnalyticsEvent({
            orgId,
            event: `quick_add_discard_${formName}_form`,
          });
          dispatchSetQuickFormClosed();
        }}
      >
        Discard
      </p>
    </QuickAddModal>
  );
}
```

`The renderQuickAddForms function`

```javascript
import { Bin } from '@agridigital/forms-ts-shared.new-bin';
import { Connection } from '@agridigital/forms-ts-shared.new-connection';
import { DeliveryLocation } from '@agridigital/forms-ts-shared.new-delivery-location';
import { Farm } from '@agridigital/forms-ts-shared.new-farm';
import { Field } from '@agridigital/forms-ts-shared.new-field';
import { StorageLocation } from '@agridigital/forms-ts-shared.new-location';
import { Vehicle } from '@agridigital/forms-ts-shared.new-vehicle';
import { TJsonaModel } from 'jsona/lib/JsonaTypes';
import React from 'react';

export const RenderQuickAddForms = (
  quickFormName: string,
  history: any,
  apiConfig: any,
  externalAPI: any,
  baseUrl: string,
  apiVersions: string,
  orgId: number,
  geoId: number,
  token: string,
  translate: any,
  values: any,
  vehicleProfiles: any,
  binLocation: string,
  newFarm: any,
  quickFormOrigin: string,
  quickFormLocationName: Record<string, number>,
  dispatchSetQuickFormClosed: () => void,
  dispatchsetQuickAddFromNewStorageLocation: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchsetQuickAddToNewStorageLocation: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchSetQuickAddNewBin: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchSetQuickAddNewVehicle: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchSetQuickAddNewFarm: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchSetQuickAddNewField: (payload: void | TJsonaModel | TJsonaModel[]) => void,
  dispatchSetQuickAddNewConnection: (payload: void | TJsonaModel | TJsonaModel[]) => void
) => {
  const googleAPIKey = externalAPI.googleMappingKey;

  switch (quickFormName.toLowerCase()) {
    case 'storage location':
      return (
        <StorageLocation
          apiKey={googleAPIKey}
          apiConfig={apiConfig}
          baseUrl={baseUrl}
          apiVersions={apiVersions}
          orgId={orgId}
          geoId={geoId}
          token={token}
          closeFn={dispatchSetQuickFormClosed}
          populateFromFn={dispatchsetQuickAddFromNewStorageLocation}
          populateToFn={dispatchsetQuickAddToNewStorageLocation}
          origin={quickFormOrigin}
          history={history}
          translate={translate}
        />
      );
    case 'bin':
      return (
        <Bin
          apiKey={googleAPIKey}
          apiConfig={apiConfig}
          baseUrl={baseUrl}
          apiVersions={apiVersions}
          orgId={orgId}
          geoId={geoId}
          token={token}
          translate={translate}
          currentFormValues={values}
          closeFn={dispatchSetQuickFormClosed}
          populateFn={dispatchSetQuickAddNewBin}
          binLocation={binLocation}
          history={history}
          locationName={quickFormLocationName}
        />
      );

...All the other Forms

    default:
      break;
  }
};
```

## Summary

The above outlined the main players in the quick form saga. There are many other processes that are going on in the background to interact with the backend, populate inputs as well as validation and error handling. Some of the forms has GoogleMaps geoTagging, ABN Lookups and Infinite Scrolling, but they would need a whole article of their own to cover. Overall I think the solution is simple, scalable and robust. Backend calls are kept to a minimum and the Quick Add Forms are stripped down versions of the Settings forms, so the user only has to enter the minimum amount of data to get going but offer the core functionality (search, Google Maps etc) as their bigger Settings counterparts.

Each form has Rudderstack events attached to it, so over the coming month we will be monitoring the activity across this new function to better educate us on future improvements.

## Future Additions

As I mentioned the goal is to have a single form to be used in both Forms and Settings. This is the next phase of the project, whereby the parent container will dictate what inputs are shown and what layout that is taken. Furthermore, due to the restricted inputs on the Quick Add Form an, Advanced settings option will be added to all of the forms that will take the user to the corresponding Settings section where more intricate details can be added.

Thank you for reading I hope this was interesting and offered some ideas for your next project.
