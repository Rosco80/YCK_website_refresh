import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Method | Ancient Shaolin Medicine & Modern Physiotherapy",
  description: "Learn how YAPCHANKOR combines centuries-old Shaolin injury medicine with modern physiotherapy to resolve chronic pain without surgery.",
};

export default function MethodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
