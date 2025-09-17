
import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kfhgkjdgk@gmail.com",
    pass: "yourAppPassword" 
  }
});


app.post("/reviews/:orderId", async (req, res) => {
  try {
    const { orderId } = req.params;
    const { stars, email, description } = req.body;

    if (!stars || !email || !description) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (stars < 1 || stars > 5) {
      return res.status(400).json({ message: "Stars must be between 1 and 5" });
    }

    
    let subject, text;
    if (stars === 1 || stars === 2) {
      subject = "Sorry about your experience 😔";
      text = `We noticed you rated us ${stars} stars. We're sorry for the inconvenience. Please share more: ${description}`;
    } else if (stars === 3) {
      subject = "Thanks for your feedback 🙂";
      text = `You rated us 3 stars. We appreciate your honest feedback: ${description}`;
    } else {
      subject = "Thank you for your great review! 🌟";
      text = `You rated us ${stars} stars. We're glad you had a good experience! Your feedback: ${description}`;
    }

    
    await transporter.sendMail({
      from: "yourEmail@gmail.com",
      to: email,
      subject,
      text
    });

    
    res.status(201).json({
      message: "Review submitted successfully",
      review: {
        orderId,
        stars,
        email,
        description
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
