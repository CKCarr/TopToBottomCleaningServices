import Hero from "../components/Hero";
import Services from "@/components/Services";
import CustomerNote from "@/components/CustomerNote";
import TabComponent from "@/components/TabComponent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col space-y-12">
      {/* Hero Section */}
      <Hero />

      {/* Scrollable Tab Section (What We Do, Why Choose Us, etc.) */}
      <section className="max-w-6xl mx-auto w-full px-6">
        <TabComponent />
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto w-full px-6">
        <Services />
      </section>
    </main>
  );
}
