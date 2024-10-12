# Timer App in React

## Objective  
Build a simple timer app with start, pause, reset, and editable time functionality.

---

## Steps:

### 1. **State Management**
   - Use `useState` to track:
     - `time` (in seconds)
     - `isRunning` (timer status)
     - `editingField` (part of the time being edited)
     - `editValue` (value being edited)

### 2. **Countdown Logic**
   - Implement a `useEffect` that updates the `time` every second when the timer is active.

### 3. **Editable Time**
   - Allow users to click on hours, minutes, or seconds to edit that specific part of the time.

### 4. **Input Handling**
   - Ensure inputs are limited to two digits (hours, minutes, seconds).

### 5. **Controls**
   - Provide buttons for:
     - Starting/pausing the timer.
     - Resetting the timer.


## Goal:  
- Implement the timer with functionality for start, pause, and reset.
- Allow users to edit the time by clicking and updating individual time components.


### Reference UI:

![Image](https://utfs.io/f/A8JZzw0Laf9jIdtTO6cePx23SwhNWToiuOQZjdtg8BmYU5GK)
