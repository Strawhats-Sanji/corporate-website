// src/pages/api/gallery.ts
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'gallery.yml');
  const file = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(file);
  res.status(200).json(data);
}
