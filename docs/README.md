```mermaid
%% filepath: /Users/miika/Code/rnTimer/docs/component-diagram.md
%% Expanded Component Diagram for the rnTimer Application

graph TD
    A[App] --> B[Circle Component]
    A[App] --> C[MultiCircle Component]
    A[App] --> D[InteractiveSvg Component]
    A[App] --> F[CalendarDataProvider]
    B[Circle Component] --> E[Slice Interface]
    C[MultiCircle Component] --> B[Circle Component]
    D[InteractiveSvg Component] --> B[Circle Component]
    F[CalendarDataProvider] --> G[GoogleCalendarService]
    F[CalendarDataProvider] --> H[OutlookCalendarService]
    F[CalendarDataProvider] --> I[LocalStorageService]
    F[CalendarDataProvider] --> J[CalendarEvent]
    G[GoogleCalendarService] --> J[CalendarEvent]
    H[OutlookCalendarService] --> J[CalendarEvent]
    I[LocalStorageService] --> J[CalendarEvent]
```

### Explanation of the New Components:

- **CalendarDataProvider**: A component responsible for fetching, processing, and providing calendar data to the views.
- **GoogleCalendarService**: A service for fetching calendar events from Google Calendar.
- **OutlookCalendarService**: A service for fetching calendar events from Outlook Calendar.
- **LocalStorageService**: A service for storing and retrieving calendar data from local storage.
- **CalendarEvent**: A typed data structure representing a calendar event.

### Integration with Existing Components:

- The `App` component interacts with the `CalendarDataProvider` to fetch and provide calendar data to the views.
- The `CalendarDataProvider` uses `GoogleCalendarService`, `OutlookCalendarService`, and `LocalStorageService` to fetch and store calendar events.
- The `Circle Component` and `MultiCircle Component` use the `CalendarEvent` data provided by the `CalendarDataProvider` to render the time line views.

This expanded diagram provides a more comprehensive view of the application's architecture, including the components responsible for handling calendar data. If you have any specific details or additional components to include, please let me know!

### Explanation of the New Components:

- **CalendarDataProvider**: A component responsible for fetching, processing, and providing calendar data to the views.
- **GoogleCalendarService**: A service for fetching calendar events from Google Calendar.
- **OutlookCalendarService**: A service for fetching calendar events from Outlook Calendar.
- **LocalStorageService**: A service for storing and retrieving calendar data from local storage.
- **CalendarEvent**: A typed data structure representing a calendar event.

### Integration with Existing Components:

- The `App` component interacts with the `CalendarDataProvider` to fetch and provide calendar data to the views.
- The `CalendarDataProvider` uses `GoogleCalendarService`, `OutlookCalendarService`, and `LocalStorageService` to fetch and store calendar events.
- The `Circle Component` and `MultiCircle Component` use the `CalendarEvent` data provided by the `CalendarDataProvider` to render the time line views.

This expanded diagram provides a more comprehensive view of the application's architecture, including the components responsible for handling calendar data. If you have any specific details or additional components to include, please let me know!
