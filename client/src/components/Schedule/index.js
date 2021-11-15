// Teacher portal scheduling 
    // Goal 1: Teacher can create a lesson, and the selected student's event data is updated.
    // Goal 2: Teacher can select a date and see events scheduled for that date, listed by time
    // Goal 3: Implement nodemailer to send reminder emails when the lesson is created, and the day before the lesson.

// Components: Calendar, NewLesson, ScheduleView, NodeMailer(?)
// Goal1 New Lesson:

    // GQL Mutations for new event (FE & BE)
    // form for event data in NewLesson

// Goal 2: ScheduleView
    // GQL queries for finding events by date
    // See Dayplanner app homework for ideas on FE logic and UI

// Goal 3: Nodemailer
    // Function triggered by a successful new event mutation to send an Email (possibly a helper function)
    // FE logic to send a reminder email the day before

// Finishing Schedule View (editing & deleting events):

    // delete button component
    // edit button component
    // form for editing single lesson

