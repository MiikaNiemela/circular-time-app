This is a list of the requirements for the application.
The requirements are divided into two categories: functional and non-functional requirements.
The functional requirements describe the behavior of the application, described in this file, while the non-functional requirements describe the quality attributes of the application and are describen in code-generation-instructions.md in this same directory.

This application is a React Native application, built with Expo.
The application is a mobile application that shows the time line of a day, week, month or a year as a circle.

The application should be able to:

- Show the time line of a day, week, month or a year as a graphical circle.
- The circle should be divided into segments, each segment representing a time period.
- The segments should be arranged in the circle in a chronological order, starting from the top. For a day the top is midnight, for a week the top is Sunday midnight, for a month the top is the first day of the month at midnight, and for a year the top is the first day of the year at midnight.
- Time line is filled in with events from the user's calendars.
- The calendar events are feched from the user's calendar in Outlook and Google Calendar.
- Fetched data is stored in the application's local storage for offline use. Past data is not removed from the local storage.
- Fetched data for past events is not refreshed unless the user explicitly requests it.
- Future events are refreshed automatically one day from the current date, every time the application is opened, or when the user requests it. A day is defined as time from midnight to midnight on the same caledar day.
- For now the application shall have two views: the time line view and the settings view.
- The calendar data requires authentication with the user's Outlook and Google Calendar accounts.
- Only authenticated calendars are shown in the time line view.

The application should have the following features:

- In the time line view the user can see the time line of a day, week, month or a year as a circle.
- User is able to select between the different time line views.
- In the settings view user can authenticate with their Outlook and Google Calendar accounts.
- In the settings view the user can select the calendars to be shown in the time line view.
- In the time line view user can select the day, week, month or year to be shown in the time line.
- If user selects to see a time period to which no data was fetchet, that time is show as "unknown" in the time line.
