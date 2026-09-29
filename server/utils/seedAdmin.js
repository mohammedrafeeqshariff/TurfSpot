import Owner from "../models/owner.model.js";
import argon2 from "argon2";

const seedAdmin = async () => {
  try {
    const adminEmail = "admin001@gmail.com";
    const adminExists = await Owner.findOne({ email: adminEmail });

    if (!adminExists) {
      const hashedPassword = await argon2.hash("admin17");
      const admin = new Owner({
        name: "Admin User",
        email: adminEmail,
        password: hashedPassword,
        phone: "0000000000",
        role: "admin",
      });
      await admin.save();
      console.log("Auto-seeded admin user:", adminEmail);
    } else {
      console.log("Admin seed check: already exists.");
    }
  } catch (error) {
    console.error("Error seeding admin account on startup:", error.message);
  }
};

export default seedAdmin;
