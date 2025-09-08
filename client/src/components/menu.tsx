import { Utensils, GlassWater, ChefHat } from "lucide-react";
import type { MenuData } from "@shared/schema";

// Define the menu data directly
const menuData: MenuData = {
  essen: [
    {
      name: "Cevapcici (10 Stück)",
      price: "€12,00",
      description: "Traditionelle Cevapcici vom Grill mit Salat & Brot"
    },
    {
      name: "Pljeskavica",
      price: "€8,00",
      description: "Große gegrilltes Hackfleischpattie mit Salat & Brot"
    },
    {
      name: "Gegrilltes Hühnerfilet",
      price: "€12,90",
      description: "Gegrilltes Hühnerfilet mit Salat & Pommes"
    },
    {
      name: "Cevapcici (5 Stück) + 1x Pljeskavica",
      price: "€12,00",
      description: "Traditionelle Cevapcici und Pljeskavica vom Grill mit Salat & Brot"
    }
  ],
  menus: [
    {
      name: "Gulasch mit Rindfleisch",
      price: "€13,00",
      description: "Gulasch mit Rindfleisch + Salat, Brot & Getränk"
    },
    {
      name: "Pljeskavica Burger",
      price: "€15,00",
      description: "Pljeskavica Burger + Pommes + Getränk"
    },
    {
      name: "Chicken Burger",
      price: "€15,00",
      description: "Chicken Burger + Pommes + Getränk"
    }
  ],
  getränke: [
    {
      name: "Bier",
      price: "€3,50",
      description: "0,5l vom Fass"
    },
    {
      name: "Mineralwasser",
      price: "€2,20",
      description: "0,5l still oder prickelnd"
    },
    {
      name: "Softdrink",
      price: "€2,80",
      description: "Coca Cola, Fanta, Sprite"
    },
    {
      name: "Melange",
      price: "€3,00",
      description: "Traditionell serviert"
    },
    {
      name: "Tee",
      price: "€2,50",
      description: "Früchte-, Kamillen-, Schwarztee"
    }
  ]
};

export default function Menu() {
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
                {menuData.essen.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
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
                {menuData.menus.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
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
                {menuData.getränke.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center py-3 border-b border-border last:border-b-0"
                  >
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                    <span className="font-bold text-primary text-lg">{item.price}</span>
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
