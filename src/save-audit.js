import { put } from '@vercel/blob';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Debug endpoint: Visit /api/save-audit in browser to check config
  if (request.method === 'GET') {
    return new Response(`Blob API is active. Token configured: ${!!process.env.BLOB_READ_WRITE_TOKEN}`);
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return new Response('Missing BLOB_READ_WRITE_TOKEN. Please connect a Blob store in Vercel.', { status: 500 });
  }

  try {
    const form = await request.formData();
    const uploadedFiles = {};
    const jsonData = {};

    // Separate files and data
    for (const [key, value] of form.entries()) {
      if (value instanceof File) {
        // Upload audio file to Vercel Blob
        const blob = await put(`audio/${Date.now()}-${key}.webm`, value, {
          access: 'public',
        });
        uploadedFiles[key] = blob.url;
      } else {
        // Try to parse JSON strings, otherwise keep as string
        try {
            jsonData[key] = JSON.parse(value);
        } catch {
            jsonData[key] = value;
        }
      }
    }

    // Add file URLs to JSON data
    jsonData.recordings = uploadedFiles;

    // Save the complete audit JSON to Vercel Blob
    const jsonBlob = await put(`audits/${Date.now()}-audit.json`, JSON.stringify(jsonData, null, 2), {
      access: 'public',
      contentType: 'application/json',
    });

    return new Response(JSON.stringify({ url: jsonBlob.url }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to save audit' }), { status: 500 });
  }
}