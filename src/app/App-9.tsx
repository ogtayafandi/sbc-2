// @ts-ignore
import React from "react";
import { ModernHeader } from "./components/ModernHeader";
import { EditorialHero } from "./components/EditorialHero";
import { ModernProducts } from "./components/ModernProducts";
import { DataStatistics } from "./components/DataStatistics";
import { ReferenceSectors } from "./components/ReferenceSectors";
import { MinimalFooter } from "./components/MinimalFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ModernHeader />
      <main>
        <EditorialHero />
        <DataStatistics />
        <ModernProducts />
        <ReferenceSectors />
      </main>
      <MinimalFooter />
    </div>
  );
}