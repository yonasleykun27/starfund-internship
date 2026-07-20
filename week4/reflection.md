# Week 4 Reflection — React Fundamentals

This week marked a critical milestone in our frontend engineering journey: transitioning from static HTML/CSS template templates to declarative, component-driven UI architectures with **React**. Converting **StarFund** to React has completely shifted how we think about states, properties, and layouts.

---

## 🔑 Key Learnings & Breakthroughs

### 1. Declarative vs. Imperative Programming
In vanilla JavaScript, we manually queried DOM nodes and appended children (imperative). React's declarative model lets us describe what the UI should look like based on state, and React handles updating the browser DOM. This eliminated page-refresh selectors, making component logic much cleaner.

### 2. Props vs. Stateful Reactivity
- **Props:** Learned that properties act as read-only configuration objects passed from parent components to customize child widgets (e.g. `<Hero title="..." />`).
- **State (`useState`):** Discovered how state serves as a component's memory, triggering automatic re-renders whenever values change. This was used to build dynamic toggles, progress bars, and follow counts.

### 3. Component Composition & Reuse
Through **Exercises 16 to 20**, we created a library of generic, reusable UI controls:
- **`<Table />`:** Generic tabular rows mapping arrays dynamically.
- **`<Modal />`:** Leveraged React children props to allow modal wrappers to accept any body content.
- **`<Toast />`:** Implemented a self-dismissing timer using standard timeouts.
- **`<MultiStepForm />`:** Managed complex state progressions across 3 steps.

### 4. Folder Structure & Single Source of Truth
Reorganized the codebase to follow a feature-based structure (`/components`, `/pages`, `/data`, `/assets`). Extracted all hardcoded arrays into `mockData.js`, ensuring components ingest data from a single, reliable source of truth.

---

## 📈 Growth & Future Outlook
Week 4 was a steep but highly rewarding learning curve. Moving away from files filled with static script queries to organized React pages was a massive upgrade. 

Now that the core layout components are active, we look forward to **Week 5 (Advanced React)**, where we will implement client-side routing, custom hooks, global context authentications, and live stats graphs! 🚀
