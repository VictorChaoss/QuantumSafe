import { Header, Footer } from "@/components/bunker/shell";
import RecoveryTool from "@/components/bunker/v3/recovery-tool";
export const metadata = {
  title: "Recovery & Vault Builder",
  description: "Build a Quantum Safe, cancel a withdrawal, or replace a day key with your recovery kit.",
};
export default function Page() {
  return (
    <>
      <Header />
      <RecoveryTool />
      <Footer />
    </>
  );
}
