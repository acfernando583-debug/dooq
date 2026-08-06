---
name: motion-design-skill
description: Advanced framer-motion animation patterns, principles, and best practices for React SPAs
---
# Motion Design Skill

Advanced framer-motion animation patterns for professional React applications.

## Animation Principles

### 1. Stagger Children
Use `staggerChildren` for sequential entrance animations:
```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
```

### 2. Scroll-Triggered Animations
Use `whileInView` with `viewport` for scroll-triggered effects:
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.2 }}
>
```

### 3. Hover Micro-Interactions
Use `whileHover` with spring physics for tactile feedback:
```tsx
<motion.button
  whileHover={{ scale: 1.03, y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
>
```

### 4. Layout Animations
Use `layout` prop for smooth layout transitions:
```tsx
<motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>
```

### 5. Animated Icons
Use `animate` with rotation for logo/icon animations:
```tsx
<motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}>
```

### 6. Gradient Orbs
Use `animate` with scale and opacity for ambient background effects:
```tsx
<motion.div
  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
  transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
/>
```

### 7. Counter Animations
Use `initial` + `whileInView` for number counters:
```tsx
<motion.p
  initial={{ opacity: 0, scale: 0.5 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
  viewport={{ once: true }}
>
```

### 8. Checkmark Stagger
Stagger checkmark animations in feature lists:
```tsx
{features.map((f, i) => (
  <motion.span
    key={i}
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
    viewport={{ once: true }}
  >
    ✓
  </motion.span>
))}
```

### 9. Hero Entrance
Sequential hero animation with stagger:
```tsx
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};
```

### 10. Card Hover Effects
Combine `whileHover` with `transition` for smooth card lifts:
```tsx
<motion.div
  whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
  transition={{ duration: 0.3 }}
  className="card-hover"
/>
```

## Best Practices
- Use `viewport={{ once: true }}` to avoid re-triggering animations
- Keep animation durations between 200-500ms for micro-interactions
- Use spring physics (`type: "spring"`) for natural-feeling motion
- Respect `prefers-reduced-motion` for accessibility
- Use `will-change: transform` for GPU-accelerated animations
- Avoid animating `width`, `height`, `top`, `left` — use `transform` instead