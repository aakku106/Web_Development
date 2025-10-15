# Practice Set: React `memo` and `useMemo`

1. **Prevent unnecessary re-render**

   * Create a parent component with a counter and a child component that displays a name.
   * Use `React.memo` to ensure the child component **does not re-render** when the counter changes.

2. **Cache expensive calculation**

   * Build a component that calculates the factorial of a number.
   * Use `useMemo` so the factorial is only recalculated when the number changes.

3. **Multiple props memo**

   * Create a child component that receives two props: `firstName` and `lastName`.
   * Use `React.memo` and test that changing one prop doesn’t unnecessarily re-render if the other prop stays the same.

4. **Filter large array efficiently**

   * Make a component that filters a large array of numbers based on an input.
   * Use `useMemo` to avoid recalculating the filtered array on unrelated state updates.

5. **Component with combined memo & useMemo**

   * Build a component that has both an expensive calculation (like factorial) and a child component.
   * Use `useMemo` for calculation and `React.memo` for child component to optimize re-renders.
