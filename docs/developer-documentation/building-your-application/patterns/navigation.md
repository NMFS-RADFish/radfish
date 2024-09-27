---
sidebar_position: 6
description: Handle navigation patterns in your application
---

# Navigation

A NOAA application can often have various, application specific needs for routing and navigation between internal pages. It may also need to follow certain domain specific rules when needed (ie, be hosted on a subdomain route of an existing application). For the purposes of this documentation, we will focus primarily on the situation where an application is hosted on it’s own domain, and from the root directory of that application’s codebase.

It is important for NOAA to maintain a similar navigation style between it’s collection of applications in order to provide a familiar interface for users that may be switching between applications. Styles of navigation elements should be consistent across various platforms, and each application should have at the bare minimum, routes to the suggested pages that the USWDS guidelines suggest in the [templates](https://designsystem.digital.gov/templates/) portion of their Design System Documentation. This will allow a foundational application structure that is both repeatable and familiar to users.

Generally speaking, navigation items should always be at the highest vertical “layer” of the application, and should always overlap any other components, with exception of full page modals. For instance, if a navigation item expands downwards, it should not be layered beneath a hero image or some other component. This would make the Navigation inaccessible and not comply with 508 compliance regulations.

Navigation should also appear different on both mobile and desktop/tablet devices.

### Application Routing

In the context of Progressive Web App (PWA) development, application routing plays a crucial role in providing users with a seamless and engaging experience. The implementation of application routing can vary based on business needs, but there are general principles and expected patterns that developers follow to ensure a consistent and user-friendly navigation experience.

The U.S. Web Design System (USWDS) documentation provides valuable insights into recommended basic routes for a PWA application. These routes include:

1. **404 Page:** Handling page not found scenarios gracefully is essential for user satisfaction. A well-designed 404 page helps users understand that the content they are looking for is not available.
2. **Documentation Page:** Including a dedicated page for documentation can enhance user understanding of the application's features and functionality. This page serves as a reference guide for users seeking information about how to use the app effectively.
3. **Landing Page:** The landing page is often the first interaction users have with the application. It should be designed to capture attention, provide key information, and encourage users to explore further.
4. **Authentication Page:** Secure authentication is a critical aspect of many applications. Having a dedicated authentication page ensures a smooth and secure login process for users.

In addition, offline functionality is a key consideration. The application should be designed to work seamlessly even when the user is offline. To address this, the routing mechanism should direct users to a page that doesn't depend on external API requests and relies solely on cached content.

Referencing the "online usage" portion of the developer documentation is crucial for understanding how the application behaves when the user is offline. This documentation typically outlines strategies for caching important assets, handling offline scenarios, and ensuring that users can still access meaningful content even without an internet connection.

In summary, effective application routing in PWA development involves careful consideration of key routes such as 404, documentation, landing, and authentication pages. Additionally, prioritizing offline use by routing to cached content during periods of no internet connectivity enhances the overall user experience. Developers should follow best practices and refer to relevant documentation to implement routing that aligns with both business needs and user expectations.

---
