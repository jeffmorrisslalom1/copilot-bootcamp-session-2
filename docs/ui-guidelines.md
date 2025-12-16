# UI Guidelines

## 1. Overall Visual Style

### 1.1 Layout

- Use clean, minimal spacing (8px base grid: 8/16/24/32).
- Avoid clutter — keep only the essential elements visible.
- Prefer single-column layouts on mobile and two-panel layouts on desktop.

### 1.2 Color System

Use a 3-tier color structure:

| Role | Description |
|------|-------------|
| Primary Color | Used for CTAs, new-task button, highlighted elements |
| Secondary Color | Used for chips, tags, accents |
| Neutral Palette | Used for backgrounds, text, dividers, cards |

Neutral colors should dominate the interface so tasks feel easy to scan.

**Accessibility:**
- Maintain 4.5:1 contrast ratio for text and important UI elements.

## 2. Typography

### 2.1 Font Hierarchy

Use a simple 3-level structure:

| Level | Usage |
|-------|-------|
| H1/H2 | Section titles ("Today", "Upcoming", "Work List") |
| Body Large | Task titles |
| Body Small / Caption | Notes, due dates, subtasks |

### 2.2 Guidelines

- Task titles must be legible at a glance — avoid thin weights.
- Use consistent line height (1.4–1.5) for readability.
- Truncate long titles with … and reveal full text on expand.

## 3. Task List UI Guidelines

### 3.1 Task Item Structure

Every task should follow a predictable pattern:

```
[ ✓ ] Task Title  
     [Due Date Chip] [Priority] (optional labels)
```

### 3.2 Interaction Zones

- **Left:** checkbox / completion toggle
- **Center:** title + metadata
- **Right:** overflow menu ("⋯") for actions

**Rule:** Never hide essential actions more than 1 interaction deep.

### 3.3 Completed Task Styling

- Dimmed text (60% opacity)
- Strikethrough title
- Move to bottom of list (unless filtered)

## 4. Empty States

Each major view should have a high-quality empty state:

**Example:**

```
"No tasks for today 🎉"
Add a cheerful illustration and CTA: "Add your first task".
```

**Why?**
- ✔ Gives guidance
- ✔ Prevents confusion
- ✔ Makes the app feel welcoming

## 5. Buttons & CTAs

### 5.1 Add Task Button

- Floating action button (mobile)
- Fixed top-right button (desktop)
- It should be the most visually distinct element.

### 5.2 Button Style Rules

- **Primary buttons:** bold color + medium corner radius
- **Secondary:** outlined or subtle
- **Destructive:** red tone, confirm dialog

**Spacing:**
- Use 16px padding horizontal, 10–12px vertical inside buttons.

## 6. Forms & Inputs

### 6.1 Task Creation Form

Inputs must be simple:
- Task title (required)
- Optional fields collapsed behind "More options"
  - Due date picker
  - Priority selector
  - Notes description

### 6.2 Input Behavior

- Validate on blur, not on every keystroke
- Use clear labels, not placeholders
- Use helper text for any optional clarifications

## 7. Navigation System

### 7.1 Mobile Navigation

Bottom tab bar:
- Today
- Upcoming
- Lists
- Settings

### 7.2 Desktop Navigation

Left sidebar:
- Today
- Upcoming
- All Tasks
- Lists
- Settings

Sidebar collapses to icons when screen width is narrow.

### 7.3 Navigation Rules

- Tabs should show focused state and hover state
- Use icons + labels always (never icons alone unless collapsed)
