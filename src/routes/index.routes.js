import { Router } from "express";
import { pingDB } from "../controllers/index.controller.js";

const router = Router();

router.get( "/ping", pingDB )

// Test calling an external API from the Server
router.get( '/test', async ( req, res ) => {
    const apiEndPoint = 'https://www.thunderclient.com/welcome';
    try {
      const response = await fetch(apiEndPoint);
      if (!response.ok) {
        throw new Error(`Error getting data from external API: ${apiEndPoint}`);
      }
      const data = await response.json();
      // do something with the data
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error getting data from external API: ${apiEndPoint}`);
    }
  });

export default router; 
