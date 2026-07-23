import { usePoll } from "@inertiajs/react";
import MepHeader from "@/Components/MepHeader";
import MepFooter from "@/Components/MepFooter";

export default function MepLayout({ children }) {
  usePoll(10000);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <MepHeader />
      <main className="flex-1">{children}</main>
      <MepFooter />
    </div>
  );
}