import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact | Frontend Developer Portfolio",
  description: "Get in touch with me for collaboration or job opportunities",
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ContactSection />
    </div>
  );
}
