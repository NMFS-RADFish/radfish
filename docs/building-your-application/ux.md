RADFish Offline UX Vision

Assumptions

- It's rare for a user to need to go back and edit data submitted on a past trip while out at sea on a current trip
- It's rare for a user to need to read data entered on a previous trip while out at sea on a current trip
- It's common for a user to enter data for a current trip while out at sea
- It's common for a user to pickup their device, enter some data, put it down / shut it off, pick it up later / turn it on, and enter more data
- Users will be on a wide range of devices and may not necessarily have the latest browsers available

Goals

- Make it possible for users to use their app(s) to enter form data while offline
- Make it possible for users to save drafts of their form entries so that they may come back to them later
- Allow users to choose when drafts are submitted and which ones will be submitted

Non Goals

- To support caching/displaying of previously submitted form data that was fetched from the backend while online
- To support offline for devices not using the latest browsers that cooperate with IndexDB and PWAs

User flow:

1. User accesses their NOAA app by clicking on button that has been installed on their home screen as a PWA
2. User logs into a NOAA application on their tablet while at sea
3. Despite being offline, the user can successfully open the app and see button(s) that allow them to open various data entry views.
4. For each of these views, there is a list view (the data shown in these lists when offline should only be data that was entered during this current offline session ie: "Drafts". Requests entered prior to the last online occurrence should have been synced to the backend and removed from the local DB). The list view should always be a merged list resulting from the drafts saved locally (displayed at the top of the list) and the results fetched from the API.
5. From this list of "Drafts" the user can either click into a draft to modify/delete/submit it, or they can click "New Entry" to open a clean draft for them to work on
6. When working on a "Draft", each user input is saved to the draft object in an event-driven fashion (via onChange or similar handler)
7. The user may close the app, shut down their device, or otherwise leave a "draft", knowing that it will be saved when they come back without having to manually hit a "save" button
8. When online, the app surfaces a button for submitting all drafts to the server. Because this is a bulk action, the app surfaces a confirmation modal to ensure that the user does indeed want to submit all drafts. Each draft that will be submitted is listed individually in the modal
9. In the even that the user wants to submit drafts individually, they may do so via the list view. Each row that contains a draft will have a "Submit draft" button. Upon clicking this button, the chosen draft will be posted to the backend
10. Drafts that are submitted to the backend successfully are deleted from the local DB

IndexDB Models
Drafts

- FormEntry JSON
- CreatedAt
- UpdatedAt

Tickets

- Build a route handler that allows the user to navigate from the demo table view to the demo form
- Setup local DB with Draft model
- Build hook that reads from from localDB. Tie this into demo form, ensuring it fetches local drafts and adds them to the table list view
- Build event handler that writes to localDB. Tie this into demo form, ensuring that each new user input results in a new or updated Draft instance in the localDB
- Add "Draft" state to Table cells, making it clear which rows are drafts vs which have already been saved to the backend
- Add "Submit Draft" button to the Table list view on rows that are drafts
- Have "Submit" button on new form change to "Submit Draft" if the user is offline. Ensure that latest copy of draft is in localDB and route user to the Table list view
