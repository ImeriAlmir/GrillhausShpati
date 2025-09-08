export default function Location() {
  return (
    <section id="standort" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Unser <span className="text-primary">Standort</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Besuchen Sie uns im Herzen von Baden
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden card-hover">
            <div className="p-6 sm:p-8 text-center border-b border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-restaurant-name">
                Grillhaus Shpati
              </h3>
              <p className="text-muted-foreground" data-testid="text-restaurant-location">
                Baden, Österreich
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21489.534684497464!2d16.22046095!3d47.99792155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0x3e76c58647b4c0a2!2sBaden%2C%20Austria!5e0!3m2!1sen!2sat!4v1234567890123"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
                title="Grillhaus Shpati Location in Baden, Austria"
                data-testid="map-location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
