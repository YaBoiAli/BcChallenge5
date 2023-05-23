# Work Day Scheduler

This is a simple web application that serves as a work day scheduler, allowing users to manage their time effectively by adding important events to their daily planner. The application utilizes third-party APIs to provide a dynamic and interactive user experience.

## User Story

```

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

```

## Implementation

The work day scheduler application follows the given user story and acceptance criteria as described above. Here is a breakdown of its implementation:

1. Displaying Current Day

Upon opening the planner, the current day is displayed at the top of the calendar. This ensures that users are aware of the current date they are scheduling events for.

2. Timeblocks for Business Hours

The application presents timeblocks for standard business hours, typically from 9 AM to 5 PM. These timeblocks allow users to schedule their events within this timeframe.

3. Color-Coded Timeblocks

Each timeblock is color-coded to indicate whether it is in the past, present, or future. This visual representation helps users easily identify the current time and distinguish between past, present, and future events.

4. Adding Events to Timeblocks

By clicking into a timeblock, users can enter an event or description for that specific time slot. This feature enables users to add important events and manage their schedule effectively.

5. Saving Events to Local Storage

After entering an event, users can click the save button associated with the timeblock to save the event text in local storage. This ensures that the events persist even after refreshing or reopening the page.

6. Persisting Saved Events

When the page is refreshed or reopened, the saved events are retrieved from local storage and displayed in the respective timeblocks. This feature allows users to access and modify their previously saved events.


![](https://github.com/YaBoiAli/BcChallenge5/blob/main/assets/img/05-third-party-apis-homework-demo.gif)

## Technologies Used

The work day scheduler application utilizes the following technologies:

- HTML: Markup language for creating the structure of the web page.
- CSS: Stylesheet language for designing the visual presentation of the web page.
- JavaScript: Programming language for implementing the interactive functionality of the application.
- Third-Party APIs: External application programming interfaces used to enhance the functionality and features of the application.

## Conclusion

The work day scheduler application provides employees with a convenient way to manage their busy schedules. By following the user story and acceptance criteria, it enables users to add, save, and view events for different time slots, ensuring effective time management.
