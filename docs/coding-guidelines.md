# Coding Guidelines

## 1. General Principles

### 1.1 Code Quality Standards

- **Write clean, readable code** - Code is read more often than it's written
- **Follow DRY principle** - Don't Repeat Yourself; extract reusable logic
- **Keep functions small and focused** - Each function should do one thing well
- **Use meaningful names** - Names should reveal intent and be self-documenting
- **Comment why, not what** - Code should be self-explanatory; comments explain reasoning

### 1.2 Code Organization

- **Organize by feature** - Group related files together (components, hooks, utilities)
- **Maintain consistent structure** - Follow the established project directory structure
- **Separate concerns** - Keep business logic separate from UI components
- **Use index files** - Create index.js files for cleaner imports

## 2. JavaScript/Node.js Standards

### 2.1 Language Features

**Use Modern ES6+ Syntax:**
- Use `const` and `let` instead of `var`
- Use arrow functions for callbacks and functional programming
- Use template literals for string interpolation
- Use destructuring for objects and arrays
- Use spread operator for copying objects/arrays
- Use async/await instead of promises chains

**Example:**

```javascript
// Good
const getUserTasks = async (userId) => {
  const tasks = await taskService.findByUserId(userId);
  return tasks.filter(task => !task.completed);
};

// Avoid
var getUserTasks = function(userId) {
  return taskService.findByUserId(userId).then(function(tasks) {
    return tasks.filter(function(task) {
      return !task.completed;
    });
  });
};
```

### 2.2 Error Handling

- Always handle errors explicitly
- Use try/catch blocks for async operations
- Provide meaningful error messages
- Log errors appropriately
- Return consistent error responses

**Example:**

```javascript
try {
  const task = await Task.findById(taskId);
  if (!task) {
    throw new Error('Task not found');
  }
  return task;
} catch (error) {
  logger.error('Error fetching task:', { taskId, error: error.message });
  throw error;
}
```

### 2.3 Async/Await Best Practices

- Always use try/catch with async/await
- Avoid mixing promises and async/await
- Use Promise.all() for parallel operations
- Handle errors at appropriate levels

## 3. React Standards

### 3.1 Component Structure

**Functional Components:**
- Use functional components with hooks (not class components)
- Keep components focused and single-purpose
- Extract complex logic into custom hooks
- Use prop destructuring for cleaner code

**Component File Structure:**

```javascript
// 1. Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css';

// 2. Helper functions (if needed)
const formatDueDate = (date) => { /* ... */ };

// 3. Component definition
const TaskItem = ({ task, onComplete, onDelete }) => {
  // Hooks
  const [isEditing, setIsEditing] = useState(false);
  
  // Event handlers
  const handleComplete = () => {
    onComplete(task.id);
  };
  
  // Render
  return (
    <div className="task-item">
      {/* JSX */}
    </div>
  );
};

// 4. PropTypes
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

// 5. Export
export default TaskItem;
```

### 3.2 Hooks Guidelines

**State Management:**
- Use `useState` for component-level state
- Use `useReducer` for complex state logic
- Keep state as local as possible
- Lift state up only when necessary

**Side Effects:**
- Use `useEffect` for side effects (API calls, subscriptions)
- Always specify dependencies array
- Clean up subscriptions and timers
- Avoid unnecessary re-renders

**Custom Hooks:**
- Extract reusable logic into custom hooks
- Prefix custom hooks with "use"
- Return arrays or objects consistently

**Example Custom Hook:**

```javascript
const useTasks = (userId) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const data = await taskAPI.fetchUserTasks(userId);
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [userId]);

  return { tasks, loading, error };
};
```

### 3.3 Props and PropTypes

- Always validate props with PropTypes
- Provide default props when appropriate
- Destructure props in component parameters
- Keep prop names descriptive and consistent

### 3.4 Conditional Rendering

- Use ternary operators for simple conditions
- Use && operator for single condition rendering
- Extract complex conditions into variables
- Avoid nested ternaries

**Example:**

```javascript
// Good
const TaskList = ({ tasks, loading }) => {
  if (loading) return <LoadingSpinner />;
  if (tasks.length === 0) return <EmptyState />;
  
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
```

## 4. Naming Conventions

### 4.1 Variables and Functions

- Use camelCase for variables and functions
- Use descriptive names that reveal intent
- Boolean variables should start with is/has/should
- Functions should be verbs or verb phrases

**Examples:**

```javascript
// Good
const userTasks = [];
const isCompleted = true;
const hasDeadline = false;
const shouldNotify = true;

const fetchUserData = () => { /* ... */ };
const handleSubmit = () => { /* ... */ };
const validateInput = () => { /* ... */ };

// Avoid
const data = [];
const flag = true;
const x = false;
```

### 4.2 Components and Classes

- Use PascalCase for component names
- Use descriptive, noun-based names
- Avoid generic names like "Manager" or "Helper"

**Examples:**

```javascript
// Good
TaskList.js
TaskItem.js
UserProfile.js
NavigationBar.js

// Avoid
List.js
Item.js
Profile.js
Nav.js
```

### 4.3 Files and Directories

- Use kebab-case for directory names
- Match component file names to component names
- Use descriptive folder names

**Examples:**

```
components/
  task-list/
    TaskList.js
    TaskList.css
    TaskList.test.js
  user-profile/
    UserProfile.js
    UserProfile.css
```

### 4.4 Constants

- Use UPPER_SNAKE_CASE for constants
- Group related constants in separate files

**Example:**

```javascript
const API_BASE_URL = 'https://api.example.com';
const MAX_TASKS_PER_PAGE = 50;
const DEFAULT_PRIORITY = 'medium';
```

## 5. API and Backend Standards

### 5.1 RESTful API Design

**Endpoint Naming:**
- Use nouns, not verbs
- Use plural nouns for collections
- Use lowercase with hyphens

**Examples:**

```
GET    /api/tasks           - Get all tasks
GET    /api/tasks/:id       - Get single task
POST   /api/tasks           - Create task
PUT    /api/tasks/:id       - Update task
DELETE /api/tasks/:id       - Delete task
```

### 5.2 Response Format

**Consistent JSON Structure:**

```javascript
// Success Response
{
  "success": true,
  "data": { /* ... */ },
  "message": "Task created successfully"
}

// Error Response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required",
    "details": { /* ... */ }
  }
}
```

### 5.3 Validation

- Validate all input data
- Use validation libraries (e.g., Joi, Yup)
- Return clear validation error messages
- Sanitize user input to prevent injection attacks

### 5.4 Middleware

- Keep middleware focused and single-purpose
- Use descriptive middleware names
- Handle errors in middleware appropriately
- Document middleware behavior

## 6. Code Style and Formatting

### 6.1 Indentation and Spacing

- Use 2 spaces for indentation
- Add blank lines between logical sections
- Keep line length under 80-100 characters
- Use consistent spacing around operators

### 6.2 Semicolons and Quotes

- Use semicolons consistently (or omit consistently)
- Use single quotes for strings (or double quotes consistently)
- Follow the project's ESLint configuration

### 6.3 Import Organization

**Order imports logically:**

```javascript
// 1. External dependencies
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// 2. Internal utilities/services
import { taskAPI } from '../services/api';
import { formatDate } from '../utils/date';

// 3. Components
import TaskItem from './TaskItem';
import Button from '../common/Button';

// 4. Styles
import './TaskList.css';
```

## 7. Security Best Practices

### 7.1 Authentication & Authorization

- Never store passwords in plain text
- Use secure session management
- Implement proper JWT token handling
- Validate user permissions on every request

### 7.2 Input Validation

- Validate and sanitize all user input
- Use parameterized queries to prevent SQL injection
- Escape output to prevent XSS attacks
- Implement rate limiting for API endpoints

### 7.3 Sensitive Data

- Never commit secrets or API keys to version control
- Use environment variables for configuration
- Keep .env files out of version control
- Rotate credentials regularly

## 8. Performance Best Practices

### 8.1 Frontend Performance

- Use React.memo() for expensive components
- Implement lazy loading for routes and components
- Debounce/throttle frequent operations (search, scroll)
- Optimize images and assets
- Use pagination for large lists

### 8.2 Backend Performance

- Implement database indexing
- Use connection pooling
- Cache frequently accessed data
- Optimize database queries
- Implement request rate limiting

## 9. Documentation Standards

### 9.1 Code Comments

- Write self-documenting code first
- Add comments for complex logic
- Document function parameters and return values
- Keep comments up-to-date with code changes

**Example:**

```javascript
/**
 * Filters tasks based on multiple criteria
 * @param {Array} tasks - Array of task objects
 * @param {Object} filters - Filter criteria
 * @param {string} filters.status - Task status (completed/pending)
 * @param {string} filters.priority - Task priority level
 * @returns {Array} Filtered tasks
 */
const filterTasks = (tasks, filters) => {
  // Implementation
};
```

### 9.2 README Files

- Include setup instructions
- Document available scripts
- Explain environment variables
- Provide API documentation
- Include troubleshooting guide

## 10. Version Control Practices

### 10.1 Git Commits

**Commit Message Format:**

```
type(scope): short description

Longer description if needed

Fixes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or tooling changes

**Examples:**

```
feat(tasks): add recurring task functionality
fix(auth): resolve token expiration issue
docs(api): update authentication endpoint documentation
```

### 10.2 Branch Naming

- Use descriptive branch names
- Follow a consistent naming convention

**Examples:**

```
feature/recurring-tasks
fix/login-token-bug
refactor/task-service
docs/api-documentation
```

### 10.3 Pull Requests

- Keep PRs focused and reasonably sized
- Write clear PR descriptions
- Reference related issues
- Request appropriate reviewers
- Respond to feedback promptly

## 11. Code Review Checklist

When reviewing code, check for:
- [ ] Code follows project style guidelines
- [ ] Functions are small and focused
- [ ] Variables and functions have meaningful names
- [ ] Error handling is implemented
- [ ] Tests are included and passing
- [ ] No security vulnerabilities
- [ ] Performance considerations addressed
- [ ] Documentation is updated
- [ ] No debugging code (console.log, etc.)
- [ ] PropTypes or TypeScript types defined
