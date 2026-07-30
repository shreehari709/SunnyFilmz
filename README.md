# 📸 Sunny Filmzz - Portfolio & Event Booking Website

**Sunny Filmzz** is a modern, high-performance portfolio and event slot booking web application built for a professional photography and videography studio. It allows clients to explore cinematic wedding photo galleries, view team crew profiles, review structured pricing packages, and seamlessly book photography/videography slots for events with automated email notification alerts.

---

## 🌟 Overview & Core Idea

The main objective of Sunny Filmzz is to provide an aesthetic, fast, and interactive platform that serves dual purposes:
1. **Visual Portfolio Showcase**: Highlights authentic wedding stories, candid moments, drone videography, and cinematic highlights hosted on Cloudinary CDN.
2. **Interactive Event Booking System**: Enables clients to select photography packages, add extra service add-ons, choose event dates/times/venues, and submit booking requests directly to the administration in real-time.

---

## ✨ Key Features

- 🎥 **Cinematic Visual Portfolio**: High-resolution image showcase with Cloudinary integration and responsive image loading.
- 📅 **Online Event Booking Form**: Simple, user-friendly form to capture client contact details, event date, time, venue, package tier, and custom extra add-ons.
- 📧 **Automated Email Notifications**: Integration with **Resend API** to instantly deliver formatted HTML booking alerts to the studio admin (`ADMIN_EMAIL`).
- 💎 **Interactive Pricing Tiers**: Clear breakdown of photography and videography packages (Basic, Standard, Premium) with "Best Value" highlights and feature checklists.
- 👥 **Crew Profiles**: Displays team members, their specialized roles (Lead Photographer, Candid Photographer, Cinematographer), and bio cards.
- 📱 **Responsive Dual Navigation System**:
  - **Desktop**: Clean top navigation bar with interactive link indicators.
  - **Mobile**: Floating bottom navigation bar with Lucide icons and active glow effects.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Frontend Library** | [React 19](https://react.dev/) |
| **Styling & Icons** | [Tailwind CSS v4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) |
| **Media Hosting** | [Cloudinary CDN](https://cloudinary.com/) |
| **Email Delivery** | [Resend](https://resend.com/) API SDK |
| **Fonts** | Next.js Google Fonts (`Inter`, `Geist`) |

---

## 📁 Directory Structure

```text
SunnyFilmz/
├── app/
│   ├── api/
│   │   └── book/
│   │       └── route.js          # POST API route handling booking submissions via Resend email
│   ├── booking/
│   │   └── page.js             # Event slot booking form page with validation & status feedback
│   ├── contact/
│   │   └── page.js             # General contact page
│   ├── crew/
│   │   └── page.js             # Photography crew members & roles page
│   ├── gallery/
│   │   └── page.js             # Portfolio gallery page rendering wedding stories
│   ├── home/
│   │   ├── BookButton.js       # Call-to-action button routing to /booking
│   │   ├── HeroSection.js      # Cinematic full-bleed hero showcase images
│   │   ├── IntroSection.js     # Brand storytelling & headline section
│   │   ├── Reviews.js          # Client reviews component
│   │   └── page.js             # Main homepage component
│   ├── Pricing/
│   │   └── page.js             # Service pricing plans page
│   ├── globals.css             # Tailwind v4 imports & custom CSS utility rules
│   ├── layout.js               # Root layout including fonts & global Navbar
│   └── page.js                 # Entry route auto-redirecting to /home
├── components/
│   ├── crew/
│   │   ├── CrewCard.js         # Reusable crew profile card component
│   │   └── CrewSection.js      # Section grid container for crew
│   ├── gallery/
│   │   ├── GalleryItem.js      # Individual gallery item with hover zoom effects
│   │   └── GallerySection.js   # Gallery container loading Cloudinary photos
│   ├── pricing/
│   │   ├── PricingCard.js      # Pricing card item with feature list & booking trigger
│   │   └── pricingData.js      # Package details (Basic, Standard, Premium data)
│   ├── BookingForm.js          # Lightweight booking form component
│   ├── GalleryGrid.js          # Grid layout helper component
│   ├── Navbar.js               # Adaptive Desktop & Mobile navigation bar
│   └── hero.js                 # Alternate hero section layout component
├── data/
│   ├── crew.js                 # Data array of crew profiles and images
│   └── gallery.js              # Data array of gallery portfolio photos
├── public/                     # Static assets (favicons, images)
├── next.config.mjs             # Next.js config with remote image hostname permissions
├── package.json                # Project metadata & dependencies
└── README.md                   # Complete project documentation
```

---

## 🔄 Detailed Website Workflow & How It Works

### 1. Route Navigation & Auto-Redirect
- When a user navigates to the root URL (`/`), `app/page.js` executes a server-side redirect (`redirect('/home')`) to seamlessly land users on the `/home` showcase page.

### 2. Homepage (`/home`)
- **Hero Section**: Displays high-impact full-width showcase photography loaded from Cloudinary.
- **Brand Introduction**: Communicates the studio's philosophy on authentic wedding storytelling and provides an intuitive **"Book Your Session"** call-to-action button.

### 3. Portfolio Gallery (`/gallery`)
- Reads curated portfolio entries from `data/gallery.js`.
- Renders optimized images with hover-scaling effects using Next.js `Image` component.

### 4. Service Packages & Pricing (`/Pricing`)
- Renders 3 predefined studio packages defined in `components/pricing/pricingData.js`:
  - **Basic Plan (₹35,000)**: Photo + Video, 250 edited pictures, 25-sheet album, traditional & cinematic videos.
  - **Standard Plan (₹60,000 - Best Value)**: Photo + Candid + Video, 350 edited pictures, 30-sheet album, Teaser & Drone video.
  - **Premium Plan (₹80,000)**: Photo + Candid + Video, 400 edited pictures, 40-sheet premium album, mini album, calendar, 4 frames, teaser, drone & cinematic videos.
- Every pricing card features a **"Book Your Session"** button routing directly to `/booking`.

### 5. Crew Showcase (`/crew`)
- Highlights team credentials including:
  - **Sunny Raj**: Lead Photographer
  - **Ajeet**: Candid Photographer
  - **Pradeep**: Cinematographer

### 6. Booking System & API Flow (`/booking` & `/api/book`)
1. **Form Input**: The client fills out full name, phone number, email, date, time, venue, desired package tier, and extra add-ons (e.g., *Engagement Shoot*, *Second Photographer*, *Prints*, *Album*).
2. **Client Validation**: Required fields (Name, Phone, Date) are checked before dispatching the request.
3. **API Request**: Submit button triggers a `POST` request to `/api/book` with JSON payload.
4. **Server Execution**:
   - The backend route (`app/api/book/route.js`) constructs an HTML email template with client contact information, event details, chosen package, selected add-ons, and special comments.
   - Using the **Resend API**, it sends the notification to `ADMIN_EMAIL`.
5. **User Feedback**: The user receives clean success ("✅ Booking sent successfully!") or error feedback directly on the interface.

---

## 📡 API Endpoint Reference

### `POST /api/book`

Submits event booking details and sends an email notification to the studio admin.

#### Request Body
```json
{
  "fullName": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com",
  "date": "2026-11-15",
  "time": "18:00",
  "venue": "Grand Palace, City",
  "packageName": "Standard",
  "extras": "Engagement Shoot, Second Photographer",
  "comments": "Looking forward to cinematic coverage of our evening ceremony."
}
```

#### Successful Response (`200 OK`)
```json
{
  "success": true
}
```

#### Error Response (`500 Internal Server Error`)
```json
{
  "success": false
}
```

---

## ⚙️ Environment Variables Setup

Create a `.env.local` file in the root directory and define the following variables:

```env
# Resend API Key for sending booking notification emails
RESEND_API_KEY=re_123456789_your_resend_api_key

# Destination email address to receive new booking alerts
ADMIN_EMAIL=your-studio-email@example.com
```

---

## 🚀 Getting Started locally

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/SunnyFilmz.git
   cd SunnyFilmz
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   - Create a `.env.local` file as shown in the section above.

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Build & Production Deployment

To generate an optimized production build:

```bash
npm run build
```

To start the production server locally:

```bash
npm run start
```

### Deploying on Vercel
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project into [Vercel](https://vercel.com).
3. Set your Environment Variables (`RESEND_API_KEY` and `ADMIN_EMAIL`) in the Vercel project settings.
4. Click **Deploy**. Next.js App Router will handle serverless deployment automatically.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
