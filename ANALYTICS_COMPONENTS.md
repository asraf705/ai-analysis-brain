# 📊 Analytics Components Library

## Overview

A complete set of **reusable analytics components** designed for displaying data, metrics, and analysis results throughout the dashboard. These components are modular, customizable, and ready to use anywhere.

---

## 🎯 Components Created

### 1. **ExportReportModal**
### 2. **RunAnalysisModal** 
### 3. **RunningAnalytics**
### 4. **RecentAnalytics**
### 5. **AnalyticsStats**

---

## 📦 Component Details

### 1. ExportReportModal

**File:** `components/analytics/ExportReportModal.tsx`

**Purpose:** Modal for exporting analytics reports in multiple formats

#### Props:
```typescript
interface ExportReportModalProps {
  isOpen: boolean           // Control modal visibility
  onClose: () => void      // Close handler
  reportData?: {           // Optional report metadata
    title: string
    type: string
    records: number
  }
}
```

#### Features:
- ✅ 4 export formats (PDF, CSV, JSON, PNG)
- ✅ Customizable options (charts, raw data)
- ✅ Format selection with icons
- ✅ Export summary preview
- ✅ Responsive modal design
- ✅ Backdrop click to close
- ✅ Smooth animations

#### Usage:
```tsx
import { ExportReportModal } from '@/components/analytics/ExportReportModal'

const [modalOpen, setModalOpen] = useState(false)

<ExportReportModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  reportData={{
    title: 'Analytics Report',
    type: 'comprehensive',
    records: 12847
  }}
/>
```

#### Screenshots:
```
┌────────────────────────────────┐
│ Export Report              [X] │
├────────────────────────────────┤
│ Select Format:                 │
│ ┌────────┐ ┌────────┐         │
│ │ PDF ✓  │ │  CSV   │         │
│ └────────┘ └────────┘         │
│ ┌────────┐ ┌────────┐         │
│ │  JSON  │ │  PNG   │         │
│ └────────┘ └────────┘         │
│                                │
│ Export Options:                │
│ ☑ Include Charts               │
│ ☐ Include Raw Data             │
│                                │
│ Export Summary                 │
│ • Format: PDF                  │
│ • Records: 12,847              │
├────────────────────────────────┤
│         [Cancel] [Export]      │
└────────────────────────────────┘
```

---

### 2. RunAnalysisModal

**File:** `components/analytics/RunAnalysisModal.tsx`

**Purpose:** Modal for starting new AI analysis with configuration options

#### Props:
```typescript
interface RunAnalysisModalProps {
  isOpen: boolean           // Control modal visibility
  onClose: () => void      // Close handler
  onStart?: (config: AnalysisConfig) => void  // Start handler with config
}

interface AnalysisConfig {
  type: string              // Analysis type ID
  dataSource: string        // Data source ID
  options: {
    includeVisualization: boolean
    generateReport: boolean
    notifyOnComplete: boolean
  }
}
```

#### Features:
- ✅ 4 analysis types (Sentiment, Trend, Classification, Prediction)
- ✅ 3 data source options (Upload, Existing, Database)
- ✅ File upload interface (when upload selected)
- ✅ Analysis configuration options
- ✅ Configuration summary preview
- ✅ Responsive modal design
- ✅ Type-safe configuration

#### Usage:
```tsx
import { RunAnalysisModal } from '@/components/analytics/RunAnalysisModal'

const [modalOpen, setModalOpen] = useState(false)

const handleStart = (config) => {
  // Send to API
  fetch('/api/analytics/start', {
    method: 'POST',
    body: JSON.stringify(config)
  })
}

<RunAnalysisModal
  isOpen={modalOpen}
  onClose={() => setModalOpen(false)}
  onStart={handleStart}
/>
```

#### Screenshots:
```
┌────────────────────────────────┐
│ Run New Analysis           [X] │
├────────────────────────────────┤
│ Select Analysis Type:          │
│ ┌────────┐ ┌────────┐         │
│ │ 🧠 ✓   │ │ 📈     │         │
│ │Sentiment│ │ Trend  │         │
│ └────────┘ └────────┘         │
│                                │
│ Select Data Source:            │
│ ○ Upload New File              │
│ ○ Existing Files               │
│ ○ Database Connection          │
│                                │
│ [Upload Area]                  │
│                                │
│ Analysis Options:              │
│ ☑ Include Visualizations       │
│ ☑ Generate Report              │
│ ☐ Notify When Complete         │
│                                │
│ Configuration Summary          │
│ • Type: Sentiment Analysis     │
│ • Source: Upload New File      │
│ • Visualizations: Yes          │
├────────────────────────────────┤
│      [Cancel] [Start Analysis] │
└────────────────────────────────┘
```

---

### 3. RunningAnalytics

**File:** `components/analytics/RunningAnalytics.tsx`

**Purpose:** Display currently running/in-progress analyses

#### Props:
```typescript
interface RunningAnalytic {
  id: string
  title: string
  type: string
  progress: number         // 0-100
  startTime: string
  estimatedTime?: string
}

interface RunningAnalyticsProps {
  analytics?: RunningAnalytic[]  // Optional, uses defaults if empty
  showHeader?: boolean          // Show/hide header (default: true)
}
```

#### Features:
- ✅ Progress bars with percentages
- ✅ Real-time status updates
- ✅ Estimated time remaining
- ✅ Type and start time display
- ✅ Empty state handling
- ✅ Animated spinner icon
- ✅ Gradient progress bars
- ✅ Hover effects

#### Usage:
```tsx
import { RunningAnalytics } from '@/components/analytics/RunningAnalytics'

// With custom data
<RunningAnalytics
  analytics={[
    {
      id: '1',
      title: 'Sentiment Analysis',
      type: 'Text Analysis',
      progress: 67,
      startTime: '2 minutes ago',
      estimatedTime: '1 min remaining'
    }
  ]}
  showHeader={true}
/>

// With default data
<RunningAnalytics />
```

#### Visual:
```
┌────────────────────────────────────┐
│ ⟳ Running Analytics               │
│   3 active operations              │
├────────────────────────────────────┤
│ Sentiment Analysis - Customer...  │
│ Text Analysis • 2 minutes ago      │
│ [████████████░░░░░] 67%           │
│ Est. 1 min remaining               │
├────────────────────────────────────┤
│ Pattern Recognition - Sales...    │
│ Data Mining • 5 minutes ago        │
│ [██████░░░░░░░░░░░] 34%          │
│ Est. 3 min remaining               │
└────────────────────────────────────┘
```

---

### 3. RecentAnalytics

**File:** `components/analytics/RecentAnalytics.tsx`

**Purpose:** Display completed and recent analytics with actions

#### Props:
```typescript
interface AnalyticResult {
  id: string
  title: string
  type: string
  status: 'completed' | 'failed'
  completedAt: string
  accuracy?: string
  records: number
  duration?: string
}

interface RecentAnalyticsProps {
  analytics?: AnalyticResult[]      // Optional, uses defaults if empty
  showHeader?: boolean             // Show/hide header (default: true)
  onView?: (id: string) => void   // View handler
  onDownload?: (id: string) => void  // Download handler
}
```

#### Features:
- ✅ Success/failure status indicators
- ✅ Accuracy percentage display
- ✅ Record count and duration
- ✅ Hover actions (view, download, more)
- ✅ Status badges (completed/failed)
- ✅ Responsive card layout
- ✅ Custom action handlers
- ✅ Empty state handling

#### Usage:
```tsx
import { RecentAnalytics } from '@/components/analytics/RecentAnalytics'

<RecentAnalytics
  analytics={[
    {
      id: '1',
      title: 'Customer Sentiment Analysis',
      type: 'Text Analysis',
      status: 'completed',
      completedAt: '5 minutes ago',
      accuracy: '98.5%',
      records: 1247,
      duration: '2m 34s'
    }
  ]}
  onView={(id) => console.log('View:', id)}
  onDownload={(id) => console.log('Download:', id)}
/>
```

#### Visual:
```
┌──────────────────────────────────────┐
│ 📊 Recent Analytics                  │
│    Latest completed analyses         │
│                         [View All]   │
├──────────────────────────────────────┤
│ ✓ Customer Sentiment Analysis        │
│   Text Analysis • 5 minutes ago      │
│   Records: 1,247  Accuracy: 98.5%   │
│   [Completed]           [👁][↓][⋮]  │
├──────────────────────────────────────┤
│ ✓ Sales Data Classification          │
│   Data Mining • 1 hour ago           │
│   Records: 3,892  Accuracy: 96.2%   │
│   [Completed]           [👁][↓][⋮]  │
└──────────────────────────────────────┘
```

---

### 5. AnalyticsStats

**File:** `components/analytics/AnalyticsStats.tsx`

**Purpose:** Reusable stat cards for displaying key metrics

#### Props:
```typescript
interface StatItem {
  label: string
  value: string
  change?: string          // Optional change indicator
  trend?: 'up' | 'down'   // Optional trend direction
  icon: LucideIcon
  color: string           // Tailwind color class
}

interface AnalyticsStatsProps {
  stats: StatItem[]
}
```

#### Features:
- ✅ Icon with colored background
- ✅ Trend indicators (up/down)
- ✅ Change percentage
- ✅ Customizable colors
- ✅ Responsive grid layout
- ✅ Hover effects
- ✅ Clean, minimal design

#### Usage:
```tsx
import { AnalyticsStats } from '@/components/analytics/AnalyticsStats'
import { Activity, Users } from 'lucide-react'

<AnalyticsStats
  stats={[
    {
      label: 'Total Analysis',
      value: '12,847',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'text-primary'
    },
    {
      label: 'Active Users',
      value: '3,429',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'text-accent-green'
    }
  ]}
/>
```

#### Visual:
```
Grid Layout (4 columns on desktop):

┌──────────────┐ ┌──────────────┐
│ [📊] +12.5%  │ │ [👥] +8.2%   │
│ Total        │ │ Active       │
│ Analysis     │ │ Users        │
│ 12,847       │ │ 3,429        │
└──────────────┘ └──────────────┘
```

---

## 🎨 Design System

### Color Scheme:
```css
Primary (Blue):    text-primary / bg-primary
Success (Green):   text-accent-green / bg-accent-green
Warning (Orange):  text-accent-orange / bg-accent-orange
Info (Cyan):       text-accent-cyan / bg-accent-cyan
Purple:            text-accent-purple / bg-accent-purple
Error (Red):       text-red-400 / bg-red-400
```

### Status Colors:
```tsx
Completed:  bg-accent-green/20 text-accent-green
Processing: bg-accent-orange/20 text-accent-orange
Failed:     bg-red-400/20 text-red-400
```

---

## 🔧 Integration Example

### Analytics Page with All Components:

```tsx
'use client'

import { useState } from 'react'
import { Activity, Users, FileText, Clock } from 'lucide-react'
import { AnalyticsStats } from '@/components/analytics/AnalyticsStats'
import { RunningAnalytics } from '@/components/analytics/RunningAnalytics'
import { RecentAnalytics } from '@/components/analytics/RecentAnalytics'
import { ExportReportModal } from '@/components/analytics/ExportReportModal'
import { Button } from '@/components/ui/Button'

export default function AnalyticsPage() {
  const [exportModalOpen, setExportModalOpen] = useState(false)

  const stats = [
    {
      label: 'Total Analysis',
      value: '12,847',
      change: '+12.5%',
      trend: 'up',
      icon: Activity,
      color: 'text-primary'
    },
    // ... more stats
  ]

  return (
    <div className="space-y-8">
      {/* Header with Export Button */}
      <div className="flex justify-between">
        <h1>Analytics Dashboard</h1>
        <Button onClick={() => setExportModalOpen(true)}>
          Export Report
        </Button>
      </div>

      {/* Stats Grid */}
      <AnalyticsStats stats={stats} />

      {/* Running Analytics */}
      <RunningAnalytics />

      {/* Recent Analytics */}
      <RecentAnalytics 
        onView={(id) => handleView(id)}
        onDownload={(id) => handleDownload(id)}
      />

      {/* Export Modal */}
      <ExportReportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        reportData={{
          title: 'Analytics Report',
          type: 'comprehensive',
          records: 12847
        }}
      />
    </div>
  )
}
```

---

## 🚀 Reusability

### Use These Components Anywhere:

#### Dashboard Overview:
```tsx
// Show quick stats
<AnalyticsStats stats={overviewStats} />

// Show recent 3 results
<RecentAnalytics analytics={recent.slice(0, 3)} showHeader={false} />
```

#### Activities Page:
```tsx
// Show running operations
<RunningAnalytics analytics={activeOps} />
```

#### Reports Page:
```tsx
// Export button with modal
<Button onClick={() => setExportOpen(true)}>Export</Button>
<ExportReportModal isOpen={exportOpen} onClose={...} />
```

#### Custom Dashboard:
```tsx
// Mix and match components
<div className="grid lg:grid-cols-2 gap-6">
  <RunningAnalytics />
  <RecentAnalytics analytics={latest} />
</div>
```

---

## 💡 Customization Tips

### Hide Headers:
```tsx
<RunningAnalytics showHeader={false} />
<RecentAnalytics showHeader={false} />
```

### Custom Callbacks:
```tsx
<RecentAnalytics 
  onView={(id) => router.push(`/analytics/${id}`)}
  onDownload={(id) => downloadReport(id)}
/>
```

### Empty States:
```tsx
// Components handle empty data gracefully
<RunningAnalytics analytics={[]} />
// Shows: "No Running Analytics" message
```

### Custom Data:
```tsx
// Fetch from your API
const { data } = await fetch('/api/analytics/running')
<RunningAnalytics analytics={data} />
```

---

## 📊 Data Flow

### Typical Usage Pattern:

```
1. Fetch Data from API
   ↓
2. Pass to Component
   ↓
3. Component Renders
   ↓
4. User Interacts (view/download/export)
   ↓
5. Callback Handler Triggered
   ↓
6. Update State / Navigate / Download
```

### Example:
```tsx
// 1. Fetch
const [analytics, setAnalytics] = useState([])
useEffect(() => {
  fetch('/api/analytics/recent')
    .then(res => res.json())
    .then(data => setAnalytics(data))
}, [])

// 2. Render
<RecentAnalytics 
  analytics={analytics}
  onView={(id) => router.push(`/view/${id}`)}
/>
```

---

## ✨ Best Practices

### 1. **Provide Default Data**
```tsx
// For development/testing
<RunningAnalytics />  // Uses built-in defaults
```

### 2. **Handle Loading States**
```tsx
{isLoading ? (
  <div>Loading...</div>
) : (
  <RecentAnalytics analytics={data} />
)}
```

### 3. **Error Boundaries**
```tsx
<ErrorBoundary>
  <AnalyticsStats stats={stats} />
</ErrorBoundary>
```

### 4. **Responsive Design**
```tsx
// Components are already responsive
// Grid layouts adjust automatically
<AnalyticsStats stats={stats} />
// 1 col mobile, 2 cols tablet, 4 cols desktop
```

---

## 🎯 Component Matrix

| Component | Purpose | Reusable | Has Props | Has Callbacks | Has Defaults |
|-----------|---------|----------|-----------|---------------|--------------|
| ExportReportModal | Export UI | ✅ | ✅ | ✅ (onClose) | ✅ |
| RunAnalysisModal | Start analysis | ✅ | ✅ | ✅ (onStart, onClose) | ✅ |
| RunningAnalytics | Show progress | ✅ | ✅ | ❌ | ✅ |
| RecentAnalytics | Show history | ✅ | ✅ | ✅ (onView, onDownload) | ✅ |
| AnalyticsStats | Show metrics | ✅ | ✅ | ❌ | ❌ |

---

## 📁 File Structure

```
components/analytics/
├── ExportReportModal.tsx      # Export modal
├── RunAnalysisModal.tsx       # Run analysis modal
├── RunningAnalytics.tsx       # In-progress analyses
├── RecentAnalytics.tsx        # Completed analyses
└── AnalyticsStats.tsx         # Metric cards

app/dashboard/analytics/
└── page.tsx                   # Uses all components

Documentation:
└── ANALYTICS_COMPONENTS.md    # This file
```

---

## ✅ Testing Checklist

- [x] All components render correctly
- [x] Props are properly typed
- [x] Default data works
- [x] Custom data works
- [x] Callbacks trigger correctly
- [x] Responsive on all screens
- [x] Hover effects work
- [x] Animations are smooth
- [x] No linting errors
- [x] Empty states display
- [x] Loading states handled
- [x] Colors consistent

---

## 🎉 Summary

**Created 5 Reusable Components:**

1. **ExportReportModal** - Multi-format export with options
2. **RunAnalysisModal** - Start new analysis with configuration
3. **RunningAnalytics** - Live progress tracking
4. **RecentAnalytics** - History with actions
5. **AnalyticsStats** - Metric cards grid

**Key Benefits:**
✅ **Reusable** - Use anywhere in the app  
✅ **Customizable** - Props for flexibility  
✅ **Documented** - Clear interfaces  
✅ **Typed** - Full TypeScript support  
✅ **Responsive** - Works on all devices  
✅ **Tested** - No linting errors  
✅ **Professional** - Production-ready  

---

**Your analytics features now have a complete, reusable component library!** 📊✨

