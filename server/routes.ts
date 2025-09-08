import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { menuDataSchema, type MenuData } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route to get menu data in the required format
  app.get("/api/menu", async (req, res) => {
    try {
      const allMenuItems = await storage.getMenuItems();
      
      const menuData: MenuData = {
        essen: allMenuItems
          .filter(item => item.category === "essen")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
        getränke: allMenuItems
          .filter(item => item.category === "getränke")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
        menus: allMenuItems
          .filter(item => item.category === "menus")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
      };

      res.json(menuData);
    } catch (error) {
      console.error("Error fetching menu:", error);
      res.status(500).json({ error: "Failed to fetch menu data" });
    }
  });

  // Serve static menu.json file
  app.get("/menu.json", async (req, res) => {
    try {
      const allMenuItems = await storage.getMenuItems();
      
      const menuData: MenuData = {
        essen: allMenuItems
          .filter(item => item.category === "essen")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
        getränke: allMenuItems
          .filter(item => item.category === "getränke")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
        menus: allMenuItems
          .filter(item => item.category === "menus")
          .map(item => ({
            name: item.name,
            price: item.price,
            description: item.description
          })),
      };

      res.json(menuData);
    } catch (error) {
      console.error("Error serving menu.json:", error);
      res.status(500).json({ error: "Failed to serve menu data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
