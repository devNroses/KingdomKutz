
interface GalleryItemProps {
  imgSrc: string;
  title: string;
  subtitle?: string;
}

const GalleryItem = ({ imgSrc, title, subtitle }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-sm">
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-heading text-lg font-bold">{title}</h3>
        {subtitle && <p className="text-barber-gold text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};

export default GalleryItem;
