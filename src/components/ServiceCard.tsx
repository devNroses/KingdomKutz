
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  icon?: ReactNode;
  popular?: boolean;
}

const ServiceCard = ({ title, price, description, icon, popular = false }: ServiceCardProps) => {
  return (
    <div className={`relative service-card ${popular ? 'border-2 border-barber-gold' : ''}`}>
      {popular && (
        <div className="absolute -top-3 right-4 bg-barber-gold text-black text-xs font-bold px-3 py-1 uppercase">
          Popular
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {icon && <div className="mr-3 text-barber-gold">{icon}</div>}
          <h3 className="text-xl font-heading font-bold">{title}</h3>
        </div>
        <div className="text-xl font-heading font-bold text-barber-gold">{price}</div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
