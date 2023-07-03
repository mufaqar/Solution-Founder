import nodemailer from "nodemailer";

export default async (req, res) => {
  console.log("🚀 ~ file: sendmail.js:4 ~ req:", req.body)
  const { firstName, LastName, email, Phone, linkedinURL, skypeID, selectJob, cv } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: 'softsgens@gmail.com',
      pass: 'ttunkewfxjnyriyk',
    }
  });

  try {
    await transporter.sendMail({
      from: 'info@solutionfounder.com',
      to: "info@solutionfounder.com",
      subject: `Contact form submission from ${firstName} ${LastName}`,
      html: `<p>You have a contact form submission</p>
        <p><strong>Name: </strong> ${firstName} ${LastName}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Phone Number: </strong> ${Phone}</p>
        <p><strong>Skype ID: </strong> ${skypeID}</p>
        <p><strong>Selected Job: </strong> ${selectJob}</p>
        <p><strong>LinkedinURL: </strong> ${linkedinURL}</p>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};