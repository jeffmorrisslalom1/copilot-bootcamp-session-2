# Functional Requirements

## 1. User Accounts & Authentication

**1.1** The system shall allow users to create an account using:
- Email + password
- (Optional) OAuth providers (e.g., Google, Apple)

**1.2** The system shall allow users to log in and log out securely.

**1.3** The system shall allow users to reset their password via email.

**1.4** The system shall keep each user's data isolated, so users only see their own tasks (unless explicitly shared).

## 2. Task (To-Do) Management

**2.1** The system shall allow users to create a task with at least:
- Title (required)
- Description/notes (optional)

**2.2** The system shall allow users to edit a task (title, description, due date, etc.).

**2.3** The system shall allow users to delete a task.

**2.4** The system shall allow users to mark a task as:
- Completed
- Not completed

**2.5** The system shall allow users to set a due date and/or time for a task.

**2.6** The system shall allow users to set a priority on a task (e.g., Low / Medium / High).

**2.7** The system shall support recurring tasks, including:
- Daily
- Weekly
- Monthly
- Custom recurrence (optional)

## 3. Organization & Grouping

**3.1** The system shall allow users to group tasks into lists/projects, e.g.:
- "Work", "Personal", "Groceries"

**3.2** The system shall allow users to create, edit, and delete lists/projects.

**3.3** The system shall allow users to assign tasks to a list/project.

**3.4** The system shall support task tags/labels (optional) for additional organization.

**3.5** The system shall allow users to reorder tasks within a list via drag-and-drop or some ordering mechanism.

## 4. Views & Filtering

**4.1** The system shall provide a "Today" view that shows tasks due today.

**4.2** The system shall provide an "Upcoming" view that shows tasks due in the future.

**4.3** The system shall allow users to filter tasks by:
- Status (completed / not completed)
- Priority
- Due date range
- List / project
- Tag/label (if implemented)

**4.4** The system shall allow users to sort tasks by:
- Due date
- Creation date
- Priority
- Alphabetical (title)

**4.5** The system shall provide a search function to find tasks by title or description.

## 5. Notifications & Reminders

**5.1** The system shall allow users to set reminders for tasks (time-based).

**5.2** The system shall send a notification at the reminder time via:
- Push notification (mobile/web)
- (Optional) Email

**5.3** The system shall notify users of overdue tasks (optional but common).
