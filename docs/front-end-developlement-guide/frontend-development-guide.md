---
sidebar_position: 1
---

# So you want to build a NOAA web application..?

### **Purpose**

The purpose of this document is to serve as a technical guide to building frontend applications within the NOAA ecosystem. The goal of this guide is to enable NOAA developers to quickly build a NOAA web application frontend that mirrors the aesthetic and UX of other NOAA applications. In addition to this high level goal, by following this guide, developers will not have to decide which tech stack or developer environment configuration to use and they will be able to build a frontend experience that meets the performance, behavior, compliance, and branding requirements of NOAA.

### Outline

- [Problem Definition / What kind of NOAA applications are there and how are they used?](https://www.notion.so/DRAFT-Work-in-progress-RADFish-Frontend-Application-Development-Guide-dc3c5589b019458e8b5ab3f4293ec183?pvs=21)
  - Commercial Fishers reporting **fish catch data**
    - Description of this use case
  - Fish Dealers and Processors reporting **fish purchase data**
    - Description of this use case
  - Fishery Observers reporting **fishery stats data**
    - Description of this use case
- [What unique considerations need to be made when building a frontend application for NOAA?](https://www.notion.so/DRAFT-Work-in-progress-RADFish-Frontend-Application-Development-Guide-dc3c5589b019458e8b5ab3f4293ec183?pvs=21)
  - Offline use out at sea in absence of a network connection
  - Multi-entry forms for bulk entering of fish data
  - Region-specific behavior
  - Region-specific data points
- [Development Standards](https://www.notion.so/DRAFT-Work-in-progress-RADFish-Frontend-Application-Development-Guide-dc3c5589b019458e8b5ab3f4293ec183?pvs=21)
  - USWDS
  - NOAA Branding Guidelines and Style Guide
  - 509 Compliance
  - 18F Software Development Standards
- [Development Lifecycle](https://www.notion.so/DRAFT-Work-in-progress-RADFish-Frontend-Application-Development-Guide-dc3c5589b019458e8b5ab3f4293ec183?pvs=21)
  - Project Setup
  - Development of Application Components
  - Routing and Navigation
  - State Management
  - API Authentication/Integration
  - Testing
  - Building and Optimization
  - Deployment
  - Monitoring/Debugging
  - Maintenance and Updates

---

## **Problem Definition**

NOAA oversees a vast amount of marine activity. Between them and a number of state agencies, fishing data is collected from a variety of sources. [Typically, these sources include](https://www.fisheries.noaa.gov/national/fisheries-observers/electronic-reporting):

- Commercial Fishers reporting **fish catch data**
- Fish Dealers and Processors reporting **fish purchase data**
- Fishery Observers reporting **fishery stats data**

This data is collected across [8 different regions](https://www.noaa.gov/regions/regional-collaboration-regions) overseen by NOAA across North America.

Historically, this data has been collected using paper forms and physically transported from one party to another. The following quote from the NOAA website best captures the problems all of this creates:

> _“In every Region, there can be a complex set of data systems and reporting requirements that service a wide range of management and science objectives. For example, a vessel’s captain may be required to use ER, VMS, have an observer onboard and report data to multiple Regions (e.g., Northeast and Southeast), the Atlantic Highlight Migratory Species program, and the State where they intend to land their catch. In addition, there is typically a dealer report and potentially biological sampling data all from the same trip”_

As one can imagine, submitting paper form data physically was already an enormous burden and prone to human error. Fortunately, NOAA kicked off widespread efforts in 2021 to digitize the collection of this Fishery data.

The problem with today’s digital transformation efforts is that they were carried out in a disjointed fashion. To visualize how disjointed these data collection systems truly are, see this representation:

NOAA Data Collection:

- Regions:
  - Alaska
    - [Electronic Reporting Guidelines and Software](https://www.fisheries.noaa.gov/alaska/resources-fishing/electronic-reporting-alaska-fisheries) for Alaska
    - eLandings
    - seaLandings
  - Pacific Islands
    - Catchit Logit
  - Southeast and Caribbean
    - [Electronic Reporting Guidelines and Software](https://www.fisheries.noaa.gov/southeast/recreational-fishing/southeast-electronic-reporting-technologies) for the Southeast
    - GARFO
    - Fish Online
  - North-Atlantic
  - Central
  - West
  - Great Lakes
  - Gulf of Mexico

Many regions are still in the process of having applications built for them. Each of these applications is typically built by separate contractors using different tech stacks and different approaches. **This is problematic because every application is nearly the same thing: a web form that can collect fishing data.**

Having all of these separate applications leads to:

- Heavy and expensive maintenance burden on NOAA
- Duplicative work performed by contractors is time-consuming and expensive
- Inconsistent user experience across applications
- Inconsistent data modeling and collection across sources/regions

[A list of EVT](https://www.fisheries.noaa.gov/new-england-mid-atlantic/resources-fishing/electronic-vessel-trip-reporting-software-options) (electronic vessel trip reporting) applications used can be found here:

---

## What unique considerations need to be made when building a frontend application for NOAA?

**Application must remain fully functional offline**

A key consideration for any NOAA application, is for it to be able to be fully functional offline without a network connection. Fishermen are often on ships far away from network connection, and need to reliably store data to be uploaded to NOAA services when the app comes back online. For this reason, building with “offline first” considerations is of vital importance to NOAA web application development.

Progressive Web Applications (or PWAs) offer a robust solution for offline use at sea, by combining the benefits of a familiar app-like experience, offline access, and efficient data management. These features make PWSs well-suited for maritime environments, where connectivity is often limited or intermittent.

PWAs leverage service workers, which are scripts that run in the background independently of the main application. Service workers enable offline functionality by caching important static resources, such as HTML, CSS, and JavaScript files. This allows the PWA to continue functioning event when there’s no network connectivity.

See more about service workers [here](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

**Multi-entry forms for bulk entering of fish data**

### **Multi-entry Forms for Bulk Entering of Fish Data**

When developing web applications for NOAA, one of the requirements often encountered is the need to enter multiple sets of data efficiently. This is particularly relevant for commercial fishers, fishery observers, and other stakeholders who need to report large volumes of fish catch data. Implementing multi-entry forms in our applications streamlines this process, making data entry more efficient and user-friendly.

**What is Multi-entry Data Submission?**

Multi-entry data submission refers to the capability of a form to accept and process multiple data entries in a single submission. Instead of entering data one piece at a time, users can input various data sets at once, which is essential for bulk data like fish catch reports where users need to enter different types of fish, quantities, and related details rapidly.

**Why Implement Multi-entry in NOAA Apps?**

The nature of data collection in marine and environmental sciences often involves gathering extensive datasets that include various metrics and parameters. For users in the field or at sea, time and connectivity can be limited. Multi-entry forms address these challenges by:

- **Enhancing Efficiency:** Users save time by entering multiple data sets in one go, rather than submitting forms individually.
- **Reducing Errors:** Bulk data entry reduces the chances of errors that might occur when entering large volumes of data repeatedly.
- **Improving User Experience:** Streamlining the data entry process makes the application more user-friendly, particularly for users who regularly report large sets of data.

**How is Multi-entry Implemented in NOAA Apps?**

To facilitate multi-entry data submission, we leverage the concept of form state management within the React ecosystem, specifically using the Context API for global state management across the application. This approach allows us to maintain a cohesive and accessible state for all form inputs, validations, and submissions, making it easier to manage complex data entry requirements.

- **FormWrapper Component:** We use a **`FormWrapper`** component that acts as a higher-order component around our forms. This wrapper manages the form's state, including input fields, validations, and the submission process. It's designed to be modular and extensible, making it suitable for various forms across the application.
- **Bulk Data Handling:** The **`FormWrapper`** includes functionality to handle the submission of multiple entries, updating the application's URL with query parameters representing the bulk data entered. This feature is particularly useful for multi-step forms or when users need to review their data before final submission.
- **Computed Fields:** For entries that require calculations based on user input (e.g., computing the total price based on the number of fish and species), we implement computed input configurations. These configurations use callbacks to calculate values dynamically, ensuring that our forms can automatically update with computed data as users enter their information.
- **Validation and Submission:** The **`FormWrapper`** also handles input validation and form submission. By centralizing validation logic within the wrapper, we can ensure consistent and accurate data validation across all forms. The submission process is tailored to support multi-entry data, allowing users to submit bulk information efficiently.

In summary, implementing multi-entry forms in NOAA's web applications significantly enhances the data entry process for users, making it more efficient and user-friendly. By leveraging React's Context API and a well-structured **`FormWrapper`** component, we can manage complex data entry requirements, including bulk submissions and computed values, ensuring a seamless experience for users reporting fish data.
