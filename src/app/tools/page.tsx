import React from 'react';
import ToolsSection from '@/components/ToolsSection';

export const metadata = {
  title: 'Tools & Technologies | Amit Yaduwanshi',
  description: 'Explore the tools and technologies I work with, including .NET Core, Azure, SQL Server, and more.',
};

const ToolsPage = () => {
  return (
    <div className="min-h-screen">
      <ToolsSection />
    </div>
  );
};

export default ToolsPage; 