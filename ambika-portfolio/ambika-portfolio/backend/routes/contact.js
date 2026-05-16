import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      message: 'Message sent successfully',
      contact: newContact,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
});

// GET all contacts (for admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});

export default router;
