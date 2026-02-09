// src/components/ClientLogo.jsx
import React from 'react';

const ClientLogo = ({ client }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative w-24 h-20 md:w-32 md:h-28 overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm group-hover:shadow-lg transition-all duration-300">
        <img
          src={client.logo}
          alt={client.name}
          className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = `data:image/svg+xml,%3Csvg width='128' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f9fafb' stroke='%23e5e7eb' stroke-width='2'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='14' fill='%239ca3af'%3E${client.name?.substring(0, 6) || 'Logo'}%3C/text%3E%3C/svg%3E`;
          }}
        />
      </div>
      <p className="mt-4 text-white font-medium text-sm md:text-base text-center group-hover:text-orange-400 transition-colors">
        {client.name}
      </p>
    </div>
  );
};

export default ClientLogo;