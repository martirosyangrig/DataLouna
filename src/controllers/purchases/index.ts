import { Request, Response } from "express";
import pool from "../../config/postgres";

export class PurchaseController {
  static async purchaseProduct (req: Request, res: Response) {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      return res.status(400).json({ error: 'userId and productId are required'});
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const productRes = await client.query('SELECT price FROM products WHERE id = $1', [productId]);
      if (productRes.rowCount === 0) throw new Error('Poroduct not found');
      const price = productRes.rows[0].price;

      const userRes = await client.query('SELECT balance FROM users WHERE id = $1 FOR UPDATE', [userId]);
      if (userRes.rowCount === 0) throw new Error('User not found');
      const currentBalance = parseFloat(userRes.rows[0].balance);
      if (currentBalance < price) throw new Error('Not enough credits');

      await client.query('UPDATE users SET balance = balance - $1 WHERE id = $2', [price, userId]);
      await client.query('INSERT INTO purchases (user_id, product_id) VALUES ($1, $2)', [userId, productId]);

      await client.query('COMMIT');

      const updateBalanceRes = await client.query('SELECT balance FROM users WHERE id = $1', [userId]);
      res.status(200).json({ statuse: 'Complited', balance: updateBalanceRes.rows[0].balance })
    } catch (err: any) {
      await client.query('ROLLBACK');
      res.json({err: err.message})
    } finally {
      client.release()
    }
  }
}