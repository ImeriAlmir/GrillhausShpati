import { useQuery } from "@tanstack/react-query";
import { Utensils, GlassWater, ChefHat } from "lucide-react";
import type { MenuData } from "@shared/schema";

export default function Menu() {
  const { data: menuData, isLoading, error } = useQuery<MenuData>({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("/menu.json");
      if (!res.ok) {
        throw new Error("Failed to load menu.json");
      }
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <section id="speisekarte" className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Unsere <span className="text-primary">Speisekarte</span>
          </h2>
          <div className="flex justify-center items-center min-h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="speisekarte" className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
            Unsere <span className="text-primary">Speisekarte</span>
          </h2>
          <div className="text-center text-muted-foreground">
            Entschuldigung, die Speisekarte konnte nicht geladen werden.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="speisekarte" className="py-16 sm:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Unsere <span className="text-primary">Speisekarte</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Frisch zubereitet mit den besten Zutaten
        </p>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* First row: Hauptgerichte and Menüs */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Essen Section */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Utensils className="text-primary mr-3 h-6 w-6" />
                Hauptgerichte
              </h3>
              <div className="space-y-4">
                {menuData?.essen.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                    data-testid={`menu-item-essen-${index}`}
                  >
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-item-name-${index}`}>
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground" data-testid={`text-item-description-${index}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg" data-testid={`text-item-price-${index}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Menüs Section */}
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <ChefHat className="text-primary mr-3 h-6 w-6" />
                Menüs
              </h3>
              <div className="space-y-4">
                {menuData?.menus?.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                    data-testid={`menu-item-menüs-${index}`}
                  >
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-menu-name-${index}`}>
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground" data-testid={`text-menu-description-${index}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg" data-testid={`text-menu-price-${index}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second row (centered): Getränke */}
          <div className="flex justify-center">
            <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-lg border border-border card-hover w-full max-w-md lg:max-w-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center justify-center">
                <GlassWater className="text-primary mr-3 h-6 w-6" />
                Getränke
              </h3>
              <div className="space-y-4">
                {menuData?.getränke.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                    data-testid={`menu-item-getränke-${index}`}
                  >
                    <div>
                      <h4 className="font-semibold text-foreground" data-testid={`text-drink-name-${index}`}>
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground" data-testid={`text-drink-description-${index}`}>
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg" data-testid={`text-drink-price-${index}`}>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
