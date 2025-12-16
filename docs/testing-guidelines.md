# Testing Guidelines

## 1. Testing Philosophy

### 1.1 Core Principles

- **Write tests first when possible** - Follow TDD principles for new features
- **Test behavior, not implementation** - Focus on what the code does, not how it does it
- **Maintain test independence** - Each test should run in isolation without dependencies on other tests
- **Keep tests simple and readable** - Tests should serve as documentation for the code

### 1.2 Testing Pyramid

Follow the testing pyramid approach:

```
        /\
       /E2E\
      /------\
     /Integration\
    /--------------\
   /   Unit Tests   \
  /------------------\
```

- **70% Unit Tests** - Test individual functions, components, and modules
- **20% Integration Tests** - Test interactions between components/modules
- **10% E2E Tests** - Test complete user workflows

## 2. Unit Testing

### 2.1 Frontend Unit Tests

**What to Test:**
- Individual React components in isolation
- Component props and state management
- User interactions (clicks, input changes)
- Conditional rendering logic
- Helper functions and utilities

**Testing Tools:**
- Jest as the test runner
- React Testing Library for component testing
- Mock external dependencies (API calls, browser APIs)

**Example Test Structure:**

```javascript
describe('TaskItem', () => {
  it('should render task title correctly', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should mark task as complete when checkbox is clicked', () => {
    // Test implementation
  });
});
```

### 2.2 Backend Unit Tests

**What to Test:**
- Individual route handlers
- Business logic functions
- Data validation and sanitization
- Error handling
- Utility functions

**Testing Practices:**
- Mock database connections
- Mock external services (email, notifications)
- Test edge cases and error conditions
- Verify input validation

**Example Test Structure:**

```javascript
describe('Task API', () => {
  describe('POST /tasks', () => {
    it('should create a new task with valid data', async () => {
      // Test implementation
    });

    it('should return 400 when title is missing', async () => {
      // Test implementation
    });
  });
});
```

### 2.3 Unit Test Requirements

- **Minimum Coverage Target**: 80% code coverage for critical paths
- **Test File Naming**: `*.test.js` or `*.spec.js`
- **Test Location**: Place tests in `__tests__` directory or co-located with source files

## 3. Integration Testing

### 3.1 Frontend Integration Tests

**What to Test:**
- Component interaction workflows
- State management across multiple components
- API integration with backend
- Routing and navigation
- Form submission flows

**Best Practices:**
- Use real API calls with test backend or mocked API server
- Test data flow between parent and child components
- Verify side effects (localStorage, cookies)

### 3.2 Backend Integration Tests

**What to Test:**
- Complete API endpoints with database
- Authentication and authorization flows
- Multi-step business processes
- Database transactions
- Middleware chains

**Best Practices:**
- Use test database or in-memory database
- Reset database state between tests
- Test API contracts (request/response formats)

## 4. End-to-End Testing

### 4.1 E2E Test Scenarios

**Critical User Flows to Test:**
1. User registration and login
2. Create, edit, and delete a task
3. Mark task as complete/incomplete
4. Create and manage lists/projects
5. Filter and search tasks
6. Set reminders and receive notifications

### 4.2 E2E Best Practices

- Test in production-like environment
- Use realistic test data
- Test across different browsers (if applicable)
- Keep E2E tests focused on happy paths and critical failures
- Run E2E tests in CI/CD pipeline

### 4.3 E2E Tools (Recommended)

- Playwright or Cypress for browser automation
- Consider testing on multiple viewport sizes (mobile/desktop)

## 5. Test Data Management

### 5.1 Test Data Principles

- **Use factories or fixtures** for consistent test data
- **Avoid hardcoded IDs** - generate them dynamically
- **Clean up test data** after each test
- **Use meaningful test data** that represents real scenarios

### 5.2 Example Test Data Structure

```javascript
const mockTask = {
  id: 'test-task-1',
  title: 'Complete project documentation',
  description: 'Write comprehensive docs',
  dueDate: '2025-12-20',
  priority: 'high',
  status: 'not-completed',
  userId: 'test-user-1'
};
```

## 6. Mocking and Stubbing

### 6.1 When to Mock

- External APIs and services
- Database connections in unit tests
- Time-dependent functions (Date.now(), setTimeout)
- Browser APIs (localStorage, fetch)
- Authentication services

### 6.2 Mocking Best Practices

- Keep mocks simple and focused
- Document why something is mocked
- Avoid over-mocking - test real integrations when possible
- Update mocks when API contracts change

## 7. Testing Specific Features

### 7.1 Authentication Testing

- Test login with valid credentials
- Test login with invalid credentials
- Test password reset flow
- Test session management and token refresh
- Test authorization (access control)

### 7.2 Task Management Testing

- Test CRUD operations for tasks
- Test validation rules (required fields, formats)
- Test edge cases (empty lists, maximum limits)
- Test concurrent operations (if applicable)

### 7.3 Filtering and Search Testing

- Test each filter option independently
- Test combined filters
- Test search with various queries
- Test empty results scenarios

### 7.4 Notifications Testing

- Test reminder creation
- Test notification delivery (mock notification service)
- Test overdue task notifications
- Test notification preferences

## 8. Performance Testing

### 8.1 Performance Test Cases

- Test app performance with large datasets (100+ tasks)
- Test API response times
- Test rendering performance with many components
- Identify and test potential bottlenecks

### 8.2 Performance Metrics

- API endpoints should respond in < 200ms
- Page load time should be < 2 seconds
- UI interactions should feel responsive (< 100ms feedback)

## 9. Accessibility Testing

### 9.1 A11y Requirements

- Test keyboard navigation
- Test screen reader compatibility
- Test focus management
- Test ARIA labels and roles
- Verify color contrast ratios

### 9.2 A11y Testing Tools

- Jest-axe for automated accessibility testing
- Manual testing with screen readers
- Browser accessibility dev tools

## 10. Continuous Integration

### 10.1 CI/CD Testing Requirements

- All tests must pass before merging
- Run tests on every pull request
- Run full test suite on main branch
- Generate and publish coverage reports

### 10.2 Test Execution Order

1. Linting and code formatting checks
2. Unit tests (fastest feedback)
3. Integration tests
4. E2E tests (slowest, run last)

## 11. Test Maintenance

### 11.1 Maintenance Best Practices

- **Remove obsolete tests** when features are removed
- **Update tests** when requirements change
- **Refactor tests** to reduce duplication
- **Review test failures** promptly and fix flaky tests
- **Keep test dependencies updated**

### 11.2 Handling Flaky Tests

- Identify root cause (timing issues, race conditions)
- Add proper wait conditions
- Isolate test dependencies
- Consider quarantining until fixed

## 12. Code Review Testing Checklist

When reviewing code, verify:
- [ ] New features have corresponding tests
- [ ] Tests cover edge cases and error conditions
- [ ] Tests are readable and well-documented
- [ ] No commented-out or skipped tests without explanation
- [ ] Test names clearly describe what is being tested
- [ ] Mocks and fixtures are appropriate
- [ ] Tests follow project conventions
