---
sidebar_position: 6
description: Handle navigation patterns in your application
---

# Navigation

NOAA applications often have application-specific needs for routing and navigation between internal pages. They may also need to follow certain domain-specific rules, such as being hosted on a subdomain route of an existing application. In this documentation, we'll focus on applications that are on hosted on their own domain, and from the root directory of that application’s codebase.

## Navigation Styling
NOAA applications should maintain a similar navigation style. This provides a familiar interface for users who may be switching between applications. Navigation element styles should be consistent across various platforms. 

Navigation items should always be at the highest vertical “layer” of the application. They should always overlap any other components, except for full page modals. For example, if a navigation item expands downwards, it should not appear beneath an image or some other component. This would make the navigation inaccessible and not comply with 508 compliance regulations.

Navigation should also appear different on mobile and desktop/tablet devices.

## Application Routing
In Progressive Web App (PWA) development, application routing provides a seamless user experience. The implementation of application routing can vary based on business needs. However, there are general principles that developers can follow to ensure a consistent and user-friendly navigation experience.

NOAA applications should have routes to the pages suggested in the [templates](https://designsystem.digital.gov/templates/) portion of the USWDS documentation. This creates an application structure that is both repeatable and familiar to users.

The U.S. Web Design System (USWDS) documentation provides recommended basic routes for a PWA application. These routes include:

- **404 Page.** Handling "page not found" scenarios gracefully is essential for user satisfaction. A well-designed 404 page helps users understand that the content they're looking for is not available.
- **Documentation Page.** Including documentation can help users understand the application's features and functionality. This page serves as a reference guide for users seeking information about how to use the app effectively.
- **Landing Page.** The landing page is often the first interaction users have with the application. It should be designed to capture attention, provide key information, and encourage users to explore further.
- **Authentication Page.** Secure authentication is a critical aspect of many applications. Having a dedicated authentication page ensures a smooth and secure login process for users.

NOAA applications should be designed to work seamlessly even when the user is offline. The routing mechanism should direct users to a page that doesn't depend on external API requests. It should rely solely on cached content.

The "online usage" documentation explains how the application behaves when the user is offline. This documentation typically outlines strategies for caching important assets, handling offline scenarios, and ensuring that users can still access content even without an internet connection.

In summary, effective application routing in PWA development involves careful consideration of key routes such as 404, documentation, landing, and authentication pages. Additionally, prioritizing offline use by routing to cached content enhances user experience. Developers should follow best practices and refer to relevant documentation to implement routing that aligns with both business needs and user expectations.
