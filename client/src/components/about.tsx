export default function About() {
  return (
    <section id="uber-uns" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Über <span className="text-primary">uns</span>
          </h2>
          <div className="bg-card p-8 sm:p-12 rounded-2xl shadow-lg border border-border card-hover">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6" data-testid="text-about-main">
              Im Grillhaus Shpati servieren wir original Balkan-Spezialitäten wie Cevapcici und Pljeskavica – frisch vom Grill.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" data-testid="text-about-secondary">
              Unsere traditionellen Rezepte werden seit Generationen weitergegeben und mit den besten Zutaten zubereitet. 
              Genießen Sie authentische Balkan-Küche in gemütlicher Atmosphäre im Herzen von Baden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
