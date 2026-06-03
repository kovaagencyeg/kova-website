import nodemailer from 'nodemailer';

const requiredFields = ['name', 'email', 'phone', 'serviceNeeded', 'subject', 'message'];

function clean(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json({
      ok: true,
      endpoint: '/api/contact',
      smtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
      contactToConfigured: Boolean(process.env.CONTACT_TO),
    });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const data = req.body || {};
  const name = clean(data.name);
  const email = clean(data.email);
  const phone = clean(data.phone);
  const company = clean(data.company);
  const serviceNeeded = clean(data.serviceNeeded);
  const quantity = clean(data.quantity);
  const deadline = clean(data.deadline);
  const subject = clean(data.subject);
  const message = clean(data.message);

  const missingField = requiredFields.find((field) => !clean(data[field]));
  if (missingField) {
    return res.status(400).json({ message: `Missing required field: ${missingField}` });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true';
  const contactTo = process.env.CONTACT_TO || 'info@kovagency.com';

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error('Contact form is missing SMTP environment variables. Required: SMTP_HOST, SMTP_USER, SMTP_PASS.');
    return res.status(500).json({ message: 'Email service is not configured. Please check Vercel environment variables.' });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const html = `
    <h2>New KOVA Website Lead</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
    <p><strong>Service Needed:</strong> ${escapeHtml(serviceNeeded || 'Not provided')}</p>
    <p><strong>Quantity:</strong> ${escapeHtml(quantity || 'Not provided')}</p>
    <p><strong>Deadline:</strong> ${escapeHtml(deadline || 'Not provided')}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: `KOVA Website <${smtpUser}>`,
      to: contactTo,
      replyTo: email,
      subject: `New KOVA Website Lead: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nService Needed: ${serviceNeeded || 'Not provided'}\nQuantity: ${quantity || 'Not provided'}\nDeadline: ${deadline || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`, 
      html,
    });

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form email error:', error);
    return res.status(500).json({ message: 'Message could not be sent. Please try again later.' });
  }
}
