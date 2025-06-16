import Link from '../models/Link.js';

export const createLink = async (req, res) => {
  try {
    const link = await Link.create({ ...req.body, user: req.user.id });
    res.status(201).json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLinks = async (req, res) => {
  try {
    const links = await Link.find({ user: req.user.id });
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateLink = async (req, res) => {
  try {
    const link = await Link.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!link) return res.status(404).json({ error: 'Link not found' });
    res.json(link);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteLink = async (req, res) => {
  try {
    const link = await Link.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!link) return res.status(404).json({ error: 'Link not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPublicLinks = async (req, res) => {
  try {
    const { username } = req.params;
    const links = await Link.find({}).populate({ path: 'user', match: { username } });
    const userLinks = links.filter(l => l.user);
    res.json(userLinks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
