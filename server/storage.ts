import { type User, type InsertUser, type MenuItem, type InsertMenuItem } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private menuItems: Map<string, MenuItem>;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.initializeMenuData();
  }

  private initializeMenuData() {
    // Initialize with sample menu items
    const sampleItems: MenuItem[] = [
      {
        id: randomUUID(),
        category: "essen",
        name: "Cevapcici (10 Stück)",
        price: "€12,00",
        description: "Traditionelle Cevapcici vom Grill mit Salat & Brot"
      },
      {
        id: randomUUID(),
        category: "essen",
        name: "Pljeskavica",
        price: "€8,00",
        description: "Große gegrilltes Hackfleischpattie mit Salat & Brot"
      },
      {
        id: randomUUID(),
        category: "essen",
        name: "Gegrilltes Hühnerfilet",
        price: "€12,90",
        description: "Gegrilltes Hühnerfilet mit Salat & Pommes"
      },
      {
        id: randomUUID(),
        category: "essen",
        name: "Cevapcici (5 Stück) + 1x Pljeskavica",
        price: "€12,00",
        description: "Traditionelle Cevapcici und Pljeskavica vom Grill mit Salat & Brot"
      },
      {
        id: randomUUID(),
        category: "getränke",
        name: "Bier",
        price: "€3,50",
        description: "0,5l vom Fass"
      },
      {
        id: randomUUID(),
        category: "getränke",
        name: "Mineralwasser",
        price: "€2,20",
        description: "0,5l still oder prickelnd"
      },
      {
        id: randomUUID(),
        category: "getränke",
        name: "Softdrink",
        price: "€2,80",
        description: "Coca Cola, Fanta, Sprite"
      },
      {
        id: randomUUID(),
        category: "getränke",
        name: "Melange",
        price: "€2,50",
        description: "Traditionell serviert"
      },
      {
        id: randomUUID(),
        category: "getränke",
        name: "Tee",
        price: "€3,00",
        description: "Früchte-, Kamillen-, Schwarztee"
      },
      {
        id: randomUUID(),
        category: "menus",
        name: "Gulasch mit Rindfleisch",
        price: "€3,00",
        description: "Gulasch mit Rindfleisch + Salat, Brot & Getränk"
      },
      {
        id: randomUUID(),
        category: "menus",
        name: "Pljeskavica Burger",
        price: "€15,00",
        description: "Pljeskavica Burger + Pommes + Getränk"
      },
      {
        id: randomUUID(),
        category: "menus",
        name: "Chicken Burger",
        price: "€15,00",
        description: "Chicken Burger + Pommes + Getränk"
      }
    ];

    sampleItems.forEach(item => {
      this.menuItems.set(item.id, item);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      item => item.category === category
    );
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const id = randomUUID();
    const item: MenuItem = { ...insertItem, id };
    this.menuItems.set(id, item);
    return item;
  }
}

export const storage = new MemStorage();
