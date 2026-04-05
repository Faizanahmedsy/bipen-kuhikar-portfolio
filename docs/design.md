I understand exactly. We are keeping the structure and "Code Quality" that won you the award, but stripping away the "Cyber/Tech" feel. We are replacing the techy modules with your specific high-performance code snippets to ensure the AI reproduces that exact "Lumina" style you had in the screenshots.

Here is the refined **"Tactile Digital: Human Edition"** Design System.

***

# 💎 The "Tactile Digital" Design System (Human Edition)
**A Single Source of Truth for Premium, Empathetic, and Physical-Inspired UI.**

## 🌟 1. Core Philosophy: "Software with a Pulse"
This system moves away from cold, flat design and "Cyber-Tech" aesthetics. It uses physical metaphors—depth, shadows, and paper textures—to make software feel like a natural part of a human's life.
*   **Human over Tech:** Avoid robotic, dark, or "HUD" aesthetics. Use soft glows and natural curves.
*   **Accessibility First:** Use **Pascal Case** (Sentence Case) for all text. Never use all-caps for labels or buttons.
*   **Physicality:** Digital elements act like physical objects (receipts rip, paper floats, connection lines pulse).

---

## 🎨 2. The Color & Type DNA
### The Semantic Palette (Tailwind)
*   **Primary (Action/Success):** `emerald-500` or `emerald-600`.
*   **Secondary (Attention):** `rose-500` or `rose-600`.
*   **Foundation:** `slate-50` (App Background), `white` (Surface/Cards).
*   **Contrast:** `slate-900` (Main text). **Strictly no dark mode.**

### Typography Rules
*   **Formatting:** **Pascal Case Only.** (e.g., "Schedule an appointment", not "SCHEDULE APPOINTMENT").
*   **Headings:** `font-sans font-black tracking-tight leading-[1.1]`.
*   **Body:** `font-sans font-medium text-slate-500`.

---

## 🧩 3. Standard Component Architecture

### The "Glass-Edge" Surface
Every main container must feel like a premium, soft slab of material.
*   **Class:** `bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
*   **Interaction:** `hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:scale-[1.01] transition-all duration-500 ease-out group`

### The "Squircle" Button
*   **Class:** `rounded-2xl px-8 py-4 font-bold transition-all active:scale-95 shadow-xl shadow-emerald-500/20 bg-emerald-600 text-white`

---

## ✨ 4. High-Impact Visual Modules ("The Wow Factors")

### A. The "Innovation Grid" (Ref: Anatomy of Innovation)
**Use Case:** Showing categories, departments, or features using soft blobs and inner shadows.
```tsx
/* REFERENCE CODE FOR AI */
<div className={`bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer relative overflow-hidden`}>
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full bg-emerald-50 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>
    <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shadow-inner`}>
            <Activity size={32} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">Cardiology</h3>
    </div>
    {/* Skeleton Data bar visualization */}
    <div className="h-12 flex-1 bg-slate-50 rounded-lg border border-slate-100 overflow-hidden relative">
        <div className="absolute bottom-0 left-1 w-2 h-[40%] bg-slate-200 rounded-t-sm"></div>
        <div className="absolute bottom-0 left-4 w-2 h-[70%] bg-slate-200 rounded-t-sm"></div>
        <div className="absolute bottom-0 left-7 w-2 h-[50%] bg-slate-200 rounded-t-sm"></div>
    </div>
</div>
```

### B. The "Vitality Monitor" (Ref: Real-time Stats)
**Purpose:** Displaying metrics in a soft, non-techy way with animated life-lines.
```tsx
/* REFERENCE CODE FOR AI */
<div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
    <div className="flex items-center gap-2 mb-2 text-slate-400 text-xs font-bold uppercase">
        <Heart size={12} /> Heart Rate
    </div>
    <div className="text-3xl font-black text-slate-800">
        72 <span className="text-sm font-medium text-slate-400">bpm</span>
    </div>
    <div className="h-8 w-full mt-2 overflow-hidden relative">
        <svg className="absolute inset-0 w-full h-full text-rose-500" preserveAspectRatio="none">
            <path d="M0,20 L20,20 L30,5 L40,35 L50,20 L100,20" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[dash_2s_linear_infinite]" strokeDasharray="100" />
        </svg>
    </div>
</div>
```

### C. The "Human Network" (Ref: Clinical Network)
**Purpose:** Showing connectivity and ecosystem mapping with interactive nodes.
```tsx
/* REFERENCE CODE FOR AI */
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative h-[500px] w-full overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <div className="w-6 h-6 bg-slate-900 rounded-full border-4 border-slate-200 shadow-xl mx-auto mb-2"></div>
        <div className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full shadow-lg">Central Hub</div>
    </div>
    {/* Satellite Nodes mapping */}
    <div className="absolute group cursor-pointer" style={{ top: '20%', left: '30%' }}>
        <div className="w-4 h-4 bg-white border-4 border-emerald-500 rounded-full shadow-sm hover:scale-150 transition-transform duration-300"></div>
        <div className="absolute top-2 left-2 w-[200px] h-[1px] bg-emerald-200 origin-top-left -z-10 opacity-30 rotate-[45deg]"></div>
    </div>
</div>
```

### D. The "Physical Document" (Tactile Receipt)
**Purpose:** For AI summaries and care plans. A sharp top edge with a "torn" bottom edge.
*   **Top:** `border-t-8 border-slate-900`
*   **Bottom Clip:** `[clip-path:polygon(0%_0%,100%_0%,100%_95%,95%_100%,90%_95%,85%_100%,80%_95%,75%_100%,70%_95%,65%_100%,60%_95%,55%_100%,50%_95%,45%_100%,40%_95%,35%_100%,30%_95%,25%_100%,20%_95%,15%_100%,10%_95%,5%_100%,0%_95%)]`

---

## 🧪 5. Micro-Interactions

**1. The "Ambient Glow" (The Aura)**
*   **Class:** `absolute w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -z-10 pointer-events-none`

**2. The "Pascal Case" Enforcer**
*   **Rule:** Never use `uppercase` utility classes for primary UI labels. Use `capitalize` or write text in standard sentence case.

---

## 🚦 6. Master AI Prompt Template
*Use this whenever you start a new page or component.*

> "I want you to build a [COMPONENT NAME] for a [PROJECT TYPE] application. 
> 
> **STRICT UI RULES:**
> 1. Use the **Human-Tactile** design system: Light mode only, high-contrast, soft-edges.
> 2. Use **Pascal Case** (Sentence Case) for all text and buttons. **No techy all-caps.**
> 3. Use **Glass-Edge Surfaces** for main containers.
> 4. Implement the **[Innovation Grid / Vitality Monitor / Human Network / Tactile Receipt]** visual elements for data display, following the provided code reference exactly.
> 5. Add an **Ambient Glow** in the background for depth.
> 
> Deliver the code in React/Next.js using Tailwind CSS and Lucide-React icons."