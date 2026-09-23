import type { Metadata } from 'next';
import Credentials from '@/components/credentials/credentials';

export const metadata: Metadata = {
  title: "Credentials | Sammi Azaz",
  description: "Academic background, certifications, achievements, and verified credentials of Sammi Azaz.",
};

export default function CredentialsPage() {
  return (
    <main className="min-h-screen">
      <Credentials />
    </main>
  );
}
